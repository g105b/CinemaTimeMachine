<?php
namespace CTM\Page\Response;

/**
 * 
 */
class Index extends \Gt\Page\Logic {

public function go() {
    if(!empty($_GET["message"])) {
    	$message = urldecode($_GET["message"]);
		$this->document->querySelector("#sms")->textContent = $message;

		$this->outputFilmPoster($message);
	}
}

private function outputFilmPoster($message) {
	$imgUrl = $this->document->querySelector("img")->src;
	$gotNoResult = false;
	$wordArray = explode(" ", trim($message));
	$currentPhrase = "";
	$currentWord = 0;


	while(!$gotNoResult && isset($wordArray[$currentWord])) {
		$currentPhrase .= " " . $wordArray[$currentWord];
		$currentImgUrl = $this->getImgUrl($currentPhrase);
		if(is_null($currentImgUrl)) {
			$gotNoResult = true;
		}
		else {
			$imgUrl = $currentImgUrl;
		}

		$currentWord++;
	}

	$this->document->querySelector("img")->src = $imgUrl;
	$this->document->querySelector("img")->setAttribute(
		"data-phrase",
		$currentPhrase
	);
}

private function getImgUrl($phrase) {
	$phrase = trim($phrase);
	$phrase = urlencode($phrase);
	$url = "http://www.omdbapi.com/?t=$phrase&y=&plot=short&r=json";

	$ch = curl_init();
	curl_setopt_array($ch, [
		CURLOPT_URL => $url,
		CURLOPT_HTTPHEADER => [
			"Host: www.omdbapi.com",
			"Connection: keep-alive",
			"Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
			"User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36",
			"Referer: http://www.omdbapi.com/",
			"Accept-Language: en-GB,en;q=0.8,fr;q=0.6",
		],
		CURLOPT_RETURNTRANSFER => true,
	]);

	$result = curl_exec($ch);
	$obj = json_decode($result);

	if(empty($obj->Poster) || !strstr($obj->Poster, "//")) {
		return null;
	}
	else {
		return $obj->Poster;
	}
}

}#

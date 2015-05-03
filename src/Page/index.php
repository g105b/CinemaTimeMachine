<?php
namespace CTM\Page;
use Esendex\Authentication\LoginAuthentication;
use Esendex\InboxService;
use Gt\Core\Path;

class Index extends \Gt\Page\Logic {

public function go() {
	for($year = 1990; $year <= 2014; $year++) {
		$li = $this->template->get("year-block");
		$li->querySelector("time")->textContent = $year;

		foreach($li->querySelectorAll("img") as $i => $img) {
			$yearImgDir = implode("/", [
				Path::get(Path::ASSET),
				"year-images",
				$year,
			]);

			$imgFileArray = scandir($yearImgDir);
			foreach($imgFileArray as $imgI => $filename) {
				if($filename[0] === ".") {
					unset($imgFileArray[$imgI]);
				}
			}

			$imgFileArray = array_values($imgFileArray);

			$img->src = "/Asset/year-images/$year/" . $imgFileArray[$i];
		}

		$li->insertTemplate();
	}
}

}#

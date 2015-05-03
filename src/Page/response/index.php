<?php
namespace CTM\Page\Response;

/**
 * 
 */
class Index extends \Gt\Page\Logic {

public function go() {
    if(!empty($_GET["message"])) {
		$this->document->querySelector("#sms")->textContent =
			urldecode($_GET["message"]);

		
	}
}

}#

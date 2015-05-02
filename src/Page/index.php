<?php
namespace CTM\Page;
use Esendex\Authentication\LoginAuthentication;
use Esendex\InboxService;

class Index extends \Gt\Page\Logic {

public function go() {
	for($year = 1990; $year <= 2014; $year++) {
		$li = $this->template->get("year-block");
		$li->querySelector("time")->textContent = $year;
		$li->insertTemplate();
	}
}

}#

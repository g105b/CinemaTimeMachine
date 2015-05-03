<?php
namespace CTM\Page;
use CTM\Esendex\Inbox;

/**
 *
 */
class CheckSms extends \Gt\Page\Logic {

public function go() {
    $esendex = new Inbox();
    $messageArray = $esendex->getList();
    var_dump($messageArray);die();
}

}#

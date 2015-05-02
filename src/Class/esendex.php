<?php
namespace CTM;
use Esendex\Authentication\LoginAuthentication;
use Esendex\InboxService;

/**
 * 
 */
class Esendex {

const ACCOUNT_CODE = "EX0159513";
const ACCOUNT_USER = "cinematimemachine@g105b.com";
const ACCOUNT_PASS = "c3VwZXJzZWN1cmVwbGVhc2Vkb25vdHN0ZWFsdGhpcw==";

private $authentication;

public function __construct() {
	$this->authentication = new LoginAuthentication(
		self::ACCOUNT_CODE,
		self::ACCOUNT_USER,
		base64_decode(self::ACCOUNT_PASS)
	);
	$this->service = new InboxService($this->authentication);
}

//		$messageList = $this->service->latest();
//
//		foreach($messageList as $message) {
//			$messageContent = $message->summary();
//		}

}#

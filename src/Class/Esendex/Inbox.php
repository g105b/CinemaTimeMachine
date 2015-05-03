<?php
namespace CTM\Esendex;
use Esendex\Authentication\LoginAuthentication;
use Esendex\InboxService;

/**
 * 
 */
class Inbox {

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

public function getList() {
	$messageArray = [];
	$messageList = $this->service->latest();

	foreach($messageList as $i => $message) {
		$timestamp = $message->receivedAt()->getTimestamp();
		$messageArray[$timestamp] = $message->summary();
	}

	return $messageArray;
}

}#

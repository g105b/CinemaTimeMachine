<?php
namespace CTM\Page;
use Esendex\Authentication\LoginAuthentication;
use Esendex\InboxService;

class Index extends \Gt\Page\Logic {

public function go() {
    $authentication = new LoginAuthentication(
        "EX0159513",
        "cinematimemachine@g105b.com",
        base64_decode("c3VwZXJzZWN1cmVwbGVhc2Vkb25vdHN0ZWFsdGhpcw==")
    );

    $service = new InboxService($authentication);
    $messageList = $service->latest();

    foreach($messageList as $message) {
        echo "<p>" . $message->summary();
    }

    die();
}

}#
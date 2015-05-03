ns("CTM.SMS", (function() {

var
	inervalSeconds = 5,
$$;

function checkLoop() {
	setInterval(checkInterval, inervalSeconds * 1000);
}

function checkInterval() {
	CTM.debug && console.log("Checking for SMS...");
	x.get("/checksms", checkSmsCallback);
}

function checkSmsCallback() {
	CTM.debug && console.log("SMS response: ", this.responseText);

	var
		smsArray = JSON.parse(this.responseText),
		timestamp,
	$$;

	for(timestamp in smsArray) {
		showSms(smsArray[timestamp]);
		markAsRead(timestamp);
	}
}

/**
 * Sets the session on the server as to not show any new messages.
 *
 * @param timestamp
 */
function markAsRead(timestamp) {
	x.get("/checksms?timestamp=" + timestamp);
}

return {
	checkLoop: checkLoop,
}

})());

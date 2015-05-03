ns("CTM.SMS", (function() {

var
	inervalSeconds = 5,
	responseShowSeconds = 6,
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
	$$;

	if(smsArray.length === 0) {
		return;
	}

	CTM.debug && console.log("New message timestamp: ", smsArray[0].timestamp);
	smsArray[0].timestamp;
	showSms(smsArray[0].message);
	markAsRead(smsArray[0].timestamp);
}

function showSms(message) {
	CTM.Prompt.unschedule();
	CTM.Prompt.removePrompt();
	x.updatePage("/response?message=" + escape(message), updatePageCallback);
	CTM.debug && console.log("New message! ", message);
}

function updatePageCallback() {
	setTimeout(removeResponse, responseShowSeconds * 1000);
}

function removeResponse() {
	var
		overlay = document.querySelector("main.response"),
	$$;

	CTM.debug && console.log("Removing SMS.");

	if(overlay) {
		overlay.remove();
	}

	// Schedule the next prompt.
	CTM.Prompt.schedule();
}

/**
 * Sets the session on the server as to not show any new messages.
 *
 * @param timestamp
 */
function markAsRead(timestamp) {
	CTM.debug && console.log("Marking as read: ", timestamp);
	x.get("/checksms?timestamp=" + timestamp);
}

window.testShowSms = showSms;

return {
	checkLoop: checkLoop,
}

})());

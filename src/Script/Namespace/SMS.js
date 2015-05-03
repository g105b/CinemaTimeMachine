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
}

return {
	checkLoop: checkLoop,
}

})());

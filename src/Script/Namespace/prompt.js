ns("CTM.Prompt", (function() {

var
	delaySeconds = 10,
	promptShowSeconds = 5,
	timeout,
$$;

function schedule() {
	CTM.debug && console.log("Scheduling prompt...");
	timeout = setTimeout(promptTimeout, delaySeconds * 1000);
}

function unschedule() {
	clearTimeout(timeout);
}

function promptTimeout() {
	CTM.debug && console.log("Prompt timeout.");
	x.updatePage("/prompt/example1", updatePageCallback);
	timeout = null;
}

function updatePageCallback() {
	CTM.debug && console.log("Scheduling prompt removal...");
	// Remove the prompt after promptShowSeconds delay.
	setTimeout(removePrompt, promptShowSeconds * 1000);
}

	function removePrompt() {
	CTM.debug && console.log("Removing prompt.");
	document.querySelector("main.overlay").remove();
}

return {
	schedule: schedule,
	unschedule: unschedule,
};

})());

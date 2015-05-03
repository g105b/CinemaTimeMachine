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
	var
		overlay = document.querySelector("main.overlay"),
	$$;

	CTM.debug && console.log("Removing prompt.");

	if(overlay) {
		overlay.remove();
	}

	// Schedule the next prompt.
	schedule();
}

return {
	schedule: schedule,
	unschedule: unschedule,
	removePrompt: removePrompt,
};

})());

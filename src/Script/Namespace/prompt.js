ns("CTM.Prompt", (function() {

var
	delaySeconds = 15,
	promptShowSeconds = 10,
	timeout,
    promptUriArray = [
        "prompt/001",
        "prompt/002",
        "prompt/003",
        "prompt/004",
        "prompt/005",
        "prompt/006",
    ],
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

    if(!localStorage["promptIndex"]) {
        localStorage["promptIndex"] = 0;
    }

	x.updatePage(promptUriArray[localStorage["promptIndex"]], updatePageCallback);
	timeout = null;

    if(localStorage["promptIndex"] < promptUriArray.length - 1) {
        localStorage["promptIndex"]++;
    }
    else {
        localStorage["promptIndex"] = 0;
    }
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

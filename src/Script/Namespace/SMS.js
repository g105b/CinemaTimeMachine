ns("CTM.SMS", (function() {

var
	inervalSeconds = 5,
$$;

function checkLoop() {
	setInterval(checkInterval, inervalSeconds);
}

return {
	checkLoop: checkLoop,
}

})());

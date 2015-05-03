ns("x", (function() {

var
	xhr,
$$;

/**
 * Perform a GET request to uri, calling provided callback function when ready.
 * Callback will be passed parameter of requested URI.
 *
 * @param uri
 * @param callback
 * @returns {XMLHttpRequest}
 */
function get(uri, callback) {
	xhr = new XMLHttpRequest();
	xhr.open("get", uri);

	if(callback) {
		xhr.addEventListener("load", function() {
			callback.call(this, uri);
		});
	}

	xhr.send();
	return xhr;
}

/**
 * Perform a GET request to uri, constructing a new document and replacing the
 * main element with the response contents.
 *
 * @param uri
 * @param callback
 */
function updatePage(uri, callback) {
	get(uri, function() {
		loadDocument.call(this, uri, callback);
	});
}

/**
 * Loads new document fragment from response content, replaces main element.
 *
 * @param uri
 * @param callback
 */
function loadDocument(uri, callback) {
	var
		parser = new DOMParser(),
		newDocument = parser.parseFromString(this.responseText, "text/html"),
		newMain = document.importNode(
			newDocument.querySelector("body>main"), true),
	$$;

	document.body.appendChild(newMain);

	if(callback) {
		callback.call(this, uri, newDocument);
	}

	return newDocument;
}

return {
	get: get,
	updatePage: updatePage,
};

})());

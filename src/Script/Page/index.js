if(window.location.pathname==="/")go(function() { "use strict";

var
	yearBlockList = document.querySelectorAll("#yearList>li"),
	imageList = document.querySelectorAll("img"),
$$;

CTM.Grid.showImage(yearBlockList);
CTM.Grid.showYear(yearBlockList);
[].forEach.call(imageList, CTM.Grid.randomiseImage);

});

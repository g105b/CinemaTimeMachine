ns("CTM.Grid", (function() {

var
	gridIndex = 0,
	speed = 500,
$$;

/**
 * Run once at start on each image in the document to slightly offset image.
 */
function randomiseImage(img) {
	var
		offset = 250,
		rotationOffset = 8,
		$$;

	img.style.top = (~~(Math.random() * offset)) - (offset / 2) + "px";
	img.style.bottom = (~~(Math.random() * offset)) - (offset / 2) + "px";
	img.style.left = (~~(Math.random() * offset)) - (offset / 2) + "px";
	img.style.right = (~~(Math.random() * offset)) - (offset / 2) + "px";

	img.style.transform = "rotate("
	+ (~~(Math.random() * rotationOffset) - (rotationOffset / 2))
	+ "deg)";
}

function showImage(yearBlockList) {
	var
		yearBlock = yearBlockList[~~(Math.random() * yearBlockList.length)],
		i = 1,
		$$;

	console.log(yearBlock.className);

	if(!yearBlock.className) {
		yearBlock.classList.add("i1");
	}
	else if(yearBlock.classList.contains("i5")) {
		// Reset className when i5 reached.
		yearBlock.className = "";
	}
	else {
		for(i = 1; i < 5; i++) {
			if(yearBlock.classList.contains("i" + i)) {
				yearBlock.classList.remove("i" + i);
				yearBlock.classList.add("i" + (i + 1));

				break;
			}
		}
	}

	yearBlock.style.zIndex = CTM.Grid.gridIndex;

	CTM.Grid.gridIndex++;
	setTimeout(function() {
		showImage(yearBlockList);
	}, speed);
}

function showYear(yearBlockList) {
	var
		yearBlock = yearBlockList[~~(Math.random() * yearBlockList.length)],
		$$;

	yearBlock.querySelector("time").classList.toggle("on");
	setTimeout(function() {
		showYear(yearBlockList);
	}, speed);
}


return {
	randomiseImage: randomiseImage,
	showImage: showImage,
	showYear: showYear,
};

})());

var scrollingFn = function(e) {
	if (window.pageYOffset > 32)
		document.getElementsByTagName("header")[0].className = "";
	else
		document.getElementsByTagName("header")[0].className = "unscrolled";
}

window.addEventListener("scroll", scrollingFn);
scrollingFn();
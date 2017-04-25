var scrollingFn = function(e) {
	if (window.pageYOffset > 32)
		document.getElementsByTagName("header")[0].className = "scrolled";
	else
		document.getElementsByTagName("header")[0].className = "";
}

window.addEventListener("scroll", scrollingFn);
scrollingFn();
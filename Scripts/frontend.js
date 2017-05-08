var scrollingFn = function(e) {
	var header = document.getElementsByTagName("header")[0];
	if (header) {
		if (window.pageYOffset > 32)
			header.className = "";
		else
			header.className = "unscrolled";
	}
}

window.addEventListener("scroll", scrollingFn);
scrollingFn();

function addRepo() {
	document.getElementById("addRepoContainer").className = "shown";
}

function hideAddRepo(e) {
	e.preventDefault();
	document.getElementById("addRepoContainer").className = "";
}

var TOAST_INFO = 0;
var TOAST_SUCC = 1;
var TOAST_WARN = 2;
var TOAST_ERRO = 3;

function addToast(message, type) {
	var node = document.createElement("div");
	var textNode = document.createTextNode(message);
	node.appendChild(textNode);
	var toastHolder = document.getElementById("toastHolder");
	var className = "";
	switch(type) {
		case TOAST_SUCC:
			className = "successToast";
			break;
		case TOAST_WARN:
			className = "warningToast";
			break;
		case TOAST_ERRO:
			className = "errorToast";
			break;
		default:
			className = "infoToast";
			break;
	}
	node.className = className;
	toastHolder.insertBefore( node, toastHolder.firstChild );
}

(function() {
	var repoBtn = document.getElementsByClassName("addRepo")[0];
	if (repoBtn)
		repoBtn.onclick = addRepo;

	var closeBtn = document.getElementsByClassName("close")[0];
	if (closeBtn)
		closeBtn.onclick = hideAddRepo;

	window.addEventListener("scroll", scrollingFn);
	scrollingFn();

	var toastHolder = document.createElement("div");
	toastHolder.id = "toastHolder"
	document.body.appendChild(toastHolder);
})();
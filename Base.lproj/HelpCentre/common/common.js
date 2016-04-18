function changeCSS(cssFile, cssLinkIndex) {
 
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
 
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
 
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function changeImages(themeDir) {
	
	var images = document.getElementsByTagName("img");
	var imagesLength = images.length;
	for (var i = 0; i < imagesLength; i++) {
    	var imageElement = images[i];
    	
    	var pathElements = imageElement.src.split("/");
    	if (pathElements.indexOf("themed-images") > -1) {
    		pathElements[pathElements.length - 2] = themeDir;
    		imageElement.src = pathElements.join("/");
    	}
    }
}

function goLight() {
	changeCSS("../common/light.css", 1);
	changeImages("light");
}

function goDark() {
	changeCSS("../common/dark.css", 1);
	changeImages("dark");
}

function showPageWithIdentifier(identifier) {
	window.webkit.messageHandlers.navigateToArticleWithId.postMessage(identifier);
}

function toggleVisibility(id) {
	var e = document.getElementById(id);
	if (e.style.display == 'block'){
		e.style.display = 'none';
	}
	else {
		e.style.display = 'block';
	}
}
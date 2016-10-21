function changeCSS(cssFile, cssLinkIndex) {
 
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var pathElements = oldlink.href.split("/");
    pathElements[pathElements.length - 1] = cssFile;
 
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", pathElements.join("/"));
 
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
	changeCSS("light.css", 1);
	changeImages("light");
}

function goDark() {
	changeCSS("dark.css", 1);
	changeImages("dark");
}

function showPageWithIdentifier(identifier) {
	window.webkit.messageHandlers.navigateToArticleWithId.postMessage(identifier);
}

function toggleVisibility(identifier) {
	var e = document.getElementById(identifier);
	if (e.style.display == 'block'){
		e.style.display = 'none';
	}
	else {
		e.style.display = 'block';
	}
}
var divs = document.querySelectorAll('div.div-default'); //queryslectorall lists all the elements you are looking for on the DOM.

for(var x = 0; x < divs.length; x++) {
	divs[x].addEventListener('click', toggleClass, false);
}

function toggleClass(e){
	this.parentNode.style.display = "none";
}
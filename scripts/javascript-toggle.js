var divs = document.querySelectorAll('div.div-default'); //queryslectorall lists all the elements you are looking for on the DOM.

for(var x = 0; x < divs.length; x++) {
	divs[x].addEventListener('click', toggleClassDanger, false);
  //the for loop will run through the dom tree for all the divs with the class btn.
  //False will say to not stop at the first class it finds. It will go all the way to the bottom of the DOM first. Then once a click event is fired, go up the tree to the one element that was clicked 

  //To do a mouseover or mouseleave, just switch 'click' to one of the two.

}

function toggleClassDanger(e){
	e.currentTarget.classList.toggle('div-danger'); //This will toggle the div-danger class

	//e.currentTarget.classList.add('btn-danger'); //This will add the class 'btn-danger'
	//e.currentTarget.classList.remove('btn'); //This will remove the class 'btn'

	//e.currentTarget.setAttribute('class', 'btn-danger'); //This will remove all the other classes that the target has and replace them all with the one class 'btn-danger'
}

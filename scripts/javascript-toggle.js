var div = document.querySelectorAll('div.div-default');

for(var x = 0; x < div.length; x++){
	div[1].addEventListener('click', toggleClass, false);
}

function toggleClass(e){
	e.currentTarget.classList.toggle('div-danger');
}
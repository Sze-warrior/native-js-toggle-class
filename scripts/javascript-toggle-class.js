
var div = document.querySelector('div');
var detectClass = div.classList.contains('btn');
var btn = div;

function toggleClass(){
	this.classList.toggle('btn-danger');
}

btn.onclick = toggleClass;

/*btn.onmouseover = toggleClass;
btn.onmouseleave = toggleClass;*/
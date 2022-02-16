let click = 0;
function c1click(){
	click += 1;
	document.getElementByID("click").innerHTML = click;
}

let visible = true;

visible = !visible;
if(visible) {
	document.getElementByID("3button").style.opacity = "0.0";
}
else {
	document.getElementByID("3button").style.opacity = "1.0";
}
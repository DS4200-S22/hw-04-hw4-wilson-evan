
let clicks = 0;

function c1click(){
	clicks += 1;
	document.getElementByID("clicks").innerHTML = clicks;
};

let visible = true;
function c3click(){
	visible = !visible;
	if(visible) {
		document.getElementByID("3button").style.opacity = "0.0";
	}
	else {
		document.getElementByID("3button").style.opacity = "1.0";
	}
};
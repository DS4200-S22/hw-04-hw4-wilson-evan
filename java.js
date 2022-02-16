
let clicks = 0;

function c1click(){
	clicks += 1;
	document.getElementById("clicks").innerHTML = clicks;
};

let visible = true;
function c3click(){
	visible = !visible;
	if(visible) {
		document.getElementById("3button").style.opacity = "0.0";
	}
	else {
		document.getElementById("3button").style.opacity = "1.0";
	}
};
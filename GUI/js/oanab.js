// Chon mau ao o muc xem hang
function color(c) {
	var el = document.getElementById("color");
	el.className = c;
}

// Xo menu khi responsive
function menuIn() {
	var el = document.getElementById("floatmenu");
	if (el.className == "show") {
		menuOut();
	}
	else {
		el.className="show";
		var eld = document.getElementById("dark");
		eld.className="showd";
	}
}

function menuOut() {
	var el = document.getElementById("floatmenu");
	el.className="hide";
	var eld = document.getElementById("dark");
	eld.className="hided";
}
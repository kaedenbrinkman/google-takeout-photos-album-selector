function selectAlbums(y, clear) {
	var divs = document.getElementsByClassName("UYUfn")[0].childNodes[2].childNodes;
	for (var i = 0; i < divs.length; i++) {
		var div = divs[i].childNodes[0].childNodes[0].childNodes[0];
		if (div.name.indexOf(y) != -1) {
			div.checked = true;
			//console.log(div);
		}
		else if (clear === true) {
			div.checked = false;
		}
		//console.log(div);
	}
}

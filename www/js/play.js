var button = document.getElementById("arcade-button");
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");

var playAudio = function() {
	var qualEhaMusica = Math.floor((Math.random() * 4) + 1);
	switch(qualEhaMusica) {
		case 1:
			audio1.play();
			break;
		case 2:
			audio2.play();
			break;
		case 3:
			audio3.play();
			break;
		case 4:
			audio4.play();
			break;
		default:
			audio2.play();
			break;
	}
}

button.onclick = playAudio;
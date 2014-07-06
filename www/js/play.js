var button = document.getElementById("arcade-button");

var playAudio = function() {
	var audioArr = document.getElementsByTagName("audio");
	var qualEhaMusica = Math.floor(Math.random() * 4);
	audioArr[qualEhaMusica].play();
}

button.addEventListener("touchend", playAudio, false);
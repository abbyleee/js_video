var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	autoplay = false;
});


document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   video.pause();

});

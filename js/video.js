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

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate -= 0.1;
	console.log("New Speed: " + video.playbackRate);

})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("New Speed: " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration) {
		 video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Current time: " + video.currentTime);
});


//fix
let isMuted = false;
document.querySelector("#mute").addEventListener("click", function() {
	if (isMuted) {
		video.muted = false;
		textContent = "Mute";
	} 
	else {
		video.muted = true;
		textContent = "Unmute";
	}
  
	isMuted = !isMuted;
});


var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	autoplay = false;
});


document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = (video.volume * 100) + "%";

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
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Going back to the start");
	}
	else {
		video.currentTime += 10;
	}
	console.log("Current location is: " + video.currentTime);
});

let isMuted = false;
document.querySelector("#mute").addEventListener("click", function() {
	if (isMuted) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
	} 
	else {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute"
	}

	isMuted = !isMuted;

});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
  

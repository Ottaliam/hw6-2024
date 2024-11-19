const video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", () => {
	video.play();
	document.querySelector("#volume").textContent = `${document.querySelector("#slider").value}%`;
	console.log("Play video");
});

document.querySelector("#pause").addEventListener("click", () => {
	video.pause();
	console.log("Pause video");
});

document.querySelector("#slower").addEventListener("click", () => {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log(`Speed is ${video.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", () => {
	video.playbackRate /= 0.9;
	console.log("Speed up video");
	console.log(`Speed is ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", () => {
	video.currentTime += 10;
	console.log("Skip ahead");
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.pause();
		console.log("Video length exceeded. Going back the the start of video and pause.")
	}
	console.log(`Video current time is ${video.currentTime}`);
});

document.querySelector("#mute").addEventListener("click", (e) => {
	video.muted = !video.muted;
	e.target.textContent = video.muted ? "Unmute" : "Mute";
	console.log(video.muted ? "Mute" : "Unmute");
});

document.querySelector("#slider").addEventListener("input", (e) => {
	video.volume = e.target.valueAsNumber / 100;
	document.querySelector("#volume").textContent = `${e.target.value}%`;
	console.log(`The current value is ${video.volume}`);
});

document.querySelector("#vintage").addEventListener("click", () => {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", () => {
	video.classList.remove("oldSchool");
})
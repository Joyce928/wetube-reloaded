const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

const handleStart = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true, // or here we can decide the size of the video stream like { width: 200, height: 200},
  });
  video.srcObject = stream;
  video.play();
};

startBtn.addEventListener("click", handleStart);

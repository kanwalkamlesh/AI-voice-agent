let mediaRecorder;
let audioChunks = [];

document.getElementById('startBtn').onclick = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.start();

  audioChunks = [];
  mediaRecorder.ondataavailable = event => {
    audioChunks.push(event.data);
  };
};

document.getElementById('stopBtn').onclick = () => {
  mediaRecorder.stop();
  mediaRecorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(audioBlob);
    document.getElementById('audioPlayback').src = audioUrl;
  };
};
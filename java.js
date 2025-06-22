function updateClockAndDate() {
  const now = new Date();
  // Format time as HH:MM:SS
  const time = now.toLocaleTimeString();
  // Format date as e.g., Wednesday, June 19, 2025
  const date = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('clock').textContent = time;
  document.getElementById('date').textContent = date;
}
setInterval(updateClockAndDate, 1000);
updateClockAndDate()

const audio = document.getElementById('intro-audio');
const toggleBtn = document.getElementById('music-toggle');

toggleBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.muted = false;
    audio.play();
    toggleBtn.innerText = "🔊";
  } else {
    audio.pause();
    toggleBtn.innerText = "🔇";
  }
});
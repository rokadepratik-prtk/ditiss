function updateCountdown() {
  const examDate = new Date("2025-01-12T00:00:00"); // Adjust time as needed
  const now = new Date();
  const diff = examDate - now;

  const countdownDiv = document.getElementById("ccee-countdown");
  if (!countdownDiv) return;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownDiv.textContent =
      `CCEE Exam Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdownDiv.textContent =
      "CCEE Exam Day is here!";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

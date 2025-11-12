
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  // Note: Months are 0-based in JavaScript (0=Jan, 1=Feb, etc.)
  // The target date is Feb 14, 2026, 3:00 PM IST

  // IST is UTC+5:30
  const targetDate = new Date(Date.UTC(2026, 1, 14, 15 - 5, 30 - 30));

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.textContent = '0';
      hoursEl.textContent = '0';
      minutesEl.textContent = '0';
      secondsEl.textContent = '0';
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }

  // Update the countdown every 1 second
  const interval = setInterval(updateCountdown, 1000);

  // Initial call to display the countdown immediately
  updateCountdown();
});

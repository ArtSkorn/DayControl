const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const controlDate = new Date(`April 23 ${currentYear} 00:00:00`);

function countdownTimer() {
  const todayDate = Date.now();
  const gap = controlDate - todayDate;

  const d = Math.floor(gap / 1000 / 60 / 60 / 24);
  const h = Math.floor((gap / 1000 / 60 / 60) %24);
  const m = Math.floor((gap / 1000 / 60) % 60);
  const s = Math.floor((gap / 1000) % 60);

  days.innerText = d < 10 ? '0' + d : d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = m < 10 ? '0' + m : m;
  seconds.innerText = s < 10 ? '0' + s : s;
}
setInterval(countdownTimer, 1000);

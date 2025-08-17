const fan = document.querySelector('.fan');
const btn = document.getElementById('toggleBtn');
let isSpinning = false;

btn.addEventListener('click', () => {
  if (!isSpinning) {
    fan.style.animation = "spin 1s linear infinite";
    isSpinning = true;
  } else {
    fan.style.animation = "spin 0s linear infinite";
    isSpinning = false;
  }
});


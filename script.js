const slider = document.querySelector('.slider');
const container = document.querySelector('.slider-container');

slider.addEventListener('input', (e) => {
  container.style.setProperty('--clip-right', `${100- e.target.value}%`);
});

document.querySelectorAll('.slider-container').forEach(container => {
  const slider = container.querySelector('.slider');
  slider.addEventListener('input', (e) => {
    container.style.setProperty('--clip-right', `${100 - e.target.value}%`);
  });
});
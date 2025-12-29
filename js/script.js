function moveNoButton() {
  const container = questionContainer.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const maxX = container.width - btn.width;
  const maxY = container.height - btn.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

/* Desktop */
noBtn.addEventListener('mouseover', moveNoButton);

/* Mobile */
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // stops tap
  moveNoButton();
});

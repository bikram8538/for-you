function moveNoButton() {
  const containerRect = questionContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

/* Desktop hover */
noBtn.addEventListener('mouseover', moveNoButton);

/* Mobile touch */
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // stops tap
  moveNoButton();
});

/* Extra safety for modern devices */
noBtn.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  moveNoButton();
});

let health = 20;
const decreaseRate = 1;

function updateHealth() {
  const healthElement = document.getElementById('health');
  healthElement.textContent = `Health: ${health}`;

  if (health <= 0) {
    healthElement.textContent = 'Game Over';
    document.getElementById('increaseBtn').disabled = true;
    return;
  }

  health -= decreaseRate;
}

function increaseHealth(amount) {
  health += amount;
}

document.addEventListener('DOMContentLoaded', (event) => {
  setInterval(updateHealth, 100);

  const increaseBtn = document.getElementById('increaseBtn');
  increaseBtn.addEventListener('click', () => {
    increaseHealth(10);
  });
});

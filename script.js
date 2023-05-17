let hunger = 20;
const decreaseRate = 1;

function updateHunger() {
  const hungerElement = document.getElementById('Hunger');
  hungerElement.textContent = `Hunger: ${hunger}`;

  if (hunger <= 0) {
    hungerElement.textContent = 'YOUUU KILLLEDD MEEEEE';
    document.getElementById('increaseBtn').disabled = true;
    return;
  }

  hunger -= decreaseRate;
}

function increaseHunger(amount) {
  hunger += amount;
}

document.addEventListener('DOMContentLoaded', (event) => {
  setInterval(updateHunger, 100);

  const increaseBtn = document.getElementById('increaseBtn');
  increaseBtn.addEventListener('click', () => {
    increaseHunger(10);
  });
});


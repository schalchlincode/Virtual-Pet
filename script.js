let hunger = 2000;
const decreaseHungerRate = 1;

function updateHunger() {
  const hungerElement = document.getElementById('Hunger');
  hungerElement.textContent = `Hunger: ${hunger}`;

  if (hunger <= 0) {
    hungerElement.textContent = 'YOUUU KILLLEDD MEEEEE';
    document.getElementById('increaseBtn').disabled = true;
    return;
  }

  hunger -= decreaseHungerRate;
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

let bathroom = 2000;
const decreaseRate = 1;

function updateBathroom() {
  const bathroomElement = document.getElementById('Bathroom');
  bathroomElement.textContent = `Bathroom: ${bathroom}`;

  if (bathroom <= 0) {
    bathroomElement.textContent = 'YOUUU KILLLEDD MEEEEE';
    document.getElementById('increaseBtn').disabled = true;
    return;
  }

  bathroom -= decreaseRate;
}

function increaseBathroom(amount) {
  bathroom += amount;
}

document.addEventListener('DOMContentLoaded', (event) => {
  setInterval(updateBathroom, 100);

  const increaseBtn = document.getElementById('increaseBtn');
  increaseBtn.addEventListener('click', () => {
    increaseBathroom(10);
  });
});

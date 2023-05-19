
//Hunger
let hunger = 2000;
const decreaseHungerRate = 1;

function updateHunger() {
  const hungerElement = document.getElementById('Hunger');
  hungerElement.textContent = `Hunger: ${hunger}`;

  if (hunger <= 0) {
    hungerElement.textContent = 'YOUUU KILLLEDD MEEEEE';
    document.getElementById('increaseHungerBtn').disabled = true;
    return;
  }

  hunger -= decreaseHungerRate;
}

function increaseHunger(amount) {
  hunger += amount;
}

document.addEventListener('DOMContentLoaded', (event) => {
  setInterval(updateHunger, 100);

  const increaseHungerBtn = document.getElementById('increaseHungerBtn');
  increaseHungerBtn.addEventListener('click', () => {
    increaseHunger(10);
  });
});


//Bathroom

let bathroom = 2000;
const decreaseBathroomRate = 1;

function updateBathroom() {
  const bathroomElement = document.getElementById('Bathroom');
  bathroomElement.textContent = `Bathroom: ${bathroom}`;

  if (bathroom <= 0) {
    bathroomElement.textContent = 'YOUUU KILLLEDD MEEEEE';
    document.getElementById('increaseBathroomBtn').disabled = true;
    return;
  }

  bathroom -= decreaseBathroomRate;
}

function increaseBathroom(amount) {
  bathroom += amount;
}

document.addEventListener('DOMContentLoaded', (event) => {
  setInterval(updateBathroom, 100);

  const increaseBathroomBtn = document.getElementById('increaseBathroomBtn');
  increaseBathroomBtn.addEventListener('click', () => {
    increaseBathroom(10);
  });
});


//Mood

let mood = 2000;
const decreaseMoodRate = 1;

function updateMood() {
  const moodElement = document.getElementById('Mood');
  moodElement.textContent = `Mood: ${mood}`;

  if (mood <= 0) {
    moodElement.textContent = 'YOUUU KILLLEDD MEEEEE';
    document.getElementById('increaseMoodBtn').disabled = true;
    return;
  }

  mood -= decreaseMoodRate;
}

function increaseMood(amount) {
  mood += amount;
}

document.addEventListener('DOMContentLoaded', (event) => {
  setInterval(updateMood, 100);

  const increaseMoodBtn = document.getElementById('increaseMoodBtn');
  increaseMoodBtn.addEventListener('click', () => {
    increaseMood(10);
  });
});

//sickness

let sickness = 2000;
const decreaseSicknessRate = 1;

function updateSickness() {
  const sicknessElement = document.getElementById('Sickness');
  sicknessElement.textContent = `Sickness: ${sickness}`;

  if (sickness <= 0) {
    sicknessElement.textContent = 'YOUUU KILLLEDD MEEEEE';
    document.getElementById('increaseSicknessBtn').disabled = true;
    return;
  }

  sickness -= decreaseSicknessRate;
}

function increaseSickness(amount) {
  sickness += amount;
}

document.addEventListener('DOMContentLoaded', (event) => {
  setInterval(updateSickness, 100);

  const increaseSicknessBtn = document.getElementById('increaseSicknessBtn');
  increaseSicknessBtn.addEventListener('click', () => {
    increaseSickness(10);
  });
});


//sleep

function isPetAwake() {
    const currentHour = new Date().getHours();
    return currentHour >= 8 && currentHour < 19;
    
}


document.addEventListener("DOMContentLoaded", function() {
    const sleepElement = document.getElementById("Sleep");
  
    if (isPetAwake()) {
      sleepElement.textContent = "Your pet is currently awake!";
    } else {
      sleepElement.textContent = "Your pet is currently sleeping!";
    }
  });
  

  //Attention
function petNeedsAttention() {
    const attentionElement = document.getElementById("Attention");
  
    if (hunger < 50) {
      attentionElement.textContent = "Your pet needs attention";
    } else {
      attentionElement.textContent = ""; // Clear the attention text if hunger is not less than 50
    }
  }

  
   document.addEventListener("DOMContentLoaded", function() {
    setInterval(petNeedsAttention, 100); // Call petNeedsAttention every 100 milliseconds
  });
  

//Light Switch
document.addEventListener('DOMContentLoaded', function() {
    const lightElement = document.getElementById("Light");
    let isLightOn = false; // Variable to keep track of the light state
  
    function lightSwitch() {
      if (isLightOn) {
        lightElement.textContent = "off";
        document.body.style.backgroundColor = 'black';
        isLightOn = false;
      } else {
        lightElement.textContent = "on";
        isLightOn = true;
      }
    }
  
    lightElement.addEventListener('click', lightSwitch);
  });
  
  
  
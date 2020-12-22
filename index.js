const secondHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hourHand = document.querySelector(".hours-hand");

function setA(){
  const now = new Date();
  const minutes = now.getMinutes();
  const hours= now.getHours();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  const minutesDegree = ((minutes/60)*360 + (seconds / 60) * 6);
  const hoursDegree = ((hours/12)*360 + (minutes / 60) * 30);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setA, 1000);

setA();

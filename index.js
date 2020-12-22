const secondHand= document.querySelector(".seconds-hand");
const minutesHand= document.querySelector(".minutes-hand");
const hourHand= document.querySelector(".hours-hand");

function setA(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours= now.getHours();
  const secondsDegree= ((seconds/60)*360) + 10;
  const minutesDegree = ((minutes/60)*360) + 90;
  const hoursDegree = ((hours/12)*360) + 30;
  secondHand.style.transform = 'rotate(${secondsDegree}deg)';
  minutesHand.style.transform = 'rotate(${minutesDegree}deg)';
  hourHand.style.transform = 'rotate(${hoursDegree}deg)';
}

setInterval(setA, 1000);

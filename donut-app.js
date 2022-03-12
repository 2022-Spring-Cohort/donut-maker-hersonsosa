const donut = new Donut();
const donutButton = document.querySelector(".donutButton");
const clickerButton = document.querySelector(".autoClicker-button");
const multiplierButton = document.querySelector(".multiplier-button");
const resetButton = document.querySelector(".resetGame");
const clickSound = new Audio("/images/pop!.mp3");
const autoSound = new Audio("/images/itemCollect.mp3");
const multiplySound = new Audio("/images/itemCollect.mp3");

donutButton.addEventListener("click", () => {
  event.preventDefault();
  donut.donutClick();
  donut.updateDonutCount();
  clickSound.play();
});
clickerButton.addEventListener("click", () => {
  event.preventDefault();
  donut.autoClickerPurchase();
  donut.updateAutoClicker();
  donut.updateDonutCount();
  autoSound.play();
});

multiplierButton.addEventListener("click", () => {
  event.preventDefault();
  donut.multiplierPurchase();
  donut.updateDonutMultiplier();
  donut.updateDonutCount();
  multiplySound.play();
});
resetButton.addEventListener("click", () => {
  location.reload();
});

function autoClick() {
  for (let i = 0; i < donut.autoClickerTotal; i++) {
    donut.donutClick();
  }
  donut.updateDonutCount();
}

setInterval(autoClick, 1000);


class Donut {
  constructor() {
    this.count = 0;
    this.autoClickerTotal = 0;
    this.autoClickerPrice = 10;
    this.donutsPerClick = 1;
    this.multiplierTotal = 0;
    this.multiplierPrice = 10;
  }

  donutClick() {
    this.count += this.donutsPerClick;
  }
  autoClickerPurchase() {
    if(this.count>= this.autoClickerPrice){
      this.count = Math.round(this.count - this.autoClickerPrice);
      this.autoClickerTotal += 1;
      this.autoClickerPrice = this.autoClickerPrice * 1.1;
    }  
  }
  multiplierPurchase() {
    if(this.count>= this.multiplierPrice){
      this.count = Math.round(this.count - this.multiplierPrice);
      this.donutsPerClick = this.donutsPerClick * 1.2;
      this.multiplierTotal += 1;
      this.multiplierPrice = this.multiplierPrice * 1.1;
    }
  }
  updateAutoClicker() {
    
      const totalAutoClickers = document.querySelector(".autoClickers-total");
      const autoClickerCost = document.querySelector(".autoClicker-price");
      totalAutoClickers.innerText = this.autoClickerTotal;
      // this.autoClickerPrice = this.autoClickerPrice * 1.1;
      autoClickerCost.innerText = Math.round(this.autoClickerPrice);
  
  }
  updateDonutMultiplier() {
    
      const totalMultiplier = document.querySelector(".multipliers-total");
      const multiplierCost = document.querySelector(".multiplier-price");
      const multiplierAmountText = document.querySelector(".donutsPerClick");
      totalMultiplier.innerText = this.multiplierTotal;
      multiplierAmountText.innerText = Math.ceil(this.donutsPerClick);
      // this.multiplierPrice = this.multiplierPrice * 1.1;
      multiplierCost.innerText = Math.round(this.multiplierPrice);
  
  }
  updateDonutCount() {
    const donutCount = document.querySelector(".donut-count");
    donutCount.innerText = Math.round(this.count);
    
  }
}




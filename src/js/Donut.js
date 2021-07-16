class Donut {
    constructor() {
        this.ResetGame();



    }

    ResetGame() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 10;
        this.earnedDonuts = 1;
        this.autoClickerIntervalID = undefined;

    }
    IncreasePrice() {
        this.donutCost + this.donutCount;
    }

    AutoMakeDonuts = () => {
        this.donutCount += this.earnedDonuts * this.autoClickerCount;
    }





    MakeDonuts() {
        this.donutCount += this.earnedDonuts;

    }

    AddAutoClicker() {
        if (this.donutCount >= this.autoClickerCost) {
            this.autoClickerCount++;
            if (this.autoClickerIntervalID == undefined) {
                this.autoClickerIntervalID = self.setInterval
                    (this.AutoMakeDonuts, 1000)
            }

            this.donutCount -= this.autoClickerCost;
            this.autoClickerCost = this.autoClickerCost + this.autoClickerCost * 0.1;
        }

        //console.log(this.donutCount);
    }

    AddMultiplier() {
        if (this.donutCount >= this.donutMultiplierCost) {
            this.donutMultiplierCount++;
            this.earnedDonuts = Math.pow(1.2, this.donutMultiplierCount);
            this.donutMultiplierCost = this.donutMultiplierCost + this.donutMultiplierCost * 0.1;
            this.donutCount -= this.donutMultiplierCost;

        }


    }



    getDonutCount() {
        return this.donutCount;

    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getMultiplierCount() {
        return this.donutMultiplierCount;
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }

    getMultiplierCost() {
        return this.donutMultiplierCost;
    }

}

const myDonut = new Donut();
const counterDiv = document.getElementById("counter");
const autoClickCountDiv = document.getElementsByClassName("autoclickercount")[0];
const multipierCountDiv = document.getElementsByClassName("multipiercount")[0];
const autoClickCostDiv = document.getElementsByClassName("autoclickercost")[0];
const multiplyCostDiv = document.getElementsByClassName("multiplycost")[0];
const addDonutsBtn = document.getElementsByClassName("make_donut")[0];
const addAutoClicksBtn = document.getElementsByClassName("autoClickerButton")[0];
const addMultiplyDonutBtn = document.getElementsByClassName("donutMultiplierButton")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const MyAbtBtn = document.getElementById("abtBtn");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
let burstLevel = 100;
const audio = document.getElementById("myAudio");

let refreshDonutText = setInterval(UpdateText, 500);

addDonutsBtn.addEventListener("click", function () {
    myDonut.MakeDonuts();
    UpdateText()
    if (myDonut.getDonutCount() >= burstLevel) {
        createBurst();
        burstLevel += 100;
    }
});


addAutoClicksBtn.addEventListener("click", function () {
    myDonut.AddAutoClicker();

});

addMultiplyDonutBtn.addEventListener("click", function () {
    myDonut.AddMultiplier();
    audio.play();

});

function CheckBuyButtons() {
    if (myDonut.getDonutCount() >= myDonut.getAutoClickerCost()) {
        addAutoClicksBtn.disabled = false;

    }
    else {
        addAutoClicksBtn.disabled = true;
    }
    if (myDonut.getDonutCount() >= myDonut.getMultiplierCost()) {
        addMultiplyDonutBtn.disabled = false;

    }
    else {
        addMultiplyDonutBtn.disabled = true;
    }

}

MyAbtBtn.addEventListener("click", function () {
    event.preventDefault();
    modal.style.display = "block"; 
});

span.addEventListener("click", function () {
    modal.style.display = "none";
});



function UpdateText() {
    counterDiv.innerText = "DONUTS: " + myDonut.getDonutCount().toFixed(2);
    autoClickCostDiv.innerText = "Auto Clicker Cost: " + myDonut.getAutoClickerCost().toFixed(2);
    multiplyCostDiv.innerText = "Multiplier Cost: " + myDonut.getMultiplierCost().toFixed(2);
    autoClickCountDiv.innerText = "Auto Clicker Counter: " + myDonut.getAutoClickerCount().toFixed(2);
    multipierCountDiv.innerText = "Multiplier Counter: " + myDonut.getMultiplierCount().toFixed(2);
    CheckBuyButtons();
}



resetButton.addEventListener("click", function () {
    myDonut.ResetGame();
});





// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }

//     function closeNav() {
//         document.getElementById("mySidebar").style.width = "0";
//         document.getElementById("main").style.marginLeft = "0";
//       }


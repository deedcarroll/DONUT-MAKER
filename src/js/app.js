const myDonut = new Donut();
const counterDiv = document.getElementById("counter");
const autoClickCostDiv = document.getElementsByClassName("autoclickercost")[0];
const multiplyCostDiv = document.getElementsByClassName("multiplycost")[0];
const addDonutsBtn = document.getElementsByClassName("make_donut")[0];
const addAutoClicksBtn = document.getElementsByClassName("autoClickerButton")[0];
const addMultiplyDonutBtn = document.getElementsByClassName("donutMultiplierButton")[0];
let refreshDonutText = setInterval(UpdateText, 500);

addDonutsBtn.addEventListener("click", function(){
    myDonut.MakeDonuts();
    UpdateText()
});


addAutoClicksBtn.addEventListener("click", function(){
    myDonut.AddAutoClicker();

});

addMultiplyDonutBtn.addEventListener("click", function(){
    myDonut.AddMultiplier();

});

function UpdateText(){
    counterDiv.innerText = myDonut.getDonutCount();
    autoClickCostDiv.innerText = "Auto Clicker Cost " + myDonut.getAutoClickerCost();
    multiplyCostDiv.innerText = "Multiplier Cost "   + myDonut.getMultiplierCost();
} 

// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }

//     function closeNav() {
//         document.getElementById("mySidebar").style.width = "0";
//         document.getElementById("main").style.marginLeft = "0";
//       }

    
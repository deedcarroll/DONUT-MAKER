const canvas = document.getElementById('canvas'); // grabs our canvas
const context = canvas.getContext('2d');
let donut= new Image();
donut.src= "./src/images/donuts.png";
let particleArray = []; // square brackets mean we have an array
const maxSize = 200;


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class BurstParticle{
    constructor(){
    this.x = Math.random() * canvas.width;
    this.y = randomIntFromInterval(-0, 0);
    this.yMomentum = randomIntFromInterval(-5,15) * Math.random();
    this.xMomentum = randomIntFromInterval(-10, 10) * Math.random(); 
    this.opacity = 1;
}
draw(){
    context.globalAlpha = this.opacity;
    this.opacity -= .02;
    this.opacity = Math.max(0, this.opacity);
    // context.globalCompositeOperation = "destination-over";
    context.drawImage(donut, this.x, this.y, 50, 50)
}
update(i){
    this.y -= this.yMomentum;
    this.yMomentum -= Math.random()*.2;
    this.x += this.xMomentum;
    this.draw();
    if(this.y - donut.height - 100 > canvas.height || this.opacity == 0 || this.x > canvas.width || this.x < 0 - donut.width){
        //console.log("Off Screen!");
        particleArray.splice(i, 1)
    }
}

}

function createBurst(){
    for(let i = 0; i < 20; i++){
        part = new BurstParticle();
        part.x = canvas.width / 2;
        part.y = canvas.height / 2;
        particleArray.push(part);
    }
}

function init(){
    particleArray=[];
}

function animate(){
    requestAnimationFrame(animate);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.clearRect(0,0,innerWidth,innerHeight)
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update(i);
    }
}

init();
animate();
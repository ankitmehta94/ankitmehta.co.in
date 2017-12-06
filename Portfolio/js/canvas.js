 /**
 * Created by shipsy on 6/8/17.
 */
var canvas = document.querySelector('canvas')
 console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var differentColors = 40;
var c = canvas.getContext('2d');

var colors = [];
 for(var j = 0; j < differentColors; j++){
     var rgb = [];
     for(var i = 0; i < 3; i++)
         rgb.push(Math.floor(Math.random() * 255));
     colors.push('rgb('+ rgb.join(',') + ')')
 }

//var colors = ['red','blue','green','orange','yellow','violet','indigo','black','grey','magenta'];
var body = document.querySelector('body');
var mouse ={x:undefined,y:undefined};
canvas.addEventListener('mousemove',function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
   // console.log(mouse)
});
var maxRadius = 100;


function Circle(x,y,dx,dy,radius,color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = color;
    this.draw = function () {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2);
        c.strokeStyle =  this.color;
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
    }
    this.update = function () {
        if(this.x + this.radius > innerWidth ||this.x - this.radius<0){
            this.dx = -this.dx
        }
        if(this.y + this.radius > innerHeight ||this.y - this.radius<0){
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;
        //interactivity
        if(mouse.x - this.x <50 && mouse.x -this.x >-50 && mouse.y - this.y <50 && mouse.y -this.y >-50 ){
            if(this.radius<maxRadius){
                this.radius += Math.random()*10;
                console.log(this.radius);
            }
        }else if(this.radius > this.minRadius){
            this.radius -= 1;
            console.log(this.radius);

        }
        this.draw();
    }
}
var circleArray = [];
for(var i = 0; i<500; i++){
    var radius = Math.random()*5+1;
    var x = Math.random()*(window.innerWidth - 2*radius)+radius;
    var y = Math.random()*(window.innerHeight - 2*radius)+radius;
    var dx = (Math.random()-0.5)*10;
    var dy = (Math.random()-0.5)*10;
    var colorIndex = Math.round(Math.random()*10);

    circleArray.push(new Circle(x,y,dx,dy,radius,colors[colorIndex]))
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var j =0 ;j<circleArray.length;j++){
        circleArray[j].update();
        //console.log(circleArray[j]);
    }
}
animate();
// for(var i = 0;i<15;i++){
//     var x = Math.random()*window.innerWidth;
//     var y = Math.random()*window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,50,0,Math.PI*2);
//     c.strokeStyle = 'red';
//     c.stroke();
// }
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
/*c.fillStyle = 'rgba(255,1,1, 0.5';
c.fillRect(100,100, 100, 100);
c.fillStyle = 'rgba(55,100,1, 0.5';
c.fillRect(400,100, 100, 100);
c.fillStyle = 'rgba(5,10,139, 0.5';
c.fillRect(300,300, 100, 100);

//Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(450,375);
c.strokeStyle = "pink";
c.stroke();*/

//arc/circle
//c.arc(x: int, y: int, r: Int, startAngle: Float, endAngle: Float, drawCounterClockwiseL Bool (false));
//radius. start and end angle take radians. StartAngle asks at what angle would we like to start drawing our arc.
//the endAngle says how long would we like the arc to go on for.
/*c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();*/

/*for(var i=0; i<1320; i++){
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
c.arc(x, y, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
}*/
/*c.beginPath();
c.arc(x, y, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();*/


/*var x = 200;*/



function Circle(x,y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'blue';
		c.stroke();
		c.fill();
	}

	this.update = function(){
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
			this.dy = -this.dy;
		}

		this.x+=this.dx;
		this.y+= this.dy;

		this.draw();
	}

}

/*var x= Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) *8;
var dy = (Math.random() - 0.5) *8;
var radius = 30;*/

var circleArray = [];

for(var i = 0; i<100; i++) {
	var radius = 30;
	var x= Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);
	
	circleArray.push(new Circle(x, y, dx, dy, radius));
}



function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth, innerHeight); /*allows single circle to show*/

for(var i = 0; i < circleArray.length; i++) {
circleArray[i].update();
}



}
animate();

/*function Circle(x,y,dx,dy, radius){
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'blue';
		c.stroke();
		c.fill();
	}
}*/
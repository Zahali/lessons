var canvas =document.getElementById('sandbox'),
context = canvas.getContext('2d');
/*square, circle, line = new Path2D();
context.fillRect(50,25,200,250);*/

/*square = new Path2D();
square.moveTo(50,50);
square.lineTo(250,50);
square.lineTo(250,250);
square.lineTo(50,250);
square.lineTo(50,50);

context.stroke(square);

circle = new Path2D();
circle.arc(150,150,100,0,2*Math.PI);
context.stroke(circle);

line.moveTo(50,50);
line.lineTo(300,300);

context.lineWidth = 5;
context.stroke(line);

context.fillStyle = "red";
context.fillRect(0,0,200,200);

context.fillStyle = "rgba(0,225,0,0.5)";
context.fillRect(100,100,300,300)*/

function DrawLine(angle, a, b, style, width){
 var a, b, style, width, pX, pY, qX, qY, line, R = (300/2);
 pX = Math.cos(angle) * R;
 pY = -Math.sin(angle) * R;
 pX = b * pX;
 pY = b * pY;
 qX = a * pX;
 qY = a * pY;
 pX = pX + R;
 pY = pY + R;
 qX = qX + R;
 qY = qY + R;

 line = new Path2D();
 line.moveTo(qX, qY);
 line.lineTo(pX, pY);
 context.strokeStyle = style;
 context.lineWidth = width;
 context.stroke(line);
} 

function drawWatch() {
    var R=300/2, d, angle;

    context.clearRect(0,0,300,300)

 circle = new Path2D();
 circle.arc(R-0.4,R-0.4,R-0.8,0,2*Math.PI);
 context.strokeStyle = "black";
 context.lineWidth = 1;
 context.stroke(circle);

 for(d = 0; d < 60; ++d){
     angle = (d/60)*(2*Math.PI);
    /* if (d % 5) {Style = "rgba(0,0,0,0.5)"} else {Style = "black";};
     DrawLine(angle, 0.9, 0.98, Style, 1);*/
     DrawLine(angle, 0.9, 0.98, (d % 5)?"rgba(0,0,0,0.5)":"black", 1);
 }

date = new Date();
 hours = date.getHours();
 minutes = date.getMinutes();
 seconds = date.getSeconds();
 /*console.log(hours, minutes, seconds);*/
 secondsAngle = (seconds / 60) * (2 * Math.PI);
 minutesAngle = (minutes / 60) * (2 * Math.PI);
 hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);

 secondsAngle = Math.PI / 2 - secondsAngle;
 minutesAngle = Math.PI / 2 - minutesAngle;
 hoursAngle = Math.PI / 2 - hoursAngle;

 DrawLine (secondsAngle, 0, 0.95, "red", 1);
 DrawLine (minutesAngle, 0, 0.8, "black", 2);
 DrawLine (hoursAngle, 0, 0.4, "black", 4)



 setTimeout(drawWatch,1000);
}

drawWatch();
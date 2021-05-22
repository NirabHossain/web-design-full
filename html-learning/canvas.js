var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

var ctg=c.getContext("2d");
ctg.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50); 
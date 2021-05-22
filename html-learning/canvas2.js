var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"blue");
ctx.fillStyle = grd;
ctx.fillRect(0,0,150,150);

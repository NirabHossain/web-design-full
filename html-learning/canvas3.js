function myCanvas() {
  var c = document.getElementById("Canvas3");
  var ctx = c.getContext("2d");
  var img = document.getElementById("scream");
  ctx.drawImage(img,10,10);
}
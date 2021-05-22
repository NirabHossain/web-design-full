function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var q = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(q));
}
if (typeof(Storage) !== "undefined") {
  localStorage.setItem("name", "Md. Nirab Hossain");
  document.getElementById("result").innerHTML = localStorage.getItem("name");
} 
else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

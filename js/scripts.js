window.onload = function() {

  let body = document.body;
  let darkButton = document.querySelector("button");

  darkButton.onclick = function() {
    body.style.backgroundColor = "black"; 
    body.style.color = "white";
  };
  

};
window.onload = function() {

  let body = document.body;
  let darkButton = document.querySelector(".dark");
  let lightButton = document.querySelector(".light");

  darkButton.onclick = function() {
    body.style.backgroundColor = "black"; 
    body.style.color = "white";
  };

  lightButton.onclick = function() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  };

};

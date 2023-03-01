document.querySelector(".btn").addEventListener("click", dice)
function dice() {
  var sound = new Audio('sound.mp3');
  sound.play();
  document.querySelector(".I").classList.add("play");
  document.querySelector(".II").classList.add("play");
  var n = Math.random() * 6;
  n = Math.floor(n + 1);
  var ne = "images/dice" + n + ".png";
  document.querySelector("img").setAttribute("src", ne);
  setTimeout(function () {
    document.querySelector(".I").classList.remove("play");
    document.querySelector(".II").classList.remove("play");
  }, 200);


  var m = Math.random() * 6;
  m = Math.floor(m + 1);
  var ne = "images/dice" + m + ".png";
  document.querySelector(".II").setAttribute("src", ne);

  if (m > n) {
    document.querySelector(".result").innerHTML = "Player 2 Wins";
  }
  else if (n > m) {
    document.querySelector(".result").innerHTML = "Player 1 Wins";
  }
  else {
    document.querySelector(".result").innerHTML = "Draw";
  }

}

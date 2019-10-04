let total = 0;
let wins = 0;
let losses = 0;
let c1;
let c2;
let c3;
let c4;
let randomNum;

const newGame = () => {
  //set total back to 0
  total = 0;
  $("#total").html(total);
  //set random number
  randomNum = Math.floor(Math.random() * 100) + 19;
  $("#random").html(randomNum);
  //assign each crystal a number
  c1 = Math.floor(Math.random() * 12) + 1;
  c2 = Math.floor(Math.random() * 12) + 1;
  c3 = Math.floor(Math.random() * 12) + 1;
  c4 = Math.floor(Math.random() * 12) + 1;
};

$("#1").click(function() {
  total += c1;
  $("#total").html(total);
  //win
  if (randomNum === total) {
    wins++;
    $("#wins").html(wins);
    newGame();
  }
  //loss
  if (total > randomNum) {
    losses++;
    $("#losses").html(losses);
    newGame();
  }
});

$("#2").click(function() {
  total += c2;
  $("#total").html(total);
  //win
  if (randomNum === total) {
    wins++;
    $("#wins").html(wins);
    newGame();
  }
  //loss
  if (total > randomNum) {
    losses++;
    $("#losses").html(losses);
    newGame();
  }
});

$("#3").click(function() {
  total += c3;
  $("#total").html(total);
  //win
  if (randomNum === total) {
    wins++;
    $("#wins").html(wins);
    newGame();
  }
  //loss
  if (total > randomNum) {
    losses++;
    $("#losses").html(losses);
    newGame();
  }
});

$("#4").click(function() {
  total += c4;
  $("#total").html(total);
  //win
  if (randomNum === total) {
    wins++;
    $("#wins").html(wins);
    newGame();
  }
  //loss
  if (total > randomNum) {
    losses++;
    $("#losses").html(losses);
    newGame();
  }
});

newGame();

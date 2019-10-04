//get random number
let randomNum = Math.floor(Math.random() * 100) + 19;
$("#random").html(randomNum);

const generateCrystalNum = () => {
  return Math.floor(Math.random() * 12) + 1;
};

let total = 0;
let wins = 0;
let losses = 0;

//assign each crystal a number
let c1 = generateCrystalNum();
let c2 = generateCrystalNum();
let c3 = generateCrystalNum();
let c4 = generateCrystalNum();

//add to total when crystal is clicked
$("#1").click(function() {
  total += c1;
  $("#total").html(total);
  //win
  if (randomNum === total) {
    wins++;
    $("#wins").html(wins);
  }
  //loss
  if (total > randomNum) {
    losses++;
    $("#losses").html(losses);
  }
});

$("#2").click(function() {
  total += c2;
  $("#total").html(total);
  //win
  if (randomNum === total) {
    wins++;
    $("#wins").html(wins);
  }
  //loss
  if (total > randomNum) {
    losses++;
    $("#losses").html(losses);
  }
});

$("#3").click(function() {
  total += c3;
  $("#total").html(total);
  //win
  if (randomNum === total) {
    wins++;
    $("#wins").html(wins);
  }
  //loss
  if (total > randomNum) {
    losses++;
    $("#losses").html(losses);
  }
});

$("#4").click(function() {
  total += c4;
  $("#total").html(total);
  //win
  if (randomNum === total) {
    wins++;
    $("#wins").html(wins);
  }
  //loss
  if (total > randomNum) {
    losses++;
    $("#losses").html(losses);
  }
});

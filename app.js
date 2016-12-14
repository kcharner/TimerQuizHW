
var number = 60;
var counter;

function timer() {
  counter = setInterval(decrementCounter, 1000);
}

function decrementCounter() {
  number--;
    $("#timer").html("<h2>" + "Time Remaining: " + number + " seconds" + "</h2>");
      if (number === 0) {
        stop();
        alert("Time Up!");
      }
}

function stop() {
  clearInterval(counter);
}

function showQuestions() {
  $("#gameQuestions").show();
}

function hideQuestions() {
  $("#gameQuestions").hide();
}

$("#startBtn").on("click", function() {
  $(".jumbotron").hide();
  timer();
  setTimeout(showQuestions, 1000);
})

var answers = ["The Scarlet Letter", "The Last of the Mohicans", "Henry David Thoreau", 
"The Sketch Book of Geoffrey Crayon, Gent", "Moby Dick"];

function checkQuestion1(){
  if ($("#a")[0].checked == true && $("#b")[0].checked == false && $("#c")[0].checked == false) {
       var responseOne = $("<p></p>").text("The answer is " + answers[0] + " . . . " + "You answered correctly!");
       $("body").append(responseOne);
      } else {
       var wrongOne = $("<p></p>").text("The answer is " + answers[0] + " . . . " + "You answered incorrectly.");
       $("body").append(wrongOne);
       }
}

function checkQuestion2(){
  if ($("#d")[0].checked == false && $("#e")[0].checked == false && $("#f")[0].checked == true) {
       var responseTwo = $("<p></p>").text("The answer is " + answers[1] + " . . . " + "You answered correctly!");
       $("body").append(responseTwo);
      } else {
         var wrongTwo = $("<p></p>").text("The answer is " + answers[1] + " . . . " + "You answered incorrectly.");
       $("body").append(wrongTwo);
       }
}

function checkQuestion3(){
  if ($("#g")[0].checked == true && $("#h")[0].checked == false && $("#i")[0].checked == false) {
       var responseThree = $("<p></p>").text("The answer is " + answers[2] + " . . . " + "You answered correctly!");
       $("body").append(responseThree);
      } else {
         var wrongThree = $("<p></p>").text("The answer is " + answers[2] + " . . . " + "You answered incorrectly.");
       $("body").append(wrongThree);
       }
}

function checkQuestion4(){
  if ($("#j")[0].checked == false && $("#k")[0].checked == true && $("#l")[0].checked == false) {
       var responseFour = $("<p></p>").text("The answer is " + answers[3] + " . . . " + "You answered correctly!");
       $("body").append(responseFour);
      } else {
        var wrongFour = $("<p></p>").text("The answer is " + answers[3] + " . . . " + "You answered incorrectly.");
       $("body").append(wrongFour);
       }
}

function checkQuestion5(){
  if ($("#m")[0].checked == false && $("#n")[0].checked == false && $("#o")[0].checked == true) {
       var responseFive = $("<p></p>").text("The answer is " + answers[4] + " . . . " + "You answered correctly!");
       $("body").append(responseFive);
      } else {
         var wrongFive = $("<p></p>").text("The answer is " + answers[4] + " . . . " + "You answered incorrectly.");
       $("body").append(wrongFive);
       }
}

$('#gameQuestions').submit(function(e){
   e.preventDefault();
     checkQuestion1();
     checkQuestion2();
     checkQuestion3();
     checkQuestion4();
     checkQuestion5();
     hideQuestions();
})









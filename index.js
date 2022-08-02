
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var started = false;
var level = 0;
$(document).keydown(function(){
 if(!started){

  $("#level-title").text(" Level "+ level);
  nextSequence();
  started = true;
 }

});



$(".btn").click(function(){
    var userChoosenColours = $(this).attr("id");
      userClickPattern.push(userChoosenColours);
    //   console.log(userClickPattern);
      playSound(userChoosenColours);
      animatePress(userChoosenColours);
      checkAnswer(userClickPattern.length-1);


   });

   function checkAnswer(currentLevel){
   if(gamePattern[currentLevel] === userClickPattern[currentLevel]){
      console.log("success");
        if(userClickPattern.length === gamePattern.length){
          setTimeout(function(){
      
               nextSequence();
        },1000);
        }
      }
        else{
          console.log("wrong");
          playSound("wrong");
          $("body").addClass("game-over");
          setTimeout(function(){

            $("body").removeClass("game-over");
              
          },200);
          $("#level-title").text("Game Over, Press Any key to restart ");
          startOver();
          
        }
   }
 function startOver(){

  level = 0;
  gamePattern = [];
  started = false;



 }
   
   




function nextSequence(){
 userClickPattern = [];
 level++;
 $("#level-title").text(" Level " + level);
     
    
var randomNumber = Math.floor(Math.random() * 4);
var randomChoosenColor = buttonColors[randomNumber];
gamePattern.push(randomChoosenColor);

$( "#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(userChoosenColours);


    
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
   
}
function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed");

 setTimeout(function(){
   $("#" + currentColour).removeClass("pressed");


 },100);

}

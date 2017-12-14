var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);



var Cry1 = Math.floor(Math.random() * 11) + 1;
var Cry2 = Math.floor(Math.random() * 11) + 1;
var Cry3 = Math.floor(Math.random() * 11) + 1;
var Cry4 = Math.floor(Math.random() * 11) + 1;


$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#curScore").text(counter);

function restartGame() {

targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);
Cry1 = Math.floor(Math.random() * 11) + 1;
Cry2 = Math.floor(Math.random() * 11) + 1;
Cry3 = Math.floor(Math.random() * 11) + 1;
Cry4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#curScore").text(counter);

}

function win() {

	alert("You win!");
	winCounter ++;
	$("#winCounter").text(winCounter);
	restartGame();
}

function lose() {

	alert("You lose!");
	lossCounter ++;
	$("#lossCounter").text(lossCounter);
	restartGame();
}

$('#Cry1').on ('click', function(){
    counter = counter + Cry1;
    
    $('#curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Cry2').on ('click', function(){
    counter = counter + Cry2;
    
    $('#curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Cry3').on ('click', function(){
    counter = counter + Cry3;
    
    $('#curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Cry4').on ('click', function(){
    counter = counter + Cry4;
    
    $('#curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });
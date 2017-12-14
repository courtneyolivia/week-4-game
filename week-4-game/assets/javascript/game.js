
var random_result;
var lose = 0;
var win = 0;
var previous = 0;



var resetAndStart = function () {

  $(".kitties").empty();

  var images = ['yellowkitty.png', 
                'sadkitty.jpg', 
                'nomnomkitty.jpg', 
                'bunnykitty.jpg'];

  random_result = Math.floor(Math.random() * 69 ) + 30;

$("#GoalNumber").html(random_result);

for(var i = 0; i < 4; i++){

  var random = Math.floor(Math.random() * 11) + 1;



  var kitty = $("<div>");
    kitty.attr({
      "class": 'kitty',
      "data-random": random

    });

    kitty.css({
      "background-image":"url('" + images[i] + "')"
      "background-size":"cover"
    });



  $(".kitties").append(kitty);


    }

     $("previous").html("Your total score: " + previous);

}

resetAndStart();



$(".kitty").on('click', function () {


  var num = parseInt($(this).attr('data-random'));

  previous += num;

  $("previous").html(previous);

  console.log(previous);

  if(previous > random_result){

    lose++;

    $("#lose").html("Losses: " + lose);

    previous = 0;

    resetAndStart();

  }

  else if(previous === random_result){

    win++;

    $("#win").html("Wins: " + win);

    previous = 0;

    resetAndStart();
  }


});

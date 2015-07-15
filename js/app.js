
$(document).ready(function(){

	var computerChoice = Math.random();
	
	$('#new').on('click', function (enter) {
		enter.preventDefault();

		var num = $('#userGuess').val();
		if (num == "" || isNaN(num)){
			alert("Please enter a number.");
		}
		
		else if (num % 1 != 0){
			alert("Please enter a whole number only.");
		}

		else if (num >= 100 || num <= 0){
			alert("Please enter a number between 1 and 100.");
		}

		else {

			newGame();
		}
	});
	

	$('#guessButton').on('click', function (enter) {}
	var checkTemp = function (difference);
	
        if (difference <= 50) {
            $('#feedback').("ice cold <br>");
        }
        else if (difference ) {
            $('#feedback').("cold <br>");
        }

        else {
            $('#feedback').("hot <br>");
        }


  }
}


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});




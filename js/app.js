
$(document).ready(function(){
	var count = 0;
	var secretNumber = computerChoice();

	var num;

	function computerChoice() {
		return Math.floor(Math.random() * 100) + 1; 
	}; 

	console.log(secretNumber);
	
	$('#new').on('click', function (enter) {
		enter.preventDefault();

		
	});
	

	$('#guessButton').on('click', function (enter) {
		enter.preventDefault();
		num = parseInt($('#userGuess').val());

 
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

			checkTemp(num,secretNumber);
			countUp();
			appendGuess();
		}

		

  	});

		$('#new').on('click', function (enter) {
  		enter.preventDefault();
  		newGame();
  	});
  	

  	var checkTemp = function (userGuess, secretNumber) {
		var difference = Math.abs(userGuess-secretNumber);
	        if (difference === 0) {
	            $('#feedback').text("that's right!");
	        }

	        else if (difference >= 50) {
	            $('#feedback').text("ice cold");
	        }
	        else if (difference >= 30) {
	            $('#feedback').text("warm");
	        }

	        else if (difference >= 20) {
	            $('#feedback').text("hot");
	        }

	        else if (difference >= 10) {
	            $('#feedback').text("very hot");
	        }
	    }

	 function countUp(){
	 	count++;
	 	$('#count').text(count);
	 }

	 function appendGuess(){
	 	$('#guessList').append("<li>"+num+"</li>");
	 }

	 function newGame(){
	 	clearText();

	 }

	 function clearText(){
	 	$('#guessList').val(' ');
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




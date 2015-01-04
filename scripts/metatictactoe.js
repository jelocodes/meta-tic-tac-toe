var ticTacToeApp = {};

ticTacToeApp.currentPlayer = "X";

ticTacToeApp.init = function() {
	ticTacToeApp.$squares = $('#grid').find('.square');
	ticTacToeApp.$playerLabel = $('.player span')

	ticTacToeApp.$squares.on('click', function(){
		ticTacToeApp.placeMarker($(this));
	});

  $('.clear').on('click', function(){
    ticTacToeApp.clearBoard();
  });
}

ticTacToeApp.placeMarker = function($square){
	//prohibit marker placement if square's already taken
	if ($square.hasClass('inactive')){
		return;
	}
  // puts an X or an O on the board and prohibits square from being re-used
	$square.html(ticTacToeApp.currentPlayer).addClass('inactive');

  // player switch
  ticTacToeApp.switchPlayer();

  // check for win
  ticTacToeApp.checkForWin($square);
}

ticTacToeApp.switchPlayer = function(){
	// checks which player's turn it is  and switches
  if (ticTacToeApp.currentPlayer == "X") {
  	ticTacToeApp.currentPlayer = "O";
  } else {
  	ticTacToeApp.currentPlayer = "X";
  }

  //updates playerLabel 
  ticTacToeApp.$playerLabel.html(ticTacToeApp.currentPlayer);
}

  //clears board when button is pressed
ticTacToeApp.clearBoard = function(){
  ticTacToeApp.$squares.html("").removeClass('inactive');
}

ticTacToeApp.checkForWin = function(){
		  //checks to see if there is a row of three anywhere on the grid
		  var moves = [];
		  var movesMade = 0;

		  ticTacToeApp.$squares.each(function(){
		  	if ($(this).html() == "X") {
		  		moves.push(1);
		  		movesMade ++;
		  	} else if ($(this).html() == "O"){
		  		moves.push(-1);
		  		movesMade ++;
		  	} else {
		  		moves.push(0);
		  	}
		  });

var wins = [
		  //rows
		  moves[0] + moves[1] + moves[2],
		  moves[3] + moves[4] + moves[5],
		  moves[6] + moves[7] + moves[8],
		  //cols
		  moves[0] + moves[3] + moves[6],
		  moves[1] + moves[4] + moves[7],
		  moves[2] + moves[5] + moves[8],
		  //diagonals
		  moves[0] + moves[4] + moves[8],
		  moves[2] + moves[4] + moves[6]
		 ];

if (wins.indexOf(3) >= 0) {
	alert("X wins!");
	ticTacToeApp.$squares.addClass('inactive');
   } else if (wins.indexOf(-3) >= 0){
	alert("O wins!");
	ticTacToeApp.$squares.addClass('inactive');
   } else if (movesMade == 9){
	alert("Game over! It's a draw.");
	}



$(function(){

ticTacToeApp.init();
});

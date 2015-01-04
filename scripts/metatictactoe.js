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
  // also marks all other squares as unavailable save the one corresponding to user input
	$square.html(ticTacToeApp.currentPlayer).addClass('inactive');
	ticTacToeApp.$squares.addClass('inactive');

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
		  //checks all of the 81 squares in the 9x9 grid of 9x9 grids for win possibilities
		  //rows
		  moves[0] + moves[1] + moves[2],
		  moves[3] + moves[4] + moves[5],
		  moves[6] + moves[7] + moves[8],
		  moves[9] + moves[10] + moves[11],
		  moves[12] + moves[13] + moves[14],
		  moves[15] + moves[16] + moves[17],
		  moves[18] + moves[19] + moves[20],
		  moves[21] + moves[22] + moves[23],
		  moves[24] + moves[25] + moves[26],
		  moves[27] + moves[28] + moves[29],
		  moves[30] + moves[31] + moves[32],
		  moves[33] + moves[34] + moves[35],
		  moves[36] + moves[37] + moves[38],
		  moves[39] + moves[40] + moves[41],
		  moves[42] + moves[43] + moves[44],
		  moves[45] + moves[46] + moves[47],
		  moves[48] + moves[49] + moves[50],
		  moves[51] + moves[52] + moves[53],
		  moves[54] + moves[55] + moves[56],
		  moves[57] + moves[58] + moves[59],
		  moves[60] + moves[61] + moves[62],
		  moves[63] + moves[64] + moves[65],
		  moves[66] + moves[67] + moves[68],
		  moves[69] + moves[70] + moves[71],
		  moves[72] + moves[73] + moves[74],
		  moves[75] + moves[76] + moves[77],
		  moves[78] + moves[79] + moves[80],
		  //cols
		  moves[0] + moves[3] + moves[6],
		  moves[1] + moves[4] + moves[7],
		  moves[2] + moves[5] + moves[8],
		  moves[9] + moves[12] + moves[15],
		  moves[10] + moves[13] + moves[16],
		  moves[11] + moves[14] + moves[17],
		  moves[18] + moves[21] + moves[24],
		  moves[19] + moves[22] + moves[25],
		  moves[20] + moves[23] + moves[26],
		  moves[27] + moves[30] + moves[33],
		  moves[28] + moves[31] + moves[34],
		  moves[29] + moves[32] + moves[35],
		  moves[36] + moves[39] + moves[42],
		  moves[37] + moves[40] + moves[43],
		  moves[38] + moves[41] + moves[44],
		  moves[45] + moves[48] + moves[51],
		  moves[46] + moves[49] + moves[52],
		  moves[47] + moves[50] + moves[53],
		  moves[54] + moves[57] + moves[60],
		  moves[55] + moves[58] + moves[61],
		  moves[56] + moves[59] + moves[62],
		  moves[63] + moves[66] + moves[69],
		  moves[64] + moves[67] + moves[70],
		  moves[65] + moves[68] + moves[71],
		  moves[72] + moves[75] + moves[78],
		  moves[73] + moves[76] + moves[79],
		  moves[74] + moves[77] + moves[80],
		  //diagonals
		  moves[0] + moves[4] + moves[8],
		  moves[2] + moves[4] + moves[6],
		  moves[9] + moves[13] + moves[17],
		  moves[11] + moves[13] + moves[15],
		  moves[18] + moves[22] + moves[26],
		  moves[20] + moves[22] + moves[24],
		  moves[27] + moves[31] + moves[35],
		  moves[29] + moves[31] + moves[33],
		  moves[36] + moves[40] + moves[44],
		  moves[38] + moves[40] + moves[42],
		  moves[45] + moves[49] + moves[53],
		  moves[47] + moves[49] + moves[51],
		  moves[54] + moves[58] + moves[62],
		  moves[56] + moves[58] + moves[60],
		  moves[63] + moves[67] + moves[71],
		  moves[65] + moves[67] + moves[69],
		  moves[72] + moves[76] + moves[80],
		  moves[74] + moves[76] + moves[78],
		 ];

if (wins.indexOf(3) >= 0) {
	alert("X wins!");
	ticTacToeApp.$squares.addClass('inactive');
   } else if (wins.indexOf(-3) >= 0){
	alert("O wins!");
	ticTacToeApp.$squares.addClass('inactive');
   } else if (movesMade == 81){
	alert("Game over! It's a draw.");
	}

$(function(){

ticTacToeApp.init();
});

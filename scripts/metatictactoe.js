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

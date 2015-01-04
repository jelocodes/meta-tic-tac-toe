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
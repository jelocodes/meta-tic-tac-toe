#Meta Tic-Tac-Toe: Tic-Tac-Toe levelled up

We used to play this game in school that combined the simple fun of Tic-Tac-Toe with the strategy and forward thinking of a game like Chess. Some of our games took up to thirty minutes to close to an hour depending on how many grids we played on. The most basic game board is a 3x3 grid of 3x3 grids. I call it META TIC TAC TOE (if you think of a better name, pls let me know). It's been a great friend to the bored that was us at lunch (obviously at the cool table). Here is my attempt at coding the game to be playable on the internet.

Please feel free to change or condense the code to make it more elegant or minified. I'm thinking of adding crude A.I. at some point to make it playable for a single person, but for now it's strictly a two player game. Both the players have to be at the same computer to play. I'm also thinking of somehow implementing online play at some point (If you can do it, please fork the project and contribute). Shout out to [HackerYou](http://www.hackeryou.com) for providing the basic skeleton and giving me the idea to convert my basic Tic-Tac-Toe app into this more complex version.

##Rules

Just like regular Tic-Tac-Toe, three in a row wins. In this case though, you have 9 different 3x3 game boards and thus 9 different places where you can win.

The game starts with Player X placing a marker on one of the circles on one of the game boards.

Each of the 9 circles on each game board corresponds to the positions of the 9 game boards oriented on the big 3x3 grid. Where a player places their marker limits where the next player can place their marker. Placing a marker on the top-left circle of a game board for example, means that on the next turn, the opposing player will have to place their marker somewhere on the top-left game board. Likewise, placing a marker in the middle circle of one of the game boards forces the next player to play on the middle game board. Be creative and think ahead when making your moves, trying to get a row of three, but also trying to block your opponent's potential wins by picking a location that benefits you.

Except for the first turn, in which X can play anywhere, the red game board is the active/playable one.

Have fun! 
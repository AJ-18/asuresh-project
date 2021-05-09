var gameData = require('../models/gameData')
var gameController = require('../controllers/gameController');


gameScreens = []

/*For some reason it won't let me separate this string into multiple lines for
easier reading.*/
var Screen1 = 
"<p> There are different options to choose from! </p>  <li id= 'bankerItem' > Be a banker from Boston </li><li id= 'carpenterItem'> Be a carpenter from Ohio </li><li id= 'farmerItem'> Be a farmer from Illinois </li><li id= 'differencesItem'> Find out the differences between the choices</li></ol><div id= 'selectOption'> What's your choice?</div>";


gameScreens.push(Screen1);

//Getting the Game Screen
exports.getGameScreen = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.send(gameScreens[req.params.screenNum]);
}

/*
function startMonth(Month) {
    this.startMonth = Month;
}


exports.startMonth = function(Month){
    return new startMonth(Month);
}
*/

//Getting the start month
exports.getStartMonth = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.send(gameController.newGame.startMonth);
}

//Save start month
exports.saveStartMonth = function(req, res) {
    gameController.newGame.startMonth = req.body.startMonth;
    res.setHeader('Content-Type', 'application/json');
    res.send(gameController.newGame.startMonth);
}


// Get Profession
exports.getProfession = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.send(gameController.newGame.playerProfession);
}

// Save Profession
exports.saveProfession = function(req, res) {
    gameController.newGame.playerProfession = req.body.playerProfession;
    res.setHeader('Content-Type', 'application/json');
    res.send(gameController.newGame.playerProfession);
}


//playersArray = [];

// Get player name

exports.getPlayerName = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.send(gameController.newGame.playerNames[req.params.playerName])
}

// Save player name
exports.savePlayerName = function(req, res) {
    //let newPlayerName = gameData.createPlayer(req.body.playerName);
    //playersArray.push(newPlayerName);
    gameController.newGame.playerNames = req.body.playerNames;
    res.setHeader('Content-Type', 'application/json');
    res.send(gameController.newGame.playerNames);
}

// Getting ALL player names
exports.getAllPlayerNames = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.send(gameController.newGame.playerNames);
}

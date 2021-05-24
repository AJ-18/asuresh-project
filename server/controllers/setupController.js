var gameData = require('../models/gameData')
var gameController = require('../controllers/gameController');


gameScreens = []

var Screen1 = 
"<p> There are different options to choose from! </p> "
+ "<p> Press the corresponding numbers to choose! </p>" 
+ "<ol id=\"setupQuestions1\" >"
+"<li id=\"bankerItem\" >Be a banker from Boston </li>" 
+"<li id=\"carpenterItem\">Be a carpenter from Ohio </li>"
+"<li id=\"farmerItem\">Be a farmer from Illinois </li>"
+"<li id=\"differencesItem\">Find out the differences between the choices</li>"
+"</ol><div id=\"selectOption\">What's your choice?</div>";

var Screen2 = 
"<p>What is the first name of the wagon leader?</p>"
+ "Leader Name: <input id=\"player0\" />"
+ "<input type=\"button\" class=\"button-1\" id=\"page1button\" value=\"Next\" />";

var Screen3 = 
"<p>What are the first names of the other members of your party?</p>"
+ "Player Name: <input id=\"player1\" /><br />"
+ "Player Name: <input id=\"player2\" /><br />"
+ "Player Name: <input id=\"player3\" /><br />"
+ "Player Name: <input id=\"player4\" /><br />"
+ "<input type=\"button\" class=\"button-1\" id=\"page2button\" value=\"Next\" />";

var Screen4 = 
"<p id=\"screen4Info\"> It is 1848. Your starting point for the oregon trial is determined by the choice of the month </p>"
+ "<p> Click on the month you want to start at! </p>"
+ "<div id=\"setupQuestions2\"></div>"
+ "<span id=\"marchItem\">March</span><br />"
+ "<span id=\"aprilItem\">April</span><br />"
+ "<span id=\"mayItem\">May</span><br />"
+ "<span id=\"juneItem\">June</span><br />"
+ "<span id=\"julyItem\">July</span><br />"
+ "<div id=\"selectedOption2\">What's your choice?</div>";

var Screen5 = 
"<p> Congrats! You're ready to start your Journey on the trail! </p>"
+ "<p> Here is the information for your game: </p>"
+ "<div id=\"returnData\">"
+ "Wagon Leader: <span id=\"rPlayer0Name\"></span><br />"
+ "Member: <span id=\"rPlayer1Name\"></span><br />"
+ "Member: <span id=\"rPlayer2Name\"></span><br />"
+ "Member: <span id=\"rPlayer3Name\"></span><br />"
+ "Member: <span id=\"rPlayer4Name\"></span><br />"
+ "Your profession: <span id=\"rProfession\"></span><br />"
+ "Current bank account: <span id=\"rMoney\"></span><br />"
+ "Month leaving: <span id=\"rStartMonth\"></span><br />"
+ "<input type=\"button\" class=\"button-1\" id=\"page3button\" value=\"Next\" />";
+ "</div>";

var Screen6 =
"<h2 id=\"About\">About the choices...</h2>"
+ "<div id=\"info\">"
+ "<p> Being a banker means you start with $2000! </p>"
+ "<p> Being a carpenter means you start with $1800! </p>"
+ "<p> Being a farmer means you start with $1500! </p>"
+ "</div>";

//This is for the mainmenu (option number 2) to learn about the trail
var Screen7 =
"<h2 id=\"trailInfoHeader\">About the trail...</h2>"
+ "<div id=\"trailInfo\">"
+ "<p>The Oregon Trail is a tough path that takes you and four other party members </p>"
+ " <p>across a tough journey through different types of terrain and weather.</p>"
+ "<p> The trail is 500 miles long, and you have a maximum of 45 days to complete the trail</p>"
+ "</div>"
+ "<p id=\"spacebarInfo\">Press Spacebar to head back to the main menu! </p>"

var Screen8 =
"<div id=\"paceSetter\">"
+ "<input type=\"button\" class=\"button-1\" id=\"steadybutton\" value=\"Steady\" />"
+ "<input type=\"button\" class=\"button-1\" id=\"strenuousbutton\" value=\"Strenuous\" />"
+ "<input type=\"button\" class=\"button-1\" id=\"gruelingbutton\" value=\"Grueling\" />"
+ "<input type=\"button\" class=\"button-1\" id=\"restingbutton\" value=\"Resting\" />"
+ "</div>";

var Screen9 =
"<div id=\"Reset\"></div>";


gameScreens.push(Screen1);
gameScreens.push(Screen2);
gameScreens.push(Screen3);
gameScreens.push(Screen4);
gameScreens.push(Screen5);
gameScreens.push(Screen6);
gameScreens.push(Screen7);
gameScreens.push(Screen8);
gameScreens.push(Screen9);

//Getting the Game Screen with screen number
exports.getGameScreen = function(req, res) {
    res.setHeader('Content-Type', 'text/html');
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

exports.saveStartMoney = function(req, res) {
    gameController.newGame.playerMoney = req.body.playerMoney;
    res.setHeader('Content-Type', 'application/json');
    res.send(gameController.newGame.playerMoney);
}

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


var topTen = require('../models/topTen');

var topTenArray = [];

//Changed to fit the example from github instead of using literal syntax (**)
var player1 = topTen.createTopUser("Jake", 1500, "3/8/17");
var player2 = topTen.createTopUser("Steven", 1250, "5/1/15");
var player3 = topTen.createTopUser("David", 1000, "6/3/16");
var player4 = topTen.createTopUser("Whitney", 1230, "2/5/17");


topTenArray.push(player1);
topTenArray.push(player2);
topTenArray.push(player3);
topTenArray.push(player4);


exports.getTopScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(topTenArray);
}

exports.saveTopScore = function(req, res) {
    //With literal syntax how do you create the newPlayer object? (With requesting)
    var newPlayer = topTen.createTopUser(req.body.playerName, 
        req.body.playerScore, req.body.dateEarned);
    topTenArray.push(newPlayer);
	res.setHeader('Content-Type', 'application/json');
	res.send(req.body);
}

//Different from the first function (getPlayers)
exports.getTopScore = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(topTenArray[req.params.playerId]);
}


exports.deleteTopScore = function(req, res) {
    topTenArray.splice(req.params.playerId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(topTenArray);
}

exports.updateTopScore = function(req, res) {
    //This gets existing player from the array
    var updatedPlayer = topTenArray[req.params.playerId];

    //To test what's been passed and update the local copy (github example)
    console.log(req.body.playerName);
    if(req.body.playerName)
        updatedPlayer.playerName = req.body.playerName;
    if(req.body.playerScore)
        updatedPlayer.playerScore = req.body.playerScore;
    if(req.body.scoreEarned)
        updatedPlayer.dateEarned = req.body.dateEarned;

    //(Github ex:) Save the local copy of the user back into the array
    topTenArray[req.params.playerId] = updatedPlayer;

    res.setHeader('Content-Type', 'application/json');
    res.send(topTenArray[req.params.playerId]);
}
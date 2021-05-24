var topTen = require('../models/topTen');


//Changed to fit the example from github instead of using literal syntax (**)
/*
var player1 = topTen.createTopUser("Jake", 1500, "3/8/17");
var player2 = topTen.createTopUser("Steven", 1250, "5/1/15");
var player3 = topTen.createTopUser("David", 1000, "6/3/16");
var player4 = topTen.createTopUser("Whitney", 1230, "2/5/17");
*/
/*
topTenArray.sort((a,b)=> a.Score - b.Score);

topTenArray.forEach((e)) => {
    console.log()
}

topTenArray.push(player1);
topTenArray.push(player2);
topTenArray.push(player3);
topTenArray.push(player4);
*/


const mysql = require('mysql2');
let con = mysql.createConnection({
    host: "localhost",
    user: "UserStudent18",
    password: "WeLp11251",
    database: "topten"
})

con.connect((err) => {
    if(err) throw err;

    console.log('Connected to the database');
    let sql = "use topten;";
    con.query(sql, (err) => {
        if(err) throw err;

    })
})



exports.getTopScores = function(req, res) {

    let topTenArray = [];

    let sql = "select * from topTenUsers;";
    con.query(sql, (err, rows, fields) => {
        if(err) throw err;
        for(let i=0; i< rows.length; i++) {
            let topTenUser = topTen.createTopUser(rows[i].playerName, rows[i].playerScore, rows[i].dateEarned);
            topTenArray.push(topTenUser);
        }
        //console.log(topTenArray);
    })

    res.setHeader('Content-Type', 'application/json');
    res.send(topTenArray);
}

exports.saveTopScore = function(req, res) {
    let sql = "insert into topTenUsers(playerName, playerScore, dateEarned)"
              + "values("
                + req.body.playerName + ","
                + req.body.playerScore + ","
                + req.body.dateEarned
              + ");";

    con.query(sql, (err, result) => {
        if(err) throw err;

        //console.log(result);

        res.setHeader('Content-Type', 'application/json');
	    res.send(result);
    })
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
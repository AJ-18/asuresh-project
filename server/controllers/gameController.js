const { request, response } = require('express');
var gameData = require('../models/gameData');

currentGameData = [];

var newGame = gameData.Game(["", "", "", "", ""],
 [true, true, true, true, true], [""], 0, [""], 0, 100, [""],
  0, [""], [""], [""]);


currentGameData.push(newGame);

exports.newGame = newGame;


exports.getGameData = function(req, res) {
    // return json of the game data
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    //Get back the array which has the new game data
    res.send(currentGameData);

}
// Change Pace Function
var Paces = require('../models/pace');
// Lines 26 - 42 would go in some form into change Pace

 /* Can use array(id), like github example 

 changePace function works by entering the index of the paceArray in the route
 to get the route */
exports.changePace = function(req, res) {

    var changedPace = Paces.paceArray[req.params.paceId];
    newGame.currentPace = changedPace
    /*if(req.body.Pace) {

        changedPace.Pace = req.body.Pace;
    } */
    if(req.params.paceId == 0) {
        // += ? It should be miles (existing) + miles changed based on pace
        newGame.milesTraveled ==  newGame.milesTraveled + Paces.paceArray[0].miles;
        newGame.groupHealth == newGame.groupHealth + Paces.paceArray[0].healthChange;
    }
    if(req.params.paceId == 1) {
        // += ? It should be miles (existing) + miles changed based on pace
        newGame.milesTraveled ==  newGame.milesTraveled + Paces.paceArray[1].miles;
        newGame.groupHealth == newGame.groupHealth + Paces.paceArray[1].healthChange;
    }
    if(req.params.paceId == 2) {
        // += ? It should be miles (existing) + miles changed based on pace
        newGame.milesTraveled ==  newGame.milesTraveled + Paces.paceArray[2].miles;
        newGame.groupHealth == newGame.groupHealth + Paces.paceArray[2].healthChange;
    }
    if(req.params.paceId == 3) {
        // += ? It should be miles (existing) + miles changed based on pace
        newGame.milesTraveled ==  newGame.milesTraveled + Paces.paceArray[3].miles;
        newGame.groupHealth == newGame.groupHealth + Paces.paceArray[3].healthChange;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(changedPace);
}

const { newDayTerrain } = require('../models/terrain');
var Weather = require('../models/weather');

//route API (this is all in updategame)
// **I think you just create a regular nextday function and call it in updateGame
function nextDay(){

    // Change the status from true to false for one of the five trues in the 
    // playerStatus array in the newGame object
    if (newGame.groupHealth < 50 && newGame.groupHealth >= 20 ){
        if (Math.random() * 100 <= 3){
            var charDeath = newGame.playerStatus[Math.floor(Math.random() 
                * newGame.playerStatus.length)];
            //var changedStatus = newGame.playerStatus.indexOf(false);
           // newGame.playerStatus[changedStatus] = true;
           newGame.playerStatus[charDeath] = false;
           newGame.messages = "A party member has died!"
        }
    }
    if (newGame.groupHealth > 0 && newGame.groupHealth < 20 ){
        if (Math.random() * 100 <= 10){
            var charDeath = newGame.playerStatus[Math.floor(Math.random() 
                * newGame.playerStatus.length)];
            //var changedStatus = newGame.playerStatus.indexOf(false);
            // newGame.playerStatus[changedStatus] = true;
            newGame.playerStatus[charDeath] = false;
            newGame.messages = "A party member has died!"
        }
    }
    
    if (newGame.playerStatus == [false, false, false, false, false]) {
        newGame.groupHealth = 0;
    }

    if (newGame.groupHealth == 0 );{
        newGame.messages = "Game over"
    }

    if (newGame.milesTraveled == 500) {
        newGame.messages = "You've reached the end of the Trail!"
    }

    if (newGame.daysonTrail == 45) {
        newGame.messages = "Time has run out!"
    }

    function occurenceProbWeather() {
        /*Made it so there is a 10% chance of 1, 2, 3, 4, 5 to appear,
        but 7 has a 20% chance to appear, and 8, 9, 10, 11 has a 5% chance to appear
        */
        const occurenceProbArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8, 9, 10, 11];

        const random = occurenceProbArray[Math.floor(Math.random() * occurenceProbArray.length)];

        if (random == 1) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[0].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[0].healthChange
            return Weather.weatherArray[0]
        }

        else if (random == 2) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[1].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[1].healthChange
            return Weather.weatherArray[1]
        }

        else if (random == 7) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[2].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[2].healthChange
            return Weather.weatherArray[2]
        }

    
        else if (random == 3) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[3].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[3].healthChange
            return Weather.weatherArray[3]
        }

    
        else if (random == 4) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[4].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[4].healthChange
            return Weather.weatherArray[4]
        }

        else if (random == 5) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[5].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[5].healthChange
            return Weather.weatherArray[5]
        }

        else if (random == 6) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[6].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[6].healthChange
            return Weather.weatherArray[6]
        }

        else if (random == 8) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[7].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[7].healthChange
            return Weather.weatherArray[7]
        }

        else if (random == 9) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[8].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[8].healthChange
            return Weather.weatherArray[8]
        }

        else if (random == 10) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[9].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[9].healthChange
            return Weather.weatherArray[9]
        }

        else if (random == 11) {
            newGame.milesTraveled = newGame.milesTraveled + 
            Weather.weatherArray[10].mileChange 
            newGame.groupHealth = newGame.groupHealth + 
            Weather.weatherArray[10].healthChange
            return Weather.weatherArray[10]
        }
    }
    //If Spacebar is pressed in the nextDay API, changepace will come up
   window.addEventListener("keypress", function(event){
        if(event.keyCode == 32) {
          return changePace(request,response);
        }
      });
      
      newGame.currentWeather = occurenceProbWeather();
      newGame.currentTerrain = newDayTerrain();
      
 }

exports.updateGame = function(req, res) {

    window.addEventListener("keypress", function(event){
        if(event.keyCode == 13) {
          newGame.daysonTrail = newGame.daysonTrail + 1
          return nextDay;
        }
      });


    // return json of the game data
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    //Get back the array which has the new game data
    res.send(currentGameData);

}

exports.resetGame = function(req, res) {
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    //Send back a new isntance of the object named 'newGame'  
    res.send(new gameData.Game(["", "", "", "", ""],
    [true, true, true, true, true], [""], 0, [""], 0, 100, [""],
     0, [""], [""], [""]));

}
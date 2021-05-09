const express = require('express')
var bodyParser = require('body-parser');
const app = express()
app.use(express.static('client/public'));
app.use(bodyParser.json({ type: 'application/json' }));
const port = 1337


/*This is to get index.html to properly show up when loading up https://localhost:1337/  */
app.get('/', function (req, res) {
  res.sendFile('index.html', {root: './client/views' })
  })
  
app.get('/mainmenu', function (req, res) {
  res.sendFile('mainmenu.html', {root: './client/views' })
  })

app.get('/topten', function (req, res) {
  res.sendFile('topten.html', {root: './client/views' })
  })

app.get('/setup', function (req, res) {
  res.sendFile('setup.html', {root: './client/views' })
  })

app.get('/trail', function (req, res) {
  res.sendFile('trail.html', {root: './client/views' })
  })  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//All routes for topTenController
var topTenController = require('../server/controllers/topTenController');

app.route('/api/topTen')
  .get(topTenController.getTopScores)
  .post(topTenController.saveTopScore);

app.route('/api/topTen/:playerId')
  .get(topTenController.getTopScore)
  .delete(topTenController.deleteTopScore)
  .patch(topTenController.updateTopScore);

// All routes for gamecontroller
var gameController = require('../server/controllers/gameController');


app.route('/api/game/currentData')
  .get(gameController.getGameData);

app.route('/api/game/update')
  .get(gameController.updateGame); 

app.route('/api/game/reset')
  .get(gameController.resetGame);

//Route for changePace function
//paceId represents what pace you want to change to (the index of the pace array)
app.route('/api/changePace/:paceId')
  .post(gameController.changePace);


//All routes for setup Controller
var setupController = require('../server/controllers/setupController')  

app.route('/api/setup/startMonth')
.get(setupController.getStartMonth)
.post(setupController.saveStartMonth);

app.route('/api/setup/profession')
.get(setupController.getProfession)
.post(setupController.saveProfession);

app.route('/api/setup/screen/:screenNum')
.get(setupController.getGameScreen);

app.route('/api/setup/player')
.get(setupController.getAllPlayerNames)
.post(setupController.savePlayerName);

app.route('/api/setup/player/:playerName')
.get(setupController.getPlayerName)

/* (Not Implemented) **Possible implementations but I do not see the purpose right now

.patch(setupController.changePlayerName)
.delete(setupController.deletePlayerName);

*/

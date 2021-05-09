
function gameData(Names, Status, Profession, Money, Month, Miles,
     groupHealth, Pace, Days, Weather, Terrain, Messages) {

         this.playerNames = Names;
         this.playerStatus = Status;
         this.playerProfession = Profession;
         this.playerMoney = Money;
         this.startMonth = Month;
         this.milesTraveled = Miles;
         this.groupHealth = groupHealth;
         this.currentPace = Pace;
         this.daysonTrail = Days;
         this.currentWeather = Weather;
         this.currentTerrain =  Terrain;
         this.messages = Messages;
     }

exports.Game = function(Names, Status, Profession, Money, Month, Miles,
    groupHealth, Pace, Days, Weather, Terrain, Messages) {
   return new gameData(Names, Status, Profession, Money, Month, Miles,
    groupHealth, Pace, Days, Weather, Terrain, Messages);
}

/*
function Player(Name) {
    this.playerName = Name;
}


exports.createPlayer = function(Name){
    return new Player(Name);
}
*/
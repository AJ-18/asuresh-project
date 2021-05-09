/* Old Method
var topTen = {
playerName: [""],
playerScore: [],
dateEarned:  [""]

}
*/

//Note: For non-static data using this method is easier
function topTen(Name, Score, Dates) {
    this.playerName = Name;
    this.playerScore = Score;
    this.dateEarned = Dates;
}


exports.createTopUser = function(Name, Score, Dates){
    return new topTen(Name, Score, Dates);
}
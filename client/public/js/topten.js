/* <div id="topTenList" class="myContent"><h2> Loading....</h2></div> */
/*Top ten array and sorting*/
var scores = [
    {userName:"Mario", score: 1134, date:"3/1/2012"},
    {userName:"Peach", score: 1200, date:"2/15/2003"},
    {userName:"Daisy", score: 1500, date:"6/15/2011"},
    {userName:"Luigi", score: 1623, date:"7/12/2006"},
    {userName:"Toad", score: 1203, date:"2/16/2003"},
    {userName:"Wario", score: 1453, date:"5/11/2015"},
    {userName:"Waluigi", score: 1622, date:"1/5/2013"},
    {userName:"Bowser", score: 1133, date:"2/1/2011"},
    {userName:"Yoshi", score: 1315, date:"3/10/2002"},
    {userName:"Koopa", score: 100, date:"4/13/2020"}
];
/*scores.sort((userName, score, date))=>);*/
//Score sorting function that asks the function to sort by descending
scores.sort((a,b)=> b.score - a.score);

/*Array Table*/
let counter = 1;
var scoreTable="";
scores.forEach(function(oneScore){
    scoreTable += "<tr>" + "<div>" + "<td>" + counter + ")" + "</td>"
      + "<td>" + oneScore.userName + "</td>"
      + "<td>" + oneScore.score + "</td>" 
      + "<td>" + oneScore.date + "</td>" + "</div>" +
     "</tr>"
      counter++;
})

/*"<tr>" + "<td>" + scores.userName + "</td>*/
//Putting the table onto the page
document.getElementById("scores").innerHTML = scoreTable;

//const { response } = require("express");

/*
//Able to press 1 and head to trail
window.addEventListener("keypress", function(event){
    if(event.keyCode == 49) {
      document.location.href = "http://localhost:1337/trail";
    }
  });

  //Able to press 2 and head to trail
window.addEventListener("keypress", function(event){
    if(event.keyCode == 50) {
      document.location.href = "http://localhost:1337/trail";
    }
  });

  //Able to press 3 and head to trail
window.addEventListener("keypress", function(event){
    if(event.keyCode == 51) {
      document.location.href = "http://localhost:1337/trail";
    }
  });

*/

/* METHOD 1 The tough, 1 giant fetch
let setupScreen = document.getElementById("setupScreen");
//let gameScreen = 0;

window.addEventListener("load", () => {
  fetch("/api/setup/screen/0").then((response) => {
    //do something with the result
    response.text().then(function(data){
      //send the html returned back to the 
      //console.log("received back: " + data);
      setupScreen.innerHTML = data;
      // If you press 1 this would happen
      document.addEventListener("keypress", () => {
        if(event.keyCode == 49) {
          //gameScreen ++;
          //if(gameScreen > 4) gameScreen = 4;
          //**Save Profession banker (by id)
          fetch("/api/setup/screen/1").then((response) => {
            response.text().then(function(data) {
              setupScreen.innerHTML = data;

              document.getElementById("page1button").addEventListener("click", () => {
                fetch("/api/setup/screen/2").then((response) => {
                  response.text().then(function(data) {
                    setupScreen.innerHTML = data;
                    //**Save Wagon Leader Name **
                    
                    document.getElementById("page2button").addEventListener("click", () => {
                      fetch("/api/setup/screen/3").then((response) => {
                        response.text().then(function(data){
                          setupScreen.innerHTML = data;
                          //** Save player names for rest of party **

                          document.getElementById("marchItem").addEventListener("click", () => {
                            fetch("/api/setup/screen/4").then((response) => {
                              response.text().then(function(data) {
                                setupScreen.innerHTML = data;
                                //** Save startMonth March **
                              })
                            })
                          })
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        };
      });


      // If you press 2 this would happen  
      document.addEventListener("keypress", () => {
        if(event.keyCode == 50) {
          //gameScreen ++;
          //if(gameScreen > 4) gameScreen = 4;
          //**Save Profession carpenter (by id)
          fetch("/api/setup/screen/1").then((response) => {
            response.text().then(function(data) {
              setupScreen.innerHTML = data;
            });
          });
        };
      }); 


      // If you press 3 this would happen
      document.addEventListener("keypress", () => {
        if(event.keyCode == 51) {
          //gameScreen ++;
          //if(gameScreen > 4) gameScreen = 4;
          //**Save Profession farmer (by id)
          fetch("/api/setup/screen/1").then((response) => {
            response.text().then(function(data) {
              setupScreen.innerHTML = data;
            });
          });
        };
      });


      // If you press 4 this would happen
      document.addEventListener("keypress", () => {
        if(event.keyCode == 52) {
          //gameScreen ++;
          //if(gameScreen > 4) gameScreen = 4;
          fetch("/api/setup/screen/5").then((response) => {
            response.text().then(function(data) {
              setupScreen.innerHTML = data;
            });
          });
        };
      });      
    });
  });
});

*/

//METHOD 2 **Cleaner attempt**
let setupScreen = document.getElementById("setupScreen");

// - - - - - - - - - - -

const bankerData = { playerProfession: 'Banker' };
const carpenterData = { playerProfession: 'Carpenter' };
const farmerData = { playerProfession: 'Farmer' };
const bankerMoney = { playerMoney: '2000' };
const carpenterMoney = { playerMoney: '1800' };
const farmerMoney = { playerMoney: '1500' };
function saveData() {

};

//Three function saveBanker, saveCarpenter, saveFarmer, saves each of the profession to the gameData respectively
function saveBanker() {
  fetch('/api/setup/profession', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(bankerData),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(bankerData + "saved!");
};

function saveCarpenter() {
  fetch('/api/setup/profession', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(carpenterData),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(carpenterData + "saved!");
};

function saveFarmer() {
  fetch('/api/setup/profession', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(farmerData),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(farmerData + "saved!");
};

function saveBankerMoney() {
  fetch('/api/setup/playerMoney', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(bankerMoney),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(bankerMoney + "saved!");
};

function saveCarpenterMoney() {
  fetch('/api/setup/playerMoney', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(carpenterMoney),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(carpenterMoney + "saved!");
};

function saveFarmerMoney() {
  fetch('/api/setup/playerMoney', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(farmerMoney),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(farmerMoney + "saved!");
};








//Saves the leader's name of the wagon

function saveLeaderName() {
var leaderName = document.getElementById("player0").value
var leaderData = { playerNames: [leaderName,"","","",""]};
  fetch('/api/setup/player', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(leaderData),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(leaderData + "saved!");
};


//Saves the names of the rest of the party
function saveWagonPartyNames() {
  var partyName1 = document.getElementById("player1").value
  var partyName2 = document.getElementById("player2").value
  var partyName3 = document.getElementById("player3").value
  var partyName4 = document.getElementById("player4").value
  var partyData = { playerNames: [,partyName1,partyName2,partyName3,partyName4]};
    fetch('/api/setup/player', {
      method:'post',
      headers: {
        "Content-type":"application/json; charset=UTF-8"
      },
      body: JSON.stringify(partyData),
    }).then(function(response){
      if(response.status !== 200){
        console.log('problem with ajax call!' + response.status + "msg: " + response.value);
        return;
      }
    })
    console.log(partyData + "saved!");
};

/* EXPIREMENTAL Way to get Names to save properly!
function saveWagonPartyNames(){
  var leaderName = document.getElementById("player0").value
  var leaderData = { playerNames: [leaderName,"","","",""]};
  var partyName1 = document.getElementById("player1").value
  var partyName2 = document.getElementById("player2").value
  var partyName3 = document.getElementById("player3").value
  var partyName4 = document.getElementById("player4").value
  var partyData = { playerNames: [leaderName,partyName1,partyName2,partyName3,partyName4]};
  fetch("/api/setup/screen/1").then((response) => {
    response.text().then(function(data){

    })
  })
    fetch('/api/setup/player', {
      method:'post',
      headers: {
        "Content-type":"application/json; charset=UTF-8"
      },
      body: JSON.stringify(partyData),
    }).then(function(response){
      if(response.status !== 200){
        console.log('problem with ajax call!' + response.status + "msg: " + response.value);
        return;
      }
    })
    console.log(partyData + "saved!");
};
*/

//Saves the start Months
const marchData = { startMonth: "March"};
const aprilData = { startMonth: "April"};
const mayData = { startMonth: "May"};
const juneData = { startMonth: "June"};
const julyData = { startMonth: "July"};

function saveMarch(){
  fetch('/api/setup/startMonth', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(marchData),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(marchData + "saved!");
};

function saveApril(){
  fetch('/api/setup/startMonth', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(aprilData),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(aprilData + "saved!");
};

function saveMay(){
  fetch('/api/setup/startMonth', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(mayData),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(mayData + "saved!");
};

function saveJune(){
  fetch('/api/setup/startMonth', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(juneData),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(juneData + "saved!");
};

function saveJuly(){
  fetch('/api/setup/startMonth', {
    method:'post',
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify(julyData),
  }).then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    }
  })
  console.log(julyData + "saved!");
};


  
// - - - - - - - - - - -


function summaryScreen() {
  fetch("/api/setup/screen/4").then((response) => {
    response.text().then(function(data){
      var Professions = document.getElementById("rProfession");
      var Leadername = document.getElementById('rPlayer0Name');
      var Player1 = document.getElementById('rPlayer1Name');
      var Player2 = document.getElementById('rPlayer2Name');
      var Player3 = document.getElementById('rPlayer3Name');
      var Player4 = document.getElementById('rPlayer4Name');
      var Money = document.getElementById('rMoney');
      var Month = document.getElementById('rStartMonth');
      function Summary() {
        fetch('/api/game/update')
          .then((response) => {
            response.text()
          .then(function(data){
            var gameData = JSON.parse(data);
            console.log(gameData.playerProfession);
            Professions = gameData.playerProfession;
            Leadername = gameData.playerNames[0];
            Player1 = gameData.playerNames[1];
            Player2 = gameData.playerNames[2];
            Player3 = gameData.playerNames[3];
            Player4 = gameData.playerNames[4];
            Money = gameData.playerMoney;
            Month = gameData.startMonth.Reference;
          });
         });
        };
        Summary();
    });
  });
};

/*
function Summary() {
  fetch('/api/game/update')
    .then((response) => {
      response.text()
    .then(function(data){
      var text = JSON.parse(data);
      console.log(text.playerProfession);
      Professions = text.playerProfession;

    });
    });
  };
*/

function infoScreen() {
  fetch("/api/setup/screen/5").then((response) => {
    response.text().then(function(data){
      setupScreen.innerHTML = data;
    });
  });
};

function trailURL() {
  document.getElementById("page3button").addEventListener("click", () => {
    document.location.href = "http://localhost:1337/trail";
  });
};





// - - - - - - - - - - - 


function marchItem() {
  document.getElementById("marchItem").addEventListener("click", () => {
    saveMarch();
    fetch("/api/setup/screen/4").then((response) => {
      response.text().then(function(data) {
        summaryScreen();
        setupScreen.innerHTML = data;
        trailURL();
      });
    });
  });
};

function aprilItem() {
  document.getElementById("aprilItem").addEventListener("click", () => {
    saveApril();
    fetch("/api/setup/screen/4").then((response) => {
      response.text().then(function(data) {
        summaryScreen();
        setupScreen.innerHTML = data;
        trailURL();
      });
    });
  });
};

function mayItem() {
  document.getElementById("mayItem").addEventListener("click", () => {
    saveMay();
    fetch("/api/setup/screen/4").then((response) => {
      response.text().then(function(data) {
        summaryScreen();
        setupScreen.innerHTML = data;
        trailURL();
      });
    });
  });
};

function juneItem() {
  document.getElementById("juneItem").addEventListener("click", () => {
    saveJune();
    fetch("/api/setup/screen/4").then((response) => {
      response.text().then(function(data) {
        summaryScreen();
        setupScreen.innerHTML = data;
        trailURL();
      });
    });
  });
};

function julyItem() {
  document.getElementById("julyItem").addEventListener("click", () => {
     saveJuly();
    fetch("/api/setup/screen/4").then((response) => {
      response.text().then(function(data) {
        summaryScreen();
        setupScreen.innerHTML = data;
        trailURL();
      });
    });
  });
};




// - - - - - - - - - - - - 




function keyPress1() {
  document.addEventListener("keypress", () => {
    if(event.keyCode == 49) {
      saveBanker();
      saveBankerMoney();
      getGameScreens();
    };
  });
};

function keyPress2() {
  document.addEventListener("keypress", () => {
    if(event.keyCode == 50) {
      saveCarpenter();
      saveCarpenterMoney();
      getGameScreens();
    };
  });
};

function keyPress3() {
  document.addEventListener("keypress", () => {
    if(event.keyCode == 51) {
      saveFarmer();
      saveFarmerMoney();
      getGameScreens();
    };
  });
};

function keyPress4() {
  document.addEventListener("keypress", () => {
    if(event.keyCode == 52) {
      infoScreen();
    };
  });
};

// - - - - - - 

function getGameScreens() {
  fetch("/api/setup/screen/1").then((response) => {
    response.text().then(function(data){
      setupScreen.innerHTML = data;
      document.getElementById("page1button").addEventListener("click", () => {
        saveLeaderName();
        fetch("/api/setup/screen/2").then((response) => {
          response.text().then(function(data){
            setupScreen.innerHTML = data;
            document.getElementById("page2button").addEventListener("click", () => {
              saveWagonPartyNames();
              fetch("api/setup/screen/3").then((response) => {
                response.text().then(function(data){
                  setupScreen.innerHTML = data;
                  marchItem();
                  aprilItem();
                  mayItem();
                  juneItem();
                  julyItem();
                });
              });
            });
          });
        });
      });
    });
  });
};

// Main function to get the fetch working
window.addEventListener("load", () => {
  fetch("/api/setup/screen/0").then((response) => {
    response.text().then(function(data){
      setupScreen.innerHTML = data;
      keyPress1();
      keyPress2();
      keyPress3();
      keyPress4();
    });
  });
});


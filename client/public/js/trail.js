
var terrainImg = document.getElementById('imageURL');

var Days = document.getElementById('rDaysOnTrail');
var Miles = document.getElementById('rMilestraveled');
var Weather = document.getElementById('rCurrentWeather');
var Terrain = document.getElementById('rCurrentTerrain');
var Pace = document.getElementById('rCurrentPace');
var Health = document.getElementById('rPartyHealth');
var Status = document.getElementById('rPartyStatus');
var Messages = document.getElementById('rMessages');

//Pressing enter will call next day (Update Game)
window.addEventListener("load",() => {
    document.addEventListener("keypress", () => {
        if(event.keyCode == 13){
        fetch('/api/game/update')
            .then((response) =>  {
            response.text()
            .then(function(data){
                console.log(data);
                var text = JSON.parse(data);
                Days.innerHTML = text.daysonTrail;
                Miles.innerHTML = text.milesTraveled;
                Weather.innerHTML = text.currentWeather.Reference;
                Terrain.innerHTML = text.currentTerrain.randomString;
                Health.innerHTML = text.groupHealth;
                Status.innerHTML = text.playerStatus;
                Messages.innerHTML = text.messages;
                terrainImg.innerHTML = "<img src=" + "'" + text.currentTerrain.imageUrl + "'" + "/>";
            });
            });
        updatePace();
        };
    });
});

function updatePace () {
    fetch('/api/game/update')
        .then((response) => {
            response.text()
        .then(function(data){
            var text = JSON.parse(data);
            Pace.innerHTML = text.currentPace.Reference;
        })
        })
}









var setPace = document.getElementById("setPace");

function getPaceScreen() {
    fetch('/api/setup/screen/7').then((response) => {
        response.text().then(function(data) {
            setPace.innerHTML = data;
            document.getElementById("steadybutton").addEventListener("click", () => {
                saveSteady();
                clearScreen();
                updatePace();
            });
            document.getElementById("strenuousbutton").addEventListener("click", () => {
                saveStrenuous();
                clearScreen();
                updatePace();
            });
            document.getElementById("gruelingbutton").addEventListener("click", () => {
                saveGrueling();
                clearScreen();
                updatePace();
            });
            document.getElementById("restingbutton").addEventListener("click", () => {
                saveResting();
                clearScreen();
                updatePace();
            });
        });
    });
};


//No bodies for this because all it needs to do is save that it's fetching /0, /1, /2, /3 to set correct Pace from array
function saveSteady() {
    fetch('/api/changePace/0' , {
        method:'post',
        headers: {
          "Content-type":"application/json; charset=UTF-8"
        },
      }).then(function(response){
        if(response.status !== 200){
          console.log('problem with ajax call!' + response.status + "msg: " + response.value);
          return;
        }
      })
};

function saveStrenuous() {
    fetch('/api/changePace/1' , {
        method:'post',
        headers: {
          "Content-type":"application/json; charset=UTF-8"
        },
      }).then(function(response){
        if(response.status !== 200){
          console.log('problem with ajax call!' + response.status + "msg: " + response.value);
          return;
        }
      })
};

function saveGrueling() {
    fetch('/api/changePace/2' , {
        method:'post',
        headers: {
          "Content-type":"application/json; charset=UTF-8"
        },
      }).then(function(response){
        if(response.status !== 200){
          console.log('problem with ajax call!' + response.status + "msg: " + response.value);
          return;
        }
      })
};

function saveResting() {
    fetch('/api/changePace/3' , {
        method:'post',
        headers: {
          "Content-type":"application/json; charset=UTF-8"
        },
      }).then(function(response){
        if(response.status !== 200){
          console.log('problem with ajax call!' + response.status + "msg: " + response.value);
          return;
        }
      })
};

function clearScreen() {
    fetch('/api/setup/screen/8').then((response) => {
        response.text().then(function(data) {
            setPace.innerHTML = data;
        })
    })
}

window.addEventListener("load", () => {
    document.addEventListener("keypress", () => {
        if(event.keyCode == 32){
            getPaceScreen();
        };
    });
});
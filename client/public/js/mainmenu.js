//Able to press 1 and head to setup
window.addEventListener("keypress", function(event){
    if(event.keyCode == 49) {
      document.location.href = "http://localhost:1337/setup";
    }
  });

  /*Press 2 and learn about the trail
window.addEventListener("keypress", function(event){
    if(event.keyCode == ) {
      document.location.href = "http://localhost:1337/";
    }
  });

  */
 //Press 3 and head to top ten
window.addEventListener("keypress", function(event){
    if(event.keyCode == 51) {
      document.location.href = "http://localhost:1337/topten";
    }
  });

/*Press 4 and Turn off Sound (No Functionality right now)
window.addEventListener("keypress", function(event){
    if(event.keyCode == ) {
      document.location.href = "http://localhost:1337/";
    }
  });
*/
let infoOnTrail = document.getElementById("infoOnTrail");

window.addEventListener("load", () => {
  window.addEventListener("keypress", function(event){
    if(event.keyCode == 50) {
      fetch("/api/setup/screen/6").then((response) => {
        response.text().then(function(data){
          infoOnTrail.innerHTML = data;
        });
      });
    };
  });
});
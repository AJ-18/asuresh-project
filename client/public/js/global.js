
//Adds functionality for pressing spacebar to take the user to mainmenu
window.addEventListener("keypress", function(event){
    if(event.keyCode == 32) {
      document.location.href = "http://localhost:1337/mainmenu";
    }
  });



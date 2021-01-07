// when the document is loaded, trigger the "documentLoaded" function
window.addEventListener('DOMContentLoaded', documentLoaded, false);

var startTime;
var limite;
var temporizador;

function documentLoaded() {
  "use strict";

  //// listen for mouse clicks on the button
  // document.getElementById("btnStart").addEventListener("click", botaoClicked, false);
  document.getElementsByClassName("editable")[0].addEventListener("click", clicked);
  
  console.log("Documento loaded");
}

function clicked(e){
  // here this refers to the block of html that the lister is targeting
  let minInput = this.nextElementSibling.querySelector('.min'); //relies on html order
  let secInput = this.nextElementSibling.querySelector('.sec');
  let inputWrapper = this.nextElementSibling;
  let label = this.querySelector("#clock span");
  
  // clicked on the label want to edit
  if (e.target === label){
    label.classList.add('hidden');
    inputWrapper.classList.remove('hidden');
    
    [minInput.value,secInput.value] = label.innerHTML.split(':');
    minInput.focus();
    // finish editing when enter is pressed
    
    minInput.addEventListener('keydown', function nextField(e2){
      // 13 is the code for ENTER
			if (e2.keyCode === 13) {
        secInput.focus();
				minInput.removeEventListener("keydown", nextField);
      }
    });
    
    secInput.addEventListener('keydown', function finishEntering(e3){
      // 13 is the code for ENTER
			if (e3.keyCode === 13) {
				label.innerHTML = minInput.value +':'+ secInput.value;
				label.classList.remove("hidden");
				inputWrapper.classList.add("hidden");
        
        startClock(label.innerHTML);
				
				// its important to remove the keydown listener, 
        //otherwise in a subsequent edit we will end up with several 
        //keydown listeners running
        //wait why refer to keypressed here? all functions globally scoped??
				secInput.removeEventListener("keydown", finishEntering);
      }
    });
    
  } else if (e.target === inputWrapper){
    // do nothing, clicking around the edit box
  } else { // clicked somewhere random in the div so editing is over
    //Future dev: change value of label anyway?
    label.classList.remove('hidden');
    inputWrapper.classList.add('hidden');
  }
  
}

// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function startClock(userLimit) {
  "use strict";
  startTime = new Date();
  
  let [min,sec] = userLimit.split(':');
  limite = parseInt(min)*60 + parseInt(sec);

  clearInterval(temporizador);
  temporizador = setInterval(updateTime, 1000);
}

function updateTime() {
  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  // convert seconds to minutes and seconds (below 60)
  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);

  // pad with zeroes on the left to look better
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // show the elapsed time
  document.querySelector('#clock span').innerHTML = minutos + ":" + segundos;

  // check if we are above the time limit and set the color of the timer accordingly
  if (minutos*60 + segundos >= limite) {
    document.getElementById("clock").classList.add("red");
    document.getElementById("clock").classList.remove("blue");
  } else {
    document.getElementById("clock").classList.add("blue");
    document.getElementById("clock").classList.remove("red");  
  }

}

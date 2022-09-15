let homePts=document.getElementById('home-pts')
let homeCount=0
let guestPts=document.getElementById('guest-pts')
let guestCount=0
let homeFoul = 0
let homeFoulG = document.getElementById("home-foul")
let guestFoul = 0
let guestFoulG = document.getElementById("guest-foul")
let quarter = 0;

function homeAddPoint() {
    homeCount=homeCount+1
    homePts.innerText=homeCount    
}

function homeAddTwoPoints() {
    homeCount=homeCount+2
    homePts.innerText=homeCount
}

function homeAddThreePoints() {
    homeCount=homeCount+3
    homePts.innerText=homeCount
}


function homeLessPoint() {
    homeCount=homeCount-1
    homePts.innerText=homeCount    
}



function guestAddPoint() {
    guestCount=guestCount+1
    guestPts.innerText=guestCount    
}

function guestAddTwoPoints() {
    guestCount=guestCount+2
    guestPts.innerText=guestCount
}

function guestAddThreePoints() {
    guestCount=guestCount+3
    guestPts.innerText=guestCount
}

function guestLessPoint() {
    guestCount=guestCount-1
    guestPts.innerText=guestCount    
}

function guestAddFoul(){
  console.log('Dentro')
    guestFoul =guestFoul + 1
    if(guestFoul >= 5 ){
      guestFoulG.innerText= "BONUS";
      guestFoulG.style.color = "RED";
    }
    else{
      guestFoulG.innerText=guestFoul
      guestFoulG.style.color = "WHITE";
    }
    
}

function guestLessFoul(){
    guestFoul =guestFoul -1
    if(guestFoul >= 5 ){
      guestFoulG.innerText= "BONUS";
      guestFoulG.style.color = "RED";
    }
    else{
      guestFoulG.innerText=guestFoul
      guestFoulG.style.color = "WHITE";
    }
    
}
function homeAddFoul(){
    homeFoul =homeFoul + 1
    if(homeFoul >= 5 ){
      homeFoulG.innerText= "BONUS";
      homeFoulG.style.color = "RED";
    }
    else{
      homeFoulG.innerText=homeFoul
      homeFoulG.style.color = "WHITE";
    }
}

function homeLessFoul(){
    homeFoul =homeFoul -1
    if(homeFoul>= 5 ){
      homeFoulG.innerText= "BONUS";
      homeFoulG.style.color = "RED";
    }
    else{
      homeFoulG.innerText=homeFoul
      homeFoulG.style.color = "WHITE";
    }
}


class Timer {
    constructor(root) {
        console.log(root)
      root.innerHTML = Timer.getHTML();
  
      this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        seconds: root.querySelector(".timer__part--seconds"),
        control: root.querySelector(".timer__btn--control"),
        reset: root.querySelector(".timer__btn--reset")
      };
  
      this.interval = null;
      this.remainingSeconds = 0;
  
      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });
  
      this.el.reset.addEventListener("click", () => {
        let inputMinutes = prompt("Enter number of minutes:");
  
        if (inputMinutes.includes(':') ) {
            console.log(inputMinutes)

            let secondss = inputMinutes.split(':')[1];
            inputMinutes = inputMinutes.split(':')[0];
          this.stop();
          console.log(secondss)
          console.log(inputMinutes)
          
          this.remainingSeconds = (parseInt(inputMinutes * 60)) + parseInt(secondss);
          console.log(this.remainingSeconds + " rimasti")
          this.updateInterfaceTime();
        }
      });
    }
  
    updateInterfaceTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
  
      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }
  
    updateInterfaceControls() {
      if (this.interval === null) {
        this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
        this.el.control.classList.add("timer__btn--start");
        this.el.control.classList.remove("timer__btn--stop");
      } else {
        this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
        this.el.control.classList.add("timer__btn--stop");
        this.el.control.classList.remove("timer__btn--start");
      }
    }
  
    start() {
      if (this.remainingSeconds === 0)  return;
  
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();
  
        if (this.remainingSeconds === 0) {
            playBuzzer();
            this.stop();
        }
      }, 1000);
  
      this.updateInterfaceControls();
    }
  
    stop() {
      clearInterval(this.interval);
  
      this.interval = null;
  
      this.updateInterfaceControls();
    }
  
    static getHTML() {
      return `
            <div >
           
            <div>
              <span class="timer__part timer__part--minutes">00</span>
              <span class="timer__part">:</span>
              <span class="timer__part timer__part--seconds">00</span></div>
              <div>
               <div style="width: 50%;
               margin: 0 auto;display:flex;">
              <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                  <span class="material-icons">play_arrow</span>
              </button>
              <button type="button" class="timer__btn timer__btn--reset">
                  <span class="material-icons">timer</span>
              </button></div></div>
              </div>
          `;
    }
  }
  
  new Timer(
      document.querySelector(".timer")
  );

  function playBuzzer() {
    var audio = new Audio('buzzer.mp3');
    audio.play();
  }
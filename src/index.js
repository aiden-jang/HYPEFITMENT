import { input } from "./scripts/input";
import { control } from "./scripts/control";
import View from "./scripts/view";
import Wheel from "./scripts/wheel"
import Background from "./scripts/background"


window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 1000;
    canvas.height = 600;

    var oldWheel = new Wheel(185,45,15,7.5,38, "old");
    var newWheel = new Wheel(245,40,18,9,15, "new");
    
    var background = new Background(ctx);
    
    ctx.strokeStyle = "#ffbf5c";
    var oldWheelView = new View(ctx, oldWheel);
    ctx.strokeStyle = "#7e61ff";
    var newWheelView = new View(ctx, newWheel);
    
    input(ctx, canvas, oldWheel, oldWheelView, newWheelView, background);
    input(ctx, canvas, newWheel, oldWheelView, newWheelView, background);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    window.addEventListener("keydown", e => {
        if(["Tab", "Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);

    var index = 0;

    document.addEventListener("keydown", e => {
    if (e.code === "Space") {
        if (index <= 4) {
            index = 5;
        } else {
            index = 0;
        }
    }    
    if (e.code === "ArrowUp") {
        if (index === 0) {
            index = 4;
        } else if (index === 5) {
            index = 9
        } else {
            index--;
        }
    } else if (e.code === "ArrowDown") {
        if (index === 4) {
            index = 0;
        } else if (index === 9) {
            index = 5;
        } else {
            index++;
        }
    }
    if (e.code === "ArrowRight") {
        if (index === 0) {
            oldWheel.incTireWidth();
        } else if (index === 1) {
            oldWheel.incTireProfile();
        } else if (index === 2) {
            oldWheel.incTireDiameter();
        } else if (index === 3) {
            oldWheel.incRimWidth();
        } else if (index === 4) {
            oldWheel.incRimOffset();
        }  else if (index === 5) {
            newWheel.incTireWidth();
        }  else if (index === 6) {
            newWheel.incTireProfile();
        }  else if (index === 7) {
            newWheel.incTireDiameter();
        }  else if (index === 8) {
            newWheel.incRimWidth();
        }  else if (index === 9) {
            newWheel.incRimOffset();
        }
    } else if (e.code === "ArrowLeft") {
        if (index === 0) {
            oldWheel.decTireWidth();
        } else if (index === 1) {
            oldWheel.decTireProfile();
        } else if (index === 2) {
            oldWheel.decTireDiameter();
        } else if (index === 3) {
            oldWheel.decRimWidth();
        } else if (index === 4) {
            oldWheel.decRimOffset();
        }  else if (index === 5) {
            newWheel.decTireWidth();
        }  else if (index === 6) {
            newWheel.decTireProfile();
        }  else if (index === 7) {
            newWheel.decTireDiameter();
        }  else if (index === 8) {
            newWheel.decRimWidth();
        }  else if (index === 9) {
            newWheel.decRimOffset();
        } 
    }
        currentByIndex(index);

        input(ctx, canvas, oldWheel, oldWheelView, newWheelView, background);
        input(ctx, canvas, newWheel, oldWheelView, newWheelView, background);
        
        update();
     });

    const update = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.drawBackground();
        oldWheelView.drawWheel();
        newWheelView.drawWheel();
        update_performance();
    };

    const currentByIndex = (idx) => {
        var target = ""
        switch(idx) {
            case 0:
                target = "old-tire-width";
                break;
            case 1:
                target = "old-tire-profile";
                break;
            case 2:
                target = "old-tire-diameter";
                break;
            case 3:
                target = "old-rim-width";
                break;
            case 4:
                target = "old-rim-offset";
                break;
            case 5:
                target = "new-tire-width";
                break;
            case 6:
                target = "new-tire-profile";
                break;
            case 7:
                target = "new-tire-diameter";
                break;
            case 8:
                target = "new-rim-width";
                break;
            case 9:
                target = "new-rim-offset";
                break;
            default:
                // Do nothing
                break;
        }

        document.getElementById(target).style.opacity = "1";
        setTimeout(function(){
            document.getElementById(target).style.opacity = "0.5";
       }, 500);
    }







const update_performance = () => {
    var performances = document.getElementsByClassName("performances-container");
    for (let i = 0; i < performances.length; i++) {
        performances[i].style.display = "block";
    }

    if (oldWheel.tireWidth < newWheel.tireWidth) {
        document.getElementById("dry-traction").style.background = "#5c87ff";
        document.getElementById("wet-traction").style.background = "#ff8d5c";
    } else if (oldWheel.tireWidth > newWheel.tireWidth) {
        document.getElementById("dry-traction").style.background = "#ff8d5c";
        document.getElementById("wet-traction").style.background = "#5c87ff";
    }
    if (oldWheel.tireProfile < newWheel.tireProfile) {
        document.getElementById("ride-comfort").style.background = "#5c87ff";
        document.getElementById("ride-noise").style.background = "#5c87ff";
    } else if (oldWheel.tireProfile > newWheel.tireProfile) {
        document.getElementById("ride-comfort").style.background = "#ff8d5c";
        document.getElementById("ride-noise").style.background = "#ff8d5c";
    }
    if ((oldWheel.rimWidth*25.4)/2-oldWheel.rimOffset < (newWheel.rimWidth*25.4)/2-newWheel.rimOffset) {
        document.getElementById("stability").style.background = "#5c87ff";
    } else if ((oldWheel.rimWidth*25.4)/2-oldWheel.rimOffset > (newWheel.rimWidth*25.4)/2-newWheel.rimOffset){
        document.getElementById("stability").style.background = "#ff8d5c";
    }

  

    if (oldWheel.tireDiameter < newWheel.tireDiameter && oldWheel.tireProfile > newWheel.tireProfile) {
        document.getElementById("handling").style.background = "#5c87ff";
        document.getElementById("cost").style.background = "#ff8d5c";

    } else if (oldWheel.tireDiameter > newWheel.tireDiameter && oldWheel.tireProfile < newWheel.tireProfile) {
        document.getElementById("handling").style.background = "#ff8d5c";
        document.getElementById("cost").style.background = "#5c87ff";

    }

    if (oldWheel.tireWidth > newWheel.tireWidth) {
        document.getElementById("fuel-efficiency").style.background = "#5c87ff";
    }
    else if (oldWheel.tireWidth < newWheel.tireWidth) {
        document.getElementById("fuel-efficiency").style.background = "#ff8d5c";
    }


    if ((oldWheel.rimWidth*25.4)/2-oldWheel.rimOffset < (newWheel.rimWidth*25.4)/2-newWheel.rimOffset && oldWheel.tireDiameter < newWheel.tireDiameter) {
        document.getElementById("looks").style.background = "#5c87ff";
    } else {
        document.getElementById("looks").style.background = "#ff8d5c";
    }
}

var inst = document.getElementById("inst-container");
var btn = document.getElementById("about");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    inst.style.display = "block";
    // document.getElementById("main-blur").style.filter="blur(4px)";
  }
  span.onclick = function() {
    inst.style.display = "none";
    // document.getElementById("main-blur").style.filter="blur(0)";

  }
  window.onclick = function(event) {
    if (event.target == inst) {
      inst.style.display = "none";
    //   document.getElementById("main-blur").style.filter="blur(0)";

    }
  }
});
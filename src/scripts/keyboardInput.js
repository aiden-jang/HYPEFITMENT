export function keyboardInput (e, index, oldWheel, newWheel) {
    console.log(`${e.code}`)

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

        var target = ""
        switch(index) {
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
        }

    document.getElementById(target).style.opacity = "1";
    setTimeout(() => {document.getElementById(target).style.opacity = "0.5";}, 500);

    return index;
}
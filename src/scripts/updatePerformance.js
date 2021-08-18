export function updatePerformance (oldWheel, newWheel) {
    var performances = document.getElementsByClassName("performance-container");
    performances.forEach(performance => {performance.style.display = "block";});
    
    let positive = "#439ecc";
    let negative = "#d18666";

    if (oldWheel.tireWidth < newWheel.tireWidth) {
        document.getElementById("dry-traction").style.background = positive;
        document.getElementById("wet-traction").style.background = negative;
    } else {
        document.getElementById("dry-traction").style.background = negative;
        document.getElementById("wet-traction").style.background = positive;
    }

    if (oldWheel.tireProfile < newWheel.tireProfile) {
        document.getElementById("ride-comfort").style.background = positive;
        document.getElementById("ride-noise").style.background = positive;
    } else {
        document.getElementById("ride-comfort").style.background = negative;
        document.getElementById("ride-noise").style.background = negative;
    }

    if ((oldWheel.rimWidth * 25.4) / 2 - oldWheel.rimOffset < (newWheel.rimWidth * 25.4) / 2 - newWheel.rimOffset) {
        document.getElementById("stability").style.background = positive;
    } else {
        document.getElementById("stability").style.background = negative;
    }
    
    if (oldWheel.tireDiameter < newWheel.tireDiameter && oldWheel.tireProfile > newWheel.tireProfile) {
        document.getElementById("handling").style.background = positive;
        document.getElementById("cost").style.background = negative;
    } else {
        document.getElementById("handling").style.background = negative;
        document.getElementById("cost").style.background = positive;
    }
    
    if (oldWheel.tireWidth > newWheel.tireWidth) {
        document.getElementById("fuel-efficiency").style.background = positive;
    }
    else {
        document.getElementById("fuel-efficiency").style.background = negative;
    }
    
    if ((oldWheel.rimWidth * 25.4) / 2 - oldWheel.rimOffset < (newWheel.rimWidth * 25.4) / 2 - newWheel.rimOffset && oldWheel.tireDiameter < newWheel.tireDiameter) {
        document.getElementById("looks").style.background = positive;
    } else {
        document.getElementById("looks").style.background = negative;
    }
}
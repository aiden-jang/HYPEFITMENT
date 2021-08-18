export function updatePerformance (oldWheel, newWheel) {
        var performances = document.getElementsByClassName("performance-container");
        for (let i = 0; i < performances.length; i++) {
            performances[i].style.display = "block";
        }
    
        if (oldWheel.tireWidth < newWheel.tireWidth) {
            document.getElementById("dry-traction").style.background = "#439ecc";
            document.getElementById("wet-traction").style.background = "#d18666";
        } else if (oldWheel.tireWidth > newWheel.tireWidth) {
            document.getElementById("dry-traction").style.background = "#d18666";
            document.getElementById("wet-traction").style.background = "#439ecc";
        }
        if (oldWheel.tireProfile < newWheel.tireProfile) {
            document.getElementById("ride-comfort").style.background = "#439ecc";
            document.getElementById("ride-noise").style.background = "#439ecc";
        } else if (oldWheel.tireProfile > newWheel.tireProfile) {
            document.getElementById("ride-comfort").style.background = "#d18666";
            document.getElementById("ride-noise").style.background = "#d18666";
        }
        if ((oldWheel.rimWidth*25.4)/2-oldWheel.rimOffset < (newWheel.rimWidth*25.4)/2-newWheel.rimOffset) {
            document.getElementById("stability").style.background = "#439ecc";
        } else if ((oldWheel.rimWidth*25.4)/2-oldWheel.rimOffset > (newWheel.rimWidth*25.4)/2-newWheel.rimOffset){
            document.getElementById("stability").style.background = "#d18666";
        }
    
      
    
        if (oldWheel.tireDiameter < newWheel.tireDiameter && oldWheel.tireProfile > newWheel.tireProfile) {
            document.getElementById("handling").style.background = "#439ecc";
            document.getElementById("cost").style.background = "#d18666";
    
        } else if (oldWheel.tireDiameter > newWheel.tireDiameter && oldWheel.tireProfile < newWheel.tireProfile) {
            document.getElementById("handling").style.background = "#d18666";
            document.getElementById("cost").style.background = "#439ecc";
    
        }
    
        if (oldWheel.tireWidth > newWheel.tireWidth) {
            document.getElementById("fuel-efficiency").style.background = "#439ecc";
        }
        else if (oldWheel.tireWidth < newWheel.tireWidth) {
            document.getElementById("fuel-efficiency").style.background = "#d18666";
        }
    
    
        if ((oldWheel.rimWidth*25.4)/2-oldWheel.rimOffset < (newWheel.rimWidth*25.4)/2-newWheel.rimOffset && oldWheel.tireDiameter < newWheel.tireDiameter) {
            document.getElementById("looks").style.background = "#439ecc";
        } else {
            document.getElementById("looks").style.background = "#d18666";
        }
}
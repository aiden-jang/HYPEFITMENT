import { input } from "./scripts/input";
import View from "./scripts/view";
import Wheel from "./scripts/wheel"

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/1.3;

    var oldWheel = new Wheel(225,50,17,7.5,45);
    var newWheel = new Wheel(295,40,19,10.5,15);
    

    // window.addEventListener("resize", () => {
    //     canvas.width = window.innerWidth/1.5;
    //     canvas.height = window.innerHeight/1.3;
    // });

    const background = new Image();
    background.src = "assets/suspension.png";
    background.onload = function() {
       ctx.drawImage(background, 370, -200, 700, 700);
    }
    

    ctx.strokeStyle = "red";
    
    var oldWheelView = new View(ctx, canvas, oldWheel);
    ctx.strokeStyle = "blue";
    var newWheelView = new View(ctx, canvas, newWheel);

    input(ctx, canvas, oldWheel, oldWheelView, newWheelView);
    // input(ctx, canvas, newWheel, oldWheelView, newWheelView);
    
    var oldWheelValue = document.getElementById("old-wheel-value");
    var oldWheelSpec = ` ${oldWheel.tireWidth}/${oldWheel.tireProfile}R${oldWheel.tireDiameter}
     x  ${oldWheel.rimWidth} ET${oldWheel.rimOffset}`
    oldWheelValue.innerHTML = oldWheelSpec;

    var newWheelValue = document.getElementById("new-wheel-value");
    var newWheelSpec = ` ${newWheel.tireWidth}/${newWheel.tireProfile}R${newWheel.tireDiameter}
     x  ${newWheel.rimWidth} ET${newWheel.rimOffset}`
    newWheelValue.innerHTML = newWheelSpec;
    
    // var currentWheel = oldWheel;

    // document.getElementById("test").addEventListener("click", function() {
    //        if (currentWheel === newWheel) {
    //             currentWheel = oldWheel;
    //         } else {
    //             currentWheel = newWheel;
    //         }
    //     input(ctx, canvas, currentWheel, newWheel, oldWheelView, newWheelView);
    //     console.log(currentWheel);
    //     console.log(oldWheel);
    //     console.log(newWheel);
    // });

    // document.addEventListener("keydown", key => {
    //     console.log(key.code);
    //     if (key.code === "Space") {
    //         if (currentWheel === newWheel) {
    //             currentWheel = oldWheel;
    //         } else {
    //             currentWheel = newWheel;
    //         }
    //     }
    //     if (key.code === "ArrowUp") {
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         console.log(currentWheel);
    //         currentWheel.decTireWidth();
    //         console.log(currentWheel);
    //         newWheelView.draw();
    //         oldWheelView.draw();
    //     }
    // });


    
    // document.getElementById("tire-width").value = "10";
});






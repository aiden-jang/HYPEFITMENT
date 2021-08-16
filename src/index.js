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
    // var currentWheel = newWheel;

    // window.addEventListener("resize", () => {
    //     canvas.width = window.innerWidth/1.5;
    //     canvas.height = window.innerHeight/1.3;
    // });

    // const background = new Image();
    // background.src = "assets/suspension.jpg";
    // background.onload = function() {
    //     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // }

    ctx.strokeStyle = "red";
    var oldWheelView = new View(ctx, canvas, oldWheel);
    ctx.strokeStyle = "blue";
    var newWheelView = new View(ctx, canvas, newWheel);

    input(ctx, canvas, oldWheel, newWheel, oldWheelView, newWheelView);

    document.getElementById("test").addEventListener("click", function() {

        console.log(oldWheel);

    });

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






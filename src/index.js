import { input } from "./scripts/input";
import View from "./scripts/view";
import Wheel from "./scripts/wheel"

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth/1.1;
    canvas.height = window.innerHeight/1.1;

    var oldWheel = new Wheel(225,50,17,7.5,45, "old");
    var newWheel = new Wheel(295,40,19,10.5,15, "new");
    
    // window.addEventListener("resize", () => {
    //     canvas.width = window.innerWidth/1.5;
    //     canvas.height = window.innerHeight/1.3;
    // });

   
    ctx.strokeStyle = "red";
    var oldWheelView = new View(ctx, canvas, oldWheel);
    ctx.strokeStyle = "blue";
    var newWheelView = new View(ctx, canvas, newWheel);

    input(ctx, canvas, oldWheel, oldWheelView, newWheelView);
    input(ctx, canvas, newWheel, oldWheelView, newWheelView);

    // const displayCar = () => {
    //     var x = document.getElementById("car");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
    //   }
    //   displayCar();

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
});






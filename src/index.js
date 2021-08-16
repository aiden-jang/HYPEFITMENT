import Input from "./scripts/input";
import View from "./scripts/view";
import Wheel from "./scripts/wheel"

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/1.3;
    
    var oldWheel = new Wheel(245,40,18,9.5,8);
    var newWheel = new Wheel(295,40,19,10.5,15);
    var currentWheel = newWheel;

    // window.addEventListener("resize", () => {
    //     canvas.width = window.innerWidth/1.5;
    //     canvas.height = window.innerHeight/1.3;
    // });

    ctx.strokeStyle = "red";
    var oldWheelView = new View(ctx, canvas, oldWheel);
    ctx.strokeStyle = "blue";
    var newWheelView = new View(ctx, canvas, newWheel);

    // document.getElementById("test").addEventListener("click", function() {

    //     console.log(newWheel);
    //     newWheel.decTireWidth();
    //     console.log(newWheel);
    //     newWheelView.draw();
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
    var slider = document.getElementById("tire-width");
    console.log(slider.value);
    
    slider.oninput = () => {
        console.log(slider.value);
    }
});






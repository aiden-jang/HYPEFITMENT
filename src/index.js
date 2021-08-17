import { input } from "./scripts/input";
import View from "./scripts/view";
import Wheel from "./scripts/wheel"
import Background from "./scripts/background"

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 750;
    canvas.height = 500;

    var oldWheel = new Wheel(185,45,15,7.5,38, "old");
    var newWheel = new Wheel(245,40,18,9,15, "new");
    

    var background = new Background(ctx);
    
    ctx.strokeStyle = "red";
    var oldWheelView = new View(ctx, oldWheel);
    ctx.strokeStyle = "blue";
    var newWheelView = new View(ctx, newWheel);
    input(ctx, canvas, oldWheel, oldWheelView, newWheelView, background);
    input(ctx, canvas, newWheel, oldWheelView, newWheelView, background);

    window.addEventListener("keydown", e => {
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);

    document.addEventListener("keydown", key => {
        if (key.code === "ArrowUp") {
            oldWheel.incTireWidth();
        } else if (key.code === "ArrowDown") {
            oldWheel.decTireWidth();
        }
        console.log(oldWheel.tireWidth)
        input(ctx, canvas, oldWheel, oldWheelView, newWheelView, background);
        input(ctx, canvas, newWheel, oldWheelView, newWheelView, background);
     });

});






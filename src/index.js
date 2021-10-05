import performance from "./scripts/performance";
import mouseInput from "./scripts/mouseInput";
import keyboardInput from "./scripts/keyboardInput";
import View from "./scripts/view";
import Wheel from "./scripts/wheel";
import Background from "./scripts/background";
import modal from "./scripts/modal";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 600;

    const ctx = canvas.getContext("2d");

    let oldWheel = new Wheel(185,45,15,7.5,38, "old");
    let newWheel = new Wheel(245,40,18,9,15, "new");
    
    let background = new Background(ctx);
    
    ctx.strokeStyle = "#ffbf5c";
    let oldWheelView = new View(ctx, oldWheel);
    ctx.strokeStyle = "#7e61ff";
    let newWheelView = new View(ctx, newWheel);
    
    mouseInput(ctx, canvas, oldWheel, oldWheelView, newWheelView, background);
    mouseInput(ctx, canvas, newWheel, oldWheelView, newWheelView, background);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let index = 0;
    document.addEventListener("keydown", e => {
        if(["Tab", "Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
        
        index = keyboardInput(e, index, oldWheel, newWheel);
        
        mouseInput(ctx, canvas, oldWheel, oldWheelView, newWheelView, background);
        mouseInput(ctx, canvas, newWheel, oldWheelView, newWheelView, background);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.drawBackground();
        oldWheelView.drawWheel();
        newWheelView.drawWheel();
        performance(oldWheel, newWheel);
    });

    modal();
});
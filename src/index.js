import { input } from "./scripts/input";
import { updatePerformance } from "./scripts/updatePerformance";
import { keyboardInput } from "./scripts/keyboardInput";
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

    var index = 0;
    document.addEventListener("keydown", e => {
        if(["Tab", "Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
        
        index = keyboardInput(e, index, oldWheel, newWheel);
        
        input(ctx, canvas, oldWheel, oldWheelView, newWheelView, background);
        input(ctx, canvas, newWheel, oldWheelView, newWheelView, background);
        
        update();
    });
    
    const update = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.drawBackground();
        oldWheelView.drawWheel();
        newWheelView.drawWheel();
        updatePerformance(oldWheel, newWheel);
    };

    var instruction = document.getElementsByClassName("instruction-container")[0];
    var button = document.getElementById("instruction");
    var span = document.getElementsByClassName("close")[0];
    
    button.onclick = () => {instruction.style.display = "block";};
    span.onclick = () => {instruction.style.display = "none";};
    window.onclick = (e) => { if (e.target === instruction) instruction.style.display = "none";};
});
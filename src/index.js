import Input from "./scripts/input";
import View from "./scripts/view";
import Wheel from "./scripts/wheel"


// document.addEventListener('keydown', key => {
//     console.log(key);
// });



window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // new View()

    canvas.width = window.innerWidth/1.5;
    canvas.height = window.innerHeight/1.3;
    ctx.strokeStyle = "red";

    
    var oldSetup = new Wheel(275,40,18,9.5,8);
    var newSetup = new Wheel(295,40,19,10,8);
    // console.log(oldWheel);
    const view = new View(ctx, oldSetup, newSetup);
    // wheel.decRimOffset();
    // console.log(wheel);
});
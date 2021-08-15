import Input from "./scripts/input";
import View from "./scripts/view";
import Wheel from "./scripts/wheel"


// document.addEventListener('keydown', key => {
//     console.log(key);
// });



window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth/1.2;
    canvas.height = window.innerHeight/1.3;
    
    var oldWheel = new Wheel(275,40,18,9.5,8);
    var newWheel = new Wheel(295,40,19,10.5,15);

    // window.addEventListener("resize", () => {
    //     canvas.width = window.innerWidth/1.5;
    //     canvas.height = window.innerHeight/1.3;
    // });
    

    // console.log(oldWheel);
    ctx.strokeStyle = "red";
    var oldWheelView = new View(ctx, canvas, oldWheel);
    ctx.strokeStyle = "blue";
    var newWheelView = new View(ctx, canvas, newWheel);
    // wheel.decRimOffset();
    // console.log(wheel);
});
import Input from "./scripts/input";
import View from "./scripts/view";
import Wheel from "./scripts/wheel"


// document.addEventListener('keydown', key => {
//     console.log(key);
// });



window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    // new View()
    ctx.strokeStyle = "red";
    ctx.strokeRect(10,10,200,500);

    var wheel = new Wheel(275,40,18,9.5,8);
    // console.log(wheel);
    // wheel.decRimOffset();
    // console.log(wheel);
});
export function input (ctx, canvas, oldWheel, newWheel, oldWheelView, newWheelView) {

    document.getElementById("tire-width").value = oldWheel.tireWidth;

    var tireWidth = document.getElementById("tire-width");
    var tireWidthValue = document.getElementById("tire-width-value");

    var tireProfile = document.getElementById("tire-profile");
    var tireProfileValue = document.getElementById("tire-profile-value");

    var tireDiameter = document.getElementById("tire-diameter");
    var tireDiameterValue = document.getElementById("tire-diameter-value");

    var rimWidth = document.getElementById("rim-width");
    var rimWidthValue = document.getElementById("rim-width-value");

    var rimOffset = document.getElementById("rim-offset");
    var rimOffsetValue = document.getElementById("rim-offset-value");

    tireWidthValue.innerHTML = tireWidth.value;
    tireProfileValue.innerHTML = tireProfile.value;
    tireDiameterValue.innerHTML = tireDiameter.value;
    rimWidthValue.innerHTML = rimWidth.value;
    rimOffsetValue.innerHTML = rimOffset.value;


    tireWidth.oninput = () => {
        tireWidthValue.innerHTML = tireWidth.value;
        oldWheel.tireWidth = tireWidth.value;
        view();
    }

    tireProfile.oninput = () => {
        tireProfileValue.innerHTML = tireProfile.value;
        oldWheel.tireProfile = tireProfile.value;
        view();
    }

    tireDiameter.oninput = () => {
        tireDiameterValue.innerHTML = tireDiameter.value;
        oldWheel.tireDiameter = tireDiameter.value;
        view();
    }

    rimWidth.oninput = () => {
        rimWidthValue.innerHTML = rimWidth.value;
        oldWheel.rimWidth = rimWidth.value;
        view();
    }


    rimOffset.oninput = () => {
        rimOffsetValue.innerHTML = rimOffset.value;
        oldWheel.rimOffset = rimOffset.value;
        view();
    }

    function view () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        newWheelView.draw();
        oldWheelView.draw();
    }
}
export function input (ctx, canvas, oldWheel, oldWheelView, newWheelView) {




    document.getElementById("tire-width").value = oldWheel.tireWidth;
    document.getElementById("tire-profile").value = oldWheel.tireProfile;
    document.getElementById("tire-diameter").value = oldWheel.tireDiameter;
    document.getElementById("rim-width").value = oldWheel.rimWidth;
    document.getElementById("rim-offset").value = oldWheel.rimOffset;

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
        output();
    }

    tireProfile.oninput = () => {
        tireProfileValue.innerHTML = tireProfile.value;
        oldWheel.tireProfile = tireProfile.value;
        view();
        output();
    }

    tireDiameter.oninput = () => {
        tireDiameterValue.innerHTML = tireDiameter.value;
        oldWheel.tireDiameter = tireDiameter.value;
        view();
        output();
    }

    rimWidth.oninput = () => {
        rimWidthValue.innerHTML = rimWidth.value;
        oldWheel.rimWidth = rimWidth.value;
        view();
        output();
    }


    rimOffset.oninput = () => {
        rimOffsetValue.innerHTML = rimOffset.value;
        oldWheel.rimOffset = rimOffset.value;
        view();
        output();
    }

    function view () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        newWheelView.draw();
        oldWheelView.draw();
    }

    function output () {
        var oldWheelValue = document.getElementById("old-wheel-value");
        var oldWheelSpec = ` ${oldWheel.tireWidth}/${oldWheel.tireProfile}R${oldWheel.tireDiameter}
        x  ${oldWheel.rimWidth} ET${oldWheel.rimOffset}`
        oldWheelValue.innerHTML = oldWheelSpec;
    }
}
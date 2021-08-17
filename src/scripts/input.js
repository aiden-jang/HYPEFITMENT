export function input (ctx, canvas, wheel, oldWheelView, newWheelView, background) {

    var wheelValue = document.getElementById(`${wheel.status}` + "-wheel-value");
    var wheelSpec = ` ${wheel.tireWidth}/${wheel.tireProfile}R${wheel.tireDiameter} x  ${wheel.rimWidth} ET${wheel.rimOffset}`
    wheelValue.innerHTML = wheelSpec;

    document.getElementById(`${wheel.status}` + "-tire-width").value = wheel.tireWidth;
    document.getElementById(`${wheel.status}` + "-tire-profile").value = wheel.tireProfile;
    document.getElementById(`${wheel.status}` + "-tire-diameter").value = wheel.tireDiameter;
    document.getElementById(`${wheel.status}` + "-rim-width").value = wheel.rimWidth;
    document.getElementById(`${wheel.status}` + "-rim-offset").value = wheel.rimOffset;

    var tireWidth = document.getElementById(`${wheel.status}` + "-tire-width");
    var tireWidthValue = document.getElementById(`${wheel.status}` + "-tire-width-value");

    var tireProfile = document.getElementById(`${wheel.status}` + "-tire-profile");
    var tireProfileValue = document.getElementById(`${wheel.status}` + "-tire-profile-value");

    var tireDiameter = document.getElementById(`${wheel.status}` + "-tire-diameter");
    var tireDiameterValue = document.getElementById(`${wheel.status}` + "-tire-diameter-value");

    var rimWidth = document.getElementById(`${wheel.status}` + "-rim-width");
    var rimWidthValue = document.getElementById(`${wheel.status}` + "-rim-width-value");

    var rimOffset = document.getElementById(`${wheel.status}` + "-rim-offset");
    var rimOffsetValue = document.getElementById(`${wheel.status}` + "-rim-offset-value");

    tireWidthValue.innerHTML = tireWidth.value;
    tireProfileValue.innerHTML = tireProfile.value;
    tireDiameterValue.innerHTML = tireDiameter.value;
    rimWidthValue.innerHTML = rimWidth.value;
    rimOffsetValue.innerHTML = rimOffset.value;


    tireWidth.oninput = () => {
        tireWidthValue.innerHTML = tireWidth.value;
        wheel.tireWidth = tireWidth.value;
        update();
    }

    tireProfile.oninput = () => {
        tireProfileValue.innerHTML = tireProfile.value;
        wheel.tireProfile = tireProfile.value;
        update();
    }

    tireDiameter.oninput = () => {
        tireDiameterValue.innerHTML = tireDiameter.value;
        wheel.tireDiameter = tireDiameter.value;
        update();
    }

    rimWidth.oninput = () => {
        rimWidthValue.innerHTML = rimWidth.value;
        wheel.rimWidth = rimWidth.value;
        update();
    }


    rimOffset.oninput = () => {
        rimOffsetValue.innerHTML = rimOffset.value;
        wheel.rimOffset = rimOffset.value;
        update();
    }

    const update = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        background.drawBackground();
        oldWheelView.drawWheel();
        newWheelView.drawWheel();

        const wheelValue = document.getElementById(`${wheel.status}` + "-wheel-value");
        const wheelSpec = ` ${wheel.tireWidth}/${wheel.tireProfile}R${wheel.tireDiameter}
        x  ${wheel.rimWidth} ET${wheel.rimOffset}`
        wheelValue.innerHTML = wheelSpec;
    }
}
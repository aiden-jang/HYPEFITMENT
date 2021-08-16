export function input () {
    var tireWidth = document.getElementById("tire-width");
    var tireWidthValue = document.getElementById("tire-width-value");
    tireWidthValue.innerHTML = tireWidth.value;
    tireWidth.oninput = () => {
        tireWidthValue.innerHTML = tireWidth.value;
    }

    var tireProfile = document.getElementById("tire-profile");
    var tireProfileValue = document.getElementById("tire-profile-value");
    tireProfileValue.innerHTML = tireProfile.value;
    tireProfile.oninput = () => {
        tireProfileValue.innerHTML = tireProfile.value;
    }

    var tireDiameter = document.getElementById("tire-diameter");
    var tireDiameterValue = document.getElementById("tire-diameter-value");
    tireDiameterValue.innerHTML = tireDiameter.value;
    tireDiameter.oninput = () => {
        tireDiameterValue.innerHTML = tireDiameter.value;
    }

    var wheelWidth = document.getElementById("wheel-width");
    var wheelWidthValue = document.getElementById("wheel-width-value");
    wheelWidthValue.innerHTML = wheelWidth.value;
    wheelWidth.oninput = () => {
        wheelWidthValue.innerHTML = wheelWidth.value;
    }

    var wheelOffset = document.getElementById("wheel-offset");
    var wheelOffsetValue = document.getElementById("wheel-offset-value");
    wheelOffsetValue.innerHTML = wheelOffset.value;
    wheelOffset.oninput = () => {
        wheelOffsetValue.innerHTML = wheelOffset.value;
    }
}
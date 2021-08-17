export default class Wheel {
    constructor(tireWidth, tireProfile, tireDiameter, rimWidth, rimOffset, status) {
            this.tireWidth = tireWidth;
            this.tireProfile = tireProfile;
            this.tireDiameter = tireDiameter;
            this.rimWidth = rimWidth;
            this.rimOffset = rimOffset;
            this.status = status;
        }
    
    incTireWidth () {
        this.tireWidth += 5;
    }

    decTireWidth () {
        this.tireWidth -= 5;
    }

    incTireProfile () {
        this.tireProfile += 5;
    }

    decTireProfile () {
        this.tireProfile -= 5;
    }

    incTireDiameter () {
        this.tireDiameter += 1;
    }

    decTireDiameter () {
        this.tireDiameter -= 1;
    }

    incRimWidth () {
        this.rimWidth += 0.5;
    }

    decRimWidth () {
        this.rimWidth -= 0.5;
    }
    
    incRimOffset () {
        this.rimOffset += 1;
    }

    decRimOffset () {
        this.rimOffset -= 1;
    }
}
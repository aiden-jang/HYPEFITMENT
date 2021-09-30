class Wheel {
    constructor(tireWidth, tireProfile, tireDiameter, rimWidth, rimOffset, status) {
            this.tireWidth = tireWidth;
            this.tireProfile = tireProfile;
            this.tireDiameter = tireDiameter;
            this.rimWidth = rimWidth;
            this.rimOffset = rimOffset;
            this.status = status;
        }
    
    incTireWidth () {if (this.tireWidth < 375) this.tireWidth += 5;}
    decTireWidth () {if (this.tireWidth > 135) this.tireWidth -= 5;}

    incTireProfile () {if (this.tireProfile < 90) this.tireProfile += 5;}
    decTireProfile () {if (this.tireProfile > 20) this.tireProfile -= 5;}

    incTireDiameter () {if (this.tireDiameter < 30) this.tireDiameter += 1;}
    decTireDiameter () {if (this.tireDiameter > 12) this.tireDiameter -= 1;}

    incRimWidth () {if (this.rimWidth < 12.5) this.rimWidth += 0.5;}
    decRimWidth () {if (this.rimWidth > 4) this.rimWidth -= 0.5;}
    
    incRimOffset () {if (this.rimOffset < 80) this.rimOffset += 1;}
    decRimOffset () {if (this.rimOffset > -65) this.rimOffset -= 1;}
}

export default Wheel;
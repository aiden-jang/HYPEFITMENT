export default class View {
    constructor(ctx, canvas, wheel) {
        this.ctx = ctx;
        this.wheel = wheel;
        this.canvas = canvas;
        
        this.calculateRim();
        this.calculateTire();
        this.drawRim();
        this.drawTire();

    }

    drawSuspension() {

    }

    calculateRim() {
        this.centerX = this.canvas.width / 2 + this.wheel.rimOffset;
        this.centerY = this.canvas.height / 2;
        this.lengthX = this.wheel.rimWidth * 8 ;
        this.lengthY = this.wheel.tireDiameter * 6
        
        this.leftX = this.centerX - this.lengthX;
        this.rightX = this.centerX + this.lengthX;
        this.topY = this.centerY - this.lengthY;
        this.bottomY = this.centerY + this.lengthY;
    }

    drawRim(){
        this.ctx.beginPath(); 
        // right
        this.ctx.moveTo(this.rightX, this.topY);
        this.ctx.lineTo(this.rightX, this.bottomY);
        // bottom
        this.ctx.moveTo(this.rightX, this.bottomY);
        this.ctx.lineTo(this.leftX, this.bottomY);
        // left
        this.ctx.moveTo(this.leftX, this.bottomY);
        this.ctx.lineTo(this.leftX, this.topY);
        // top
        this.ctx.moveTo(this.leftX, this.topY);
        this.ctx.lineTo(this.rightX, this.topY);

        this.ctx.stroke();    
    }

    calculateTire() {
        this.rimWidthMM = this.wheel.rimWidth * 25.4;

        if (this.wheel.tireWidth - this.rimWidthMM > 10) {
            this.leftXTire = this.leftX + (this.rimWidthMM - this.wheel.tireWidth) /3
            this.rightXTire = this.rightX  - (this.rimWidthMM - this.wheel.tireWidth) /3
        } else {
            this.leftXTire = this.leftX - (this.rimWidthMM - this.wheel.tireWidth) /3
            this.rightXTire = this.rightX  + (this.rimWidthMM - this.wheel.tireWidth) /3
        }

        this.topYTire = this.topY - this.wheel.tireProfile;
        this.bottomYTire = this.bottomY + this.wheel.tireProfile;
    }

    drawTire() {
        // top tire
        this.ctx.beginPath();
        //left top of a rim
        this.ctx.moveTo(this.leftX, this.topY);
        //left top of a tire
        this.ctx.lineTo(this.leftXTire, this.topYTire);

        //left top to right top
        this.ctx.bezierCurveTo(this.leftX, this.topY - this.wheel.tireProfile * 1.5,
            this.rightX, this.topY - this.wheel.tireProfile * 1.5,
            this.rightXTire, this.topYTire);
        this.ctx.stroke();
        this.ctx.beginPath();
        // right top of a tire
        this.ctx.moveTo(this.rightXTire, this.topYTire);
        // right top of a rim
        this.ctx.lineTo(this.rightX, this.topY);
        this.ctx.stroke();

        // bottom tire
        this.ctx.beginPath();
        //left bottom of a rim
        this.ctx.moveTo(this.leftX, this.bottomY);
        //left bottom of a tire
        this.ctx.lineTo(this.leftXTire, this.bottomYTire);
        //left top to right top
        this.ctx.bezierCurveTo(this.leftX, this.bottomY + this.wheel.tireProfile * 1.5,
            this.rightX, this.bottomY + this.wheel.tireProfile * 1.5,
            this.rightXTire, this.bottomYTire);
        this.ctx.stroke();
        this.ctx.beginPath();
        // right bottom of a tire
        this.ctx.moveTo(this.rightX, this.bottomY);
        // right bottom of a rim
        this.ctx.lineTo(this.rightXTire, this.bottomYTire);
        this.ctx.stroke();
    }
}




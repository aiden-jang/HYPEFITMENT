class View {
    constructor(ctx, wheel) {
        this.ctx = ctx;
        this.wheel = wheel;
        this.strokeStyleRim = this.ctx.strokeStyle;
        this.ctx.lineWidth = 4;

        this.drawWheel();
    }

    drawWheel () {
        this.calculateRim();
        this.calculateTire();
        this.ctx.globalAlpha = 1;
        this.drawRim();
        this.drawTire();
    }

    calculateRim() {
        // Starting point
        this.centerX = 260;
        this.centerY = 300;

        // Rim sizes
        this.lengthX = this.wheel.rimWidth * 6.5;
        this.lengthY = this.wheel.tireDiameter * 5.5;
        
        // Xs and Ys of a rim
        this.leftX = this.centerX - this.lengthX  + this.wheel.rimOffset / 2;
        this.rightX = this.centerX + this.lengthX  + this.wheel.rimOffset / 2;
        this.topY = this.centerY - this.lengthY;
        this.bottomY = this.centerY + this.lengthY;
    }

    drawRim(){
        this.ctx.strokeStyle = this.strokeStyleRim;

        this.ctx.beginPath();
        this.ctx.setLineDash([]);
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

        // rim center line
        this.ctx.beginPath();
        this.ctx.setLineDash([4, 15]);

        this.ctx.moveTo(this.centerX, this.topY);
        this.ctx.lineTo(this.centerX, this.bottomY);

        // this.ctx.moveTo(this.centerX + this.wheel.rimOffset / 2, this.topY);
        // this.ctx.lineTo(this.centerX + this.wheel.rimOffset / 2, this.bottomY);
        this.ctx.stroke();
        
    }

    calculateTire() {
        this.rimWidthMM = this.wheel.rimWidth * 25.4;

        this.leftXTire = this.leftX + (this.rimWidthMM - this.wheel.tireWidth) / 3;
        this.rightXTire = this.rightX  - (this.rimWidthMM - this.wheel.tireWidth) / 3;

        this.topYTire = (this.topY - this.wheel.tireProfile);
        this.bottomYTire = (this.bottomY - (-this.wheel.tireProfile));
    }

    drawTire() {
        if (this.strokeStyleRim === "#ffbf5c") {
            this.ctx.strokeStyle = "#997131";
        } else {
            this.ctx.strokeStyle = "#493896";
        }
        this.ctx.setLineDash([]);
        // top tire
        this.ctx.beginPath();
        // top left side of a tire
        //top left of a rim
        this.ctx.moveTo(this.leftX, this.topY);
        //left top of a tire
        this.ctx.lineTo(this.leftXTire, this.topYTire);

        // top of a tire
        //top left to right top
        this.ctx.bezierCurveTo(this.leftX, this.topY - this.wheel.tireProfile * 1.5,
            this.rightX, this.topY - this.wheel.tireProfile * 1.5,
            this.rightXTire, this.topYTire);
        this.ctx.stroke();

        // right top side of a tire
        this.ctx.beginPath();
        // right top of a tire
        this.ctx.moveTo(this.rightXTire, this.topYTire);
        // right top of a rim
        this.ctx.lineTo(this.rightX, this.topY);
        this.ctx.stroke();

        // bottom tire
        this.ctx.beginPath();
        //bottom left of a rim
        this.ctx.moveTo(this.leftX, this.bottomY);
        //bottom left of a tire
        this.ctx.lineTo(this.leftXTire, this.bottomYTire);
        //bottom of a tire
        this.ctx.bezierCurveTo(this.leftX, this.bottomY + this.wheel.tireProfile * 1.5,
            this.rightX, this.bottomY + this.wheel.tireProfile * 1.5,
            this.rightXTire, this.bottomYTire);
        this.ctx.stroke();

        this.ctx.beginPath();
        // right bottom of a tire
        this.ctx.moveTo(this.rightXTire, this.bottomYTire);
        // right bottom of a rim
        this.ctx.lineTo(this.rightX, this.bottomY);
        this.ctx.stroke();
    }
}

export default View;
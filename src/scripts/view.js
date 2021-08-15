export default class View {
    constructor(ctx, canvas, wheel) {
        this.ctx = ctx;
        this.wheel = wheel;
        this.canvas = canvas;
        
        this.calculate();
        this.drawRim();
        this.drawTire();

    }


    calculate() {
        this.centerX = this.canvas.width / 2 + this.wheel.rimOffset;
        this.centerY = this.canvas.height / 2;
        this.lengthX = this.wheel.rimWidth * 8 ;
        this.lengthY = this.wheel.tireDiameter * 6
        
        this.leftX = this.centerX - this.lengthX;
        this.rightX = this.centerX + this.lengthX;
        this.topY = this.centerY - this.lengthY;
        this.bottomY = this.centerY + this.lengthY;
    }
    drawSuspension() {

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

    drawTire() {
        var rimWidthMM = this.wheel.rimWidth * 25.4;
 
        if (this.wheel.tireWidth - rimWidthMM > 10) {
            var leftXTire = this.leftX + (rimWidthMM - this.wheel.tireWidth) /3
            var rightXTire = this.rightX  - (rimWidthMM - this.wheel.tireWidth) /3
        } else {
            var leftXTire = this.leftX - (rimWidthMM - this.wheel.tireWidth) /3
            var rightXTire = this.rightX  + (rimWidthMM - this.wheel.tireWidth) /3
        }
        this.topYTire = this.topY - this.wheel.tireProfile
        this.ctx.beginPath();
        //left top of the rim to left top of the tire
        this.ctx.moveTo(this.leftX, this.topY);
        //left top of the tire
        this.ctx.lineTo(leftXTire, this.topYTire);

        //left top of the tire to right top of the tire
        this.ctx.bezierCurveTo(this.leftX, this.topY - this.wheel.tireProfile * 1.5,
            this.rightX, this.topY - this.wheel.tireProfile * 1.5,
            rightXTire, this.topYTire);

        // right top of the tire to right top of the rim
        

        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(rightXTire, this.topYTire);
        this.ctx.lineTo(this.rightX, this.topY);
        this.ctx.stroke();

    }
}
    // var oldWheel = new Wheel(275,40,18,9.5,8);
    // var newWheel = new Wheel(295,40,19,10.5,15);
            // this.tireWidth = tireWidth; 275 // 295
            // this.tireProfile = tireProfile; 40 // 40
            // this.tireDiameter = tireDiameter; 18 // 19
            // this.RimWidth = RimWidth;  9.5 // 10
            // this.RimOffset = RimOffset; 8  // 15




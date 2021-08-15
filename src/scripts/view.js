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
        this.leftY = this.centerY - this.lengthY;
        this.rightY = this.centerY + this.lengthY;
    }
    drawSuspension() {

    }

    drawRim(){
        this.ctx.beginPath(); 
        // left
        this.ctx.moveTo(this.leftX, this.leftY);
        this.ctx.lineTo(this.leftX, this.rightY);
        // top
        this.ctx.moveTo(this.leftX, this.leftY);
        this.ctx.lineTo(this.rightX, this.leftY);
        // right
        this.ctx.moveTo(this.rightX, this.leftY);
        this.ctx.lineTo(this.rightX, this.rightY);
        // bottom
        this.ctx.moveTo(this.rightX, this.rightY);
        this.ctx.lineTo(this.leftX, this.rightY);

        this.ctx.stroke();    

    }

    drawTire() {

        this.ctx.beginPath();
        this.ctx.moveTo(100, 20);
        this.ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
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




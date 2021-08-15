export default class View {
    constructor(ctx, canvas, wheel) {
        this.ctx = ctx;
        this.wheel = wheel;
        this.canvas = canvas;
        
        this.drawRim(this.ctx, this.wheel);
        this.drawTire(this.ctx, this.wheel);

    }

    drawSuspension() {

    }

    drawRim(ctx){
        var centerX = canvas.width / 2 + this.wheel.rimOffset;
        var centerY = canvas.height / 2;
        var lengthX = this.wheel.rimWidth * 8 ;
        var lengthY = this.wheel.tireDiameter * 6
        
        var leftX = centerX - lengthX;
        var rightX = centerX + lengthX;
        var leftY = centerY - lengthY;
        var rightY = centerY + lengthY;

        ctx.beginPath(); 
        // left
        ctx.moveTo(leftX, leftY);
        ctx.lineTo(leftX, rightY);
        // top
        ctx.moveTo(leftX, leftY);
        ctx.lineTo(rightX, leftY);
        // right
        ctx.moveTo(rightX, leftY);
        ctx.lineTo(rightX, rightY);
        // bottom
        ctx.moveTo(rightX, rightY);
        ctx.lineTo(leftX, rightY);
        ctx.stroke();    

    }

    drawTire(ctx, wheel) {

        ctx.beginPath();
        ctx.moveTo(100, 20);
        ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
        ctx.stroke();
    }
}
    // var oldWheel = new Wheel(275,40,18,9.5,8);
    // var newWheel = new Wheel(295,40,19,10.5,15);
            // this.tireWidth = tireWidth; 275 // 295
            // this.tireProfile = tireProfile; 40 // 40
            // this.tireDiameter = tireDiameter; 18 // 19
            // this.RimWidth = RimWidth;  9.5 // 10
            // this.RimOffset = RimOffset; 8  // 15




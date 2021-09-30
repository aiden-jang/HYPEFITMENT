export default class Background {
    constructor(ctx) {
        this.ctx = ctx;
        
        this.suspension = document.getElementById("suspension");
        this.car = document.getElementById("car");

        this.drawBackground();
    }

    drawBackground () {
        this.car.onload = () => {
            this.drawCar();
        }
            
        this.ctx.globalAlpha = 0.4;
        this.drawCar();
        this.ctx.globalAlpha = 0.7;
        this.drawSuspension();
    }

    drawCar() {
        this.ctx.drawImage(this.car, 200, -150, 800, 600);
    }

    drawSuspension() {
        this.ctx.drawImage(this.suspension, 60, 0, 600, 500);
    }
}
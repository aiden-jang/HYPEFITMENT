export default class View {
    constructor(ctx, oldSetup, newSetup) {
        this.ctx = ctx;
        this.oldSetup = oldSetup;
        this.newSetup = newSetup;
        ctx.strokeRect(10,10,200,500);
    }
}




export class Footer {
    constructor(ctx, w, h, x, y) {
        this.ctx = ctx;
        this.color = "#add8e6";
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
    }

    update(tick) {

    }

    draw() {

    }

    drawBackground() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}
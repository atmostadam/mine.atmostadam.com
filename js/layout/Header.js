export class Header {
    constructor(ctx, w, h, x, y) {
        this.ctx = ctx;
        this.color = "white";
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
    }

    update() {

    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}
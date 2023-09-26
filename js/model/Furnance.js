export class Furnance {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.image = document.getElementById("OreSpritesheet");
        this.ix = 0;
        this.iy = 420;
        this.w = 64;
        this.h = 96,
            this.x = x;
        this.y = y;
        this.sw = 192;
        this.sh = 288;
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.ix,
            this.iy,
            this.w,
            this.h,
            this.x,
            this.y,
            this.sw,
            this.sh
        );
    }
}
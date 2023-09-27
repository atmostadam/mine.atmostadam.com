export class Ingot {
    constructor(ctx, ix, iy, x, y) {
        this.ctx = ctx;
        this.image = document.getElementById("OreSpritesheet");
        this.ix = ix;
        this.iy = iy;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = y;
        this.sw = 140;
        this.sh = 140;

        this.hidden = true;
    }

    update(tick) {

    }

    draw() {
        if (this.hidden) {
            return;
        }
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
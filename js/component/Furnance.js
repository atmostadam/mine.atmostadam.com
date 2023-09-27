export class Furnance {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.image = document.getElementById("OreSpritesheet");
        this.ix = 0;
        this.iy = 420;
        this.w = 64;
        this.h = 96;
        this.x = x;
        this.y = y;
        this.sw = 192;
        this.sh = 288;

        this.tick = 0;
        this.ticksPerImage = 30;

        this.hidden = true;
    }

    update(tick) {
        if (this.hidden) {
            return;
        }
        if (this.tick < this.ticksPerImage / 2) {
            this.ix = 0;
        } else if (this.tick < (this.ticksPerImage * 2)) {
            this.ix = 64;
        } else if (this.tick < (this.ticksPerImage * 3)) {
            this.ix = 128;
        } else if (this.tick < (this.ticksPerImage * 4)) {
            this.ix = 128;
        } else {
            this.tick = -1;
        }
        this.tick++;
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

    hide() {
        this.hidden = false;
    }

    show() {
        this.hidden = true;
    }
}
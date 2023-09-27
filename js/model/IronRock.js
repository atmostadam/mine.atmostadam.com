export class IronRock {
    constructor(ctx, x) {
        this.ctx = ctx;
        this.image = document.getElementById("OreSpritesheet");
        this.ix = 96;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = 800;
        this.sw = 128;
        this.sh = 128;
        this.hidden = true;
    }

    update() {
        if (this.hidden) {
            return;
        }
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
        this.hidden = true;
    }

    show() {
        this.hidden = false;
    }
}
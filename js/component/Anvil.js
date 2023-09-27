export class Anvil {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.image = document.getElementById("Anvil");
        this.ix = 0;
        this.iy = 0;
        this.w = 64;
        this.h = 64;
        this.x = x;
        this.y = y;
        this.sw = 192;
        this.sh = 192;

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
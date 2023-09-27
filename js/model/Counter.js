export class Counter {
    constructor(ctx, ix, iy, x, y) {
        this.ctx = ctx
        this.image = document.getElementById("InteriorTileset");
        this.ix = ix;
        this.iy = iy;
        this.w = 48;
        this.h = 48;
        this.x = x;
        this.y = y;
        this.sw = 96;
        this.sh = 96;
    }

    update() {

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
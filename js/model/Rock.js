export class Rock {
    constructor(ctx, ix, iy, w, h, x, y, sw, sh) {
        this.ctx = ctx;
        this.image = document.getElementById("MineSpritesheet");
        this.ix = ix;
        this.iy = iy;
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.sw = sw;
        this.sh = sh;
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
export class BronzePickaxe {
    constructor(ctx, x) {
        this.ctx = ctx;
        this.image = document.getElementById("Pickaxe");
        this.ix = 0;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = 420;
        this.sw = 128;
        this.sh = 128;

        this.speed = 3;

        this.minX = this.x - 5;
        this.minY = this.y - 5;
        this.maxX = this.x + 150;
        this.maxY = this.y + 150;

        this.goingUp = true;
        this.hidden = true;
    }

    update() {
        if (this.hidden) {
            return;
        }
        if (this.goingUp) {
            this.x += this.speed;
            this.y += this.speed;
        } else {
            this.x -= this.speed;
            this.y -= this.speed;
        }
        if (this.x < this.minX ||
            this.x > this.maxX ||
            this.y < this.minY ||
            this.y > this.maxY) {
            this.goingUp = !this.goingUp;
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
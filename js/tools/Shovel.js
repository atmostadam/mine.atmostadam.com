import { BaseHiddenDrawing } from "../base/BaseHiddenDrawing.js";

export class Shovel extends BaseHiddenDrawing {
    constructor(x, y) {
        super();

        if (!Shovel.instance) {
            Shovel.instance = this;
        }

        this.image = document.getElementById("Shovel");
        this.ix = 0;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = y;
        this.sw = 128;
        this.sh = 128;

        this.speed = 3;

        this.minX = this.x - 150;
        this.minY = this.y - 150;
        this.maxX = this.x + 150;
        this.maxY = this.y + 150;

        this.goingUp = true;
        this.hidden = true;

        return Shovel.instance;
    }

    update() {
        if (this.hidden) {
            return;
        }
        if (this.movingTowards) {
            this.x += this.speed;
            this.y -= this.speed;
            if (this.y < this.minY || this.x > this.maxX) {
                this.movingTowards = false;
            }
        } else {
            this.x -= this.speed;
            this.y += this.speed;
            if (this.x < this.minX || this.y > this.maxY) {
                this.movingTowards = true;
            }
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

    static unlock() {
        this.getInstance().show();
    }

    static getInstance() {
        return Shovel.instance;
    }
}
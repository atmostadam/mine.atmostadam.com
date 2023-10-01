import { BaseHiddenDrawing } from "../base/BaseHiddenDrawing.js";

export class CopperPickaxe extends BaseHiddenDrawing {
    constructor(x) {
        super();

        if (!CopperPickaxe.instance) {
            CopperPickaxe.instance = this;
        }

        this.image = document.getElementById("Pickaxe");
        this.ix = 0;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = 220;
        this.sw = 128;
        this.sh = 128;

        this.speed = 3;

        this.minX = this.x - 5;
        this.minY = this.y - 5;
        this.maxX = this.x + 150;
        this.maxY = this.y + 150;

        this.goingUp = true;
        this.hidden = true;

        return CopperPickaxe.instance;
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

    static unlock() {
        this.getInstance().show();
    }

    static getInstance() {
        return CopperPickaxe.instance;
    }
}
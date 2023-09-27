import { IronRock } from "../component/IronRock.js"
import { TinRock } from "../component/TinRock.js"
import { CopperRock } from "../component/CopperRock.js"
import { BronzeRock } from "../component/BronzeRock.js"
import { IronPickaxe } from "../tools/IronPickaxe.js"
import { TinPickaxe } from "../tools/TinPickaxe.js"
import { CopperPickaxe } from "../tools/CopperPickaxe.js"
import { BronzePickaxe } from "../tools/BronzePickaxe.js"

export class MiningColumn {
    constructor(ctx, x, y, w, h, color) {
        this.ctx = ctx;
        this.color = color;
        this.h = h;
        this.x = x;
        this.y = y;
        this.w = w;

        const halfWidth = this.w / 2;
        const rockX = this.x + halfWidth + 6;

        this.titleX = this.x + halfWidth - 100;
        this.titleY = this.y + 55;

        this.tinRock = new TinRock(ctx, rockX);
        this.copperRock = new CopperRock(ctx, rockX);
        this.bronzeRock = new BronzeRock(ctx, rockX);
        this.ironRock = new IronRock(ctx, rockX);

        this.tinPickaxe = new TinPickaxe(ctx, rockX - 180);
        this.copperPickaxe = new CopperPickaxe(ctx, rockX - 180);
        this.bronzePickaxe = new BronzePickaxe(ctx, rockX - 180);
        this.ironPickaxe = new IronPickaxe(ctx, rockX - 180);
    }

    update(tick) {
        this.tinRock.update(tick);
        this.copperRock.update(tick);
        this.bronzeRock.update(tick);
        this.ironRock.update(tick);

        this.tinPickaxe.update(tick);
        this.copperPickaxe.update(tick);
        this.bronzePickaxe.update(tick);
        this.ironPickaxe.update(tick);
    }

    draw() {
        this.tinRock.draw();
        this.copperRock.draw();
        this.bronzeRock.draw();
        this.ironRock.draw();

        this.tinPickaxe.draw();
        this.copperPickaxe.draw();
        this.bronzePickaxe.draw();
        this.ironPickaxe.draw();
    }

    drawBackground() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        this.ctx.font = "50pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Mining", this.titleX, this.titleY);
    }
}
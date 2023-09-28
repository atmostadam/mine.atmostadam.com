import { Shovel } from "../tools/Shovel.js";
import { Furnance } from "../component/Furnance.js";
import { Ore } from "../component/Ore.js";

export class SmeltingColumn {
    constructor(ctx, x, y, w, h, color) {
        this.ctx = ctx;
        this.color = color;
        this.h = h;
        this.x = x;
        this.y = y;
        this.w = w;

        const halfWidth = this.w / 2;

        this.titleX = this.x + halfWidth - 135;
        this.titleY = this.y + 55;

        const furnanceX = this.x + halfWidth - 100;
        const furnanceTopY = this.y + 60;
        const furnanceBottomY = this.y + 440;

        const tinIX = 64;
        const tinIY = 288;
        const tinX = this.x + halfWidth - 150;
        const tinY = this.y + 350;

        const copperIX = 96;
        const copperIY = 288;
        const copperX = this.x + halfWidth + 20;
        const copperY = this.y + 350;

        const bronzeIX = 160;
        const bronzeIY = 288;
        const bronzeX = this.x + halfWidth - 150;
        const bronzeY = this.y + 730;

        const ironIX = 128;
        const ironIY = 288;
        const ironX = this.x + halfWidth + 20;
        const ironY = this.y + 730;

        this.furnanceTop = new Furnance(ctx, furnanceX, furnanceTopY);
        this.furnanceBottom = new Furnance(ctx, furnanceX, furnanceBottomY);

        this.tin = new Ore(ctx, tinIX, tinIY, tinX, tinY);
        this.copper = new Ore(ctx, copperIX, copperIY, copperX, copperY);
        this.bronze = new Ore(ctx, bronzeIX, bronzeIY, bronzeX, bronzeY);
        this.iron = new Ore(ctx, ironIX, ironIY, ironX, ironY);

        this.tinShovel = new Shovel(ctx, tinX - 150, tinY + 150);
        this.copperShovel = new Shovel(ctx, copperX - 150, copperY + 150);
        this.bronzeShovel = new Shovel(ctx, bronzeX - 150, bronzeY + 150);
        this.ironShovel = new Shovel(ctx, ironX - 150, ironY + 150);
    }

    update(tick) {
        this.furnanceTop.update(tick);
        this.furnanceBottom.update(tick);

        this.tin.update(tick);
        this.copper.update(tick);
        this.bronze.update(tick);
        this.iron.update(tick);

        this.tinShovel.update(tick);
        this.copperShovel.update(tick);
        this.bronzeShovel.update(tick);
        this.ironShovel.update(tick);
    }

    draw() {
        this.furnanceTop.draw();
        this.furnanceBottom.draw();

        this.tin.draw();
        this.copper.draw();
        this.bronze.draw();
        this.iron.draw();

        this.tinShovel.draw();
        this.copperShovel.draw();
        this.bronzeShovel.draw();
        this.ironShovel.draw();
    }

    drawBackground() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        this.ctx.drawImage(
            document.getElementById("FlameBackground"),
            0,
            0,
            910,
            1213,
            this.x,
            this.y,
            this.w,
            this.h
        );

        this.ctx.font = "50pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Smelting", this.titleX, this.titleY);
    }
}
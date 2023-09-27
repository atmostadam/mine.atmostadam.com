import { Ingot } from "../model/Ingot.js";
import { Anvil } from "../model/Anvil.js";
import { Hammer } from "../tools/Hammer.js";

export class SmithingColumn {
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

        const anvilX = this.x + halfWidth - 100;
        const anvilTopY = this.y + 200;
        const anvilBottomY = this.y + 550;

        const tinIX = 32;
        const tinIY = 348;
        const tinX = this.x + halfWidth - 150;
        const tinY = this.y + 100;

        const copperIX = 96;
        const copperIY = 348;
        const copperX = this.x + halfWidth;
        const copperY = this.y + 100;

        const bronzeIX = 192;
        const bronzeIY = 348;
        const bronzeX = this.x + halfWidth - 150;
        const bronzeY = this.y + 450;

        const ironIX = 128;
        const ironIY = 348;
        const ironX = this.x + halfWidth + 20;
        const ironY = this.y + 450;

        this.anvilTop = new Anvil(ctx, anvilX, anvilTopY);
        this.anvilBottom = new Anvil(ctx, anvilX, anvilBottomY);

        this.tin = new Ingot(ctx, tinIX, tinIY, tinX, tinY);
        this.copper = new Ingot(ctx, copperIX, copperIY, copperX, copperY);
        this.bronze = new Ingot(ctx, bronzeIX, bronzeIY, bronzeX, bronzeY);
        this.iron = new Ingot(ctx, ironIX, ironIY, ironX, ironY);

        this.tinHammer = new Hammer(ctx, tinX - 160, tinY - 80);
        this.copperHammer = new Hammer(ctx, copperX - 160, copperY - 80);
        this.bronzeHammer = new Hammer(ctx, bronzeX - 160, bronzeY - 80);
        this.ironHammer = new Hammer(ctx, ironX - 160, ironY - 80);
    }

    update() {
        this.tinHammer.update();
        this.copperHammer.update();
        this.bronzeHammer.update();
        this.ironHammer.update();
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        this.ctx.font = "50pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Smithing", this.titleX, this.titleY);

        this.anvilTop.draw();
        this.anvilBottom.draw();

        this.tin.draw();
        this.copper.draw();
        this.bronze.draw();
        this.iron.draw();

        this.tinHammer.draw();
        this.copperHammer.draw();
        this.bronzeHammer.draw();
        this.ironHammer.draw();
    }

    /*
    drawTopFurnance() {
        this.ctx.drawImage(
            document.getElementById("OreSpritesheet"),
            0,
            420,
            64,
            96,
            this.furnanceX,
            this.furnanceTopY,
            192,
            288
        );
    }

    drawBottomFurnance() {
        this.ctx.drawImage(
            document.getElementById("OreSpritesheet"),
            0,
            420,
            64,
            96,
            this.furnanceX,
            this.furnanceBottomY,
            192,
            288
        );
    }
    */
}
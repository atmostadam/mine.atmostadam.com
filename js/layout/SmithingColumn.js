import { Anvil } from "../component/Anvil.js";
import { Hammer } from "../tools/Hammer.js";
import { BaseHiddenDrawing } from "../base/BaseHiddenDrawing.js"
import { TinIngot } from "../component/TinIngot.js";
import { CopperIngot } from "../component/CopperIngot.js";
import { BronzeIngot } from "../component/BronzeIngot.js";
import { IronIngot } from "../component/IronIngot.js";

export class SmithingColumn extends BaseHiddenDrawing {
    constructor(x, y, w, h, color) {
        super();

        if (!SmithingColumn.instance) {
            SmithingColumn.instance = this;
        }

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

        this.anvilTop = new Anvil(anvilX, anvilTopY);
        this.anvilBottom = new Anvil(anvilX, anvilBottomY);

        this.tin = new TinIngot(tinIX, tinIY, tinX, tinY);
        this.copper = new CopperIngot(copperIX, copperIY, copperX, copperY);
        this.bronze = new BronzeIngot(bronzeIX, bronzeIY, bronzeX, bronzeY);
        this.iron = new IronIngot(ironIX, ironIY, ironX, ironY);

        this.tinHammer = new Hammer(tinX - 160, tinY - 80);
        this.copperHammer = new Hammer(copperX - 160, copperY - 80);
        this.bronzeHammer = new Hammer(bronzeX - 160, bronzeY - 80);
        this.ironHammer = new Hammer(ironX - 160, ironY - 80);

        return SmithingColumn.instance;
    }

    update(tick) {
        this.tinHammer.update(tick);
        this.copperHammer.update(tick);
        this.bronzeHammer.update(tick);
        this.ironHammer.update(tick);
    }

    draw() {
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

    drawBackground() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        this.ctx.drawImage(
            document.getElementById("AnvilHammerSpark"),
            0,
            0,
            408,
            612,
            this.x,
            this.y,
            this.w,
            this.h
        );

        this.ctx.font = "50pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Smithing", this.titleX, this.titleY);
    }

    static unlock() {
        this.getInstance().show();
    }

    static getInstance() {
        return SmithingColumn.instance;
    }
}
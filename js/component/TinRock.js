import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { between } from "../main.js";

export class TinRock {
    constructor(ctx, x) {
        if (!TinRock.instance) {
            TinRock.instance = this;
        }

        this.ctx = ctx;
        this.image = document.getElementById("OreSpritesheet");
        this.ix = 128;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = 200;
        this.sw = 128;
        this.sh = 128;

        this.payout = "1";

        this.payoutTicks = 90;
        this.payoutTextTicks = 20;

        this.hidden = false;

        this.ticking = false;
        this.finalTick = 0;

        this.textTicking = false;
        this.finalTextTick = 0;

        this.textY = this.y + 10;

        this.clickPower = 0;
        this.clickMultiplier = 0;

        return TinRock.instance;
    }

    update(tick) {
        console.log(this.clickPower);
        this.tick = tick;
        if (this.hidden) { // future use
            return;
        }
        if (this.ticking && this.tick > this.finalTick) {
            this.finalPayout = Math.ceil(this.payout * this.clickMultiplier);
            InventoryDecorator.addTinOre(this.finalPayout);
            this.hidden = false;
            this.ticking = false;
            this.finalTick = 0;
            this.textTicking = true;
            this.finalTextTick = this.tick + this.payoutTextTicks;
        }

        if (this.textTicking) {
            if (this.tick > this.finalTextTick) {
                this.textTicking = false;
                this.finalTextTick = 0;
                this.textY = this.y + 10;
            } else {
                this.ctx.font = "14pt Arial";
                this.ctx.fillStyle = "green";
                this.ctx.fillText("+" + this.finalPayout + " Tin Ore", this.x + 50, this.textY);
                this.textY--;
            }
        }

        if (this.clickPower > 0 && this.tick % 8 === 0) {
            this.clickPower--;
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

    onClick(x, y) {
        if (between(x, 1350, 1475) && between(y, 200, 330)) {
            this.hidden = false;
            if (this.finalTick === 0) {
                this.finalTick = this.tick + this.payoutTicks;
            }
            this.ticking = true;

            if (this.clickPower < 50) {
                this.clickPower++;
                this.clickMultiplier = 1 + (this.clickPower * .1);
            }
        }
    }

    static getInstance() {
        return TinRock.instance;
    }
}
import { BaseOre } from "../base/BaseOre.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";

export class TinOre extends BaseOre {
    constructor(ix, iy, x, y) {
        super(
            ix,
            iy,
            x,
            y,
            1000,
            1200,
            300,
            400,
            0,
            90,
            0,
            false,
            0,
            0);

        if (!TinOre.instance) {
            TinOre.instance = this;
        }

        this.payout = "1";

        this.payoutTextTicks = 20;

        this.textTicking = false;
        this.finalTextTick = 0;

        this.textY = this.y + 10;

        this.tinIngotsToUnlock = 1;

        return TinOre.instance;
    }

    update(tick) {
        this.tick = tick;
        if (this.ticking && this.tick > this.finalTick) {
            this.finalPayout = Math.ceil(this.payout * this.clickMultiplier);
            InventoryDecorator.addTinOre(this.finalPayout);
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
                /*
                this.ctx.font = "14pt Arial";
                this.ctx.fillStyle = "green";
                this.ctx.fillText("+" + this.finalPayout + " Tin Ingots", this.x + 50, this.textY);
                */
                this.getCtxDecorator().drawText("+" + this.finalPayout + " Tin Ingots", "14pt Arial", "green", this.x + 50, this.textY);

                this.textY--;
            }
        }

        if (this.clickPower > 0 && this.tick % 8 === 0) {
            this.clickPower--;
        }
    }

    draw() {
        this.getCtxDecorator().drawFilledRectangle("white", 1350, 203, 130, 130);
        /*
        this.drawImage(
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
        */
        this.drawImageLoaded();
        if (this.ticking) {
            var color = "black";
        } else {
            var color = "green";
        }
        this.getCtxDecorator().drawRectangle(5, color, 1350, 203, 130, 130);
    }

    static canUnlock(tinIngots) {
        if (this.instance.tinIngotsToUnlock < tinIngots) {
            return true;
        }
        return false;
    }

    static unlock() {
        TinOre.instance.hidden = false;
    }

    static getInstance() {
        return TinOre.instance;
    }
}
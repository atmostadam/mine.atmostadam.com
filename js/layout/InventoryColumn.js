import { CurrencyDecorator } from "../decorator/CurrencyDecorator.js"
import { InventoryDecorator } from "../decorator/InventoryDecorator.js"

export class InventoryColumn {
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

        this.coinX = this.x + 10;
        this.coinTextX = this.coinX + 58;

        this.copperCoinY = 200;
        this.copperCoinTextY = this.copperCoinY + 38;

        this.silverCoinY = 260;
        this.silverCoinTextY = this.silverCoinY + 38;

        this.goldCoinY = 320;
        this.goldCoinTextY = this.goldCoinY + 38;
    }

    update(tick) {

    }

    draw() {
        this.drawCopperCoins();
        this.drawSilverCoins();
        this.drawGoldCoins();
        this.drawTinOre();
    }

    drawBackground() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        this.ctx.font = "50pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Inventory", this.titleX, this.titleY);
    }

    drawCopperCoins() {
        this.ctx.drawImage(
            document.getElementById("CopperCoin"),
            0,
            0,
            32,
            32,
            this.coinX,
            this.copperCoinY,
            48,
            48
        );
        this.ctx.font = "32pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(CurrencyDecorator.getCopperCoins(), this.coinTextX, this.copperCoinTextY);
    }

    drawSilverCoins() {
        this.ctx.drawImage(
            document.getElementById("SilverCoin"),
            0,
            0,
            32,
            32,
            this.coinX,
            this.silverCoinY,
            48,
            48
        );
        this.ctx.font = "32pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(CurrencyDecorator.getCopperCoins(), this.coinTextX, this.silverCoinTextY);
    }

    drawGoldCoins() {
        this.ctx.drawImage(
            document.getElementById("GoldCoin"),
            0,
            0,
            32,
            32,
            this.coinX,
            this.goldCoinY,
            48,
            48
        );
        this.ctx.font = "32pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(CurrencyDecorator.getCopperCoins(), this.coinTextX, this.goldCoinTextY);
    }

    drawTinOre() {
        this.ctx.drawImage(
            document.getElementById("OreSpritesheet"),
            64,
            288,
            32,
            32,
            this.coinX,
            this.goldCoinY + 50,
            48,
            48
        );
        this.ctx.font = "32pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(InventoryDecorator.getTinOre(), this.coinTextX, this.goldCoinTextY + 50);
    }
}
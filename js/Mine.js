import { InventoryColumn } from "./layout/InventoryColumn.js";
import { MiningColumn } from "./layout/MiningColumn.js";
import { SmeltingColumn } from "./layout/SmeltingColumn.js";
import { SmithingColumn } from "./layout/SmithingColumn.js";
import { MarketColumn } from "./layout/MarketColumn.js";
import { Footer } from "./layout/Footer.js";
import { Header } from "./layout/Header.js";
import { GameCache } from "./persistence/GameCache.js";
import { Currency } from "./model/Currency.js";
import { Inventory } from "./model/Inventory.js";
import { MouseListener } from "./listener/MouseListener.js";
import { InventoryDecorator } from "./decorator/InventoryDecorator.js";
import { CurrencyDecorator } from "./decorator/CurrencyDecorator.js";
import { HiddenStateStaticHandler } from "./handler/HiddenStateStaticHandler.js";

export class Mine {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        new GameCache(canvas, ctx);

        new HiddenStateStaticHandler();

        new MouseListener();

        new InventoryDecorator(new Inventory(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        new CurrencyDecorator(new Currency(0, 0, 0));

        const margin = 5;

        const headerSize = 60;
        const footerSize = 60;

        const bodyX = margin;
        const bodyY = margin + headerSize;

        const bodyWidth = canvas.width - margin - bodyX;
        const bodyHeight = canvas.height - margin - footerSize - bodyY;

        const bodyWidthOneFifth = bodyWidth / 5;
        const bodyWidthTwoFifths = bodyWidthOneFifth * 2;
        const bodyWidthThreeFifths = bodyWidthOneFifth * 3;
        const bodyWidthFourFifths = bodyWidthOneFifth * 4;

        this.header = new Header(ctx, bodyWidth, headerSize, margin, margin);
        this.market = new MarketColumn(ctx, true, margin, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.smithing = new SmithingColumn(ctx, true, margin + bodyWidthOneFifth, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.smelting = new SmeltingColumn(ctx, true, margin + bodyWidthTwoFifths, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.mining = new MiningColumn(ctx, true, margin + bodyWidthThreeFifths, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.inventory = new InventoryColumn(ctx, margin + bodyWidthFourFifths, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.footer = new Footer(ctx, bodyWidth, footerSize, margin, canvas.height - margin - footerSize);

        this.tick = 0;
    }

    update() {
        this.tick++;
        this.drawBackground();
        this.mining.update(this.tick);
        this.smelting.update(this.tick);
        this.smithing.update(this.tick);
        this.market.update(this.tick);
        this.inventory.update(this.tick);
        this.header.update(this.tick);
        this.footer.update(this.tick);
    }

    draw() {
        this.mining.draw();
        this.smelting.draw();
        this.smithing.draw();
        this.market.draw();
        this.inventory.draw();
        this.header.draw();
        this.footer.draw();
    }

    drawBackground() {
        this.mining.drawBackground();
        this.smelting.drawBackground();
        this.smithing.drawBackground();
        this.market.drawBackground();
        this.inventory.drawBackground();
        this.header.draw();
        this.footer.draw();
    }
}

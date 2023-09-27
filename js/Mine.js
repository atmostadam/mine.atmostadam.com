import { InventoryColumn } from "./layout/InventoryColumn.js";
import { MiningColumn } from "./layout/MiningColumn.js";
import { SmeltingColumn } from "./layout/SmeltingColumn.js";
import { SmithingColumn } from "./layout/SmithingColumn.js"
import { MarketColumn } from "./layout/MarketColumn.js";
import { Footer } from "./layout/Footer.js";
import { Header } from "./layout/Header.js";
import { GameCache } from "./persistence/GameCache.js";
import { Gamer } from "./persistence/Gamer.js";
import { Currency } from "./persistence/Currency.js";
import { Inventory } from "./persistence/Inventory.js";
import { MouseListener } from "./listener/MouseListener.js"

export class Mine {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        new GameCache(canvas, ctx);
        GameCache.set("Gamer", new Gamer());
        GameCache.set("Currency", new Currency(0, 0, 0));
        GameCache.set("Inventory", new Inventory());

        new MouseListener();

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
        this.market = new MarketColumn(ctx, margin, bodyY, bodyWidthOneFifth, bodyHeight, GameCache.COLOR_RED);
        this.smithing = new SmithingColumn(ctx, margin + bodyWidthOneFifth, bodyY, bodyWidthOneFifth, bodyHeight, GameCache.COLOR_GREEN);
        this.smelting = new SmeltingColumn(ctx, margin + bodyWidthTwoFifths, bodyY, bodyWidthOneFifth, bodyHeight, GameCache.COLOR_PURPLE);
        this.mining = new MiningColumn(ctx, margin + bodyWidthThreeFifths, bodyY, bodyWidthOneFifth, bodyHeight, GameCache.COLOR_BLUE);
        this.inventory = new InventoryColumn(ctx, margin + bodyWidthFourFifths, bodyY, bodyWidthOneFifth, bodyHeight, GameCache.COLOR_ORANGE);
        this.footer = new Footer(ctx, bodyWidth, footerSize, margin, canvas.height - margin - footerSize);
    }

    update() {
        this.mining.update();
        this.smelting.update();
        this.smithing.update();
        this.market.update();
        this.inventory.update();
        this.header.update();
        this.footer.update();
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
}

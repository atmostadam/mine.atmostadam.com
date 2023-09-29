import { GameCache } from "../persistence/GameCache.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";

export class BaseDrawing {
    constructor() {
        this.ctx = GameCache.getCtx();
        this.width = GameCache.getWidth();
        this.height = GameCache.getHeight();
    }

    update(tick) {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override update(tick)");
    }

    draw() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override draw()");
    }
}
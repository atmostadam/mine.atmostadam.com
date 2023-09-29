import { HiddenStateStaticHandler } from "../handler/HiddenStateStaticHandler.js";

export class BaseHiddenDrawing extends BaseDrawing {
    constructor() {
        super();
        this.hidden = HiddenStateStaticHandler.isHidden(this.constructor.name);
    }

    show() {
        this.hidden = false;
        HiddenStateStaticHandler.show();
    }

    hide() {
        this.hidden = true;
        HiddenStateStaticHandler.hide();
    }

    isHidden() {
        return this.hidden;
    }
}
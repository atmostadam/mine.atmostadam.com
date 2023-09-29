import { BaseDrawing } from "../base/BaseDrawing.js";

export class BaseHiddenDrawing extends BaseDrawing {
    constructor() {
        super();
        //this.hidden = HiddenStateStaticHandler.isHidden("BaseHiddenDrawing");
    }

    show() {
        this.hidden = false;
        //HiddenStateStaticHandler.show();
    }

    hide() {
        this.hidden = true;
        //HiddenStateStaticHandler.hide();
    }

    isHidden() {
        return this.hidden;
    }
}
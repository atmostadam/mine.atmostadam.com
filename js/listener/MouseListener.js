import { GameCache } from "./../persistence/GameCache.js";
import { TinRock } from "./../component/TinRock.js";
import { TinPickaxe } from "./../tools/TinPickaxe.js";

export class MouseListener {
    constructor() {
        window.addEventListener('click', (e) => {
            const rect = GameCache.getCanvas().getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            TinRock.getInstance().onClick(x, y);
            TinPickaxe.getInstance().onClick(x, y);
        });
    }
}
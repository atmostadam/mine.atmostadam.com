import { GameCache } from "./../persistence/GameCache.js";

export class MouseListener {
    constructor() {
        window.addEventListener('click', (e) => {
            const rect = GameCache.getCanvas().getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if (x > 1350 && x < 1475 &&
                y > 200 && y < 330) {
                GameCache.get("TinRock").onClick();
                GameCache.get("TinPickaxe").onClick();
            }
        });
    }
}
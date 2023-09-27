export class InventoryDecorator {
    constructor(inventory) {
        if (!InventoryDecorator.instance) {
            InventoryDecorator.instance = this;
        }
        this.inventory = inventory;
        return InventoryDecorator.instance;
    }

    static getTinOre() {
        return this.instance.inventory.tinOre;
    }

    static addTinOre(amount) {
        this.instance.inventory.tinOre += amount;
    }

    static removeTinOre(amount) {
        this.instance.inventory.tinOre -= amount;
    }

    static getInstance() {
        return this.instance;
    }
}
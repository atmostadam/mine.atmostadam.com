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

    static getCopperOre() {
        return this.instance.inventory.copperOre;
    }

    static addCopperOre(amount) {
        this.instance.inventory.copperOre += amount;
    }

    static removeCopperOre(amount) {
        this.instance.inventory.copperOre -= amount;
    }

    static getIronOre() {
        return this.instance.inventory.ironOre;
    }

    static addIronOre(amount) {
        this.instance.inventory.ironOre += amount;
    }

    static removeIronOre(amount) {
        this.instance.inventory.ironOre -= amount;
    }

    static getTinIngots() {
        return this.instance.inventory.tinIngots;
    }

    static addTinIngots(amount) {
        this.instance.inventory.tinIngots += amount;
    }

    static removeTinIngots(amount) {
        this.instance.inventory.tinIngots -= amount;
    }

    static getCopperIngots() {
        return this.instance.inventory.copperIngots;
    }

    static addCopperIngots(amount) {
        this.instance.inventory.tinOre += amount;
    }

    static removeCopperIngots(amount) {
        this.instance.inventory.tinOre -= amount;
    }

    static getBronzeIngots() {
        return this.instance.inventory.bronzeIngots;
    }

    static addBronzeIngots(amount) {
        this.instance.inventory.bronzeIngots += amount;
    }

    static removeBronzeIngots(amount) {
        this.instance.inventory.bronzeIngots -= amount;
    }

    static getIronIngots() {
        return this.instance.inventory.ironIngots;
    }

    static addIronIngots(amount) {
        this.instance.inventory.ironIngots += amount;
    }

    static removeIronIngots(amount) {
        this.instance.inventory.ironIngots -= amount;
    }

    static getTinWeapons() {
        return this.instance.inventory.tinWeapons;
    }

    static addTinWeapons(amount) {
        this.instance.inventory.tinWeapons += amount;
    }

    static removeTinWeapons(amount) {
        this.instance.inventory.tinWeapons -= amount;
    }

    static getCopperWeapons() {
        return this.instance.inventory.copperWeapons;
    }

    static addCopperWeapons(amount) {
        this.instance.inventory.copperWeapons += amount;
    }

    static removeCopperWeapons(amount) {
        this.instance.inventory.copperWeapons -= amount;
    }

    static getBronzeWeapons() {
        return this.instance.inventory.bronzeWeapons;
    }

    static addBronzeWeapons(amount) {
        this.instance.inventory.bronzeWeapons += amount;
    }

    static removeBronzeWeapons(amount) {
        this.instance.inventory.bronzeWeapons -= amount;
    }

    static getIronWeapons() {
        return this.instance.inventory.ironWeapons;
    }

    static addIronWeapons(amount) {
        this.instance.inventory.ironWeapons += amount;
    }

    static removeIronWeapons(amount) {
        this.instance.inventory.ironWeapons -= amount;
    }

    static getTinArmor() {
        return this.instance.inventory.tinArmor;
    }

    static addTinArmor(amount) {
        this.instance.inventory.tinArmor += amount;
    }

    static removeTinArmor(amount) {
        this.instance.inventory.tinArmor -= amount;
    }

    static getCopperArmor() {
        return this.instance.inventory.copperArmor;
    }

    static addCopperArmor(amount) {
        this.instance.inventory.copperArmor += amount;
    }

    static removeCopperArmor(amount) {
        this.instance.inventory.copperArmor -= amount;
    }

    static getBronzeArmor() {
        return this.instance.inventory.bronzeArmor;
    }

    static addBronzeArmor(amount) {
        this.instance.inventory.bronzeArmor += amount;
    }

    static removeBronzeArmor(amount) {
        this.instance.inventory.bronzeArmor -= amount;
    }

    static getIronArmor() {
        return this.instance.inventory.ironArmor;
    }

    static addIronArmor(amount) {
        this.instance.inventory.ironArmor += amount;
    }

    static removeIronArmor(amount) {
        this.instance.inventory.ironArmor -= amount;
    }

    static getInstance() {
        return this.instance;
    }
}
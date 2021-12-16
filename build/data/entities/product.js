"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(data) {
        this.id = data.Id;
        this.name = data.Name;
        this.sku = data.Sku;
        this.createdOnUtc = data.CreatedOnUtc;
        this.updatedOnUtc = data.UpdatedOnUtc;
        this.seoFilename = data.SeoFilename;
        this.price = data.Price;
        this.oldPrice = data.OldPrice;
        this.costPrice = data.CostPrice;
        this.orderMinimumQuantity = data.OrderMinimumQuantity;
        this.orderMaximumQuantity = data.OrderMaximumQuantity;
    }
}
exports.Product = Product;

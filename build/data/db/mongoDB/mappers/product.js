"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMapperMongoDB = void 0;
const base_1 = require("../../../../application/base");
const models_1 = require("../models");
class ProductMapperMongoDB extends base_1.Mapper {
    mapFrom(param) {
        return {
            id: "",
            name: "",
            sku: "",
            createdOnUtc: new Date(),
            updatedOnUtc: new Date(),
            seoFilename: "",
            price: 0,
            oldPrice: 0,
            costPrice: 0,
            orderMinimumQuantity: 0,
            orderMaximumQuantity: 0,
            images: [],
        };
    }
    mapTo(param) {
        return new models_1.Product({});
    }
}
exports.ProductMapperMongoDB = ProductMapperMongoDB;

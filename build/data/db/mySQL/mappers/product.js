"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMapperMySQL = void 0;
const base_1 = require("../../../../application/base");
class ProductMapperMySQL extends base_1.Mapper {
    mapFrom(param) {
        var _a, _b;
        console.log(param);
        var ext = param.MimeType.toString().indexOf("png") >= 0 ? "png" : "jpeg";
        return {
            id: param.Id.toString(),
            name: param.Name.toString(),
            sku: (_a = param.Sku) === null || _a === void 0 ? void 0 : _a.toString(),
            createdOnUtc: param.CreatedOnUtc,
            updatedOnUtc: param.UpdatedOnUtc,
            seoFilename: typeof param.SeoFilename === undefined || param.SeoFilename === null
                ? "https://testinglab.netamx.app/images/thumbs/default-image_450.png"
                : `https://testinglab.netamx.app/images/thumbs/${param.Id.toString().padStart(7, "0")}_${(_b = param.SeoFilename) === null || _b === void 0 ? void 0 : _b.toString()}_415.${ext}`,
            price: param.Price,
            oldPrice: param.OldPrice,
            costPrice: param.CostPrice,
            orderMinimumQuantity: param.OrderMinimumQuantity,
            orderMaximumQuantity: param.OrderMaximumQuantity,
        };
    }
    mapTo(param) {
        var _a, _b;
        return {
            Id: param.id.toString(),
            Name: param.name.toString(),
            Sku: param.sku.toString(),
            CreatedOnUtc: param.createdOnUtc,
            UpdatedOnUtc: param.updatedOnUtc,
            SeoFilename: (_a = param.seoFilename) === null || _a === void 0 ? void 0 : _a.toString(),
            MimeType: (_b = param.seoFilename) === null || _b === void 0 ? void 0 : _b.toString().split(".")[1],
            Price: param.price,
            OldPrice: param.oldPrice,
            CostPrice: param.costPrice,
            OrderMinimumQuantity: param.orderMinimumQuantity,
            OrderMaximumQuantity: param.orderMaximumQuantity,
        };
    }
}
exports.ProductMapperMySQL = ProductMapperMySQL;

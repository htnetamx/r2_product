import { Mapper } from "../../../../application/base";
import { ProductBaseModel } from "../../../entities";
import { Product, ProductMongoDB } from "../models";

export class ProductMapperMongoDB extends Mapper<
  ProductMongoDB,
  ProductBaseModel
> {
  mapFrom(param: ProductMongoDB): ProductBaseModel {
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
    };
  }
  mapTo(param: ProductBaseModel): ProductMongoDB {
    return new Product({});
  }
}

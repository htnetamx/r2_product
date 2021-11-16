import { Mapper } from "../../../../application/base";
import { ProductBaseModel } from "../../../entities";
import { Product, ProductMongoDB } from "../models";

export class ProductMapperMongoDB extends Mapper<
  ProductMongoDB,
  ProductBaseModel
> {
  mapFrom(param: ProductMongoDB): ProductBaseModel {
    return {
      Id: "",
      Name: "",
      Sku: "",
      CreatedOnUtc: new Date(),
      UpdatedOnUtc: new Date(),
      SeoFilename: "",
      Price: 0,
      OldPrice: 0,
      CostPrice: 0,
      OrderMinimumQuantity: 0,
      OrderMaximumQuantity: 0,
    };
  }
  mapTo(param: ProductBaseModel): ProductMongoDB {
    return new Product({});
  }
}

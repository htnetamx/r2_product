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
    };
  }
  mapTo(param: ProductBaseModel): ProductMongoDB {
    return new Product({});
  }
}

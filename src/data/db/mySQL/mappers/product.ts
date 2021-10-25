import { Mapper } from "../../../../application/base";
import { ProductBaseModel } from "../../../entities";
import { ProductMySQL } from "../models";

export class ProductMapperMySQL extends Mapper<ProductMySQL, ProductBaseModel> {
  mapFrom(param: ProductMySQL): ProductBaseModel {
    return {
      Id: param.Id.toString(),
      Name: param.Name.toString(),
      Sku: param.Sku?.toString(),
      CreatedOnUtc: param.CreatedOnUtc,
      UpdatedOnUtc: param.UpdatedOnUtc
    };
  }
  mapTo(param: ProductBaseModel): ProductMySQL {
    return {
      Id: param.Id.toString(),
      Name: param.Name.toString(),
      Sku: param.Sku.toString(),
      CreatedOnUtc: param.CreatedOnUtc,
      UpdatedOnUtc: param.UpdatedOnUtc
    };
  }
}

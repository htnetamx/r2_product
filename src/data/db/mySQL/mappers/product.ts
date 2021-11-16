import { Mapper } from "../../../../application/base";
import { ProductBaseModel } from "../../../entities";
import { ProductMySQL } from "../models";

export class ProductMapperMySQL extends Mapper<ProductMySQL, ProductBaseModel> {
  mapFrom(param: ProductMySQL): ProductBaseModel {
    console.log(param);
    var ext = param.MimeType.toString().indexOf("image") > -1 ? "jpg" : "png";
    return {
      Id: param.Id.toString(),
      Name: param.Name.toString(),
      Sku: param.Sku?.toString(),
      CreatedOnUtc: param.CreatedOnUtc,
      UpdatedOnUtc: param.UpdatedOnUtc,
      SeoFilename:
        "images/thumbs/" +
        param.Id.toString().padStart(7, "0") +
        "_" +
        param.SeoFilename?.toString() +
        "." +
        ext,
      Price: param.Price,
      OldPrice: param.OldPrice,
      CostPrice: param.CostPrice,
      OrderMinimumQuantity: param.OrderMinimumQuantity,
      OrderMaximumQuantity: param.OrderMaximumQuantity,
    };
  }
  mapTo(param: ProductBaseModel): ProductMySQL {
    return {
      Id: param.Id.toString(),
      Name: param.Name.toString(),
      Sku: param.Sku.toString(),
      CreatedOnUtc: param.CreatedOnUtc,
      UpdatedOnUtc: param.UpdatedOnUtc,
      SeoFilename: param.SeoFilename?.toString(),
      MimeType: param.SeoFilename?.toString().split(".")[1],
      Price: param.Price,
      OldPrice: param.OldPrice,
      CostPrice: param.CostPrice,
      OrderMinimumQuantity: param.OrderMinimumQuantity,
      OrderMaximumQuantity: param.OrderMaximumQuantity,
    };
  }
}

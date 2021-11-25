import { Mapper } from "../../../../application/base";
import { ProductBaseModel } from "../../../entities";
import { ProductMySQL } from "../models";

export class ProductMapperMySQL extends Mapper<ProductMySQL, ProductBaseModel> {
  mapFrom(param: ProductMySQL): ProductBaseModel {
    console.log(param);
    var ext = param.MimeType.toString().indexOf("png") >= 0 ? "png" : "jpeg";
    return {
      id: param.Id.toString(),
      name: param.Name.toString(),
      sku: param.Sku?.toString(),
      createdOnUtc: param.CreatedOnUtc,
      updatedOnUtc: param.UpdatedOnUtc,
      seoFilename:
        typeof param.SeoFilename === undefined || param.SeoFilename === null
          ? "https://testinglab.netamx.app/images/thumbs/default-image_450.png"
          : `https://testinglab.netamx.app/images/thumbs/${param.Id.toString().padStart(
              7,
              "0"
            )}_${param.SeoFilename?.toString()}_415.${ext}`,
      price: param.Price,
      oldPrice: param.OldPrice,
      costPrice: param.CostPrice,
      orderMinimumQuantity: param.OrderMinimumQuantity,
      orderMaximumQuantity: param.OrderMaximumQuantity,
    };
  }
  mapTo(param: ProductBaseModel): ProductMySQL {
    return {
      Id: param.id.toString(),
      Name: param.name.toString(),
      Sku: param.sku.toString(),
      CreatedOnUtc: param.createdOnUtc,
      UpdatedOnUtc: param.updatedOnUtc,
      SeoFilename: param.seoFilename?.toString(),
      MimeType: param.seoFilename?.toString().split(".")[1],
      Price: param.price,
      OldPrice: param.oldPrice,
      CostPrice: param.costPrice,
      OrderMinimumQuantity: param.orderMinimumQuantity,
      OrderMaximumQuantity: param.orderMaximumQuantity,
    };
  }
}

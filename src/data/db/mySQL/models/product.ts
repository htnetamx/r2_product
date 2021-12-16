import { ProductBaseModel } from "data/entities";
export interface ProductMySQL {
  Name: String;
  Sku: String;
  Id: String;
  CreatedOnUtc: Date;
  UpdatedOnUtc: Date;
  SeoFilename: string;
  MimeType: string;
  Price: number;
  OldPrice: number;
  CostPrice: number;
  OrderMinimumQuantity: number;
  OrderMaximumQuantity: number;
}

export class User {
  public static save() {}
  public static findOne() {}
}

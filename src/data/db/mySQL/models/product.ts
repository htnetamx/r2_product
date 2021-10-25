import { ProductBaseModel } from "data/entities";
export interface ProductMySQL {
  Name: String;
  Sku: String;
  Id: String;
  CreatedOnUtc: Date;
  UpdatedOnUtc: Date;
}

export class User {
  public static save() {}
  public static findOne() {}
}

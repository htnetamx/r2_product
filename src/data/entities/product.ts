import { ProductInputModel } from "../../application/domain";

export interface ProductBaseModel {
  Id: string;
  Name: string;
  Sku: string;
  CreatedOnUtc: Date;
  UpdatedOnUtc: Date;
}

export class User implements ProductBaseModel {
  public Id: string;
  public Name: string;
  public Sku: string;

  public CreatedOnUtc: Date;
  public UpdatedOnUtc: Date;

  constructor(data: ProductInputModel) {
      this.Id = data.Id;
      this.Name = data.Name;
      this.Sku = data.Sku;
      this.CreatedOnUtc = data.CreatedOnUtc;
      this.UpdatedOnUtc = data.UpdatedOnUtc;
  }
}

import { ProductInputModel } from "../../application/domain";

export interface ProductBaseModel {
  Id: string;
  Name: string;
  Sku: string;
  CreatedOnUtc: Date;
  UpdatedOnUtc: Date;
  SeoFilename: string;
  Price: number;
  OldPrice: number;
  CostPrice: number;
  OrderMinimumQuantity: number;
  OrderMaximumQuantity: number;
}

export class User implements ProductBaseModel {
  public Id: string;
  public Name: string;
  public Sku: string;

  public CreatedOnUtc: Date;
  public UpdatedOnUtc: Date;

  public SeoFilename: string;

  public Price: number;
  public OldPrice: number;
  public CostPrice: number;
  public OrderMinimumQuantity: number;
  public OrderMaximumQuantity: number;

  constructor(data: ProductInputModel) {
    this.Id = data.Id;
    this.Name = data.Name;
    this.Sku = data.Sku;
    this.CreatedOnUtc = data.CreatedOnUtc;
    this.UpdatedOnUtc = data.UpdatedOnUtc;
    this.SeoFilename = data.SeoFilename;
    this.Price = data.Price;
    this.OldPrice = data.OldPrice;
    this.CostPrice = data.CostPrice;
    this.OrderMinimumQuantity = data.OrderMinimumQuantity;
    this.OrderMaximumQuantity = data.OrderMaximumQuantity;
  }
}

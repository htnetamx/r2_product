import { ProductInputModel } from "../../application/domain";

export interface ProductBaseModel {
  id: string;
  name: string;
  sku: string;
  createdOnUtc: Date;
  updatedOnUtc: Date;
  seoFilename: string;
  price: number;
  oldPrice: number;
  costPrice: number;
  orderMinimumQuantity: number;
  orderMaximumQuantity: number;
}

export class Product implements ProductBaseModel {
  public id: string;
  public name: string;
  public sku: string;

  public createdOnUtc: Date;
  public updatedOnUtc: Date;

  public seoFilename: string;

  public price: number;
  public oldPrice: number;
  public costPrice: number;
  public orderMinimumQuantity: number;
  public orderMaximumQuantity: number;

  constructor(data: ProductInputModel) {
    this.id = data.Id;
    this.name = data.Name;
    this.sku = data.Sku;
    this.createdOnUtc = data.CreatedOnUtc;
    this.updatedOnUtc = data.UpdatedOnUtc;
    this.seoFilename = data.SeoFilename;
    this.price = data.Price;
    this.oldPrice = data.OldPrice;
    this.costPrice = data.CostPrice;
    this.orderMinimumQuantity = data.OrderMinimumQuantity;
    this.orderMaximumQuantity = data.OrderMaximumQuantity;
  }
}

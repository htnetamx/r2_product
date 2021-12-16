export interface ProductInputModel {
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

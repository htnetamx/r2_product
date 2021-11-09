import { ProductBaseModel } from "../../../data/entities";
export interface IProductRepository {
  getAll(): Promise<Array<ProductBaseModel | null> | null>;
  getById(id: Number): Promise<ProductBaseModel | null>;
  getAllProduct(numPerPage: any, page:any): any;
}


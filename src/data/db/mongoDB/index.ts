import { IProductRepository } from "../../../application/contracts";
import { Credential } from "../../../application/domain";
import { ProductBaseModel } from "../../entities";
import { ProductMapperMongoDB } from "./mappers";

export class RepositoryMongoDB implements IProductRepository {
  private static instance: RepositoryMongoDB = new RepositoryMongoDB();
  private userMapper: ProductMapperMongoDB;

  constructor() {
    this.userMapper = new ProductMapperMongoDB();
  }

  async getAll(): Promise<Array<ProductBaseModel | null> | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }

  async getById(params: any): Promise<ProductBaseModel | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }
}

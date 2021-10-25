import { ProductInputModel } from "../../application/domain";
import { getByIdUseCase } from "../../application/services/useCases/product/getById";
import { Token } from "../../token";
import { getAllUseCase } from "../../application/services/useCases/product/getAll";
import { ProductBaseModel } from "data/entities/product";

export class ProductController {
  async getAll(): Promise<Array<ProductBaseModel | null> | null> {
    const useCase = new getAllUseCase();
    const data = useCase.execute(null);
    return data;
  }

  async getById(id: any): Promise<ProductBaseModel | null> {
    const useCase = new getByIdUseCase();
    const data = useCase.execute(id);
    console.log(data);
    return data;
  }
}

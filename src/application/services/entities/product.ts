import bcrypt from "bcryptjs";
import { User, ProductBaseModel } from "../../../data/entities";
import { IProductRepository } from "../../contracts";
import { RepositoryMongoDB } from "../../../data/db/mongoDB";
import { RepositoryMySQL } from "../../../data/db/mySQL";
import { Credential, ProductInputModel } from "../../domain";
import {
  ServiceResponse,
  IServiceResponse,
  GroupedService,
  IGroupedService,
} from "../../base";

export interface IProductService {
  mongoDB: IProductRepository;
  mySQL: IProductRepository;
}

export class ProductService {
  public repos: IProductService = {
    mongoDB: new RepositoryMongoDB(),
    mySQL: new RepositoryMySQL(),
  };

  //Conjunto de servicios bases de datos
  async getAll(): Promise<Array<ProductBaseModel | null> | null> {
    try {
      var promises: Array<Promise<Array<ProductBaseModel | null> | null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IProductRepository>entry[1]).getAll())
      );
      let result_promises = await Promise.all(promises);
      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);

        var succeses: Array<
          IServiceResponse<Array<ProductBaseModel | null> | null>
        > = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(
                new ServiceResponse(result, entries[index][0], index)
              )
        );
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      //console.log(error);
      return null;
    }
  }

  async getById(id: Number): Promise<ProductBaseModel | null> {
    try {
      var promises: Array<Promise<ProductBaseModel | null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IProductRepository>entry[1]).getById(id))
      );
      let result_promises = await Promise.all(promises);

      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);
        var succeses: Array<IServiceResponse<ProductBaseModel | null>> = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(
                new ServiceResponse(result, entries[index][0], index)
              )
        );
        console.log("r_promoesis: ", result_promises);
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      //console.log(error);
      return null;
    }
  }
}

import { IProductRepository } from "../../../application/contracts";
import { Credential } from "../../../application/domain/credential";
import { ProductBaseModel } from "data/entities";
import { ProductMapperMySQL } from "./mappers";
import { Connection } from "../../../connections/connection";

export class RepositoryMySQL implements IProductRepository {
  private userMapper: ProductMapperMySQL;
  constructor() {
    this.userMapper = new ProductMapperMySQL();
  }

  async getAll(): Promise<Array<ProductBaseModel | null> | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query(
        "SELECT * from netamx.Product;"
      );
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let result = data.map<ProductBaseModel>((r) => {
        return new ProductMapperMySQL().mapFrom(r as any);
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getById(id: any): Promise<ProductBaseModel | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: "SELECT * from netamx.Product where id=" + id + ";",
      });
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let entity = new ProductMapperMySQL().mapFrom(data[0] as any);
      console.log(entity);
      return entity;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  async getAllProduct(numPerPage: any, page: any):  Promise<ProductBaseModel | null>{
    try {
      let numRows;
      let queryPagination;
      let numPages;
      let skip = page * numPerPage;
      let limit = skip + ',' + numPerPage;
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: "SELECT count(*) as numRows from netamx.Product",
      });
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      numRows = data[0].numRows;
      numPages = Math.ceil(numRows / numPerPage);
      console.log('number of pages:', numPages);
      let [results2, fields2] = await Connection.mySQL2Pool.query({
        sql:  "SELECT * from netamx.Product order by ID desc limit=" + limit +";",
      });
      let data2 = Object.values(JSON.parse(JSON.stringify(results2)));
      let result2 = data2.map<ProductBaseModel>((r) => {
        return new ProductMapperMySQL().mapFrom(r as any);
      });
      result2

      
    } catch (error) {
      console.log(error)
      return null
    }

  }
}

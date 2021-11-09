import { Express, Request, Response, NextFunction } from "express";
import { ProductController } from "../../../controller/product";
export class getAllRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      var { query } = req;
      const numPerPage = req.query.npp || 10;
      const page = req.query.page || 1;
      const result = await new ProductController().getAllProduct(
        numPerPage,
        page
      );
      res.status(200).send(result);
    } catch (e) {}
  };

  public configureEndPoints(baseUrl: string) {
    this.server.get(`${baseUrl}product/`, this.getAll);
  }
}

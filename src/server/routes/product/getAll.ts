import { Express, Request, Response, NextFunction } from "express";
import { ProductController } from "../../../controller/product";
export class getAllRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const numPerPage = parseInt(req.params.npp, 10) || 1;
      const page = parseInt(req.params.page, 10) || 0;
      const result = await new ProductController().getAll();
      res.status(200).send(result);
    } catch (e) {}
  };

  public configureEndPoints(baseUrl: string) {
    this.server.get(`${baseUrl}product/`, this.getAll);
  }
}

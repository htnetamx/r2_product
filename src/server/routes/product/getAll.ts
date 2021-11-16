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
    } catch (e) { }
  };

  public configureEndPoints(baseUrl: string) {
    /**
     * @swagger
     * components:
     *  schemas:
     *    ProductBaseModel:
     *      type: object
     *      properties:
     *        Id:
     *          type: string
     *          description: The unique identifier of the product.
     *        Name:
     *          type: string
     *          description: Product name.
     *        Sku:
     *          type: string
     *          description: The set of numbers and letters, used to identify, locate and internally track a product.
     *        CreatedOnUtc:
     *          type: Date
     *          description: The product creation date in UTC format.
     *        UpdatedOnUtc:
     *          type: Date
     *          description: The product update date in UTC format
     *      example:
     *        Id: 1
     *        Name: Blanqueador Golondrina 1 Litro
     *        Sku: 1
     *        CreatedOnUtc: 2021-07-22T23:10:59.000Z
     *        UpdatedOnUtc: 2021-10-19T19:18:59.000Z
     */
    /**
     * @swagger
     * tags:
     *  name: Product
     *  description: Product endpoint
     */
    /**
     * @swagger
     * /product/:
     *  get:
     *    summary: Returns a list of products
     *    tags: [Product]
     *    responses:
     *      200:
     *        description: The list of products
     *        content:
     *          application/json:
     *            schema:
     *              type: array
     *              items:
     *                $ref: '#/components/schemas/ProductBaseModel'
     *      500:
     *        description: Some server error
     */
    this.server.get(`${baseUrl}product/`, this.getAll);
  }
}

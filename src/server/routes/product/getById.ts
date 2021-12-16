import { Express, Request, Response, NextFunction } from "express";
import { ProductController } from "../../../controller/product";

export class getByIdRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await new ProductController().getById(req.params.id);
      console.log("Result");
      console.log(result);
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
     *    ProductNotFound:
     *      type: object
     *      properties:
     *        msg:
     *          type: string
     *          description: A message for the not found product
     *      example:
     *        msg: Product was not found
     *
     *  parameters:
     *    productoId:
     *      in: path
     *      name: id
     *      required: true
     *      schema:
     *        type: string
     *      description: The unique identifier of the product
     */
    /**
     * @swagger
     * tags:
     *  name: Product
     *  description: Product endpoint
     */
    /**
     * @swagger
     * /product/{id}:
     *  get:
     *    summary: Get a product by Id
     *    tags: [Product]
     *    parameters:
     *      - $ref: '#/components/parameters/productoId'
     *    responses:
     *      200:
     *        description: The Found Product
     *        content:
     *          application/json:
     *            schema:
     *            $ref: '#/components/schemas/ProductBaseModel'
     *      404:
     *        description: the product was not found
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/ProductNotFound'
     */
    this.server.get(`${baseUrl}product/:id`, this.getById);
  }
}

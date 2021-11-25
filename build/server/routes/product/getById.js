"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByIdRoute = void 0;
const product_1 = require("../../../controller/product");
class getByIdRoute {
    constructor(server) {
        this.getById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield new product_1.ProductController().getById(req.params.id);
                console.log("Result");
                console.log(result);
                res.status(200).send(result);
            }
            catch (e) { }
        });
        this.server = server;
    }
    configureEndPoints(baseUrl) {
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
exports.getByIdRoute = getByIdRoute;

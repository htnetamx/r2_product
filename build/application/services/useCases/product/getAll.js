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
exports.getAllUseCase = void 0;
const product_1 = require("../../entities/product");
class getAllUseCase {
    constructor() {
        this._ProductService = new product_1.ProductService();
    }
    execute(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._ProductService.getAll();
            return result;
        });
    }
    execute2(numPerPage, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._ProductService.getAllProduct(numPerPage, page);
            return result;
        });
    }
}
exports.getAllUseCase = getAllUseCase;

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
exports.ProductService = void 0;
const mongoDB_1 = require("../../../data/db/mongoDB");
const mySQL_1 = require("../../../data/db/mySQL");
const base_1 = require("../../base");
class ProductService {
    constructor() {
        this.repos = {
            mongoDB: new mongoDB_1.RepositoryMongoDB(),
            mySQL: new mySQL_1.RepositoryMySQL(),
        };
    }
    //Conjunto de servicios bases de datos
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var promises = [];
                const entries = Object.entries(this.repos);
                entries.forEach((entry) => promises.push(entry[1].getAll()));
                let result_promises = yield Promise.all(promises);
                if (result_promises.length > 0) {
                    result_promises = result_promises.filter((i) => i !== null);
                    var succeses = [];
                    var errores = [];
                    result_promises.forEach((result, index) => result == null
                        ? errores.push(new base_1.ServiceResponse(result, entries[index][0], index))
                        : succeses.push(new base_1.ServiceResponse(result, entries[index][0], index)));
                    return errores.length > 0 ? null : result_promises[0];
                }
                else {
                    return null;
                }
            }
            catch (error) {
                //console.log(error);
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var promises = [];
                const entries = Object.entries(this.repos);
                entries.forEach((entry) => promises.push(entry[1].getById(id)));
                let result_promises = yield Promise.all(promises);
                if (result_promises.length > 0) {
                    result_promises = result_promises.filter((i) => i !== null);
                    var succeses = [];
                    var errores = [];
                    result_promises.forEach((result, index) => result == null
                        ? errores.push(new base_1.ServiceResponse(result, entries[index][0], index))
                        : succeses.push(new base_1.ServiceResponse(result, entries[index][0], index)));
                    console.log("r_promoesis: ", result_promises);
                    return errores.length > 0 ? null : result_promises[0];
                }
                else {
                    return null;
                }
            }
            catch (error) {
                //console.log(error);
                return null;
            }
        });
    }
    getAllProduct(numPerPage, page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var promises = [];
                const entries = Object.entries(this.repos);
                entries.forEach((entry) => promises.push(entry[1].getAllProduct(numPerPage, page)));
                let result_promises = yield Promise.all(promises);
                if (result_promises.length > 0) {
                    result_promises = result_promises.filter((i) => i !== null);
                    var succeses = [];
                    var errores = [];
                    result_promises.forEach((result, index) => result == null
                        ? errores.push(new base_1.ServiceResponse(result, entries[index][0], index))
                        : succeses.push(new base_1.ServiceResponse(result, entries[index][0], index)));
                    return errores.length > 0 ? null : result_promises[0];
                }
                else {
                    return null;
                }
            }
            catch (error) {
                //console.log(error);
                return null;
            }
        });
    }
}
exports.ProductService = ProductService;

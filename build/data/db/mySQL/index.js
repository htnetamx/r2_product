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
exports.RepositoryMySQL = void 0;
const mappers_1 = require("./mappers");
const connection_1 = require("../../../connections/connection");
class RepositoryMySQL {
    constructor() {
        this.userMapper = new mappers_1.ProductMapperMySQL();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                let [results, fields] = yield connection_1.Connection.mySQL2Pool.query(`select * from Product po left join Product_Picture_Mapping ppm on po.Id = ppm.ProductId 
            left join Picture pi on ppm.PictureId = pi.Id
            where po.MarkAsNew=0 && po.Deleted=0 && po.Deprecated=0;`);
                let data = Object.values(JSON.parse(JSON.stringify(results)));
                let result = data.map((r) => {
                    return new mappers_1.ProductMapperMySQL().mapFrom(r);
                });
                return result;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                let [results, fields] = yield connection_1.Connection.mySQL2Pool.query({
                    sql: "select * from Product po left join Product_Picture_Mapping ppm on po.Id = ppm.ProductId left join Picture pi on ppm.PictureId = pi.Id where po.Id=" +
                        id +
                        ";",
                });
                let data = Object.values(JSON.parse(JSON.stringify(results)));
                let entity = new mappers_1.ProductMapperMySQL().mapFrom(data[0]);
                console.log(entity);
                return entity;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getAllProduct(numPerPage, page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let numRows;
                let queryPagination;
                let numPages;
                let data;
                let skip = page * numPerPage;
                let limit = skip + "," + numPerPage;
                console.log(limit);
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                let [results, fields] = yield connection_1.Connection.mySQL2Pool.query({
                    sql: "SELECT count(*) as numRows from netamx.Product",
                });
                data = Object.values(JSON.parse(JSON.stringify(results))) || [];
                numRows = data[0].numRows;
                numPages = Math.ceil(numRows / numPerPage);
                console.log("number of pages:", numPages);
                let [results2, fields2] = yield connection_1.Connection.mySQL2Pool.query({
                    sql: "select * from Product po left join Product_Picture_Mapping ppm on po.Id = ppm.ProductId left join Picture pi on ppm.PictureId = pi.Id order by po.Id limit " +
                        limit +
                        ";",
                });
                let data2 = Object.values(JSON.parse(JSON.stringify(results2)));
                let result2 = data2.map((r) => {
                    return new mappers_1.ProductMapperMySQL().mapFrom(r);
                });
                return result2;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.RepositoryMySQL = RepositoryMySQL;

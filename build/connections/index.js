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
exports.DataBaseConnections = void 0;
const mongoose_1 = require("./mongoose");
const mySQL2_1 = require("./mySQL2");
const types_1 = require("../application/base/types");
class DataBaseConnections {
    constructor() {
        this.connections = [];
    }
    addConnection(type, input, options) {
        switch (type) {
            case types_1.ConnectionType.Mongoose: {
                this.connections.push(new mongoose_1.MongooseConnection(input, options));
                break;
            }
            case types_1.ConnectionType.MySQL2: {
                this.connections.push(new mySQL2_1.MySQL2Connection(input, options));
                break;
            }
            default:
                break;
        }
    }
    connectDataBases() {
        return __awaiter(this, void 0, void 0, function* () {
            var promises = [];
            var connect_results = [];
            //Set Promises Parallel
            this.connections.forEach((connection) => __awaiter(this, void 0, void 0, function* () {
                promises.push(connection.connect());
            }));
            connect_results = yield Promise.all(promises);
            /*
                //Syncro Connection
                //Define Connection Order
                var indexes=[];
                indexes.push(this.connections.map(c=>c.type).indexOf(ConnectionType.MySQL2));
                indexes.push(this.connections.map(c=>c.type).indexOf(ConnectionType.Mongoose));
                
                connect_results.push(await this.connections[indexes[0]].connect());
                connect_results.push(await this.connections[indexes[1]].connect());
                */
            return yield this.connections;
        });
    }
    disconnectDataBases() {
        return __awaiter(this, void 0, void 0, function* () {
            var promises = [];
            var connect_results = [];
            //Set Promises Parallel
            this.connections.forEach((connection) => __awaiter(this, void 0, void 0, function* () {
                promises.push(connection.disconnect());
            }));
            connect_results = yield Promise.all(promises);
            /*
                //Syncro Disconnection
                //Define Disconnection Order
                var indexes=[];
                indexes.push(this.connections.map(c=>c.type).indexOf(ConnectionType.MySQL2));
                indexes.push(this.connections.map(c=>c.type).indexOf(ConnectionType.Mongoose));
        
                connect_results.push(await this.connections[indexes[0]].disconnect());
                connect_results.push(await this.connections[indexes[1]].disconnect());
                
                */
            return this.connections;
        });
    }
}
exports.DataBaseConnections = DataBaseConnections;

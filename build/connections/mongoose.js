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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../application/base/types");
const connection_1 = require("./connection");
class MongooseConnection extends connection_1.Connection {
    constructor(input, options) {
        super(input, options);
        this.type = types_1.ConnectionType.Mongoose;
        this.uri = this.generateMongooseURI(input);
    }
    generateMongooseURI(input) {
        var auth;
        input.username
            ? input.password
                ? (auth = input.username + ":" + input.password + "@")
                : (auth = "")
            : (auth = "");
        return ("mongodb://" + auth + input.host + ":" + input.port + "/" + input.database);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.pool = (yield mongoose_1.default.connect(this.uri, this.options)).connection;
                this.uri = this.uri;
                connection_1.Connection.mongoosePool = this.pool;
                this.status = types_1.ConnectionStatus.Up;
                return true;
            }
            catch (error) {
                this.pool = null;
                this.uri = "";
                connection_1.Connection.mongoosePool = this.pool;
                this.status = types_1.ConnectionStatus.Error;
                return false;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.pool != null) {
                    yield this.pool.close();
                    this.pool = null;
                    this.uri = "";
                    connection_1.Connection.mongoosePool = null;
                    this.status = types_1.ConnectionStatus.Down;
                    return true;
                }
                else {
                    this.status = types_1.ConnectionStatus.Down;
                    return false;
                }
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.MongooseConnection = MongooseConnection;

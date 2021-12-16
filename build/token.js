"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const crypto = __importStar(require("crypto"));
const token_db_1 = require("./token-db");
class Token {
    generateToken(userId) {
        const newToken = { userId, tokenValue: this.generateHash(20) };
        token_db_1.TokenDB.addToken(newToken);
        return newToken.tokenValue;
    }
    revokeToken(userId) {
        return token_db_1.TokenDB.revokeToken(userId);
    }
    getTokenStatus(token) {
        return token_db_1.TokenDB.getTokenStatus(token);
    }
    generateHash(len) {
        return crypto
            .randomBytes(Math.ceil(len / 2))
            .toString("hex") // convert to hexadecimal format
            .slice(0, len)
            .toUpperCase(); // return required number of characters
    }
}
exports.Token = Token;

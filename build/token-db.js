"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenDB = void 0;
class TokenDB {
    static addToken(data) {
        this.tokenList = [...this.tokenList, data];
        return true;
    }
    static revokeToken(userId) {
        this.tokenList = this.tokenList.filter((data) => data.userId != userId);
        return true;
    }
    static getTokenStatus(token) {
        const result = this.tokenList.find((data) => data.tokenValue == token);
        if (result) {
            return true;
        }
        return false;
    }
}
exports.TokenDB = TokenDB;
TokenDB.tokenList = [];

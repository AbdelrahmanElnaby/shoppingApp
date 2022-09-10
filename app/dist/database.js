"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_DB_test, POSTGRES_USER, POSTGRES_PASSWORD, ENV } = process.env;
let db = POSTGRES_DB_test;
if (ENV == 'dev') {
    db = POSTGRES_DB;
}
const client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: db,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
});
exports.default = client;

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
exports.addProduct = exports.delOrder_products = exports.del = exports.update = exports.create = exports.show = exports.index = void 0;
const orders_1 = __importDefault(require("../models/orders"));
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_1.default.index();
        res.set({ authorization: req.headers.authorization });
        res.json(result);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
exports.index = index;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = yield orders_1.default.show(id);
        res.set({ authorization: req.headers.authorization });
        res.json(result);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
exports.show = show;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const result = yield orders_1.default.create(order);
        res.set({ authorization: req.headers.authorization });
        res.json(result);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const order = req.body;
        const result = yield orders_1.default.update(id, order);
        res.set({ authorization: req.headers.authorization });
        res.json(result);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
exports.update = update;
const del = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = yield orders_1.default.delete(id);
        res.set({ authorization: req.headers.authorization });
        res.json(result);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
exports.del = del;
const delOrder_products = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = yield orders_1.default.deleteOrderProducts(id);
        res.set({ authorization: req.headers.authorization });
        res.json(result);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
exports.delOrder_products = delOrder_products;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_id = Number(req.params.id);
        const product = req.body;
        const result = yield orders_1.default.addProduct(order_id, product);
        res.set({ authorization: req.headers.authorization });
        res.json(result);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
exports.addProduct = addProduct;

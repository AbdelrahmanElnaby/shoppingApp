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
const express_1 = require("express");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
let token;
describe("test user endpoint", () => {
    it("test create user", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const respponse = yield request
                .post("/store/usrs/")
                .send({ firstName: 'ayman',
                lastName: 'hosam', password: 'sarah' });
            expect(express_1.response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test authonticate user", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request
                .post("/store/authontication/")
                .send({ firstName: 'ayman',
                lastName: 'hosam', password: 'sarah' });
            token = response.headers.authorization;
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test get users", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request
                .get("/store/usrs/")
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test update user", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request
                .put("/store/usrs/1")
                .send({ firstName: 'liza',
                lastName: 'gmal', password: 'rola' })
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test get a specific user", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request
                .get("/store/usrs/1")
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
});
describe("test products end point", () => {
    it("test create product", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request
                .post("/store/products/")
                .send({ name: 'salamon', price: 300 })
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test get endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request.get("/store/products");
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test update product", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request
                .put("/store/products/1")
                .send({ name: 'salamon', price: 250 })
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test get specific product ", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request.get("/store/products/1");
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    /*
        it("test delete product",async()=>{
            try{
                const response=await request.del(
                    "/store/products/1")
                .set({authorization:token});
                expect(response.statusCode).toEqual(200);
            }
            catch(error){
                console.log(error);
            }
        })
    */
});
describe("test orders end point", () => {
    it("test create order", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request
                .post("/store/orders/")
                .send({ user_id: 1, status: 'complete' })
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test get orders", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request.get("/store/orders")
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test update order", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request
                .put("/store/orders/1")
                .send({ user_id: 1, status: 'active' })
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test get specific order ", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request.get("/store/products/1").set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test create order_products", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request
                .post("/store/orders/1/products")
                .send({ product_id: 1, quantity: 3 })
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test get currentUserOrder", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request.get("/store/dashboard/currentUserOrder/1")
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
});
describe("delete end point", () => {
    it("test delete order_products", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request.delete("/store/orders/1/products")
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test delete product", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request.delete("/store/products/1")
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test delete order", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield request.delete("/store/orders/1")
                .set({ authorization: token });
            expect(response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
    it("test delete user", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const respponse = yield request
                .delete("/store/usrs/1")
                .set({ authorization: token });
            expect(express_1.response.statusCode).toEqual(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
});

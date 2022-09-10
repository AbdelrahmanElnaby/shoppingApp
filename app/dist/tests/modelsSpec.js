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
const usrs_1 = __importDefault(require("../models/usrs"));
const products_1 = __importDefault(require("../models/products"));
const orders_1 = __importDefault(require("../models/orders"));
const authontication_1 = __importDefault(require("../services/authontication"));
const dashboard_1 = __importDefault(require("../services/dashboard"));
let user, product, order;
describe("test products model", () => {
    it("test : create method defiend", () => {
        expect(products_1.default.create).toBeDefined();
    });
    it("test : index method defiend", () => {
        expect(products_1.default.index).toBeDefined();
    });
    it("test : update method defiend", () => {
        expect(products_1.default.update).toBeDefined();
    });
    it("test : show method defiend", () => {
        expect(products_1.default.show).toBeDefined();
    });
    it("test : delete method defiend", () => {
        expect(products_1.default.delete).toBeDefined();
    });
    it("test : create method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield products_1.default.create({ name: 'Juice', price: 10 });
        product = Number(result.id);
        expect(result.name)
            .toEqual('Juice');
    }));
    it("test : index method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield products_1.default.index();
        expect(result.length)
            .toBeGreaterThan(0);
    }));
    it("test : update method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield products_1.default.update(product, { name: 'salamon', price: 20 });
        expect(result.name)
            .toEqual('salamon');
    }));
    it("test : show method work", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield (yield products_1.default.show(product)).price)
            .toEqual(20);
    }));
});
describe("test usrs model", () => {
    it("test : create method defiend", () => {
        expect(usrs_1.default.create).toBeDefined();
    });
    it("test : index method defiend", () => {
        expect(usrs_1.default.index).toBeDefined();
    });
    it("test : update method defiend", () => {
        expect(usrs_1.default.update).toBeDefined();
    });
    it("test : show method defiend", () => {
        expect(usrs_1.default.show).toBeDefined();
    });
    it("test : delete method defiend", () => {
        expect(usrs_1.default.delete).toBeDefined();
    });
    it("test : create method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield usrs_1.default.create({ firstName: 'alaa', lastName: 'sawsan', password: 'dsfsdgs' });
        user = Number(result.id);
        expect(result.id)
            .toBeTruthy();
    }));
    it("test : index method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield usrs_1.default.index();
        expect(result.length)
            .toBeGreaterThan(0);
    }));
    it("test : update method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield usrs_1.default.update(user, { firstName: 'alice', lastName: 'sawsan', password: 'dsfsdgs' });
        expect(result.id)
            .toBeTruthy();
    }));
    it("test : show method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield products_1.default.show(user);
        expect(result.id)
            .toEqual(user);
    }));
});
describe("test orders model", () => {
    it("test : create method defiend", () => {
        expect(orders_1.default.create).toBeDefined();
    });
    it("test : index method defiend", () => {
        expect(orders_1.default.index).toBeDefined();
    });
    it("test : update method defiend", () => {
        expect(orders_1.default.update).toBeDefined();
    });
    it("test : show method defiend", () => {
        expect(orders_1.default.show).toBeDefined();
    });
    it("test : delete method defiend", () => {
        expect(orders_1.default.delete).toBeDefined();
    });
    it("test : addProducts method defiend", () => {
        expect(orders_1.default.addProduct).toBeDefined();
    });
    it("test : create method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orders_1.default.create({ user_id: user, status: 'complete' });
        order = Number(result.id);
        expect(result.id)
            .toEqual(order);
    }));
    it("test : index method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orders_1.default.index();
        expect(result.length)
            .toBeGreaterThan(0);
    }));
    it("test : update method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orders_1.default.update(order, { user_id: user, status: 'active' });
        expect(result.status)
            .toEqual('active');
    }));
    it("test : show method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orders_1.default.show(5);
        expect(result)
            .toBeUndefined();
    }));
    it("test : addProduct method work", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orders_1.default.addProduct(order, { product_id: product, quantity: 3 });
        expect(result.quantity)
            .toEqual(3);
    }));
});
describe("testing authontication,model", () => {
    it("test : authonticate method defiend", () => {
        expect(authontication_1.default.authonticate).toBeDefined();
    });
    it("test : authonticate method true login", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { firstName: 'alice', lastName: 'sawsan',
            password: "dsfsdgs" };
        const result = yield authontication_1.default.authonticate(user);
        expect(result[0]).toEqual(true);
    }));
    it("test : authonticate method false login", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { firstName: 'alice', lastName: 'sawsan',
            password: "rgrgr" };
        const result = yield authontication_1.default.authonticate(user);
        expect(result[0]).toEqual(false);
    }));
});
describe("test : dashboard Model", () => {
    it("test: currrentuserOrder method defiend", () => {
        expect(dashboard_1.default.currentUserOrder).toBeDefined();
    });
    it("test : currrentuserOrder method return products", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const result = yield dashboard_1.default.currentUserOrder(order);
        expect((_a = result.products) === null || _a === void 0 ? void 0 : _a.length).toBeGreaterThan(0);
    }));
});
describe("test : delete ethods ", () => {
    it("test: delete order_products", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orders_1.default.deleteOrderProducts(order);
        expect(Number(result.order_id)).toEqual(order);
    }));
    it("test : delete usrs", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield usrs_1.default.delete(user);
        expect(result.id).toEqual(user);
    }));
    it("test : delete orders", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orders_1.default.delete(order);
        expect(result.id).toEqual(order);
    }));
    it("test : delete products", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield products_1.default.delete(product);
        expect(result.id).toEqual(product);
    }));
});

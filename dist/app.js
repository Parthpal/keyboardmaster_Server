"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./app/modules/products/product.route");
const cart_route_1 = require("./app/modules/cart/cart.route");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: ['http://localhost:5173', 'https://keyboard-master-client-side.vercel.app'], credentials: true }));
// application routes
//app.use('/api/v1', router);
app.get('/', (req, res) => {
    res.send('Hi , keyboard lovers');
});
app.use('/', product_route_1.ProductRoutes);
app.use('/', cart_route_1.cartRoutes);
//Not Found
// app.use(notFound);
exports.default = app;

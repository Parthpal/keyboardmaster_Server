"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.get('/products', product_controller_1.productControllers.getAllProducts);
router.get('/products/:id', product_controller_1.productControllers.getProductsByIdC);
router.put('/productsQuantityUpdate', product_controller_1.productControllers.updateProducts);
router.put('/productsUpdate/:id', product_controller_1.productControllers.updateProductDataC);
router.post('/addProduct', product_controller_1.productControllers.addProduct);
router.delete('/deleteProductItem/:id', product_controller_1.productControllers.removeProductItemsC);
exports.ProductRoutes = router;

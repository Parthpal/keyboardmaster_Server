"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
// Route for adding a new product
router.post('/addToCart', cart_controller_1.cartControllers.addCart);
// Route for fetching all cart products
router.get('/addToCart', cart_controller_1.cartControllers.getAllCartData);
router.put('/addToCart/:id', cart_controller_1.cartControllers.updateAddQuantityCartC);
router.put('/addToCartDec/:id', cart_controller_1.cartControllers.updateDecrementQuantityCartC);
router.delete('/deleteItem/:id', cart_controller_1.cartControllers.removeCartItemsC);
exports.cartRoutes = router;

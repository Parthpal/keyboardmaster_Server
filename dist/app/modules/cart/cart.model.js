"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Create a Mongoose Schema for the product
const cartSchema = new mongoose_1.default.Schema({
    product_id: { type: String, required: true },
    product_image: { type: String, required: true },
    product_title: { type: String, required: true },
    product_brand: { type: String, required: true },
    product_available_quantity: { type: Number, required: true },
    product_price: { type: Number, required: true },
    product_rating: { type: Number, required: false }, // Optional
    product_purchase_quantity: { type: Number, required: false }, // Optional
    product_description: { type: String, required: true }
});
// Export the model
exports.cartModel = mongoose_1.default.model('Cart', cartSchema);

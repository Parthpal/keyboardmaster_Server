"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
// Define a Zod schema for product validation
const productValidationSchema = zod_1.default.object({
    product_id: zod_1.default.string(),
    product_image: zod_1.default.string().url(),
    product_title: zod_1.default.string(),
    product_brand: zod_1.default.string(),
    product_available_quantity: zod_1.default.number().int(),
    product_purchase_quantity: zod_1.default.number().int(),
    product_price: zod_1.default.number().positive(),
    product_rating: zod_1.default.number().min(0).max(5).optional(), // Optional rating
    product_description: zod_1.default.string()
});
// Create a function for validation
const validateProduct = (data) => {
    return productValidationSchema.safeParse(data); // Use safeParse to handle validation errors
};
exports.default = validateProduct;

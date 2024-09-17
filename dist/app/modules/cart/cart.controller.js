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
exports.cartControllers = void 0;
const cart_service_1 = require("./cart.service");
const cart_validation_1 = __importDefault(require("./cart.validation"));
const zod_1 = require("zod");
const addCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate the incoming request data
        const validationResult = (0, cart_validation_1.default)(req.body);
        // Check if validation resulted in errors
        if (!validationResult.success) {
            // Assuming `validateProduct` returns a ZodError
            if (validationResult.error instanceof zod_1.ZodError) {
                const errorMessages = validationResult.error.errors.map(err => err.message);
                return res.status(400).json({ errors: errorMessages });
            }
            // Handle other types of errors if needed
            return res.status(400).json({ errors: ['Invalid request'] });
        }
        // Proceed to create cart entry in the database
        const product = yield cart_service_1.cartServices.createCartIntoDb(req.body);
        res.status(201).json({
            message: 'Product added to cart successfully',
            product,
        });
    }
    catch (err) {
        // Handle unexpected errors
        console.error(err); // Log the error for debugging purposes
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
});
const getAllCartData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_service_1.cartServices.getAllCartService();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve cart' });
    }
});
const updateAddQuantityCartC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_service_1.cartServices.updateAddCartQuantity(req.params.id);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve cart' });
    }
});
const updateDecrementQuantityCartC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_service_1.cartServices.updateDecrementCartQuantity(req.params.id);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve cart' });
    }
});
const removeCartItemsC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_service_1.cartServices.removeCartItems(req.params.id);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to delete cart' });
    }
});
exports.cartControllers = {
    addCart,
    getAllCartData,
    updateAddQuantityCartC,
    updateDecrementQuantityCartC,
    removeCartItemsC
};

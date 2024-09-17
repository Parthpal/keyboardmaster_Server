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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_service_1.ProductServices.createProductIntoDb(req.body); // Save product using service
        res.status(201).json({
            message: 'Product added',
            product,
        });
    }
    catch (err) {
        // Type check and handle different types of errors
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProducts();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve keyboards' });
    }
});
const updateProductDataC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.updateProductData(req.params.id, req.body);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve cart' });
    }
});
const removeProductItemsC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedItem = yield product_service_1.ProductServices.deleteProduct(req.params.id);
        return res.status(200).json(deletedItem);
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve cart' });
    }
});
const getProductsByIdC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getProductsByIdService(req.params.id);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve keyboards' });
    }
});
const updateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.updateProducts();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve keyboards' });
    }
});
exports.productControllers = {
    getAllProducts, removeProductItemsC,
    updateProducts, addProduct, getProductsByIdC, updateProductDataC
};

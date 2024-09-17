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
exports.ProductServices = void 0;
const cart_model_1 = require("../cart/cart.model");
const product_model_1 = require("./product.model");
const createProductIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const addProduct = yield product_model_1.KeyboardModel.create(payload);
    return addProduct;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.KeyboardModel.find();
    return result;
});
const getProductsByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.KeyboardModel.findById(id);
    return result;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedItem = yield product_model_1.KeyboardModel.findByIdAndDelete(id); // Find the document by _id
    //console.log(deletedItem);
    if (!deletedItem) {
        return { message: 'Item not found' };
    }
    return { message: 'Item deleted successfully', data: deletedItem };
});
const updateProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result1 = yield cart_model_1.cartModel.find();
    const cartIt = yield result1.map(cartItems => {
        console.log(cartItems.product_id, cartItems.product_purchase_quantity);
        const result2 = product_model_1.KeyboardModel.findByIdAndUpdate({ _id: cartItems.product_id }, { $inc: { available_quantity: -cartItems.product_purchase_quantity } }, { new: true })
            .then((result2) => __awaiter(void 0, void 0, void 0, function* () {
            //  console.log(result2);
            yield cart_model_1.cartModel.findByIdAndDelete(cartItems._id);
        }));
    });
});
const updateProductData = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, data);
    const result = product_model_1.KeyboardModel.findByIdAndUpdate({ _id: id }, // Find the document by _id
    data, { new: true })
        .then((result) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(result);
        // await cartModel.findByIdAndDelete(cartItems._id)
    }));
    return result;
});
exports.ProductServices = {
    getAllProducts, deleteProduct,
    updateProducts, createProductIntoDb, getProductsByIdService, updateProductData
};

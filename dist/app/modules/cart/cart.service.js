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
exports.cartServices = void 0;
const cart_model_1 = require("./cart.model");
const createCartIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(payload);   
    const result = yield cart_model_1.cartModel.find();
    //console.log(result);
    const filteredDataBoolean = result.some(cartItems => cartItems.product_id === payload.product_id);
    const filteredDataArray = result.filter(cartItems => cartItems.product_id === payload.product_id);
    if (!filteredDataBoolean) {
        const addCart = yield cart_model_1.cartModel.create(payload);
        return addCart;
    }
    else {
        const result = yield cart_model_1.cartModel.findByIdAndUpdate({ _id: filteredDataArray[0]._id }, { $inc: { product_purchase_quantity: 1 } }, { new: true });
        return result;
    }
});
const getAllCartService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.cartModel.find();
    return result;
});
const updateAddCartQuantity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = cart_model_1.cartModel.findByIdAndUpdate({ _id: id }, // Find the document by _id
    { $inc: { product_purchase_quantity: 1 } }, // Decrement product_purchase_quantity by 1
    { new: true });
    console.log(result);
    return result;
});
const updateDecrementCartQuantity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = cart_model_1.cartModel.findByIdAndUpdate({ _id: id }, // Find the document by _id
    { $inc: { product_purchase_quantity: -1 } }, // Decrement product_purchase_quantity by 1
    { new: true });
    console.log(result);
    return result;
});
const removeCartItems = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedItem = yield cart_model_1.cartModel.findByIdAndDelete(id); // Find the document by _id
    // console.log(deletedItem);
    if (!deletedItem) {
        return { message: 'Item not found' };
    }
    return { message: 'Item deleted successfully', data: deletedItem };
});
exports.cartServices = {
    createCartIntoDb,
    getAllCartService,
    updateAddCartQuantity,
    updateDecrementCartQuantity,
    removeCartItems
};

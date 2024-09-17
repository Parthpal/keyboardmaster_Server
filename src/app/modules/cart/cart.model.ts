import mongoose from "mongoose";
import { cart } from "./cart.interface";

// Create a Mongoose Schema for the product
const cartSchema = new mongoose.Schema({
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
export const cartModel=mongoose.model<cart>('Cart',cartSchema)

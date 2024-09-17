import mongoose, { Schema } from "mongoose";
import { Keyboard } from "./product.interface";

const KeyboardSchema: Schema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    brand: { type: String, required: true },
    available_quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true }
  });
  
  export const KeyboardModel = mongoose.model<Keyboard>('Keyboard', KeyboardSchema);
import { cart } from "./cart.interface";
import { cartModel } from "./cart.model";

const createCartIntoDb=async(payload:cart)=>{
   // console.log(payload);   
    const result=await cartModel.find();
    //console.log(result);
    const filteredDataBoolean=result.some(cartItems=>cartItems.product_id===payload.product_id)
    const filteredDataArray=result.filter(cartItems=>cartItems.product_id===payload.product_id)
    if(!filteredDataBoolean){
    const addCart=await cartModel.create(payload);
    return addCart
    }
    else {
        const result = await cartModel.findByIdAndUpdate(
            {_id:filteredDataArray[0]._id},
            {$inc:{ product_purchase_quantity: 1 }},
            {new:true},
        );
        return result;
    }
}
const getAllCartService=async () => {
    const result=await cartModel.find();
    return result;
}

const updateAddCartQuantity=async(id:string)=>{
    const result=cartModel.findByIdAndUpdate(
        { _id: id },  // Find the document by _id
        { $inc: { product_purchase_quantity: 1 } },  // Decrement product_purchase_quantity by 1
        { new: true },  // Return the updated document
    )
   console.log(result);
  return result;
}
const updateDecrementCartQuantity=async(id:string)=>{
    const result=cartModel.findByIdAndUpdate(
        { _id: id },  // Find the document by _id
        { $inc: { product_purchase_quantity: -1 } },  // Decrement product_purchase_quantity by 1
        { new: true },  // Return the updated document
    )
   console.log(result);
  return result;
}
const removeCartItems=async(id:string)=>{
    const deletedItem=await cartModel.findByIdAndDelete(id)  // Find the document by _id
   // console.log(deletedItem);
    if (!deletedItem) {
        return { message: 'Item not found' };
      }
    return { message: 'Item deleted successfully', data: deletedItem };   
}

export const cartServices={
    createCartIntoDb,
    getAllCartService,
    updateAddCartQuantity,
    updateDecrementCartQuantity,
    removeCartItems
}
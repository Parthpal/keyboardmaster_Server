import { cartModel } from "../cart/cart.model";
import { Keyboard } from "./product.interface";
import { KeyboardModel } from "./product.model"

const createProductIntoDb=async(payload:Keyboard)=>{
    console.log(payload);   
    const addProduct=await KeyboardModel.create(payload);
    return addProduct
 }

const getAllProducts=async()=>{
    const result=await KeyboardModel.find();
    return result;
}
const getProductsByIdService=async(id:string)=>{
    const result=await KeyboardModel.findById(id);
    return result;
}
const deleteProduct=async(id:string)=>{
    const deletedItem=await KeyboardModel.findByIdAndDelete(id)  // Find the document by _id
    //console.log(deletedItem);
    if (!deletedItem) {
        return { message: 'Item not found' };
      }
    return { message: 'Item deleted successfully', data: deletedItem };  
}
const updateProducts=async()=>{
    const result1=await cartModel.find();
    const cartIt=await result1.map(cartItems=>{
        console.log(cartItems.product_id,cartItems.product_purchase_quantity);
        const result2=KeyboardModel.findByIdAndUpdate(
            {_id:cartItems.product_id},
            { $inc: {available_quantity: -cartItems.product_purchase_quantity } },
            {new:true}
        )
        .then(async(result2)=>{
          //  console.log(result2);
          await cartModel.findByIdAndDelete(cartItems._id)
            
        })
    } )
}
const updateProductData=async(id:string,data:Keyboard)=>{
    console.log(id,data);
    
    const result=KeyboardModel.findByIdAndUpdate(
        { _id: id },  // Find the document by _id
         data,
        { new: true },  // Return the updated document
    )
    .then(async(result)=>{
        // console.log(result);
       // await cartModel.findByIdAndDelete(cartItems._id)
          
      })

  return result;
}
export const ProductServices={
    getAllProducts,deleteProduct,
    updateProducts,createProductIntoDb,getProductsByIdService,updateProductData
}
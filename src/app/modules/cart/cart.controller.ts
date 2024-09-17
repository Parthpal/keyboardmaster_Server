import { Request, Response } from "express";
import { cartServices } from "./cart.service";
import validateProduct from "./cart.validation";
import { cartModel } from "./cart.model";
import { ZodError } from "zod";

const addCart = async (req: Request, res: Response) => {
  try {
    // Validate the incoming request data
    const validationResult = validateProduct(req.body);

    // Check if validation resulted in errors
    if (!validationResult.success) {
      // Assuming `validateProduct` returns a ZodError
      if (validationResult.error instanceof ZodError) {
        const errorMessages = validationResult.error.errors.map(err => err.message);
        return res.status(400).json({ errors: errorMessages });
      }
      // Handle other types of errors if needed
      return res.status(400).json({ errors: ['Invalid request'] });
    }

    // Proceed to create cart entry in the database
    const product = await cartServices.createCartIntoDb(req.body);

    res.status(201).json({
      message: 'Product added to cart successfully',
      product,
    });
  } catch (err) {
    // Handle unexpected errors
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

const getAllCartData=async(req:Request,res:Response)=>{   
  try {
      const result=await cartServices.getAllCartService();
      return res.status(200).json(result);
  } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve cart' });
  }
}
const updateAddQuantityCartC=async(req:Request,res:Response)=>{
  try {
    const result=await cartServices.updateAddCartQuantity(req.params.id)
    return res.status(200).json(result);
} catch (error) {
    return res.status(500).json({ error: 'Failed to retrieve cart' });
}
}
const updateDecrementQuantityCartC=async(req:Request,res:Response)=>{
  try {
    const result=await cartServices.updateDecrementCartQuantity(req.params.id)
    return res.status(200).json(result);
} catch (error) {
    return res.status(500).json({ error: 'Failed to retrieve cart' });
}
}
const removeCartItemsC=async(req:Request,res:Response)=>{
  try {
    const result=await cartServices.removeCartItems(req.params.id);
    return res.status(200).json(result);
} catch (error) {
    return res.status(500).json({ error: 'Failed to delete cart' });
}
}
export const cartControllers={
addCart,
getAllCartData,
updateAddQuantityCartC,
updateDecrementQuantityCartC,
removeCartItemsC
}

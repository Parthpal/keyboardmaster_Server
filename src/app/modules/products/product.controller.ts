import { Request, Response } from "express";
import { ProductServices } from "./product.service"
import { KeyboardModel } from "./product.model";


const addProduct = async (req:Request, res:Response) => {
    try {
      const product = await ProductServices.createProductIntoDb(req.body); // Save product using service
      res.status(201).json({
        message: 'Product added',
        product,
      });
    } catch (err) {
        // Type check and handle different types of errors
        if (err instanceof Error) {
          res.status(500).json({ error: err.message });
        } else {
          res.status(500).json({ error: 'An unexpected error occurred' });
        }
      }
  };
const getAllProducts=async(req:Request,res:Response)=>{   
    try {
        const result=await ProductServices.getAllProducts();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve keyboards' });
    }
}
const updateProductDataC=async(req:Request,res:Response)=>{
    try {  
      const result=await ProductServices.updateProductData(req.params.id,req.body)
      return res.status(200).json(result);
  } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve cart' });
  }
  }
  const removeProductItemsC=async(req:Request,res:Response)=>{
    try {  
        const deletedItem=await ProductServices.deleteProduct(req.params.id);
        return res.status(200).json(deletedItem);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve cart' });
    }
}
const getProductsByIdC=async(req:Request,res:Response)=>{   
    try {
        const result=await ProductServices.getProductsByIdService(req.params.id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve keyboards' });
    }
}
const updateProducts=async (req:Request,res:Response) => {
    try {
        const result=await ProductServices.updateProducts();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve keyboards' });
    } 
}

export const productControllers={
    getAllProducts,removeProductItemsC,
    updateProducts,addProduct,getProductsByIdC,updateProductDataC
}
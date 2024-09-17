import express from 'express'
import { productControllers } from './product.controller';
const router=express.Router();

router.get('/products',productControllers.getAllProducts);
router.get('/products/:id',productControllers.getProductsByIdC);
router.put('/productsQuantityUpdate',productControllers.updateProducts);
router.put('/productsUpdate/:id',productControllers.updateProductDataC);
router.post('/addProduct',productControllers.addProduct);
router.delete('/deleteProductItem/:id',productControllers.removeProductItemsC)
export const ProductRoutes=router;
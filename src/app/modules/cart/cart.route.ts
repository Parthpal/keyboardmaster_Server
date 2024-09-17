import express from 'express'
import { cartControllers } from './cart.controller';

const router = express.Router();

// Route for adding a new product
router.post('/addToCart', cartControllers.addCart);
// Route for fetching all cart products
router.get('/addToCart', cartControllers.getAllCartData);
router.put('/addToCart/:id', cartControllers.updateAddQuantityCartC);
router.put('/addToCartDec/:id', cartControllers.updateDecrementQuantityCartC);
router.delete('/deleteItem/:id',cartControllers.removeCartItemsC)
export const cartRoutes=router;
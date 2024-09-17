import z from 'zod'
import { cart } from './cart.interface';

// Define a Zod schema for product validation
const productValidationSchema = z.object({
  product_id: z.string(),
  product_image: z.string().url(),
  product_title: z.string(),
  product_brand: z.string(),
  product_available_quantity: z.number().int(),
  product_purchase_quantity: z.number().int(),
  product_price: z.number().positive(),
  product_rating: z.number().min(0).max(5).optional(),  // Optional rating
  product_description: z.string()
});

// Create a function for validation
const validateProduct = (data:cart) => {
    return productValidationSchema.safeParse(data); // Use safeParse to handle validation errors
  };

  export default validateProduct;
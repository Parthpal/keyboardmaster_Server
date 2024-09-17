import { z } from 'zod';

export const KeyboardSchema = z.object({
  image: z.string().url(),
  title: z.string().min(1),
  brand: z.string().min(1),
  available_quantity: z.number().int().min(0),
  price: z.number().min(0),
  rating: z.number().min(0).max(5),
  description: z.string().min(1).max(1000)
});

// To validate data
// const result = KeyboardSchema.safeParse(data);
// if (!result.success) { console.error(result.error); }

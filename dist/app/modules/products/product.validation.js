"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardSchema = void 0;
const zod_1 = require("zod");
exports.KeyboardSchema = zod_1.z.object({
    image: zod_1.z.string().url(),
    title: zod_1.z.string().min(1),
    brand: zod_1.z.string().min(1),
    available_quantity: zod_1.z.number().int().min(0),
    price: zod_1.z.number().min(0),
    rating: zod_1.z.number().min(0).max(5),
    description: zod_1.z.string().min(1).max(1000)
});
// To validate data
// const result = KeyboardSchema.safeParse(data);
// if (!result.success) { console.error(result.error); }

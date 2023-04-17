import { z } from "zod";

export const zodProductSize = z.union([
  z.literal("P"),
  z.literal("M"),
  z.literal("G"),
]);
export type ProductSize = z.infer<typeof zodProductSize>;

export const zodProductId = z.string();
export type ProductId = z.infer<typeof zodProductId>;

export const zodProduct = z.object({
  productId: zodProductId,
  productName: z.string(),

  price: z.number(),
  priceSale: z.number().optional(),
  availableSizes: z.set(zodProductSize),
});
export type Product = z.infer<typeof zodProduct>;

export const zodProductFilters = z.object({
  minPrice: z.number(),
  maxPrice: z.number().nullable(),
  sorting: z.union([
    z.literal("lowestPrice"),
    z.literal("highestPrice"),
    z.literal("bestSale"),
    z.literal("relevance"),
    z.literal("newest"),
  ]),
});
export type ProductFilters = z.infer<typeof zodProductFilters>;

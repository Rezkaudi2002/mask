import { TProduct, TNewProduct } from "@/types/product.type";

export const isTProduct = (product: TProduct | TNewProduct): product is TProduct => {
  return "subTitle" in product;
};

export const isNewProduct = (product: TProduct | TNewProduct): product is TNewProduct => {
  return "titleInHero" in product;
};
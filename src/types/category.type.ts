import { TProduct } from "./product.type";

export type TCategory = {
  id: number;
  title: string;
  items: TProduct[];
  companies: TCompany[];
  purchaseItems: TPurchaseItem[];
};

export type TCompany = {
  jp: string;
  en: string;
  link: string;
  imageSrc: string;
};

export type TPurchaseItem = {
  title: string;
  imageSrc: string;
};

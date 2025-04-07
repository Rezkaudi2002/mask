import { TMaker } from "./maker.type";

export type TProduct = {
  id: number;
  title: string;
  category: string;
  subTitle: string;
  description: string;
  imagesGallery: TImage[]
  makers: TMaker[]
}

export type TImage = {
  title: string,
  imageSrc: string
}
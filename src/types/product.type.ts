import { TMaker } from "./maker.type";

export type TProduct = {
  id: number;
  title: string;
  imagesGallery: { title: string, ImageSrc: string }[]
  makers: TMaker[]
}
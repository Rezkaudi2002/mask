import { TMaker } from "./maker.type";

export type TProduct = {
  id: number;
  title: string;
  category: string;
  subTitle: string;
  description: string;
  kinds: string[];
  merit: string[];
  tips: string[];
  cameraImagesGallery: TImage[]
  webImagesGallery: TImage[]
  makers: TMaker[]
}

export type TImage = {
  title: string,
  imageSrc: string
}
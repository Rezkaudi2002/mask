import { TImage } from "@/types/product.type";
import Image from "next/image";

interface IImagesGalleryProps {
  images: TImage[];
}

const ImagesGallery = ({ images }: IImagesGalleryProps) => {
  return (
    <section>
      <Image
        key={images[0].title}
        src={images[0].imageSrc}
        width={200}
        height={200}
        alt={`${images[0].title} image product`}
      />
      <div className="flex gap-2">
        {images.map((image) => (
          <Image
            key={image.title}
            src={image.imageSrc}
            width={120}
            height={120}
            alt={`${image.title} image product`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImagesGallery;

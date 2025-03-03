import Image from "next/image";

interface IPurchaseCategoryCardProps {
  image: string;
  title: string;
}

const PurchaseCategoryCard = ({
  title,
  image,
}: IPurchaseCategoryCardProps) => {
  return (
    <div className="w-[47%] md:w-[30%] lg:w-[22%]">
      <div className="p-[20px_24px_60px_24px] lg:p-[25px_58px_65px_58px] min-h-[240px] lg:min-h-[258px] bg-white relative">
        <div className="w-full flex justify-center items-center">
          <Image
            src={image}
            alt={title}
            width={190}
            height={190}
            loading="lazy"
            className="w-auto h-[140px] lg:w-auto lg:h-[190px]"
          />
        </div>
        <p className="max-h-[100px] px-[10px] lg:px-[6px] py-[7px] lg:py-[12px] absolute bottom-0 left-0 w-full text-[#B81122] text-center font-semibold text-[20px] lg:text-[30px] leading-[27px] lg:leading-[30px] overflow-hidden text-ellipsis line-clamp-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PurchaseCategoryCard;

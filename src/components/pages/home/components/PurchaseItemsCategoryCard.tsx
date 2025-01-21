import Image from "next/image";

interface IPurchaseItemsCategoryCardProps {
  id: number;
  image: string;
  title: string;
}

const PurchaseItemsCategoryCard = ({
  id,
  title,
  image,
}: IPurchaseItemsCategoryCardProps) => {
  return (
    <button
      key={id}
      className="px-[16px] py-[6px] text-center border-[2px] border-[#111111] flex justify-between items-center bg-white relative bg-[url(/images/home-page/doted-bg-btn.svg)] bg-cover"
    >
      {/* Content div with relative positioning to appear above the background */}
      <div className="relative z-10 w-full flex justify-between items-center gap-x-2">
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="w-[26px] h-[26px] lg:w-[40px] lg:h-[40px]"
        />
        <h3 className="text-[12px] lg:text-[16px] leading-[18px] lg:leading-[24px] font-noto text-[#111111] font-black">
          {title}
        </h3>
      </div>
    </button>
  );
};

export default PurchaseItemsCategoryCard;

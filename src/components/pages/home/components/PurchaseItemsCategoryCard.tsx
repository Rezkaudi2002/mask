import Image from "next/image";

interface IPurchaseItemsCategoryCardProps {
  id: number;
  image: string;
  title: string;
  activeCategory: string;
  changeCategory: (title: string) => void;
}

const PurchaseItemsCategoryCard = ({
  id,
  title,
  image,
  activeCategory,
  changeCategory,
}: IPurchaseItemsCategoryCardProps) => {
  return (
    <button
      key={id}
      className={`px-[16px] py-[6px] text-center border-[2px] flex justify-between items-center relative ${
        activeCategory === title
          ? "border-[#990E1C] text-white gradient-red"
          : "text-[#111111] bg-white bg-[url(/images/home-page/doted-bg-btn.svg)] bg-cover border-[#111111]"
      }`}
      onClick={() => changeCategory(title)}
    >
      <div className="relative z-10 w-full flex justify-between items-center gap-x-2">
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="w-[26px] h-[26px] lg:w-[40px] lg:h-[40px]"
        />
        <label
          className={`text-[12px] lg:text-[16px] leading-[18px] lg:leading-[24px] font-noto font-black flex-1 text-center  cursor-pointer ${
            activeCategory === title ? "text-shadow-red" : ""
          }`}
        >
          {title}
        </label>
      </div>
    </button>
  );
};

export default PurchaseItemsCategoryCard;

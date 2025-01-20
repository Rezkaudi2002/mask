import Image from "next/image";

interface IPurchasedItemsProps {}

const PurchasedItems = ({}: IPurchasedItemsProps) => {
  return (
    <section className="relative py-[50px] px-5">
      <Image
        src="/bg-items.jpg"
        alt="banner-right-bg"
        fill
        className="object-cover opacity-10"
      />
      <div className="absolute h-full w-full left-0 top-0 bg-[#FFE0E3] -z-10"></div>
      <h2 className="text-[30px] leading-[45px] font-black text-center font-noto bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent">
        買取品目一覧
      </h2>
    </section>
  );
};

export default PurchasedItems;

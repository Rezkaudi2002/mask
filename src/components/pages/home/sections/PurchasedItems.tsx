import Image from "next/image";
import data from "@/content/home/purchasedItems.json";

interface IPurchasedItemsProps {}

const PurchasedItems = ({}: IPurchasedItemsProps) => {
  return (
    <section className="relative py-[50px] md:py-[80px] lg:py-[120px] px-5 md:px-[50px] lg:px-[160px]">
      <Image
        src="/images/home-page/bg-items.jpg"
        alt="banner-right-bg"
        fill
        className="object-cover opacity-10 -z-10"
      />
      {/* overlay */}
      <div className="absolute h-full w-full left-0 top-0 bg-[#FFE0E3] -z-20"></div>
      <h2 className="text-[30px] md:text-[50px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black text-center font-noto bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent">
        買取品目一覧
      </h2>
      {/* filter */}
      <div className="mt-[40px] md:mt-[45px] lg:mt-[50px] mb-[24px] md:mb-[28px] lg:mb-[32px] w-[75%] md:w-[85%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-auto">
        {data.filter.map((item) => (
          <div
            key={item.id}
            className="px-[16px] py-[6px] text-center border-[2px] border-[#111111] flex justify-between items-center bg-white relative"
          >
            {/* Separate div for the dotted background */}
            <div
              className="absolute inset-0 z[-1]"
              style={{
                backgroundImage: 'url("/images/home-page/dot.png")',
                backgroundRepeat: "repeat",
                backgroundSize: "10px 10px",
                opacity: 0.2,
                backgroundColor: "white",
              }}
            />
            {/* Content div with relative positioning to appear above the background */}
            <div className="relative z-10 w-full flex justify-between items-center gap-x-2">
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className="w-[26px] h-[26px] lg:w-[40px] lg:h-[40px]"
              />
              <h3 className="text-[12px] lg:text-[16px] leading-[18px] lg:leading-[24px] font-noto text-[#111111] font-black">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {/* items */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[17px] gap-y-[24px] lg:gap-8">
        {data.items.map((item) => (
          <div
            key={item.id}
            className="p-[20px_24px_60px_24px] lg:p-[25px_58px_65px_58px] min-h-[240px] lg:min-h-[258px] border-[2px] border-[#B81122] rounded-[4px] bg-white relative"
          >
            <div className="w-full flex justify-center items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={150}
                className="w-[112px] h-[112px] lg:w-[150px] lg:h-[150px]"
              />
            </div>
            <p className="min-h-[95px] lg:max-h-[84px] lg:min-h-0 px-[10px] lg:px-[6px] py-[7px] lg:py-[12px] absolute bottom-0 left-0 w-full bg-[#B81122] flex justify-center items-center text-white text-center font-black text-[18px] lg:text-[20px] leading-[27px] lg:leading-[30px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PurchasedItems;

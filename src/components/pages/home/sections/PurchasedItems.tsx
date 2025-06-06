"use client";

import Link from "next/link";
import Image from "next/image";

import PurchaseItemsCard from "../components/PurchaseItemsCard";
import PurchaseItemsCategoryCard from "../components/PurchaseItemsCategoryCard";

import { useFilterItems } from "@/hooks/useFilterItems";

import { getAllCategories } from "@/services/category";

const PurchasedItems = () => {
  const { filteredItems, selectedCategory, setSelectedCategory } =
    useFilterItems();
  const categoriesData = getAllCategories();

  return (
    <section
      id="purchased-items"
      className="relative py-[50px] md:py-[80px] lg:py-[120px] px-5 md:px-[50px] lg:px-[80px]"
      aria-labelledby="purchased-items-heading"
    >
      <Image
        src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/backgrounds/bg-items.jpg"
        alt="banner-right-bg"
        fill
        loading="eager"
        className="object-cover opacity-10 -z-10"
      />
      {/* overlay */}
      <div className="absolute h-full w-full left-0 top-0 bg-[#FFE0E3] -z-20"></div>
      <h2 className="text-[30px] md:text-[50px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black text-center font-noto bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent">
        買取品目一覧
      </h2>
      {/* filter */}
      <div className="mt-[40px] md:mt-[45px] lg:mt-[50px] mb-[24px] md:mb-[28px] lg:mb-[32px] w-full flex flex-wrap justify-center gap-2">
        {categoriesData.map((filterItem) => (
          <PurchaseItemsCategoryCard
            key={filterItem.id}
            id={filterItem.id}
            title={filterItem.title}
            activeCategory={selectedCategory}
            changeCategory={setSelectedCategory}
          />
        ))}
        <div id="scroll-to-items" className="w-0 ml-[-7px]"></div>
      </div>
      {/* items */}
      <div className="flex flex-wrap justify-between md:justify-center gap-[17px] lg:gap-8">
        {filteredItems.slice(0, 8).map((item) => (
          <div className="w-[47%] md:w-[30%] lg:w-[22%]" key={item.id}>
            <PurchaseItemsCard
              image={item.image}
              title={item.title}
              categoryId={selectedCategory}
            />
          </div>
        ))}
      </div>
      {/* show more button */}
      <div className="w-full mt-10 md:mt-12 flex justify-center">
        <Link
          href={`/products/${selectedCategory}`}
          className="block w-full md:w-[50%] lg:w-[30%] px-[16px] py-[11px] lg:p-[15px] text-center text-[14px] lg:text-[18px] leading-[18px] lg:leading-[24px] font-noto font-semibold border-[2px] border-[#990E1C] text-white gradient-red text-shadow-red"
        >
          もっと見る
        </Link>
      </div>
    </section>
  );
};

export default PurchasedItems;

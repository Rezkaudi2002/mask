import CategoryHero from "../components/CategoryHero";
import CategoryProducts from "../components/CategoryProducts";
import Flow from "../../home/sections/Flow";
import WhyChoose from "../../home/sections/WhyChoose";
import ContactBanner from "../../home/sections/ContactBanner";
import CategoryPurchaseResults from "../components/CategoryPurchaseResults";
import PurchaseProcess from "../../home/sections/PurchaseProcess";
import Inquiry from "@/components/common/sections/Inquiry";
import MajorList from "../components/MajorList";
import HadisReason from "../components/HadisReason";
import { TCategory } from "@/types/category.type";

interface IIndexProps {
  categoryData: TCategory;
}

const index = ({ categoryData }: IIndexProps) => {
  return (
    <>
      <CategoryHero categoryName={categoryData.title} />
      <CategoryProducts
        categoryName={categoryData.title}
        products={categoryData?.items}
      />
      <CategoryPurchaseResults
        categoryName={categoryData.title}
        purchaseItems={categoryData?.purchaseItems}
      />
      <Flow />
      <WhyChoose />
      <ContactBanner />
      <HadisReason />
      <MajorList
        categoryName={categoryData.title}
        companies={categoryData?.companies}
      />
      <ContactBanner />
      <PurchaseProcess />
      <Inquiry />
      <ContactBanner />
    </>
  );
};

export default index;

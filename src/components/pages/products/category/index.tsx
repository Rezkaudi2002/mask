// import { TProduct } from "@/types/product.type";
import CategoryHero from "../components/CategoryHero";
import CategoryProducts from "../components/CategoryProducts";
import Flow from "../../home/sections/Flow";
import WhyChoose from "../../home/sections/WhyChoose";
import ContactBanner from "../../home/sections/ContactBanner";
import CategoryPurchaseResults from "../components/CategoryPurchaseResults";
import PurchaseProcess from "../../home/sections/PurchaseProcess";
import CompanyProfile from "../../home/sections/CompanyProfile";
import Inquiry from "@/components/common/sections/Inquiry";

// interface IIndexProps {
//   products: TProduct[]
// }

// const index = ({}: IIndexProps) => {
const index = () => {
  return (
    <>
      <CategoryHero />
      <CategoryProducts />
      <Flow />
      <WhyChoose />
      <ContactBanner />
      <CategoryPurchaseResults />
      {/* PurcheseResult */}
      {/* Noname section */}
      <ContactBanner />
      <PurchaseProcess />
      <CompanyProfile />
      <Inquiry />
      <ContactBanner />
    </>
  );
};

export default index;

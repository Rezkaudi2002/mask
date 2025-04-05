import { TItem } from "@/types/item.type";
import ProductDetails from "../components/ProductDetails";
import ProductHero from "../components/ProductHero";
import Breadcrumb from "../components/Breadcrumb";
// import ContactBanner from "../../home/sections/ContactBanner";
// import PurchaseProcess from "../../home/sections/PurchaseProcess";
// import BusinessPolicy from "../../home/sections/BusinessPolicy";
// import CompanyProfile from "../../home/sections/CompanyProfile";

interface IIndexProps {
  product: TItem;
}

const index = ({ product }: IIndexProps) => {
  return (
    <>
      <ProductHero productTitle={product.title} />
      <Breadcrumb title={product.title} category={product.category} />
      <ProductDetails product={product} />
      {/* <ContactBanner />
      <PurchaseProcess />
      <BusinessPolicy />
      <CompanyProfile /> */}
    </>
  );
};

export default index;

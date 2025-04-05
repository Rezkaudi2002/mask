import { TItem } from "@/types/item.type";
import Breadcrumb from "./Breadcrumb";
import Image from "next/image";
import SpecsTable from "./SpecsTable";
import ContentText from "./ContentText";

interface IProductDetailsProps {
  product: TItem;
}

const ProductDetails = ({ product }: IProductDetailsProps) => {
  return <section className=""></section>;
};

export default ProductDetails;

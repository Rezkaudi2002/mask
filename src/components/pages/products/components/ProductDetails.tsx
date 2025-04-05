import { TProduct } from "@/types/product.type";
import Breadcrumb from "./Breadcrumb";
import Image from "next/image";
import SpecsTable from "./SpecsTable";
import ContentText from "./ContentText";

interface IProductDetailsProps {
  product: TProduct;
}

const ProductDetails = ({ product }: IProductDetailsProps) => {
  return (
    <section className="">
    </section>
  );
};

export default ProductDetails;

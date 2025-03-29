import { getCategoryByTitle } from "@/services/category";
import Image from "next/image";
import Link from "next/link";

interface IBreadcrumbProps {
  title: string;
  category?: string;
}

const Breadcrumb = ({ title, category }: IBreadcrumbProps) => {
  const categoryId = getCategoryByTitle(category as string)?.id;
  return (
    <div className="text-[#999999] font-normal text-xs lg:text-sm">
      <Link href={"/products"} className=" inline-block">
        <span>製品</span>
      </Link>
      <Image
        className="inline-block mx-2"
        src={"/images/icons/right-arrow.svg"}
        width={16}
        height={16}
        alt="right arrow icon"
      />
      <Link href={`/products/${categoryId}`}>
        <span>{category}</span>
      </Link>
      <Image
        className="inline-block mx-2"
        src={"/images/icons/right-arrow.svg"}
        width={16}
        height={16}
        alt="right arrow icon"
      />
      <span>{title}</span>
    </div>
  );
};

export default Breadcrumb;

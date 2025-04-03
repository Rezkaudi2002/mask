import NotFound from "@/app/not-found";
import ProductPage from "@/components/pages/products/product/index";
import { Metadata } from "next";
import { getCategoryById } from "@/services/category";

interface IProductPageProps {
  params: Promise<{ title: string; categoryId: string }>;
}

export async function generateMetadata({
  params,
}: IProductPageProps): Promise<Metadata> {
  const { title, categoryId } = await params;
  const decodedTitle = decodeURIComponent(title);
  const categoryData = await getCategoryById(categoryId);

  if (!categoryData) {
    return {
      title: `${decodedTitle} | Not Found - hadis`,
      description: "The requested category or product could not be found.",
    };
  }

  return {
    title: `${decodedTitle} - ${categoryData.title} | hadis`,
    description: `私たちの${categoryData.title}コレクションから、${decodedTitle}を探索しましょう。`,
  };
}

const Page = async ({ params }: IProductPageProps) => {
  const { title, categoryId } = await params;
  const decodedTitle = decodeURIComponent(title);
  const categoryData = await getCategoryById(categoryId);

  if (
    !decodedTitle ||
    !categoryId ||
    !categoryData ||
    !categoryData.items ||
    !categoryData.items.find((item) => item.title === decodedTitle)
  ) {
    return <NotFound />;
  }

  const productData = categoryData.items.find(
    (item) => item.title === decodedTitle
  )!;
  return <ProductPage product={productData} />;
};

export default Page;

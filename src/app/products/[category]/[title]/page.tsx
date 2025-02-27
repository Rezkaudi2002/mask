import NotFound from "@/app/not-found";
import data from "@/content/home/purchasedItems.json";
import ProductPage from "@/components/pages/products/product/index";

interface IPageProps {
  params: Promise<{
    title: string;
    category: string;
  }>;
}

const Page = async ({ params }: IPageProps) => {
  const { title, category } = await params;
  if (!title || !category) {
    return <NotFound />;
  }

  // Await params to ensure they are resolved
  const titleDecoded = decodeURIComponent(title);
  const categoryDecoded = decodeURIComponent(category);

  const product = data.items.find(
    (item) => item.title === titleDecoded && item.category === categoryDecoded
  );

  if (!product) {
    return <NotFound />;
  }

  return <ProductPage product={product} />;
};

export default Page;

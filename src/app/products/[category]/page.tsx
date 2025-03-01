import CategoryPage from "@/components/pages/products/category/index";

interface IPageProps {
  params: Promise<{
    category: string;
  }>;
}

const page = async ({ params }: IPageProps) => {
  const { category } = await params;

  const categoryDecoded = decodeURIComponent(category);
  return (
    <div>
      <CategoryPage  />
    </div>
  );
};

export default page;

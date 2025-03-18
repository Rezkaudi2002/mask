import { Metadata } from "next";
import NotFound from "@/app/not-found";
import CategoryPage from "@/components/pages/products/category/index";
import categories from "@/content/categories/categories";

// services
import { getCategoryByTitle } from "@/services/category";

// baseUrl
import { baseUrl } from "@/utils/baseUrl";

interface IPageProps {
  params: Promise<{
    category: string;
  }>;
}

// metadata
export async function generateMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  const { category } = await params;

  const data = await getCategoryByTitle(category);

  if (!data) {
    return {
      title: "Category Not Found",
    };
  } else {
    return {
      title: data?.title,
      // description: data?.metaDescription,
      // keywords: "",

      openGraph: {
        type: "article",
        url: `${baseUrl}/products/${data?.title}`,
        title: data?.title,
        // description: data?.metaDescription,
        siteName: "機械工具買取ハディズ",
        images: [{ url: `${baseUrl}${data?.imageSrc}` }],
      },

      twitter: {
        card: "summary_large_image",
        title: data?.title,
        // description: data?.metaDescription,
        images: `${baseUrl}${data?.imageSrc}`,
      },

      alternates: {
        canonical: `${baseUrl}/products/${data?.title}`,
      },
    };
  }
}

const page = async ({ params }: IPageProps) => {
  const { category } = await params;

  if (!category) {
    return <NotFound />;
  }

  const categoryDecoded = decodeURIComponent(category);
  const categoryData = categories.find((c) => c.title.replace(/\n/g, '') === categoryDecoded);
  const products = categoryData?.items;

  if (!categoryData || !products || products?.length === 0) {
    return <NotFound />;
  }

  return <CategoryPage categoryData={categoryData} />;
};

export default page;

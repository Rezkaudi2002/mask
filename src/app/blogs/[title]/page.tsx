// page
import BlogDetails from "@/components/pages/blogs/blog"
import { notFound } from "next/navigation";

// services
import { getBlogByTitle } from "@/services/blogs/getBlogByTitle";
import { Metadata } from "next";


interface IBlogPage {
  params: Promise<{
    title: string;
  }>;
}

// metadata
export async function generateMetadata({ params }: IBlogPage): Promise<Metadata> {

  const { title } = await params

  const data = await getBlogByTitle(title)

  if (!data) {
    return {
      title: "Not found blog",
      description: "Not found blog"
    }
  }

  else {
    return {
      title: data?.title,
      description: data?.description
    }
  }


}


export default async function BlogDetailsPage({ params }: IBlogPage) {
  const { title } = await params

  // console.log("start")
  // console.log(decodeURI(title))
  // console.log(blogs[29].title)
  // console.log(decodeURI(title) === blogs[29].title)

  const data = await getBlogByTitle(title)

  if (!data) {
    notFound()
  }

  return <BlogDetails data={data} />
}

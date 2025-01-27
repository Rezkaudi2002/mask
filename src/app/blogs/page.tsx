import { Metadata } from "next"

// page
import Blogs from "@/components/pages/blogs"

// metadata
export const metadata: Metadata = {
  title: "All Blogs",
  description: "中古機械、電動工具の高額買取ならハディズへ。",
  keywords: "大型UVインクジェットプリンター買取,機械・電動工具の高価買取,簡単！買取の手順,Hadis INTERNATIONAL",
}

export default function BlogsPage() {
  return <Blogs />
}

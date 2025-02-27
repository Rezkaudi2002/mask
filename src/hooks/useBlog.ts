import { useState } from "react";
import blogsData from "@/content/blogs/blogs.json";

export const useBlog = () => {
  const postsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the range of blogs to display
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentBlogs = blogsData.slice(startIndex, startIndex + postsPerPage);

  return { currentBlogs, postsPerPage, currentPage, handlePageChange };
};

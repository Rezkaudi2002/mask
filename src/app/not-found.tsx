import type { Metadata } from "next";

// page
import NotFoundPage from "@/components/pages/404"

// metadata
export const metadata: Metadata = {
  title: "404 Page Not Found",
  description: "404 Page Not Found"
};

export default function NotFound() {
  return <NotFoundPage />
}

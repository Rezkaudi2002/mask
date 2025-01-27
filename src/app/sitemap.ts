import { MetadataRoute } from 'next';
import blogsData from "@/content/blogs/blogs.json";

const baseUrl = "https://hadis-three.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    // Static URLs
    const urls: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
    ];

    // Dynamic Blog URLs
    const blogs: MetadataRoute.Sitemap = blogsData.map((blog) => ({
        url: `${baseUrl}/blogs/${encodeURIComponent(blog.title)}`,
        lastModified: new Date().toISOString(), // Use actual lastModified if available
        changeFrequency: "weekly",
        priority: 0.7,
    }));

    return [
        ...urls,
        ...blogs,
    ];
}

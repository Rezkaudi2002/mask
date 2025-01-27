import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                // disallow: ['/admin', '/private'], // Disallow sensitive or non-public pages
            },
        ],
        sitemap: 'https://hadis-three.vercel.app/sitemap.xml',
        host: 'https://hadis-three.vercel.app',
    };
}

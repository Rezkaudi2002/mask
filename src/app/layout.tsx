import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import "@/styles/globals.css";

// sections
import Header from "@/components/common/sections/Header";
import Footer from "@/components/common/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "900"], // Include the font weights you need
});


// metadata
export const metadata: Metadata = {
  icons: "/images/icons/hadis-logo.svg",
  title: {
    template: "%s | Hadis",
    default: "中古機械、電動工具の高額買取のハディズ",
  },
  description: "中古機械、電動工具の高額買取ならハディズへ。",
  keywords: "大型UVインクジェットプリンター買取,機械・電動工具の高価買取,簡単！買取の手順,Hadis INTERNATIONAL",


  openGraph: {
    type: "website",
    title: "中古機械、電動工具の高額買取のハディズ",
    siteName: "mac-hadis",
    url: "https://www.mac-hadis.com/",
    images: [
      {
        url: "https://remocolla.odoo.com/web/image/website/1/logo?unique=825752b",
        width: 800,
        height: 600,
      }
    ],
    description: "中古機械、電動工具の高額買取ならハディズへ。ハディズでは、業務用機器の買取を「全国対応」で行っています。専門のバイヤーが購入するので、高値で売却が可能です。ぜひ、1度御見積りをお願いします！",
  },
  twitter: {
    card: "summary_large_image",
    title: "中古機械、電動工具の高額買取のハディズ",
    images: ["https://remocolla.odoo.com/web/image/website/1/logo?unique=825752b"],
    description: "中古機械、電動工具の高額買取ならハディズへ。ハディズでは、業務用機器の買取を「全国対応」で行っています。専門のバイヤーが購入するので、高値で売却が可能です。ぜひ、1度御見積りをお願いします！",
  },
  alternates: {
    canonical: "https://www.mac-hadis.com/",
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased`}
      >
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
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
  title: {
    template: "%s | Hadis",
    default: "Hadis",
  },
  description: "Hadis description",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

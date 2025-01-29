"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// data
import navbarLinksData from "@/content/home/navbarLinks.json"

const Footer: React.FC = () => {
    const pathname = usePathname()
    const isHomePage = pathname === "/"

    return (
        <footer className={isHomePage ? "mb-32 xl:mb-20" : ""} aria-label="Website Footer">
            <div className="bg-gradient-to-r from-[#D51A16] to-[#B81122] py-10 px-4 space-y-5 lg:space-y-6 font-medium text-sm lg:text-base text-white flex items-center justify-center w-full flex-col">

                {/* logo */}
                <Link href={"/"} className="w-[111px] h-[26px] relative block">
                    <Image src="/images/hadis-logo.png" alt="Hadis International Logo" fill priority />
                </Link>

                {/* navitems */}
                <nav className="flex flex-col lg:flex-row items-start lg:items-center justify-center h-full w-full gap-8">
                    <ul className="flex flex-col lg:flex-row  tems-start lg:items-center justify-center gap-8 font-medium text-base text-white">
                        {navbarLinksData?.navbarItems?.map(item =>
                            <li key={item.id}>
                                <Link href={item.href} title={`Navigate to ${item.label}`}>{item.label}</Link>
                            </li>
                        )}
                    </ul>

                    <div className="flex tems-start lg:items-center justify-center gap-2">
                        {navbarLinksData.navbarBtns?.map(item =>
                            <span key={item.id}>
                                <Link href={item.href} title={`Navigate to ${item.label}`}>{item.label}</Link>
                            </span>
                        )}
                    </div>
                </nav>

                {/* sns */}
                <div className="flex items-center justify-start lg:justify-center w-full gap-4">
                    {navbarLinksData?.snsLinks?.map(item =>
                        <Link key={item.id} href={item.href} title={`Navigate to ${item.name}`} target="_blank">
                            <Image src={item.footerImageSrc} alt={item.name} width={40} height={40} loading="lazy" />
                        </Link>
                    )}
                </div>

                {/* copyright */}
                <span className="text-xs text-[#EC9296]">
                    Copyright © ハディズ All rights reserved.
                </span>

            </div>
        </footer>
    )
};

export default Footer;

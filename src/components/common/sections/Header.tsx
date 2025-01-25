"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// data
import headerItemsData from "@/content/home/HeaderItems.json"


const Header: React.FC = () => {

    const [activeMenu, setActiveMenu] = useState(false)
    const toggleMenu = () => setActiveMenu(prev => !prev)

    return (
        <header className="bg-[#B81122] w-full h-10 lg:h-16 sticky top-0 z-50" aria-label="Website Header">
            <div className=" px-4 lg:px-7 flex items-center justify-between lg:justify-start gap-8 h-full relative ">

                {/* logo */}
                <Link href={"/"} className="w-[80px] h-[18px] lg:w-[111px] lg:h-[26px] relative block">
                    <Image src="/images/hadis-logo.png" alt="Hadis Company Logo" fill priority />
                </Link>

                {/* navitems */}
                <nav className="hidden lg:flex  items-center justify-end h-full w-full gap-8" aria-label="Main navigation">
                    <ul className="flex items-center justify-center gap-8 font-medium text-base text-white">
                        {headerItemsData?.navbarItems?.map(item =>
                            <li key={item.id}>
                                <Link href={item.href} title={`Navigate to ${item.label}`}>{item.label}</Link>
                            </li>
                        )}
                    </ul>

                    <div className="flex items-center justify-center gap-2">
                        {headerItemsData.navbarBtns?.map(item =>
                            <Link key={item.id} href={item.href} title={`Navigate to ${item.label}`} className="bg-white font-black text-[#B81122] text-base flex items-center justify-center gap-2 py-3 px-8 rounded">
                                <span>{item.label}</span>
                                <Image src={"/images/icons/arrow-right.svg"} alt="arrow-right-hadis" width={20} height={20} priority />
                            </Link>
                        )}
                    </div>
                </nav>

                {/* burger btn */}
                <div className="burger lg:hidden cursor-pointer" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0}>
                    {activeMenu ?
                        <Image src={"/images/icons/close.svg"} alt="menu-hadis" width={24} height={24} /> :
                        <Image src={"/images/icons/menu.svg"} alt="menu-hadis" width={24} height={24} />
                    }
                </div>

                {/* mobile menu */}
                <div
                    className={`bg-white w-full min-h-screen fixed top-10 left-0 z-50 py-7 px-5 lg:hidden transition-transform duration-300 ${activeMenu ? "translate-x-0" : "translate-x-[-100%]"}`}
                    aria-hidden={!activeMenu}
                >
                    <ul className="flex items-start flex-col justify-center gap-10 font-bold text-sm text-[#111111]">
                        {headerItemsData?.navbarItems?.map((item) => (
                            <li key={item.id}>
                                <Link href={item.href} title={`Navigate to ${item.label}`}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;

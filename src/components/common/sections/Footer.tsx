import Image from "next/image";
import Link from "next/link";

// data
import headerItemsData from "@/content/home/HeaderItems.json"

const Footer: React.FC = () => {
    return (
        <footer className="mb-52 lg:mb-20">
            <section className="bg-gradient-to-r from-[#D51A16] to-[#B81122] py-10 px-4 space-y-5 lg:space-y-6 font-medium text-sm lg:text-base text-white flex items-center justify-center w-full flex-col">
                <Link href={"/"} className="w-[111px] h-[26px] relative block">
                    <Image src={"/images/hadis-logo.png"} alt="hadis-logo" fill />
                </Link>

                {/* navitems */}
                <nav className="flex flex-col lg:flex-row items-start lg:items-center justify-center h-full w-full gap-8">
                    <ul className="flex flex-col lg:flex-row  tems-start lg:items-center justify-center gap-8 font-medium text-base text-white">
                        {headerItemsData?.navbarItems?.map(item =>
                            <li key={item.id}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        )}
                    </ul>

                    <div className="flex tems-start lg:items-center justify-center gap-2">
                        {headerItemsData.navbarBtns?.map(item =>
                            <span key={item.id}>
                                <Link href={item.href}>{item.label}</Link>
                            </span>
                        )}
                    </div>
                </nav>
                <span className="text-xs text-[#EC9296]">Copyright © 2023-2024 Hadis International. All rights reserved.</span>
            </section>
        </footer>
    )
};

export default Footer;

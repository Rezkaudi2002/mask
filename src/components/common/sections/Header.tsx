import Image from "next/image";
import Link from "next/link";

// data
import headerItemsData from "@/content/home/HeaderItems.json"


const Header: React.FC = () => {
    return (
        <section className="bg-[#B81122] w-full h-10 lg:h-16">
            <div className=" px-4 lg:px-7 flex items-center justify-between lg:justify-start gap-8 h-full">

                {/* logo */}
                <div className="">
                    <Link href={"/"} className="w-[80px] h-[18px] lg:w-[111px] lg:h-[26px] relative block">
                        <Image src={"/images/hadis-logo.png"} alt="hadis-logo" fill />
                    </Link>
                </div>

                {/* navitems */}
                <nav className="hidden lg:flex  items-center justify-between h-full w-full">
                    <ul className="flex items-center justify-center gap-8 font-medium text-base text-white">
                        {headerItemsData?.navbarItems?.map(item =>
                            <li key={item.id}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        )}
                    </ul>

                    <div className="flex items-center justify-center gap-2">
                        {headerItemsData.navbarBtns?.map(item =>
                            <Link key={item.id} href={item.href} className="bg-white font-black text-[#B81122] text-base flex items-center justify-center gap-2 py-3 px-8 rounded">
                                <span>{item.label}</span>
                                <Image src={"/images/icons/arrow-right.svg"} alt="arrow-right-hadis" width={20} height={20} />
                            </Link>
                        )}
                    </div>
                </nav>

                {/* burger btn */}
                <div className="burger block lg:hidden cursor-pointer">
                    <Image src={"/images/icons/menu.svg"} alt="menu-hadis" width={24} height={24} />
                </div>

            </div>
        </section>
    )
};

export default Header;

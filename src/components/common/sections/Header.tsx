import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <section className="lg:bg-[#B81122] w-full h-10 lg:h-16">
            <div className=" px-4 lg:px-7 flex items-center justify-between lg:justify-start gap-8 h-full">

                <div className="font-medium text-base lg:text-white">
                    <Link href={"/"}>logo</Link>
                </div>

                <nav className="hidden lg:flex  items-center justify-between h-full w-full">
                    <ul className="flex items-center justify-center gap-8 font-medium text-base text-white">
                        <li>
                            <Link href={"/"}>買取品目一覧</Link>
                        </li>
                        <li>
                            <Link href={"/"}>会社概要</Link>
                        </li>
                    </ul>

                    <Link href={"/"} className="bg-white font-black text-[#B81122] text-base flex items-center justify-center gap-2 py-3 px-8 rounded">
                        <span>お問い合わせ</span>
                        <Image src={"/images/icons/arrow-right.svg"} alt="arrow-right-hadis" width={20} height={20} />
                    </Link>
                </nav>

                <div className="burger block lg:hidden cursor-pointer">
                    <Image src={"/images/icons/menu.svg"} alt="menu-hadis" width={24} height={24} />
                </div>
            </div>
        </section>
    )
};

export default Header;

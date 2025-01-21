import Image from "next/image";
import Link from "next/link";

const ContactFixedBanner: React.FC = () => {
    return (
        <section className="w-full py-4 fixed bottom-0 left-0 z-50">
            <Image className=" -z-10 absolute top-0 left-0 object-cover" src={"/images/home-page/banner-bg.png"} alt="hero-background-hadis" fill />

            <div className="flex flex-wrap items-center justify-center w-full h-full gap-2 px-4 lg:px-20">

                <Link target="_blanck" href={"/"} className="text-3xl relative font-black gradient-red rounded h-14 text-white flex items-center justify-center w-full sm:w-fit  px-3 sm:px-14 py-3 gap-3">
                    <Image src={"/images/icons/poninter.svg"} className="absolute top-2 -right-2 z-10" alt="poninter" width={41} height={60} />
                    <Image src={"/images/icons/phone_in_talk.svg"} alt="phone_in_talk" width={32} height={32} />
                    0120-842-881
                    <Image src={"/images/icons/arrow-right-red.svg"} alt="arrow-right-red" width={32} height={32} />
                </Link>

                <Link target="_blanck" href={"/"} className="text-xl relative font-black gradient-blue rounded h-14 text-white flex items-center justify-center w-full sm:w-fit  px-3 sm:px-14 py-3 gap-3">
                    <Image src={"/images/icons/poninter.svg"} className="absolute top-2 -right-2 z-10" alt="poninter" width={41} height={60} />
                    <Image src={"/images/icons/computer.svg"} alt="computer" width={32} height={32} />
                    フォームからご相談
                    <Image src={"/images/icons/arrow-right-blue.svg"} alt="" width={32} height={32} />
                </Link>

                <Link target="_blanck" href={"/"} className="text-xl relative font-black gradient-green  rounded h-14 text-white flex items-center justify-center w-full sm:w-fit  px-3 sm:px-14 py-3 gap-3">
                    <Image src={"/images/icons/poninter.svg"} className="absolute top-2 -right-2 z-10" alt="poninter" width={41} height={60} />
                    <Image src={"/images/icons/line-green.svg"} alt="line-green" width={32} height={32} />
                    LINE査定
                    <Image src={"/images/icons/arrow-right-green.svg"} alt="arrow-right-green" width={32} height={32} />
                </Link>

            </div>
        </section>
    )
};

export default ContactFixedBanner;

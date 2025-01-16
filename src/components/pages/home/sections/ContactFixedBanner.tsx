import Image from "next/image";

const ContactFixedBanner: React.FC = () => {
    return (
        <section className="w-full h-[86px] fixed bottom-0 left-0 z-50">
            <Image className=" -z-10 absolute top-0 left-0" src={"/images/home-page/banner-bg.png"} alt="hero-background-hadis" fill objectFit="cover" />
            <div className="flex items-center justify-center w-full h-full gap-2 px-20">
                <div className="text-3xl border-2 border-[#990E1C] flex-1 bg-gradient-to-tl from-[#B81122] to-[#AC0C1C] rounded h-14 text-white flex items-center justify-center">1</div>
                <div className="text-3xl border-2 border-[#017FD4] flex-1 bg-gradient-to-tl from-[#0194F7] to-[#008AE6] rounded h-14 text-white flex items-center justify-center">2</div>
                <div className="text-3xl border-2 border-[#4AC061] flex-1 bg-gradient-to-tl from-[#50CB68] to-[#49BF60] rounded h-14 text-white flex items-center justify-center">3</div>
                <div className="text-3xl border-2 border-[#BD1321] flex-1 bg-white rounded h-14 text-[#BD1321] flex items-center justify-center">4</div>
            </div>
        </section>
    )
};

export default ContactFixedBanner;

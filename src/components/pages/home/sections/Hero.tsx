import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <section className="relative px-4 w-full h-[410px] lg:h-[640px] 2xl:h-[calc(100vh-64px)] bg-[url(/images/home-page/hero-background-mobile.png)] sm:bg-[url(/images/home-page/hero-background.png)] bg-cover bg-no-repeat bg-right-bottom  sm:bg-right-top">

            <div className="flex lg:w-1/2 2xl:min-w-[1000px] items-start 2xl:items-center justify-center h-full 2xl:h-3/4 space-y-2 lg:space-y-7 flex-col pt-7 2xl:pt-20 sm:pl-12 pb-4">
                <div className="relative xl:w-[800px] xl:h-[64px] w-[355px] h-[26px] sm:h-[50px]">
                    <Image unoptimized src={"/images/home-page/hero-1.png"} alt="hero1" fill />
                </div>

                <div className="relative w-[355px] h-[88px] sm:h-[130px] xl:w-[1000px] xl:h-[250px]">
                    <Image unoptimized src={"/images/home-page/hero-2.png"} alt="hero2" fill />
                </div>

                <div className="flex w-full items-start xl:items-center justify-center gap-2 flex-col lg:flex-row text-white flex-wrap">
                    <span className="flex gap-1 lg:gap-2 items-center justify-center w-[175px] h-[66px] lg:w-[276px] lg:h-[102px] gradient-red rounded-lg font-black lg:text-[32px] text-xl">
                        <span className="">創業</span>
                        <span className="text-[60px] lg:text-[100px]">26</span>
                        <span className="mt-auto pb-2">年</span>
                    </span>
                    <span className="flex gap-1 lg:gap-2 items-center justify-center w-[175px] h-[66px] lg:w-[276px] lg:h-[102px] gradient-red rounded-lg font-black lg:text-[32px] text-xl">
                        <span className="flex items-center justify-center flex-col gap-1 lg:gap-2">
                            <span>出張費</span>
                            <span>査定費</span>
                        </span>
                        <span className="text-[60px] lg:text-[100px]">0</span>
                        <span className="mt-auto pb-2">円</span>
                    </span>
                    <span className="flex items-center justify-center w-[175px] h-[66px] lg:w-[276px] lg:h-[102px] gradient-red rounded-lg font-black text-3xl lg:text-[50px]">
                        全国対応
                    </span>
                </div>
            </div>
        </section>
    )
};

export default Hero;

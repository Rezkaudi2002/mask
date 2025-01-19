import Image from "next/image";

const PurchaseProcess: React.FC = () => {
    return (
        <section className=" relative w-full py-[50px] lg:py-[120px] text-center px-4">
            <Image className=" absolute -z-10 top-0 left-0 object-cover" fill src={"/images/home-page/flow-bg.png"} alt="hero-background-hadis" />

            <h2 className="font-black text-3xl lg:text-6xl text-[#D51A16]">カンタン買取の流れ</h2>

            <div className="flex items-center justify-center gap-2 pt-[40px] lg:pt-[50px]">
                <button className="font-black text-xs lg:text-base w-[170px] p-4 text-white border-2 border-[#990E1C] bg-gradient-to-br from-[#B81122] to-[#AC0C1C]">出張買取</button>
                <button className="font-black text-xs lg:text-base w-[170px] p-4 text-[#111111] border-2 border-[#111111] bg-[url(/images/home-page/doted-bg-btn.svg)] bg-cover">宅配買取</button>
                <button className="font-black text-xs lg:text-base w-[170px] p-4 text-[#111111] border-2 border-[#111111] bg-[url(/images/home-page/doted-bg-btn.svg)] bg-cover">持込買取</button>
            </div>

            <div className="mx-auto space-y-4 lg:space-y-10 px-10 py-10 lg:px-24 lg:py-20 border-2 border-[#B81122] mt-8  bg-[#FFFFFF99] max-w-[1120px]">


                <div className="flex items-center justify-center gap-6 flex-col lg:flex-row lg:gap-8">
                    <div className=" space-y-4 flex-1">
                        <div className="flex items-center justify-start gap-2 lg:gap-4">
                            <span className="rounded font-bold w-[103px] text-white border-2 border-[#990E1C] bg-gradient-to-br from-[#B81122] to-[#AC0C1C]">
                                <span className="text-2xl">Step</span>
                                <span className="text-[32px]">1</span>
                            </span>
                            <h3 className="text-xl font-black text-[#B81122]">お問い合わせ</h3>
                        </div>
                        <p className="text-base text-left lg:text-xl font-normal text-[#111111]">メール、お問い合わせフォーム、お電話のいずれかでお問い合わせください。</p>
                    </div>
                    <div className="w-[256px] lg:flex-1 lg:w-1/2 h-[151px] lg:h-[250px] relative">
                        <Image className=" absolute top-0 left-0 mr-[10px] mb-[10px] lg:mr-[23px] lg:mb-[23px]" fill src={"/images/home-page/on-site-purchase1.png"} alt="hero-background-hadis" />
                        <Image className=" absolute -z-10 bottom-0 right-0 ml-[10px] mt-[10px] lg:ml-[23px] lg:mt-[23px]" fill src={"/images/home-page/dotted-bg-block.png"} alt="hero-background-hadis" />
                    </div>
                </div>

                <Image className="mx-auto" width={41} height={49} src={"/images/icons/next-step-arrow.svg"} alt="next-step-arrow-hadis" />

                <div className="flex items-center justify-center odd:flex-row-reverse gap-6 flex-col lg:flex-row lg:gap-8">
                    <div className=" space-y-4 flex-1">
                        <div className="flex items-center justify-start gap-2 lg:gap-4">
                            <span className="rounded font-bold w-[103px] text-white border-2 border-[#990E1C] bg-gradient-to-br from-[#B81122] to-[#AC0C1C]">
                                <span className="text-2xl">Step</span>
                                <span className="text-[32px]">1</span>
                            </span>
                            <h3 className="text-xl font-black text-[#B81122]">お問い合わせ</h3>
                        </div>
                        <p className="text-base text-left lg:text-xl font-normal text-[#111111]">メール、お問い合わせフォーム、お電話のいずれかでお問い合わせください。</p>
                    </div>
                    <div className="w-[256px] lg:flex-1 lg:w-1/2 h-[151px] lg:h-[250px] relative">
                        <Image className=" absolute top-0 left-0 mr-[10px] mb-[10px] lg:mr-[23px] lg:mb-[23px]" fill src={"/images/home-page/on-site-purchase1.png"} alt="hero-background-hadis" />
                        <Image className=" absolute -z-10 bottom-0 right-0 ml-[10px] mt-[10px] lg:ml-[23px] lg:mt-[23px]" fill src={"/images/home-page/dotted-bg-block.png"} alt="hero-background-hadis" />
                    </div>
                </div>


            </div>

        </section>
    )
};

export default PurchaseProcess;

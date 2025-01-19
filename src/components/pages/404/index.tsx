"use client";
import Image from "next/image";

const Index: React.FC = () => {
  return (
    <section className="relative w-full py-20 text-center px-5  h-[calc(100vh-60px)] flex items-center justify-center">
      <Image className=" absolute -z-10 top-0 left-0" src={"/images/home-page/flow-bg.png"} alt="hero-background-hadis" fill objectFit="cover" />
      <div className="">
        <h1 className="text-9xl text-[#D51A16] font-bold">404</h1>
        <h2 className=" text-[20px] lg:text-[40px] font-bold">
          Opps!
        </h2>
        <p className="text-[16px] lg:text-[25px] font-normal ">
          We couldn’t find the page address for you
        </p>
      </div>
    </section>
  );
};

export default Index;

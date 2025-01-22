import Image from "next/image";
import data from "@/content/home/whyChoose.json";
const WhyChoose = () => {
  return (
    <section className="px-5 py-20 md:py-[100px] md:px-[90px] lg:py-[120px] lg:px-[160px]">
      <h2 className="mb-10 lg:mb-[50px] bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent text-center text-[32px] md:text-5xl lg:text-[60px] font-noto font-black leading-[48px] lg:leading-[90px]">
        Hadisが選ばれる理由
      </h2>
      {/* all boxes */}
      <div className="space-y-8 lg:space-y-[40px] font-noto">
        {data.map((item) => (
          // box
          <div key={item.id} className="flex flex-wrap lg:flex-nowrap">
            <Image
              src={item.image}
              alt={`Why choose: ${item.title}`}
              width={355}
              height={178}
              unoptimized
              quality={100}
              priority={true}
              className="w-full lg:max-h-[240px] lg:max-w-[40%]"
            />
            {/* text side */}
            <div className="ml-0 lg:ml-8 flex-1">
              {/* heading */}
              <div className="space-x-2 flex items-center my-4 lg:my-0 lg:mb-4">
                <div className="w-[40px] md:w-[50px] lg:w-[60px] min-w-[40px] lg:min-w-[60px] h-[40px] md:h-[50px] lg:h-[60px] bg-[linear-gradient(135deg,#B81122_50%,#AC0C1C_50%)] flex justify-center items-center text-white font-bold text-[30px] md:text-[35px] lg:text-[40px] leading-[30px] lg:leading-[40px] rounded">
                  {item.id}
                </div>
                <h3 className="text-[#B81122] font-black text-[20px] md:text-[28px] lg:text-[32px] leading-[30px] lg:leading-[48px]">
                  {item.title}
                </h3>
              </div>
              {/* paragraph */}
              <p className="text-[#111111] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-8 lg:leading-[40px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;

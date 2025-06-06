import Image from "next/image";
import Link from "next/link";

// common components
import ContactBanner from "../../home/sections/ContactBanner";

// components
import SubContent from "./sections/SubContent";
import ContactFixedBanner from "@/components/common/sections/ContactFixedBanner";

interface IBlogPage {
  data: BlogPost;
}

const Index: React.FC<IBlogPage> = ({ data }) => {
  return (
    <>
      <section className="bg-[#f8f7f6] text-[#111111]">
        <div className="max-w-[928px] space-y-4 mx-auto pt-4 lg:pt-10 px-4 pb-20">
          <div className="text-[#999999] font-normal text-xs lg:text-sm">
            <Link href={"/blogs"} className=" inline-block">
              <span>ホーム</span>
              <Image
                className="inline-block mx-2"
                src={
                  "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/right-arrow.svg"
                }
                width={16}
                height={16}
                loading="lazy"
                alt="right arrow icon"
              />
            </Link>
            <span>{data.title}</span>
          </div>
          <div className=" bg-white px-4 lg:px-24 py-[60px] space-y-9 lg:space-y-12">
            <span className="text-[#B81122] font-black text-sm text-right block">{data.date}</span>

            <h1 className="font-black text-xl lg:text-[32px] leading-[48px]">
              {data.title}
            </h1>
            <div className=" relative w-[330px] h-[200px] lg:w-[500px] lg:h-[300px] mx-auto">
              <Image
                className="object-cover"
                src={data.imageSrc}
                alt={data.title}
                fill
                loading="lazy"
              />
            </div>
            {data.description.split("\n").map((item, index) => (
              <p
                className="font-normal text-base leading-8"
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
            {data.subContent.map((item, index) => (
              <SubContent key={index} content={item} mainTitle={data.title} />
            ))}
          </div>
        </div>
      </section>
      <ContactBanner />
      <ContactFixedBanner />
    </>
  );
};

export default Index;

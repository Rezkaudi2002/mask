import Image from "next/image";

interface IContactBannerProps {}

const ContactBanner = ({}: IContactBannerProps) => {
  return (
    <section className="font-noto relative flex flex-row-reverse">
      <Image
        className="-z-10 absolute top-0 left-0 opacity-25"
        src={"/banner-bg.png"}
        alt="banner-background-hadis"
        fill
        objectFit="cover"
      />
      {/* Right image */}
      <div className="hidden md:block md:w-[48%] relative md:h-auto">
        <Image
          src="/right-bg-banner.jpeg"
          alt="banner-right-bg"
          fill
          objectFit="cover"
        />
      </div>

      {/* left section */}
      <div className="px-5 py-[50px] lg:p-[75px] lg:pl-[80px] space-y-4 lg:max-h-[415px]">
        <h2 className="font-noto bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent text-center text-[32px] md:text-[36px] font-black leading-[48px] md:leading-[54px]">
          ラクラク査定はハディズにお任せ♪
        </h2>
        {/* communication information */}
        <div className="flex justify-center flex-wrap space-y-4 lg:space-y-[24px]">
          {/* call button */}
          <div className="w-full">
            <button
              className="h-[64px] lg:h-[80px] w-full flex justify-evenly items-center rounded-[4px] border-[2px] border-[#990E1C]"
              style={{
                background:
                  "linear-gradient(to bottom right, #B81122 50%, #AC0C1C 50%)",
              }}
            >
              <Image
                src="/phone_in_talk.svg"
                alt="phone icon"
                height={32}
                width={32}
                className="lg:w-[48px] lg:h-[48px]"
              />
              <span
                className="font-black text-[32px] md:text-[36px] lg:text-[40px] leading-[48px] lg:leading-[60px] text-white"
                style={{
                  textShadow: `
                  -2px -2px 0 #AD0D1D,
                  2px -2px 0 #AD0D1D,
                  -2px 2px 0 #AD0D1D,
                  2px 2px 0 #AD0D1D
                `,
                }}
              >
                0120-842-881
              </span>
              <div className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-full bg-white flex justify-center items-center pl-[2px]">
                <div className="w-0 h-0 border-t-[6px] lg:border-t-[8px] border-t-transparent border-b-[6px] lg:border-b-[8px] border-b-transparent border-l-[9px] lg:border-l-[12px] border-l-[#AC0C1C]"></div>
              </div>
            </button>
            <p className="text-[14px] leading-[21px] mt-1 font-normal w-fit">
              営業時間：10:00 〜 18:00
            </p>
          </div>
          {/* social media buttons */}
          <div className="space-y-2 md:space-y-0 md:space-x-2 flex-wrap md:flex-nowrap flex w-full">
            <button
              className="h-[54px] p-2 w-full flex justify-evenly items-center rounded-[4px] border-[2px] border-[#017FD4]"
              style={{
                background:
                  "linear-gradient(to bottom right, #0194F7 50%, #008AE6 50%)",
              }}
            >
              <Image
                src="/computer.svg"
                alt="phone icon"
                height={32}
                width={32}
              />
              <span
                className="font-black text-[20px] leading-[30px] text-white"
                style={{
                  textShadow: `
                  -2px -2px 0 #017FD4,
                  2px -2px 0 #017FD4,
                  -2px 2px 0 #017FD4,
                  2px 2px 0 #017FD4
                `,
                }}
              >
                フォームからご相談
              </span>
              <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center pl-[2px]">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[9px] border-l-[#0295F8]"></div>
              </div>
            </button>
            <button
              className="h-[54px] p-2  w-full flex justify-evenly items-center rounded-[4px] border-[2px] border-[#43B058]"
              style={{
                background:
                  "linear-gradient(to bottom right, #50CB68 50%, #49BF60 50%)",
              }}
            >
              <Image src="/Line.svg" alt="phone icon" height={32} width={32} />
              <span
                className="font-black text-[20px] leading-[30px] text-white"
                style={{
                  textShadow: `
                  -2px -2px 0 #4AC061,
                  2px -2px 0 #4AC061,
                  -2px 2px 0 #4AC061,
                  2px 2px 0 #4AC061
                `,
                }}
              >
                LINE登録
              </span>
              <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center pl-[2px]">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[9px] border-l-[#4CC764]"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;

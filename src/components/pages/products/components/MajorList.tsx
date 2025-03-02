import Image from "next/image";

interface IMajorListProps {
  categoryName: string;
}

const companies = [
  {
    jp: "アマダ",
    en: "AMADA",
  },
  {
    jp: "アポロ",
    en: "APOLLO",
  },
  {
    jp: "大栄 ダイエイ	",
    en: "DAIEI",
  },
  {
    jp: "ダイヘン",
    en: "DAIHEN",
  },
  {
    jp: "栄和 エイワ",
    en: "EIWA",
  },
  {
    jp: "富士　フジ",
    en: "FUJI",
  },
  {
    jp: "イノエ",
    en: "INOE",
  },
  {
    jp: "カネテック",
    en: "KANETEC",
  },
  {
    jp: "コマツ",
    en: "KOMATSU",
  },
  {
    jp: "マツモト",
    en: "MATSUMOTO",
  },
  {
    jp: "三菱 ミツビシ",
    en: "MITSUBISHI",
  },
  {
    jp: "ノリミツ",
    en: "NORIMITSU",
  },
  {
    jp: "パナソニック",
    en: "PANASONIC",
  },
  {
    jp: "タケダ",
    en: "TAKEDA",
  },
  {
    jp: "トップジャパン",
    en: "TOP JAPAN",
  },
  {
    jp: "ヤマダ",
    en: "YAMADA",
  },
  {
    jp: "山本　ヤマモト",
    en: "YAMAMOTO",
  },
  {
    jp: "ヤシマ",
    en: "YASHIMA",
  },
];
const MajorList = ({ categoryName }: IMajorListProps) => {
  return (
    <section className="px-5 py-[50px] relative">
      <Image
        className=" absolute -z-10 top-0 left-0 object-cover"
        fill
        src={"/images/home-page/flow-bg.png"}
        alt="hero-background-hadis"
        loading="lazy"
      />
      {/* Content */}
      <h2 className="bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent text-center text-[32px] leading-[36px] lg:text-[65px] lg:leading-[90px] font-black">
        {categoryName}
      </h2>
      <p className="bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent text-center text-[24px] leading-[36px] lg:text-[48px] lg:leading-[90px] font-bold">
        の主なメーカー一覧
      </p>
      {/* companies wrapper */}
      <div className="w-full md:w-[90%] lg:w-[70%] md:mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[7px] lg:gap-x-[32px] lg:gap-y-4 mt-10">
        {companies.map((item, index) => (
          <div
            key={index}
            className="px-4 py-3 space-y-1 bg-white border-[3px] border-[#B81122]"
          >
            <p>{item.jp}</p>
            <p className="text-[18px] font-bold underline">{item.en}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MajorList;

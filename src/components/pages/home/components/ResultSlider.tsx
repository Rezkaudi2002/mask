import Image from "next/image";

interface IResultSliderProps {
  image: string;
  title: string;
  model: string;
}

const ResultSlider = ({ image, title, model }: IResultSliderProps) => {
  return (
    <div className="p-4 lg:p-[20px] rounded border-2 bg-[#FFF7F8] border-[#B81122] flex space-x-2">
      <Image
        src={image}
        alt={title}
        width={150}
        height={150}
        className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]"
      />
      <div className="text-[12px] lg:text-[16px] leading-[18px] lg:leading-[24px] text-[#111111] font-bold">
        <span className="py-[3px] lg:py-1 px-2 mb-1 lg:mb-2 text-[10px] leading-[15px] text-white block w-fit bg-[#B81122]">
          カテゴリー1
        </span>
        <p>{title}</p>
        <p>{model}</p>
      </div>
    </div>
  );
};

export default ResultSlider;

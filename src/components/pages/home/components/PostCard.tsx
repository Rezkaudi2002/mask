import Image from "next/image";

interface IPostCardProps {
  title: string;
  image: string;
  description: string;
}

const PostCard = ({ title, image, description }: IPostCardProps) => {
  return (
    <div className="w-full md:w-[45%] lg:w-[30%]">
      <Image
        src={image}
        alt={title}
        width={352}
        height={200}
        unoptimized
        className="w-full h-[200px]"
      />
      <h3 className="my-4 lg:mb-[22px] text-[20px] leading-[30px] text-[#B81122] font-black text-center truncate">
        {title}
      </h3>
      <p className="text-[16px] leading-[32px]">{description}</p>
    </div>
  );
};

export default PostCard;

import Image from "next/image";

interface IFlowCard {
    imageSrc: string
    title: string
}

const FlowCard: React.FC<IFlowCard> = ({ imageSrc, title }) => {
    return (
        <div className=" space-y-4 text-center">
            <div className="relative w-[200px] h-[200px] xl:w-[313px] xl:h-[313px]">
                <Image src={imageSrc} alt={title} fill objectFit="cover" />
            </div>
            <p className="text-xl xl:text-3xl font-black max-w-[200px] xl:max-w-64 mx-auto">{title}</p>
        </div>
    )
};

export default FlowCard;

import Image from "next/image";
import PurchaseResultsCard from "../components/PurchaseResultsCard";

import ReviewsReceivedData from "@/content/home/ReviewsReceived.json"


const ReviewsReceived: React.FC = () => {
    return (
        <section className="relative w-full py-[50px] lg:py-[60px] text-center px-4 space-y-10 lg:space-y-12">
            <Image className=" absolute -z-10 top-0 left-0 object-cover" fill src={"/images/home-page/flow-bg.png"} alt="hero-background-hadis" />
            <h2 className="text-[#4F4537] font-black text-3xl lg:text-6xl">いただいた口コミ</h2>
            <div className="flex items-center justify-center flex-col md:flex-row gap-4 lg:gap-8 max-w-[1120px] mx-auto text-left">
                {ReviewsReceivedData.map(item =>
                    <PurchaseResultsCard key={item.id} data={item} />
                )}
            </div>
        </section>
    )
};

export default ReviewsReceived;

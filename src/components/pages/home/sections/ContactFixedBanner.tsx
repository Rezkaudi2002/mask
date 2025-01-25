import Image from "next/image";

// components
import ContactBtn from "../components/ContactBtn";
import PointerIcon from "../components/PointerIcon";


// data
import ContactDetails from "@/content/home/ContactDetails.json"


const ContactFixedBanner: React.FC = () => {
    return (
        <section className="w-full py-4 fixed bottom-0 left-0 z-50" aria-label="Contact Banner">
            <Image className=" -z-10 absolute top-0 left-0 object-cover" src={"/images/home-page/banner-bg.png"} alt="hero-background-hadis" fill />

            <div className="flex flex-wrap items-center justify-center w-full h-full gap-2 px-4 lg:px-20">
                <ContactBtn label={ContactDetails.phoneNumber.label} href={ContactDetails.phoneNumber.href} variant="red" className="text-3xl">
                    <PointerIcon />
                </ContactBtn>

                <ContactBtn label={ContactDetails.support.label} href={ContactDetails.support.href} variant="blue" className="text-xl">
                    <PointerIcon />
                </ContactBtn>

                <ContactBtn label={ContactDetails.line.label} href={ContactDetails.line.href} variant="green" className="text-xl">
                    <PointerIcon />
                </ContactBtn>
            </div>
        </section>
    )
};

export default ContactFixedBanner;

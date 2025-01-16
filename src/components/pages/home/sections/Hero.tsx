import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <section className=" relative w-full h-[calc(100vh-60px)]">
            <Image className=" absolute top-0 left-0" src={"/images/home-page/hero-background.png"} alt="hero-background-hadis" fill objectFit="cover" />
        </section>
    )
};

export default Hero;

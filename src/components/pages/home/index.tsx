

// sections
import CompanyProfile from "./sections/CompanyProfile";
import ContactBanner from "./sections/ContactBanner";
import ContactFixedBanner from "./sections/ContactFixedBanner";
import Flow from "./sections/Flow";
import FrequentlyAskedQuestions from "./sections/FrequentlyAskedQuestions";
import Hero from "./sections/Hero";
import Inquiry from "./sections/Inquiry";
import PurchasedItems from "./sections/PurchasedItems";
import PurchaseProcess from "./sections/PurchaseProcess";
import PurchaseResults from "./sections/PurchaseResults";
import ReviewsReceived from "./sections/ReviewsReceived";
import WhyChoose from "./sections/WhyChoose";

const Index = () => {
    return (
        <>
            <Hero />
            <ContactFixedBanner />
            <Flow />
            <WhyChoose />
            <ContactBanner />
            <PurchasedItems />
            <PurchaseResults />
            <PurchaseProcess />
            <ContactBanner />
            <ReviewsReceived />
            <FrequentlyAskedQuestions />
            <ContactBanner />
            <CompanyProfile />
            <Inquiry />
        </>
    )
};

export default Index;

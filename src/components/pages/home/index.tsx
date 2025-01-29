

// sections
import Hero from "./sections/Hero";
import ContactFixedBanner from "./sections/ContactFixedBanner";
import Flow from "./sections/Flow";
import WhyChoose from "./sections/WhyChoose";
import VideoSection from "./sections/VideoSection";
import BlogsPost from "./sections/BlogsPost";
import ContactBanner from "./sections/ContactBanner";
import PurchasedItems from "./sections/PurchasedItems";
import PurchaseResults from "./sections/PurchaseResults";
import PurchaseProcess from "./sections/PurchaseProcess";
import BusinessPolicy from "./sections/BusinessPolicy";
import ReviewsReceived from "./sections/ReviewsReceived";
import FrequentlyAskedQuestions from "./sections/FrequentlyAskedQuestions";
import CompanyProfile from "./sections/CompanyProfile";
import Inquiry from "./sections/Inquiry";


const Index = () => {
  return (
    <>
      <Hero />
      <ContactFixedBanner />
      <Flow />
      <WhyChoose />
      <VideoSection />
      <BlogsPost />
      <ContactBanner />
      <PurchasedItems />
      <PurchaseResults />
      <PurchaseProcess />
      <BusinessPolicy />
      <ContactBanner />
      <ReviewsReceived />
      <FrequentlyAskedQuestions />
      <ContactBanner />
      <CompanyProfile />
      <Inquiry />
    </>
  );
};

export default Index;

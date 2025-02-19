import Image from "next/image";

const SubContent: React.FC<{ content: BlogSubContent }> = ({ content }) => {
  switch (content.type) {
    case "simple":
      return (
        <div className="border-t pt-5">
          <h2 className="font-black text-[18px] lg:text-[25px] leading-[48px]">
            {content.title}
          </h2>
          {content.description?.split("\n").map((text, index) => (
            <p className="text-base leading-8 my-5" key={index}>
              {text}
            </p>
          ))}
        </div>
      );

    case "image":
      return (
        <div className="border-t pt-5">
          <div className="relative w-full h-[250px] lg:w-[544px] lg:h-[307px] mx-auto">
            <Image
              className="object-contain"
              src={content.imageSrc}
              alt={content.title}
              fill
            />
          </div>
          <p className="text-center">{content.title}</p>
        </div>
      );

    case "numberedList":
      return (
        <div className="border-t pt-5">
          <h2 className="font-black text-[18px] lg:text-[25px] leading-[48px]">
            {content.title}
          </h2>
          {content.description && (
            <p className="text-base leading-8">{content.description}</p>
          )}
          {content.items?.map((item) => (
            <div className="ml-5" key={item.id}>
              <h3 className="font-black text-base leading-[48px] inline">
                {item.id}. {item.title}:
              </h3>
              <p className="text-base leading-8 inline">{item.description}</p>
            </div>
          ))}
        </div>
      );

    case "unNumberedList":
      return (
        <div className="border-t pt-5">
          <h2 className="font-black text-[18px] lg:text-[25px] leading-[48px]">
            {content.title}
          </h2>
          <p className="text-base leading-8 mb-5">{content.topDescription}</p>
          {content.items?.map((item, index) => (
            <h3 className="font-black text-[16px]" key={index}>
              {item}
            </h3>
          ))}
          <p className="text-base mt-5">{content.bottomDescription}</p>
        </div>
      );

    case "faq":
      return (
        <div className="border-t pt-5">
          <h2 className="font-black text-[18px] lg:text-[25px] leading-[48px]">
            {content.title}
          </h2>
          {content.items?.map((faq) => (
            <div className="ml-5" key={faq.id}>
              <h3 className="font-black text-[16px] leading-[48px]">
                {faq.id}. <span className="font-black">Q:</span> {faq.question}:
              </h3>
              <p className="text-base leading-8 ml-5">
                <span className="font-black">A:</span> {faq.answer}
              </p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
};

export default SubContent;

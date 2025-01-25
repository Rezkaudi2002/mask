import RadioGroup from "../components/RadioGroup";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import ImageUpload from "../components/ImageUpload";
import Image from "next/image";

const Inquiry = () => {
  return (
    <section className="py-[50px] lg:py-[60px] px-[20px] lg:px-0 bg-[url(/images/home-page/dot-bg-results.svg)] bg-auto font-noto">
      <h2 className="mb-[40px] md:mb-[42px] lg:mb-[50px] text-[30px] md:text-[40px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent text-center">
        お問い合わせ
      </h2>
      <form className="space-y-6 md:w-[60%] lg:w-[40%] md:mx-auto">
        {/* Input Fields */}
        <InputField
          id="name"
          name="name"
          label="お名前"
          placeholder="未入力"
          required
        />
        <InputField
          id="email"
          name="email"
          label="メールアドレス"
          placeholder="未入力"
          required
        />
        <InputField
          id="phone"
          name="phone"
          label="電話番号"
          placeholder="半角ハイフンなし"
          required
        />

        {/* Radio Groups */}
        <RadioGroup
          name="phonePermission"
          inlineLabels
          question="質問がある場合、こちらからお電話してもよろしいでしょうか？"
          required
          options={[
            { value: "allow_phone_call", label: "はい" },
            { value: "disallow_phone_call", label: "いいえ" },
          ]}
        />
        <RadioGroup
          name="usageType"
          question="使用状況"
          inlineLabels={false}
          required
          options={[
            { value: "business", label: "事業（個人事業者または法人)" },
            { value: "personal", label: "個人で使用" },
          ]}
        />
        <RadioGroup
          name="invoiceRegistration"
          inlineLabels
          required={false}
          question="事業で使用していた場合、インボイスの登録はしていますか？"
          options={[
            { value: "registered", label: "はい" },
            { value: "not_registered", label: "いいえ" },
          ]}
        />
        <RadioGroup
          name="provideRegistrationNumber"
          inlineLabels
          required={false}
          question="買取が成立しましたら、登録番号をご提供いただけますでしょうか？"
          options={[
            { value: "will_provide", label: "はい" },
            { value: "will_not_provide", label: "いいえ" },
          ]}
        />

        {/* Select Fields */}
        <SelectField
          id="city"
          name="city"
          label="市区町村"
          required
          options={[
            { value: "not_selected", label: "未選択" },
            { value: "tokyo", label: "東京" },
            { value: "osaka", label: "大阪" },
          ]}
        />
        <InputField
          id="productInfo"
          name="product_info"
          label="市区町村"
          placeholder="未入力"
          required
        />
        <SelectField
          id="inquirySource"
          name="inquiry_source"
          required={false}
          label="私たちをどこで知りましたか？"
          options={[
            { value: "none", label: "---" },
            { value: "web", label: "ウェブ検索" },
            { value: "ad", label: "広告" },
          ]}
        />
        <InputField
          id="productDetails"
          name="product_details"
          label="査定希望商品のメーカー名、型番"
          placeholder="(例:リョービ電ノコ(ASK-1000)動作)"
          required
        />
        <SelectField
          id="productCondition"
          name="product_condition"
          label="状態を選択してください"
          required={false}
          options={[
            { value: "scrap", label: "00 スクラップ" },
            { value: "used", label: "01 中古" },
            { value: "new", label: "02 新品" },
          ]}
        />

        {/* Image Upload */}
        <ImageUpload label="買取商品の写真があればこちらに添付してください。" />

        {/* Textarea */}
        <div>
          <label htmlFor="additionalNotes" className="block mb-[8px]">
            <span className="flex items-center space-x-2">
              <p>その他のご連絡事項 (お問い合わせ)</p>
              <span
                className="text-[12px] leading-[20px] font-normal text-[#D91C0B] text-nowrap"
                aria-required="true"
              >
                必須
              </span>
            </span>
          </label>
          <textarea
            id="additionalNotes"
            name="additional_notes"
            placeholder="ご質問やご連絡事項はこちらにお願いします"
            required
            className="py-[9px] px-[16px] w-full h-[100px] border-[1px] border-[#D1D5DB] rounded-md text-[14px] leading-[23px] font-normal"
          />
        </div>
        <button
          type="submit"
          className="w-[90%] lg:w-[60%] py-[12px] mx-auto text-[24px] leading-[36px] text-center text-white font-black rounded flex items-start justify-center gap-x-4 gradient-red"
        >
          送信する
          <Image
            src="/images/icons/arrow-right-red.svg"
            alt="arrow-right-red"
            width={32}
            height={32}
          />
        </button>
      </form>
    </section>
  );
};

export default Inquiry;

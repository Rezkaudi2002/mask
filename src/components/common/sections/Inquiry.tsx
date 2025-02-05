"use client";
import RadioGroup from "../../pages/home/components/RadioGroup";
import InputField from "../../pages/home/components/InputField";
import SelectField from "../../pages/home/components/SelectField";
import ImageUpload from "../../pages/home/components/ImageUpload";
import Image from "next/image";
import React from "react";
import { useFormHandler } from "@/hooks/useFormHandler";

const Inquiry = () => {
  const {
    formData,
    isSubmitting,
    handleInputChange,
    handleImageChange,
    handleSubmit,
  } = useFormHandler();
  return (
    <section id="inquiry" className="py-[50px] lg:py-[60px] px-[20px] lg:px-0 bg-[url(/images/home-page/dot-bg-results.svg)] bg-auto font-noto">
      <h2 className="mb-[40px] md:mb-[42px] lg:mb-[50px] text-[30px] md:text-[40px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent text-center">
        お問い合わせ
      </h2>
      <form
        className="space-y-6 md:w-[60%] lg:w-[40%] md:mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Input Fields */}
        <InputField
          id="name"
          name="name"
          label="お名前"
          placeholder="未入力"
          value={formData.name}
          required
          onChange={handleInputChange}
        />
        <InputField
          id="email"
          name="email"
          label="メールアドレス"
          placeholder="未入力"
          value={formData.email}
          required
          onChange={handleInputChange}
        />
        <InputField
          id="phone"
          name="phone"
          label="電話番号"
          placeholder="半角ハイフンなし"
          value={formData.phone}
          required
          onChange={handleInputChange}
        />

        {/* Radio Groups */}
        <RadioGroup
          name="phonePermission"
          inlineLabels
          question="質問がある場合、こちらからお電話してもよろしいでしょうか？"
          required
          value={formData.phonePermission}
          onChange={handleInputChange}
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
          value={formData.usageType}
          options={[
            { value: "business", label: "事業（個人事業者または法人)" },
            { value: "personal", label: "個人で使用" },
          ]}
          onChange={handleInputChange}
        />
        <RadioGroup
          name="invoiceRegistration"
          inlineLabels
          required={false}
          question="事業で使用していた場合、インボイスの登録はしていますか？"
          value={formData.invoiceRegistration}
          onChange={handleInputChange}
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
          value={formData.provideRegistrationNumber}
          onChange={handleInputChange}
          options={[
            { value: "will_provide", label: "はい" },
            { value: "will_not_provide", label: "いいえ" },
          ]}
        />
        {/* Select Fields */}
        <SelectField
          id="city"
          name="city"
          label="都道府県"
          required
          value={formData.city}
          options={[
            { value: "選択してください", label: "選択してください" },
            { value: "北海道", label: "北海道" },
            { value: "青森県", label: "青森県" },
            { value: "岩手県", label: "岩手県" },
            { value: "宮城県", label: "宮城県" },
            { value: "秋田県", label: "秋田県" },
            { value: "山形県", label: "山形県" },
            { value: "福島県", label: "福島県" },
            { value: "茨城県", label: "茨城県" },
            { value: "栃木県", label: "栃木県" },
            { value: "群馬県", label: "群馬県" },
            { value: "埼玉県", label: "埼玉県" },
            { value: "千葉県", label: "千葉県" },
            { value: "東京都", label: "東京都" },
            { value: "神奈川県", label: "神奈川県" },
            { value: "新潟県", label: "新潟県" },
            { value: "富山県", label: "富山県" },
            { value: "石川県", label: "石川県" },
            { value: "福井県", label: "福井県" },
            { value: "山梨県", label: "山梨県" },
            { value: "長野県", label: "長野県" },
            { value: "岐阜県", label: "岐阜県" },
            { value: "静岡県", label: "静岡県" },
            { value: "愛知県", label: "愛知県" },
            { value: "三重県", label: "三重県" },
            { value: "滋賀県", label: "滋賀県" },
            { value: "京都府", label: "京都府" },
            { value: "大阪府", label: "大阪府" },
            { value: "兵庫県", label: "兵庫県" },
            { value: "奈良県", label: "奈良県" },
            { value: "和歌山県", label: "和歌山県" },
            { value: "鳥取県", label: "鳥取県" },
            { value: "島根県", label: "島根県" },
            { value: "岡山県", label: "岡山県" },
            { value: "広島県", label: "広島県" },
            { value: "山口県", label: "山口県" },
            { value: "徳島県", label: "徳島県" },
            { value: "香川県", label: "香川県" },
            { value: "愛媛県", label: "愛媛県" },
            { value: "高知県", label: "高知県" },
            { value: "福岡県", label: "福岡県" },
            { value: "佐賀県", label: "佐賀県" },
            { value: "長崎県", label: "長崎県" },
            { value: "熊本県", label: "熊本県" },
            { value: "大分県", label: "大分県" },
            { value: "宮崎県", label: "宮崎県" },
            { value: "鹿児島県", label: "鹿児島県" },
            { value: "沖縄県", label: "沖縄県" },
          ]}
          onChange={handleInputChange}
        />


        <InputField
          id="productInfo"
          name="product_info"
          label="市区町村"
          placeholder="未入力"
          required
          value={formData.product_info}
          onChange={handleInputChange}
        />
        {/* <SelectField
          id="inquirySource"
          name="inquiry_source"
          required={false}
          label="私たちをどこで知りましたか？"
          value={formData.inquiry_source}
          onChange={handleInputChange}
          options={[
            { value: "none", label: "---" },
            { value: "web", label: "ウェブ検索" },
            { value: "ad", label: "広告" },
          ]}
        /> */}
        <InputField
          id="productDetails"
          name="product_details"
          label="査定希望商品のメーカー名、型番"
          placeholder="(例:リョービ電ノコ(ASK-1000)動作)"
          required
          value={formData.product_details}
          onChange={handleInputChange}
        />
        <SelectField
          id="productCondition"
          name="product_condition"
          label="状態を選択してください"
          required={false}
          value={formData.product_condition}
          onChange={handleInputChange}
          options={[
            { value: "not_selected", label: "選択してください" },
            { value: "unused", label: "未使用品" },
            { value: "excellent", label: "極上美品" },
            { value: "good", label: "美品" },
            { value: "used", label: "中古なり" },
            { value: "damaged", label: "キズ汚れ破損あり" },
            { value: "junk", label: "ジャンク" },
            { value: "scrap", label: "スクラップ" },
          ]}
        />

        {/* Image Upload */}
        <ImageUpload
          label="買取商品の写真があればこちらに添付してください。"
          setImage={handleImageChange}
          image={formData.image ?? null}
        />

        {/* Textarea */}
        <textarea
          id="additionalNotes"
          name="additional_notes"
          placeholder="ご質問やご連絡事項はこちらにお願いします"
          value={formData.additional_notes}
          className="py-[9px] px-[16px] w-full h-[100px] border-[1px] border-[#D1D5DB] rounded-md text-[14px] leading-[23px] font-normal"
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="w-[90%] lg:w-[60%] py-[12px] mx-auto text-[24px] leading-[36px] text-center text-white font-black rounded flex items-start justify-center gap-x-4 gradient-red"
        >
          {isSubmitting === true ? (
            "送信..."
          ) : (
            <>
              送信する
              <Image
                src="/images/icons/arrow-right-red.svg"
                alt="arrow-right-red"
                width={32}
                height={32}
              />
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Inquiry;

"use client";
import RadioGroup from "../../pages/home/components/RadioGroup";
import InputField from "../../pages/home/components/InputField";
import SelectField from "../../pages/home/components/SelectField";
import ImageUpload from "../../pages/home/components/ImageUpload";
import Image from "next/image";
import { useFormHandler } from "@/hooks/useFormHandler";
import PrivacyPolicy from "@/components/pages/home/components/PrivacyPolicy";

const Inquiry = () => {
  const {
    formData,
    isSubmitting,
    handleInputChange,
    handleImageChange,
    handleSubmit,
    addProduct,
    deleteProduct,
    handleProductInputChange,
    agreePrivacy,
    setAgreePrivacy,
    click,
    setClick,
  } = useFormHandler();

  const numberOfProduct = 3;

  return (
    <section
      id="inquiry"
      className="py-[50px] lg:py-[60px] px-[20px] lg:px-0 bg-[url(/images/home-page/dot-bg-results.svg)] bg-auto font-noto"
    >
      <div>
        <h2 className="text-[30px] md:text-[40px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent text-center">
          お問い合わせ
        </h2>
        <p className="mb-10 md:mb-12 lg:mb-14 mt-2 lg:mt-5 text-center text-xs lg:text-sm font-medium text-gray-700">
          <span className="text-red-600 pr-1 text-lg">*</span>
          営業目的での利用はお断りします
        </p>
      </div>
      <form
        className="space-y-6 max-w-[900px] md:mx-auto"
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
          click={click}
          setClick={setClick}
          options={[
            { value: "はい", label: "はい" }, // allow_phone_call
            { value: "いいえ", label: "いいえ" }, // disallow_phone_call
          ]}
        />
        <RadioGroup
          name="usageType"
          question="使用状況"
          inlineLabels={false}
          required
          value={formData.usageType}
          click={click}
          setClick={setClick}
          options={[
            {
              value: "事業（個人事業者または法人)",
              label: "事業（個人事業者または法人)",
            }, // business
            { value: "個人で使用", label: "個人で使用" }, // personal
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
          click={click}
          setClick={setClick}
          options={[
            { value: "はい", label: "はい" }, // registered
            { value: "いいえ", label: "いいえ" }, // not registered
          ]}
        />
        <RadioGroup
          name="provideRegistrationNumber"
          inlineLabels
          required={false}
          question="買取が成立しましたら、登録番号をご提供いただけますでしょうか？"
          value={formData.provideRegistrationNumber}
          onChange={handleInputChange}
          click={click}
          setClick={setClick}
          options={[
            { value: "はい", label: "はい" }, // will_provide
            { value: "いいえ", label: "いいえ" }, // will_not_provide
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
            { value: "選択してください", label: "選択してください" }, // not selected
            { value: "北海道", label: "北海道" }, // hokkaido
            { value: "青森県", label: "青森県" }, // aomori
            { value: "岩手県", label: "岩手県" }, // iwate
            { value: "宮城県", label: "宮城県" }, // miyagi
            { value: "秋田県", label: "秋田県" }, // akita
            { value: "山形県", label: "山形県" }, // yamagata
            { value: "福島県", label: "福島県" }, // fukushima
            { value: "茨城県", label: "茨城県" }, // ibaraki
            { value: "栃木県", label: "栃木県" }, // tochigi
            { value: "群馬県", label: "群馬県" }, // gunma
            { value: "埼玉県", label: "埼玉県" }, // saitama
            { value: "千葉県", label: "千葉県" }, // chiba
            { value: "東京都", label: "東京都" }, // tokyo
            { value: "神奈川県", label: "神奈川県" }, // kanagawa
            { value: "新潟県", label: "新潟県" }, // niigata
            { value: "富山県", label: "富山県" }, // toyama
            { value: "石川県", label: "石川県" }, // ishikawa
            { value: "福井県", label: "福井県" }, // fukui
            { value: "山梨県", label: "山梨県" }, // yamanashi
            { value: "長野県", label: "長野県" }, // nagano
            { value: "岐阜県", label: "岐阜県" }, // gifu
            { value: "静岡県", label: "静岡県" }, // shizuoka
            { value: "愛知県", label: "愛知県" }, // aichi
            { value: "三重県", label: "三重県" }, // mie
            { value: "滋賀県", label: "滋賀県" }, // shiga
            { value: "京都府", label: "京都府" }, // kyoto
            { value: "大阪府", label: "大阪府" }, // osaka
            { value: "兵庫県", label: "兵庫県" }, // hyogo
            { value: "奈良県", label: "奈良県" }, // nara
            { value: "和歌山県", label: "和歌山県" }, // wakayama
            { value: "鳥取県", label: "鳥取県" }, // tottori
            { value: "島根県", label: "島根県" }, // shimane
            { value: "岡山県", label: "岡山県" }, // okayama
            { value: "広島県", label: "広島県" }, // hiroshima
            { value: "山口県", label: "山口県" }, // yamaguchi
            { value: "徳島県", label: "徳島県" }, // tokushima
            { value: "香川県", label: "香川県" }, // kagawa
            { value: "愛媛県", label: "愛媛県" }, // ehime
            { value: "高知県", label: "高知県" }, // kochi
            { value: "福岡県", label: "福岡県" }, // fukuoka
            { value: "佐賀県", label: "佐賀県" }, // saga
            { value: "長崎県", label: "長崎県" }, // nagasaki
            { value: "熊本県", label: "熊本県" }, // kumamoto
            { value: "大分県", label: "大分県" }, // oita
            { value: "宮崎県", label: "宮崎県" }, // miyazaki
            { value: "鹿児島県", label: "鹿児島県" }, // kagoshima
            { value: "沖縄県", label: "沖縄県" }, // okinawa
          ]}
          onChange={handleInputChange}
        />
        <InputField
          id="productInfo"
          name="product_info"
          label="市区町村"
          placeholder="未入力"
          required={false}
          value={formData.product_info}
          onChange={handleInputChange}
        />
        {/* products list */}
        {formData.productsList.map((item, index) => (
          <div key={index} className="bg-[#fcf7f7] px-1 py-2 border">
            {index !== 0 && (
              <button
                type="button"
                onClick={() => deleteProduct(index)}
                className="w-[24px] h-[24px] ml-auto border border-[#DCDCDC] bg-white rounded-full flex items-center justify-center"
                aria-label="Delete Product"
              >
                <Image
                  src="/images/icons/trash.svg"
                  alt="Delete"
                  width={11}
                  height={11}
                  loading="lazy"
                />
              </button>
            )}

            <InputField
              id={`productDetails-${index}`}
              name="product_details"
              label="査定希望商品のメーカー名、型番"
              placeholder="(例:リョービ電ノコ(ASK-1000)動作)"
              required
              value={item.product_details}
              onChange={(e) => handleProductInputChange(e, index)}
            />
            <SelectField
              id={`productCondition-${index}`}
              name="product_condition"
              label="状態を選択してください"
              required={true}
              value={item.product_condition}
              onChange={(e) => handleProductInputChange(e, index)}
              options={[
                { value: "選択してください", label: "選択してください" }, // not selected
                { value: "未使用品", label: "未使用品" }, // unused
                { value: "極上美品", label: "極上美品" }, // excellent
                { value: "美品", label: "美品" }, // good
                { value: "中古なり", label: "中古なり" }, // used
                { value: "キズ汚れ破損あり", label: "キズ汚れ破損あり" }, // damaged
                { value: "ジャンク", label: "ジャンク" }, // junk
                { value: "スクラップ", label: "スクラップ" }, // scrap
              ]}
            />
            {/* Image Upload */}
            <ImageUpload
              label="買取商品の写真があればこちらに添付してください。"
              setImages={handleImageChange}
              images={item.images ?? new Array(3).fill(null)}
              productIndex={index}
            />
          </div>
        ))}

        {/* add product btn */}
        {formData.productsList.length < numberOfProduct && (
          <button type="button" onClick={addProduct}>
            ＋商品追加
          </button>
        )}

        {/* Textarea */}
        <textarea
          id="additionalNotes"
          name="additional_notes"
          placeholder="ご質問やご連絡事項はこちらにお願いします"
          value={formData.additional_notes}
          className="py-[9px] px-[16px] w-full h-[100px] border-[1px] border-[#D1D5DB] rounded-md text-[14px] leading-[23px] font-normal"
          onChange={handleInputChange}
        />

        <PrivacyPolicy
          setAgreePrivacy={setAgreePrivacy}
          agreePrivacy={agreePrivacy}
        />

        <button
          disabled={isSubmitting || !agreePrivacy}
          type="submit"
          className={`w-[90%] lg:w-[60%] py-[12px] mx-auto text-[24px] leading-[36px] 
            text-center text-white font-black rounded flex items-start justify-center 
            gap-x-4 gradient-red ${
              isSubmitting || !agreePrivacy
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          onClick={() => setClick(true)}
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
                loading="lazy"
              />
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Inquiry;

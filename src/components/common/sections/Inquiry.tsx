"use client";

import RadioGroup from "../../pages/home/components/RadioGroup";
import InputField from "../../pages/home/components/InputField";
import SelectField from "../../pages/home/components/SelectField";
import ImageUpload from "../../pages/home/components/ImageUpload";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    phonePermission: "",
    usageType: "",
    invoiceRegistration: "",
    provideRegistrationNumber: "",
    city: "",
    product_info: "",
    inquiry_source: "",
    product_details: "",
    product_condition: "",
    image: null as string | null,
    additional_notes: "",
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (image: string | null) => {
    setFormData((prevData) => ({ ...prevData, image }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // EmailJS Configuration
    const serviceID = "service_p3to9nt";
    const systemTemplateID = "template_xf3foxn"; // For sending to your system
    const welcomeTemplateID = "template_xf3foxn"; // For sending to the client
    const publicKey = "0xF8VQGwM-H1P-NVr";

    // Email parameters for your system (internal email)
    const emailParams = {
      ...formData,
      image: formData.image ? formData.image : "No Image Provided",
      to_email: "hakamha8@gmail.com", // Your system email (hardcoded)
    };

    // Email parameters for the client (welcome email)
    const welcomeParams = {
      to_name: formData.name, // Client's name
      to_email: formData.email, // Client's email
      message: `Welcome, ${formData.name}! Thank you for registering. Here are your submitted details:`,
      form_data: JSON.stringify(formData, null, 2), // Include all form data
    };

    // Send email to your system
    emailjs
      .send(serviceID, systemTemplateID, emailParams, publicKey)
      .then(() => {
        // Reset form data after successful email
        setFormData({
          name: "",
          email: "",
          phone: "",
          phonePermission: "",
          usageType: "",
          invoiceRegistration: "",
          provideRegistrationNumber: "",
          city: "",
          product_info: "",
          inquiry_source: "",
          product_details: "",
          product_condition: "",
          image: null,
          additional_notes: "",
        });

        // Toast notification
        Toast.fire({
          icon: "success",
          title: "メールが送信されました！",
        });
      })
      .catch((error) => {
        // Handle email sending errors
        Toast.fire({
          icon: "error",
          title: "送信中にエラーが発生しました: " + error.message,
        });
      });

    // Send welcome email to the client
    emailjs
      .send(serviceID, welcomeTemplateID, welcomeParams, publicKey)
      .then(() => {
        // Toast notification for welcome email
        Toast.fire({
          icon: "success",
          title: "Welcome email sent to client!",
        });
      })
      .catch((error) => {
        // Handle welcome email errors
        Toast.fire({
          icon: "error",
          title: "Error sending welcome email: " + error.message,
        });
      });
  };

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
          label="市区町村"
          required
          value={formData.city}
          options={[
            { value: "not_selected", label: "未選択" },
            { value: "tokyo", label: "東京" },
            { value: "osaka", label: "大阪" },
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
        <SelectField
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
        />
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
            { value: "scrap", label: "00 スクラップ" },
            { value: "used", label: "01 中古" },
            { value: "new", label: "02 新品" },
          ]}
        />

        {/* Image Upload */}
        <ImageUpload
          label="買取商品の写真があればこちらに添付してください。"
          setImage={handleImageChange}
          image={formData.image}
        />

        {/* Textarea */}
        <textarea
          id="additionalNotes"
          name="additional_notes"
          placeholder="ご質問やご連絡事項はこちらにお願いします"
          required
          value={formData.additional_notes}
          className="py-[9px] px-[16px] w-full h-[100px] border-[1px] border-[#D1D5DB] rounded-md text-[14px] leading-[23px] font-normal"
          onChange={handleInputChange}
        />

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

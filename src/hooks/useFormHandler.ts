import { useState } from "react";
import Swal from "sweetalert2";
import { TFormData } from "@/types/formData.type";

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

const initialFormData: TFormData = {
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
  productsList: [
    {
      product_details: "",
      product_condition: "not_selected",
      images: new Array(3).fill(null),
    },
  ],
  additional_notes: "",
};

export const useFormHandler = () => {
  const [formData, setFormData] = useState<TFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addProduct = () => {
    setFormData((prevData) => ({
      ...prevData,
      productsList: [
        ...prevData.productsList,
        {
          product_details: "",
          product_condition: "",
          images: new Array(3).fill(null),
        },
      ],
    }));
  };

  const handleProductInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index?: number
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      productsList: prevData.productsList.map((product, i) =>
        i === index ? { ...product, [name]: value } : product
      ),
    }));
  };

  const deleteProduct = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      productsList: prevData.productsList.filter((_, i) => i !== index),
    }));
  };

  const handleImageChange = (images: (string | null)[], index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      productsList: prevData.productsList.map((product, i) =>
        i === index ? { ...product, images } : product
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.city === "not_selected") {
      Toast.fire({ icon: "warning", title: "都道府県を選択してください。" });
      return;
    }

    const hasInvalidProductCondition = formData.productsList.some(
      (product) =>
        !product.product_condition ||
        product.product_condition === "not_selected"
    );

    if (hasInvalidProductCondition) {
      Toast.fire({ icon: "warning", title: "商品の状態を選択してください。" });
      return;
    }

    setIsSubmitting(true);

    // Show loading toast
    Swal.fire({
      title: "送信中...",
      html: "しばらくお待ちください。",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          "サーバーエラーが発生しました。もう一度お試しください。"
        );
      }

      setFormData(initialFormData);
      setAgreePrivacy(false);

      // Close loading and show success
      Swal.close();
      await Swal.fire({
        icon: "success",
        title: "送信完了！",
        text: "メールが送信されました！確認メールをお送りしました。",
      });
    } catch (error: unknown) {
      Swal.close(); // Ensure loading closes if an error occurs

      const errMsg = error instanceof Error ? error.message : "Unknown error";
      Swal.fire({
        icon: "error",
        title: "エラー発生！",
        text: `送信中にエラーが発生しました: ${errMsg}`,
      });
    } finally {
      setIsSubmitting(false);
      setAgreePrivacy(false);
    }
  };

  return {
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
  };
};

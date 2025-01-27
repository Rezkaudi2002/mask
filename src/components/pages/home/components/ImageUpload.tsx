"use client";
import React, {  useRef } from "react";
import Image from "next/image";

interface IImageUploadProps {
  label: string;
  image: string | null
  setImage: (image: string | null) => void
}

const ImageUpload = ({ label,setImage,image }: IImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => setImage(null);

  const triggerFileInput = () => fileInputRef.current?.click();

  const buttonStyles =
    "w-[24px] h-[24px] border border-[#DCDCDC] bg-white rounded-full flex items-center justify-center";

  return (
    <div className="space-y-2">
      <label htmlFor="file-input" className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex items-center gap-4">
        {/* Image Preview Section */}
        <div className="w-[300px] h-[150px] flex-1 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center bg-gray-50">
          {image ? (
            <Image
              src={image}
              alt="Uploaded"
              width={300}
              height={150}
              className="w-full h-full object-contain"
            />
          ) : (
            <label
              htmlFor="file-input"
              className="flex flex-col items-center justify-center cursor-pointer w-full h-full"
            >
              <Image
                src="/images/icons/Image-Icon.svg"
                alt="Upload Icon"
                width={54}
                height={54}
              />
            </label>
          )}
        </div>

        {/* File Input */}
        <input
          id="file-input"
          ref={fileInputRef}
          type="file"
          accept="image/*"
          name="image"
          className="hidden"
          onChange={handleImageChange}
        />

        {/* Action Buttons */}
        <div className="flex flex-col self-end gap-2">
          <button
            type="button"
            onClick={triggerFileInput}
            className={buttonStyles}
            aria-label="Edit image"
          >
            <Image
              src="/images/icons/edit.svg"
              alt="Edit"
              width={11}
              height={11}
            />
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className={buttonStyles}
            aria-label="Delete image"
          >
            <Image
              src="/images/icons/trash.svg"
              alt="Delete"
              width={11}
              height={11}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;

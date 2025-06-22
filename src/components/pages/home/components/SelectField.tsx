import React, { useState, useEffect } from "react";

interface IOption {
  value: string;
  label: string;
}

interface ISelectFieldProps {
  id: string;
  name: string;
  label: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: IOption[];
}

const SelectField = ({
  id,
  name,
  label,
  required,
  value,
  onChange,
  options,
}: ISelectFieldProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const placeholderOption = { value: "", label: "選択してください" };
  
  const getInitialOptions = () => {
    const selectedOption = options.find(opt => opt.value === value);
    if (selectedOption && selectedOption.value) {
      return [placeholderOption, selectedOption];
    }
    return [placeholderOption];
  };

  const optionsToDisplay = isOpened ? [placeholderOption, ...options] : getInitialOptions();

  const handleFocus = () => {
    if (!isOpened) {
      setIsOpened(true);
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block text-[14px] leading-[21px] mb-[8px]">
        {label}
        {required && (
          <span className="text-[#D91C0B] ml-2 text-[12px] font-normal">
            必須
          </span>
        )}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        className="px-[17px] py-[9px] gap-2 rounded-md border-[1px] border-[#D1D5DB] w-full"
        required={required}
      >
        {optionsToDisplay.map((option, index) => (
          <option
            key={`${option.value}-${index}`}
            value={option.value}
            disabled={option.value === ""}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
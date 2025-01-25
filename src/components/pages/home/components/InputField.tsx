interface IInputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
}

const InputField = ({
  id,
  name,
  label,
  placeholder,
  required,
}: IInputFieldProps) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-[14px] leading-[21px] font-medium block"
      >
        {label}
        {required && <span className="text-[#D91C0B] ml-2">必須</span>}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        className="px-[16px] py-[10px] w-full rounded-md border-[1px] border-[#D1D5DB]"
        required={required}
        aria-required={required}
      />
    </div>
  );
};

export default InputField;

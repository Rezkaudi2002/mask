interface ISelectFieldProps {
  id: string;
  name: string;
  label: string;
  required:boolean;
  options: { value: string; label: string }[];
}

const SelectField = ({
  id,
  name,
  label,
  options,
  required,
}: ISelectFieldProps) => {
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
        className="px-[17px] py-[9px] gap-2 rounded-md"
        required={required}
        aria-required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

import React from "react";

export const InputBasic = ({
  label,
  type = "text",
  name,
  placeholder,
  onChange,
  value = "",
  required = false,
}) => {
  return (
    <label className="w-full">
      <span className="text-start block text-sm font-medium text-gray-400">
            {label}
        </span>
      <input
        value={value}
        type={type}
        name={name}
        required={required}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        className="block w-full  rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#F3F6F9] transition-all ease-in-out duration-150 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:bg-[#EBEDF3]"
      />
    </label>
  );
};

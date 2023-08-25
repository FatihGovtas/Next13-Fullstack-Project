"use client";

import { InputProps } from "@/types";

const Input = ({
  id,
  type,
  placeholder,
  errors,
  register,
  required,
}: InputProps) => {
  return (
    <div className="mb-3">
      <input
        className={`${
          errors[id] ? "border border-red-500" : "border border-gray-500"
        } w-full h-12 px-3 text-lg outline-none rounded-md`}
        {...register(id, { required })}
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default Input;

"use client";

import { ButtonProps } from "@/types";

const Button = ({ onSubmit, btnLabel, outline, icon: Icon }: ButtonProps) => {
  return (
    <button
      className={`w-full h-12 ${
        outline ? "border border-black" : "bg-black text-white"
      } rounded-md flex items-center justify-center gap-2`}
      onClick={onSubmit}
    >
      {Icon && <Icon size={25} />}
      {btnLabel}
    </button>
  );
};

export default Button;

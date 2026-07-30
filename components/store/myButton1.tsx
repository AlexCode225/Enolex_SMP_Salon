import React from "react";
import { ButtonProps } from "@/constants/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-purple-400";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-purple-400 border-[1px]";
    default:
      // Primary purple background for my button
      return "bg-[#6C63FF]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-[#6C63FF] font-extrabold";
    case "secondary":
      return "text-purple-300 font-semibold";
    case "danger":
      return "text-red-600 font-bold";
    case "success":
      return "text-green-600 font-semibold";
    default:
      // White text for contrast on purple
      return "text-white font-bold";
  }
};

const MyButton1 = ({
  onClick, // 
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-full p-4 h-14 mx-auto flex flex-row justify-center items-center 
                  shadow-lg shadow-purple-500/40 
                  ${getBgVariantStyle(bgVariant)} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <span
        className={`text-lg tracking-wide 
                    ${getTextVariantStyle(textVariant)}`}
      >
        {title}
      </span>
      {IconRight && <IconRight />}
    </button>
  );
};

export default MyButton1;

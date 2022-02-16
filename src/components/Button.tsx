import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};
export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={`text-white bg-gradient-to-br from-raven-400 to-raven-600 hover:bg-gradient-to-tl focus:ring-4 focus:ring-raven-500 font-medium rounded-xl text-sm px-6 py-3 text-center shadow-nue-sm ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

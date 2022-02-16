import React from "react";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};
export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-gradient-to-br from-raven-400 to-raven-600 shadow-nue rounded-xl text-white ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

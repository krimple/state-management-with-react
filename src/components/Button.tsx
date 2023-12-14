import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type: "button" | "submit";
}

export default function Button({ type, label, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-blue-600 text-white rounded py-2 px-4"
      type={type}
    >
      {label}
    </button>
  );
}

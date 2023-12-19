import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    type: 'button' | 'reset' | 'submit';
}

export default function Button({ type, label, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="bg-blue-600 text-white rounded py-2 sm:py-4 px-2 sm:px-4 mx:2 sm:mx-4 text-xs sm:text-2xl"
            type={type}
        >
            {label}
        </button>
    );
}

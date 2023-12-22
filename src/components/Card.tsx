import { ReactNode } from 'react';

interface CardProps {
    children?: React.ReactNode;
    title?: string;
    header?: ReactNode;
    footer?: ReactNode;
}

export default function Card({ children, title, header, footer }: CardProps) {
    return (
        <div className="m-0.5 sm:m-2 p-0 sm:p-2 border border-gray-500">
            {title && (
                <div className="m-0 p-1 text-center text-white bg-black">
                    <h3>{title}</h3>
                </div>
            )}

            {header && <div className="p-0 sm:p-2 mt-0 sm:mt-2 mb-1 sm:mb-2 bg-white">{header}</div>}

            <div className="p-0.5 sm:p-2 my-0 bg-gray-300">{children}</div>
            {footer && <div className="p-0 sm:p-2 my-0.5 sm:my-2 bg-white-50">{footer}</div>}
        </div>
    );
}

'use client';
import React from 'react';
import Link from 'next/link';

const Button = ({ children, variant = "primary", href, as = "link", ...props }) => {
    const baseClasses = "text-[clamp(0.875rem,0.833vw,1rem)] leading-[clamp(1.375rem,0.833vw,1.5rem)] transition duration-200 inline-block font-normal rounded-3xl text-center";

    const variants = {
        primary: "bg-accent text-white py-2 px-4 hover:bg-blue-500",
        primaryFull: "bg-accent text-white py-3 px-4 w-full hover:bg-blue-500",
        secondary: "border border-accent text-accent py-2 px-4 hover:bg-accent hover:text-white",
        destructive: "bg-black text-white py-2 px-4",
        linkBlue: "text-accent hover:underline font-medium ",
        linkBlack: "text-black hover:underline font-medium ",
        cardNav: "bg-transparent w-fit",
    };

    const className = `${baseClasses} ${variants[variant] || variants.primary}`;

    if (as === "button" || !href) {
        return (
            <button className={className} {...props}>
                {children}
            </button>
        );
    }

    return (
        <Link href={href} className={className} {...props}>
            {children}
        </Link>
    );
};

export default Button;

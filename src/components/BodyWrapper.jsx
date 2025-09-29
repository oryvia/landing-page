'use client';
import { usePathname } from "next/navigation";

export default function BodyWrapper({ children, fontClass }) {
    const pathname = usePathname();
    const bodyClass = pathname.startsWith("/services")
        ? "bg-secondary"
        : "bg-primary";

    return (
        <body className={`${fontClass} antialiased min-h-screen ${bodyClass}`}>
            {children}
        </body>
    );
}

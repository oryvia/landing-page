import { Roboto } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import NewFooter from "@/components/Footer";
import BodyWrapper from "@/components/BodyWrapper";

// Optimized font loading with display swap
const roboto = Roboto({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <BodyWrapper fontClass={roboto.variable}>
                <NavBar />
                {children}
                <NewFooter />
            </BodyWrapper>
        </html>
    );
}

export const metadata = {
    metadataBase: new URL("https://www.oryvia.in"),
    title: {
        default: "Oryvia – Development-Based Company",
        template: "%s | Oryvia",
    },
    description: "Oryvia builds high-performance websites, scalable platforms, and digital experiences for global businesses.",
    keywords: [
        "Oryvia",
        "web development",
        "UI/UX design",
        "digital branding",
        "website maintenance",
        "global development company"
    ],
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.oryvia.in",
        siteName: "Oryvia",
        title: "Oryvia – Development-Based Company",
        description: "Oryvia is a global development-based company crafting high-performance websites and digital platforms.",
        images: ["/og-image.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Oryvia – Development-Based Company",
        description: "High-performance website development and digital design solutions by Oryvia.",
        creator: "@oryvia_in",
        images: ["/og-image.webp"],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

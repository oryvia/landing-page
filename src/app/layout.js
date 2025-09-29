import { Roboto } from "next/font/google";
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

export const metadata = {
    title: 'Oryvia',
    description: 'Your description here',
};

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

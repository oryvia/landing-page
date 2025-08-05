import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NewFooter from "@/components/newFooter";

// Optimized font loading with display swap
const roboto = Roboto({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export const metadata = {
    title: "Oxyvia | Scalable Web Solutions",
    description: "We build high-performance websites, custom platforms, and digital products designed to scale.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${roboto.variable} antialiased`}>
                <NavBar />
                {children}
                <NewFooter />
                {/* <Footer /> */}
            </body>
        </html>
    );
}

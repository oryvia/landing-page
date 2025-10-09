import AboutSection from "@/components/home/AboutSection";
import FaqSection from "@/components/home/FaqSection";
import GetInTouch from "@/components/home/GetInTouch";
import HeroSection from "@/components/home/Hero";
import NewServiceSection from "@/components/home/Services";
import Team from "@/components/home/Team";
import TechnologiesWeUse from "@/components/home/TechnologiesWeUse";
import Testimonials from "@/components/home/Testimonials";
import Work from "@/components/home/Project";
import HowWeWork from "@/components/home/HowWeWork";
import CaseStudyWallpickr from "@/components/test";
import SEO from "@/components/SEO";

export default function Home() {
    return (
        <>
            <SEO
                title="Oryvia – Development-Based Company for High-Performance Software"
                description="Oryvia is a development-based company helping businesses thrive online through high-performance software, scalable digital platforms, and tailored branding. We combine strategy, creativity, and clean code to deliver digital experiences that drive measurable growth."
                keywords="Oryvia, web development company, website design, UI UX design, custom website, scalable digital platform, website redesign, branding agency, development partner"
                image="https://www.oryvia.in/og-image.webp"
                url="https://www.oryvia.in"
                author="Oryvia"
                type="website"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://www.oryvia.in/#organization",
                        name: "Oryvia",
                        url: "https://www.oryvia.in",
                        logo: "https://www.oryvia.in/oryvia-logo.png",
                        foundingDate: "2025",
                        founder: {
                            "@type": "Person",
                            name: "Oryvia Team"
                        },
                        description:
                            "Oryvia specializes in crafting high-performance websites, scalable platforms, and tailored branding for startups, creators, and enterprises.",
                        sameAs: [
                            "https://www.linkedin.com/company/oryvia/posts/?feedView=all",
                            "https://www.instagram.com/oryvia.in?utm_source=ig_web_button_share_sheet&igsh=dGd5MThxd3M1bnJ6",
                            "https://x.com/oryvia_in?s=21",
                            "https://www.threads.com/@oryvia.in",
                            "https://www.facebook.com/profile.php?id=61580981621771",
                            "https://youtube.com/@oryvia-in?si=J11aiCEeH6FojfPa"
                        ],
                        contactPoint: {
                            "@type": "ContactPoint",
                            email: "info@oryvia.in",
                            contactType: "customer support",
                        },
                    }),
                }}
            />
            <main>
                <section
                    className="space-y-10 md:space-y-12 lg:space-y-16 my-26 md:my-36"
                    suppressHydrationWarning
                >
                    <HeroSection />
                    <AboutSection />
                    <NewServiceSection />
                    {/* <TechnologiesWeUse /> */}
                    <Work />
                    <HowWeWork />
                    {/* <Testimonials /> */}
                    <Team />
                    <FaqSection />
                    <GetInTouch />
                    {/* <CaseStudyWallpickr/> */}
                </section>
            </main>
        </>
    );
}

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

export default function Home() {
    return (
        <main>
            <section
                className="space-y-8 md:space-y-12 lg:space-y-16 my-26 md:my-36"
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
    );
}

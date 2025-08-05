import AboutSection from "@/components/home/AboutSection";
import FaqSection from "@/components/home/FaqSection";
import GetInTouch from "@/components/home/GetInTouch";
import HeroSection from "@/components/home/Hero";
import NewServiceSection from "@/components/home/newServices";
import Team from "@/components/home/Team";
import TechnologiesWeUse from "@/components/home/TechnologiesWeUse";
import Testimonials from "@/components/home/Testimonials";
import Work from "@/components/home/Work";
import HowWeWork from "@/components/home/newHowWeWork";

export default function Home() {
    return (
        <main>
            <section
                className="space-y-16 md:space-y-24 lg:space-y-40 my-36"
                suppressHydrationWarning
            >
                <HeroSection />
                <AboutSection />
                <NewServiceSection />
                <TechnologiesWeUse />
                <Work />
                <HowWeWork />
                <Testimonials />
                <Team />
                <FaqSection />
                <GetInTouch />
            </section>
        </main>
    );
}

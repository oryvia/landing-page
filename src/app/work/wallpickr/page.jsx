"use client";
import { useState } from "react";
import Image from "next/image";

const screenshots = [
    { src: "/images/s1.svg", caption: "Homepage" },
    { src: "/images/s2.png", caption: "Download Options (multiple resolutions)" },
    { src: "/images/s2.png", caption: "Search Functionality" },
    { src: "/images/s2.png", caption: "Category Filters" },
    { src: "/images/s3.png", caption: "Responsive Design" },
    { src: "/images/s4.png", caption: "Download Options" },
];

export default function CaseStudyWallpickr() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? screenshots.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === screenshots.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="space-y-8 md:space-y-12 lg:space-y-16 my-26 md:my-36">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="main-page-heading">
                    WallPickr – Wallpaper Web App
                </h1>
                <p className="intro-text text-muted">
                    A clean, fast, and modern wallpaper browsing experience – designed and built by our team.
                </p>
            </div>

            {/* Overview */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start mb-20">
                <div>
                    <h3 className="content-heading mb-4">Project Overview</h3>
                    <p className="body-default">
                        WallPickr is a wallpaper web app that solves the cluttered, ad-heavy experience of most wallpaper websites.
                        Built with React.js, Tailwind CSS, and deployed on Vercel, it delivers a seamless browsing and downloading experience.
                    </p>
                </div>
                <div className="bg-light rounded-2xl p-6 shadow-sm">
                    <ul className="space-y-3">
                        <li><span className="font-semibold">Client Type:</span> Internal Project</li>
                        <li><span className="font-semibold">Industry:</span> Digital Media</li>
                        <li><span className="font-semibold">Tech Stack:</span> React.js, Tailwind CSS, Next.js, Vercel</li>
                        <li><span className="font-semibold">Role:</span> End-to-end Development</li>
                    </ul>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg mb-20">
                <Image
                    src="/images/s3.svg"
                    alt="WallPickr Hero"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            {/* Challenge & Solution */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h3 className="content-heading mb-4">The Challenge</h3>
                    <p className="body-default">
                        Most wallpaper websites are slow, filled with ads, and lack proper filtering. Users needed
                        a faster, simpler, and more enjoyable way to explore wallpapers without distractions.
                    </p>
                </div>
                <div>
                    <h3 className="content-heading mb-4">The Solution</h3>
                    <p className="body-default">
                        We created WallPickr: a clean, high-performance wallpaper app with search, filtering,
                        multiple resolution downloads, and a responsive mobile-first design.
                    </p>
                </div>
            </div>

            {/* Features */}
            {/* <div className="max-w-5xl mx-auto mb-20">
                <h3 className="text-2xl font-semibold mb-8 text-center">Key Features</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        "Wallpaper Gallery",
                        "Download Options (multiple resolutions)",
                        "Search Functionality",
                        "Category Filters",
                        "Responsive Design",
                        "Optimized Performance"
                    ].map((feature, i) => (
                        <div key={i} className="bg-light rounded-3xl p-6">
                            <p className="font-medium text-center text-gray-800">{feature}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Screenshots Gallery */}
            <div className="max-w-5xl mx-auto mb-20 text-center">
                <h3 className="content-heading mb-8">Key Features</h3>

                {/* Image wrapper */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                    <Image
                        src={screenshots[currentIndex].src}
                        alt={screenshots[currentIndex].caption}
                        width={1000}
                        height={600}
                        className="w-full h-auto object-cover"
                    />

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black transition"
                    >
                        ←
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black transition"
                    >
                        →
                    </button>
                </div>

                {/* Caption */}
                <p className="mt-4 inline-block bg-black text-white px-5 py-2 rounded-full text-sm">
                    {screenshots[currentIndex].caption}
                </p>
            </div>
            {/* Results */}
            <div className="max-w-5xl mx-auto text-center mb-20">
                <h3 className="text-2xl font-semibold mb-4">Results & Impact</h3>
                <p className="body-default max-w-3xl mx-auto">
                    WallPickr delivered a functional MVP that demonstrates strong UI/UX skills and performance-focused frontend engineering.
                    It serves as proof of our ability to build real-world, production-grade projects.
                </p>
            </div>

            {/* Demo Link */}
            <div className="text-center">
                <a
                    href="https://wallpickr.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-blue-500 transition"
                >
                    View Live
                </a>
            </div>
        </section>
    );
}

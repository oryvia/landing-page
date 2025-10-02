"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Image from "next/image";

const screenshots = [
    { src: "/images/s1.png", caption: "Homepage" },
    { src: "/images/s2.png", caption: "Search Functionality" },
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
        <section className="w-full bg-white text-gray-900 py-20 px-6 md:px-16 lg:px-28">
            {/* ... your existing sections above */}

            {/* Screenshots Gallery */}
            <div className="max-w-5xl mx-auto mb-20 text-center">
                <h3 className="text-2xl font-semibold mb-8">Screenshots</h3>

                {/* Image wrapper */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
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
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black transition"
                    >
                        ←
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black transition"
                    >
                        →
                    </button>
                </div>

                {/* Caption */}
                <p className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full text-sm">
                    {screenshots[currentIndex].caption}
                </p>

                {/* Thumbnail navigation */}
                <div className="flex justify-center gap-4 mt-6">
                    {screenshots.map((shot, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition ${currentIndex === idx
                                    ? "border-black"
                                    : "border-transparent opacity-70 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={shot.src}
                                alt={shot.caption}
                                width={80}
                                height={56}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* ... Results + Demo link after */}
        </section>
    );
}

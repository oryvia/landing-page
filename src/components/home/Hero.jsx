'use client';
import { memo } from 'react';
import Lottie from 'lottie-react';
import data from "@/data/data.json";
import heroAnimation from '@/animations/hero.json';

const HeroSection = () => {
    const heroData = data?.home?.hero;
    const highlight = heroData?.highlight;

    return (
        <section className="relative w-full py-16 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Lottie
                    animationData={heroAnimation}
                    loop
                    autoplay
                    className="w-full h-full object-cover blur"
                    style={{ width: '100%', height: '100%' }}
                    loading="lazy"
                />
            </div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="max-w-7xl mx-auto text-center px-6">
                    <h1 className="massive1 text-[152px] whitespace-pre-line">
                        {heroData?.lines?.map((line, index) => {
                            if (highlight && line.includes(highlight)) {
                                const [before, after] = line.split(highlight);
                                return (
                                    <span key={index} className="block">
                                        {before}
                                        <span className="text-accent">{highlight}</span>
                                        {after}
                                    </span>
                                );
                            }
                            return <span key={index} className="block">{line}</span>;
                        })}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default memo(HeroSection);

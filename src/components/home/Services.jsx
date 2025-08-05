import React from 'react';
import ServiceCard from '../ServiceCard';
import data from "@/data/data.json";

const services = [
    'uiux',
    'websiteMaintenance',
    'customWebsite',
    'websiteRedesign',
];

function ServiceSection() {
    return (
        <section className="bg-black px-[clamp(1rem,4vw,2rem)] py-[clamp(3rem,5vw,6rem)]">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Section Header */}
                <header className="text-center">
                    <h2 className="mainW">{data.home.services.title}</h2>
                    <div className="mt-2 h-1 w-[clamp(4rem,6vw,6rem)] bg-primary mx-auto rounded-full" />
                </header>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(1rem,2vw,2rem)]">
                    {services.map((key) => (
                        <ServiceCard key={key} serviceKey={key} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;

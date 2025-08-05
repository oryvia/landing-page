// components/HowWeWork.jsx
import React from "react";
import { home } from "@/data/data.json";
import WorkFlowCard from "../WorkFlowCard";

const HowWeWork = () => {
    const { howWeWork } = home ?? {};
    const {
        subheading,
        heading,
        description,
        steps = [],
    } = howWeWork ?? {};

    return (
        <section className="relative px-5 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto space-y-4">
                {subheading && <p className="para3">{subheading}</p>}
                {heading && <h2 className="main mb-4 max-w-3xl">{heading}</h2>}
                {description && <p className="para2 max-w-3xl">{description}</p>}
            </div>

            {steps.length > 0 && (
                <div className="mt-10 flex flex-col max-w-5xl mx-auto px-6 md:px-14 md:space-y-0 space-y-16">
                    {steps.map((step, idx) => (
                        <WorkFlowCard key={idx} step={step} idx={idx} />
                    ))}
                </div>
            )}

            <p className="mt-16 text-center para4 italic">
                *Ready to be delivered!
            </p>
        </section>
    );
};

export default HowWeWork;

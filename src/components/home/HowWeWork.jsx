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
            <div className="relative z-10 max-w-7xl mx-auto space-y-4">
                {subheading && <p className="minor-heading">{subheading}</p>}
                {heading && <h2 className="section-heading mb-4 max-w-3xl">{heading}</h2>}
                {description && <p className="body-default max-w-3xl">{description}</p>}
            </div>

            {steps.length > 0 && (
                <div className="relative z-10 mt-10 flex flex-col max-w-5xl mx-auto px-6 md:px-14 md:space-y-0 space-y-16">

                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-10 "
                        style={{ backgroundImage: "url('/images/grid.svg')" }}
                        aria-hidden="true"
                    ></div>

                    {steps.map((step, idx) => (
                        <WorkFlowCard key={idx} step={step} idx={idx} />
                    ))}
                </div>
            )}

            <p className="relative z-10 mt-16 text-center caption ">
                *Ready to be delivered!
            </p>
        </section>
    );
};

export default HowWeWork;

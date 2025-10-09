// components/HowWeWork.jsx
import React from "react";
import data from "@/data/data.json";
import WorkFlowCard from "../WorkFlowCard";

const HowWeWork = () => {
    const { howWeWork } = data.home ?? {};
    const {
        subheading,
        heading,
        description,
        steps = [],
    } = howWeWork ?? {};

    return (
        <section className="relative px-4">
            <div className="relative z-10 max-w-7xl mx-auto space-y-2">
                {subheading && <p className="minor-heading">{subheading}</p>}
                {heading && <h2 className="section-heading max-w-3xl">{heading}</h2>}
                {description && <p className="body-default text-muted max-w-3xl">{description}</p>}
            </div>

            {steps.length > 0 && (
                <div className="relative z-10 mt-10 md:mt-12 flex flex-col max-w-5xl mx-auto px-8 md:px-14 space-y-16">

                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-10"
                        style={{ backgroundImage: "url('/images/grid.svg')" }}
                        aria-hidden="true"
                    ></div>

                    {steps.map((step, idx) => (
                        <WorkFlowCard key={idx} step={step} idx={idx} />
                    ))}
                </div>
            )}

            <p className="relative z-10 mt-8 md:mt-10 text-center caption text-subtle">
                *Ready to be delivered!
            </p>
        </section>
    );
};

export default HowWeWork;

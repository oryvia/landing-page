import React from "react";
import homeData from "@/data/data.json";

const HowWeWorkSection = () => {
    const { howWeWork = {} } = homeData?.home || {};
    const { steps = [], heading = "Our Process for Delivering Results" } = howWeWork;

    return (
        <section className="max-w-7xl mx-auto px-4 py-20" aria-labelledby="how-we-work-heading">
            <header className="text-center mb-20">
                <h2 id="how-we-work-heading" className="main text-3xl sm:text-4xl font-semibold">
                    {heading}
                </h2>
            </header>

            <div className="space-y-20">
                {steps.map((step, index) => {
                    return (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 transition-shadow hover:shadow-md p-6 rounded-xl ${
                                index !== 0 ? "border-t border-gray-200 pt-12" : ""
                            }`}
                            aria-labelledby={`step-title-${index}`}
                        >
                            {/* Step Number */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-lg shrink-0">
                                {index + 1}
                            </div>

                            {/* Step Content */}
                            <div className="flex-1">
                                <h3 id={`step-title-${index}`} className="text-xl font-semibold mb-2 text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HowWeWorkSection;

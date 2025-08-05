import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import servicesData from "@/data/data.json";

// ServiceCard Component: Displays service title, features, preview video, and CTA button
const ServiceCard = React.memo(function ServiceCard({ serviceKey }) {
    const serviceData = servicesData?.home?.services?.[serviceKey];
    if (!serviceData) return null;

    const { title, features, video, cta } = serviceData;

    // Style Constants
    const sectionClasses = "rounded-3xl p-[clamp(1rem,4vw,2rem)] bg-light flex flex-col gap-[clamp(2rem,4vw,3rem)] w-full mx-auto";
    const listClasses = "para3 space-y-[clamp(0.5rem,1.2vw,1rem)] list-disc list-inside md:w-3/5";
    const videoClasses = "w-[clamp(5rem,8vw,6rem)] aspect-square object-cover hidden md:block";

    return (
        <section className={sectionClasses}>
            {/* Title */}
            <h2 id={`${serviceKey}-title`} className="sub text-center">
                {title}
            </h2>

            {/* Features and Video Preview */}
            <div
                role="group"
                aria-labelledby={`${serviceKey}-title`}
                className="flex flex-col md:flex-row justify-between gap-8 items-start"
            >
                <ul className={listClasses}>
                    {features?.map((item, idx) => (
                        <li key={idx} className="whitespace-nowrap">
                            {item}
                        </li>
                    ))}
                </ul>

                <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    loading="lazy"
                    aria-label={`${title} preview video`}
                    className={videoClasses}
                />
            </div>

            {/* Call to Action Button */}
            <Button href="#" variant="distructive">
                {cta}
            </Button>
        </section>
    );
});

ServiceCard.propTypes = {
    serviceKey: PropTypes.string.isRequired,
};

export default ServiceCard;

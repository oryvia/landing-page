import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const NewServiceCard = ({ service }) => {
    if (!service) return null;

    return (
        <div
            role="region"
            tabIndex="0"
            aria-label={`Service: ${service.title}`}
            className="relative w-full aspect-[4/5] md:max-h-[600px] bg-cover bg-center overflow-hidden"
        >
            <picture>
                <source media="(max-width: 1024px)" srcSet={service.mobileImage || service.image} />
                <source media="(min-width: 1024px)" srcSet={service.image} />
                <img
                    src={service.image || "/images/fallback.jpg"}
                    alt={service.imageAlt || service.title || "Service image"}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </picture>
            <div className="absolute inset-0 flex flex-col items-center text-center pt-16 md:pt-24 space-y-4">
                <div className="space-y-4">
                    <h2
                        className={`massive2 leading-tight whitespace-pre-line ${[2, 3].includes(Number(service.id)) ? "text-white" : "text-dark"}`}
                        role="heading"
                        aria-level="2"
                    >
                        {service.title}
                    </h2>
                    <Button
                        href={service.link || "#"}
                        variant="primary"
                        aria-label={`Call to action: ${service.cta || `Learn more about ${service.title}`}`}
                    >
                        {service.cta}
                    </Button>
                </div>
            </div>
        </div>
    );
};

NewServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
};

export default NewServiceCard;

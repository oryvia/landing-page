import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import data from "@/data/data.json";

const NewServiceCard = ({ serviceIndex = 0 }) => {
    const service = data?.home?.newServices?.[serviceIndex];

    if (!service) return null;

    return (
        <div
            role="region"
            tabIndex="0"
            aria-label={`Service: ${service.title}`}
            className="relative w-full aspect-[4/3] md:h-[500px] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url('${service.image || "/images/fallback.jpg"}')` }}
        >
            <div className="absolute inset-0  backdrop-blur-3xl flex flex-col justify-center items-center text-center p-6 space-y-4 ">
                <img
                    src={service.image || "/images/fallback.jpg"}
                    alt={service.imageAlt || service.title || "Service image"}
                    className="hidden"
                />
                <h2 className="main" role="heading" aria-level="2">{service.title}</h2>
                <p className="para1 max-w-xl">{service.description}</p>
                <Button
                    href={service.link || "#"}
                    variant="primary"
                    aria-label={`Call to action: ${service.cta || `Learn more about ${service.title}`}`}
                >
                    {service.cta}
                </Button>
            </div>
        </div>
    );
};

NewServiceCard.propTypes = {
    serviceIndex: PropTypes.number,
};

export default NewServiceCard;

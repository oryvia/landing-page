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
            className="relative w-full aspect-[1/1] md:h-[600px] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url('${service.image || "/images/fallback.jpg"}')` }}
        >
            <div className="absolute inset-0  flex flex-col  items-center text-center p-24 space-y-4">
                <img
                    src={service.image || "/images/fallback.jpg"}
                    alt={service.imageAlt || service.title || "Service image"}
                    className="hidden"
                />
                <div className="space-y-8">
                    <h2
                        className={`massive2 leading-tight whitespace-pre-line ${[2, 3].includes(Number(service.id)) ? "text-white" : "text-dark"
                            }`}
                        role="heading"
                        aria-level="2"
                    >
                        {service.title}
                    </h2>
                    {/* <p className="para1 max-w-xl">{service.description}</p> */}
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

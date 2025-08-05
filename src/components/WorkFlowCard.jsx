import React from "react";

const WorkFlowCard = ({ step, idx }) => {
    const isEven = idx % 2 === 0;
    const cardRotationClass = isEven ? "ml-auto -rotate-10" : "mr-auto rotate-10";

    return (
        <div
            role="region"
            aria-labelledby={`step-title-${idx}`}
            className={`relative w-full sm:w-80 transform transition-all hover:scale-105 shadow-xl bg-light text-center px-4 pb-4 rounded-3xl space-y-4 ${cardRotationClass}`}
        >
            <div className="py-5 relative">
                <span
                    className="absolute w-4 h-4 bg-gray-900 rounded-full"
                    aria-hidden="true"
                />
            </div>
            <div className="bg-white rounded-2xl px-4 pt-4 pb-10 text-left">
                <p className="para4 uppercase mb-1">{step.step}</p>
                <h3 id={`step-title-${idx}`} className="sub mb-2">
                    {step.title}
                </h3>
                <p className="para3">{step.description}</p>
            </div>
        </div>
    );
};

export default WorkFlowCard;

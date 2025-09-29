"use client";

import React from "react";
import Button from "../Button";
import data from "@/data/data.json";

const GetInTouch = () => {
    const { heading, subheading, button } = data.home.getInTouch;

    return (
        <section
            id="get-in-touch"
            aria-labelledby="get-in-touch-heading"
            aria-describedby="get-in-touch-description"
            className="text-center px-5 md:px-8 lg:px-16"
        >
            <div className="max-w-3xl mx-auto">
                <h2 id="get-in-touch-heading" className="sub-heading mb-4">
                    {heading}
                </h2>
                <p id="get-in-touch-description" className="body-default mb-6">
                    {subheading}
                </p>
                <Button href={button.link} variant={button.variant}>
                    {button.label}
                </Button>
            </div>
        </section>
    );
};

export default GetInTouch;

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
            className="text-center px-4"
        >
            <div className="max-w-3xl mx-auto">
                <h2 id="get-in-touch-heading" className="sub-heading mb-2">
                    {heading}
                </h2>
                <p id="get-in-touch-description" className="body-default text-muted mb-4">
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

import React from "react";
import data from "@/data/data.json";
import Button from "../Button";

const Testimonials = () => {
    const { heading, description, cta, testimonials } = data.home.testimonialsSection;

    return (
        <section className="px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Heading and description */}
                <div className="max-w-md space-y-2">
                    <h2 className="section-heading text-gradient-blue-purple-pink">
                        {heading.split(". ").map((line, i) => (
                            <span key={i} className="block">
                                {line}
                            </span>
                        ))}
                    </h2>
                    <p className="body-default text-subtle">{description}</p>
                    {/* <Button variant="linkBlack">
                        {cta.label}
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-black ml-2"></span>
                    </Button> */}
                </div>

                {/* Testimonial cards */}
                <div className="space-y-6">
                    {testimonials.map(({ quote, author, position }, index) => (
                        <blockquote
                            key={index}
                            className="bg-white border-2 border-light rounded-3xl shadow-[5px_5px_0_0_#F5F5F7] p-6"
                        >
                            <p className="intro-text text-muted mb-2">"{quote}"</p>
                            <footer>
                                <h4 className="label-heading">{author}</h4>
                                <p className="caption text-disabled">{position}</p>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

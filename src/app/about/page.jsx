"use client";

import Image from "next/image";
import data from "@/data/data.json";
import Button from "@/components/Button";

export default function About() {
    const {
        heading,
        intro,
        servicesTitle,
        services,
        heroImage,
        heroImageAlt,
        approachTitle,
        approachIntro,
        approachPoints,
        whatSetsUsApartTitle,
        whatSetsUsApartPoints,
        finalCta,
    } = data.aboutPage;

    return (
        <main className="md:my-36 my-26 px-4">
            <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">

                {/* Hero Section */}
                <header className="text-center space-y-10">
                    <h1 className="main-page-heading" aria-label="About Us Heading">{heading}</h1>
                    <section className="flex flex-col md:flex-row gap-x-12 gap-y-6 items-center lg:items-start" aria-label="About us introduction and services">
                        <article className="w-full space-y-2">
                            <p className="intro-text text-muted whitespace-pre-line text-justify">{intro}</p>
                            <h2 className="content-heading text-left">{servicesTitle}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4" role="list">
                                {services.map((service, index) => (
                                    <article
                                        key={index}
                                        className="bg-light text-center py-6 rounded-3xl body-sm text-muted"
                                        role="listitem"
                                    >
                                        {service}
                                    </article>
                                ))}
                            </div>
                        </article>
                        <Image
                            src={heroImage}
                            alt={heroImageAlt}
                            width={600}
                            height={500}
                            className="hidden md:block w-full h-full object-cover rounded-3xl"
                        />
                    </section>
                </header>

                {/* Divider */}
                <figure className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
                    <Image
                        src="/images/divider.jpg"
                        alt="Wavy horizontal line divider separating content sections"
                        width={1920}
                        height={200}
                        className="w-full h-40 sm:h-48 md:h-56 lg:h-100 object-cover"
                    />
                </figure>

                {/* Our Approach */}
                <section aria-labelledby="approach-title" className="space-y-2">
                    <h2 id="approach-title" className="content-heading">{approachTitle}</h2>
                    <div className="space-y-2">
                        <p className="body-default text-muted text-justify">{approachIntro}</p>
                        <ul className="list-disc list-inside body-default text-subtle space-y-1" role="list">
                            {approachPoints.map((point, index) => (
                                <li key={index} role="listitem">{point}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* What Sets Us Apart */}
                <section aria-labelledby="apart-title" className="grid gap-6 md:grid-cols-2 items-start">
                    <div>
                        <h2 id="apart-title" className="section-heading">{whatSetsUsApartTitle}</h2>
                    </div>
                    <article className="max-w-prose body-default text-muted space-y-4 text-justify">
                        {whatSetsUsApartPoints.map((point, index) => (
                            <p key={index} className={index === whatSetsUsApartPoints.length - 1 ? "intro-text text-dark" : ""}>
                                {point}
                            </p>
                        ))}
                    </article>
                </section>

                {/* Final CTA */}
                <section className="max-w-3xl mx-auto text-center space-y-4" aria-label="Final call to action">
                    <div className="space-y-2">
                        <h2 className="sub-heading" aria-label="Call to action">{finalCta.title}</h2>
                        <p className="bodu-default text-muted">{finalCta.description}</p>
                    </div>
                    <Button href={finalCta.link} variant="primary">
                        {finalCta.button}
                    </Button>
                </section>
            </div>
        </main>
    );
}

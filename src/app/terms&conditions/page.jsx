"use client";
import React from 'react';
import data from "@/data/data.json";

export default function TermsPage() {
    return (
        <main className="max-w-4xl mx-auto my-36 px-4 text-justify">
            <article className="space-y-8 md:space-y-12 lg:space-y-16">
                <h1 className="text-center main-page-heading">
                    {data.terms.title}
                </h1>
                <p className="whitespace-pre-line intro-text">
                    {data.terms.intro}
                </p>
                {data.terms.sections.map((section, index) => (
                    <section key={index} role="region" aria-label={section.heading} className="space-y-4">
                        <header>
                            <h2 className="label-heading">
                                {section.heading}
                            </h2>
                        </header>
                        {section.content?.map((para, i) => (
                            <p key={i} className="body-default">
                                {para}
                            </p>
                        ))}
                        {section.list && (
                            <ul className="list-disc list-inside body-default">
                                {section.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {section.note && (
                            <p className="body-sm">
                                {section.note}
                            </p>
                        )}
                    </section>
                ))}
            </article>
        </main>
    );
}

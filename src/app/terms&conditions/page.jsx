"use client";
import React from 'react';
import data from "@/data/data.json";

export default function TermsPage() {
    return (
        <main className="max-w-4xl mx-auto my-40 px-4 space-y-12 text-justify">
            <article className="space-y-12">
                <h1 className="text-center text-4xl font-bold tracking-tight">
                    {data.terms.title}
                </h1>

                <p className="whitespace-pre-line text-base leading-relaxed text-gray-700">
                    {data.terms.intro}
                </p>

                {data.terms.sections.map((section, index) => (
                    <section key={index} role="region" aria-label={section.heading} className="space-y-4">
                        <header>
                            <h2 className="text-xl font-semibold text-gray-900">
                                {section.heading}
                            </h2>
                        </header>

                        {section.content?.map((para, i) => (
                            <p key={i} className="text-base leading-relaxed text-gray-700">
                                {para}
                            </p>
                        ))}

                        {section.list && (
                            <ul className="list-disc list-inside text-base leading-relaxed text-gray-700">
                                {section.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {section.note && (
                            <p className="text-sm italic text-gray-600">
                                {section.note}
                            </p>
                        )}
                    </section>
                ))}
            </article>
        </main>
    );
}

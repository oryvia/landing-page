'use client';

import React from 'react';
import Accordion from '@/components/Accordion';
import data from "@/data/data.json";

const AccordionTextContent = ({ text }) => (
    <p className="whitespace-pre-line">{text}</p>
);

const PrivacyPolicy = () => {
    const accordionItems = data.privacyPolicy.items.map((item) => ({
        ...item,
        content: <AccordionTextContent text={item.content} />,
    }));

    return (
        <main className="px-4 my-40" role="main">
            <article className="max-w-7xl mx-auto space-y-8" aria-labelledby="privacy-policy-title">
                <header>
                    <h1 id="privacy-policy-title" className="massive2 text-center">
                        {data.privacyPolicy.title}
                    </h1>
                    <p className="para1 text-center">{data.privacyPolicy.description}</p>
                </header>

                <section role="region" aria-labelledby="privacy-accordion">
                    <Accordion items={accordionItems} />
                </section>
            </article>
        </main>
    );
};

export default PrivacyPolicy;

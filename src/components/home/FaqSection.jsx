import React from 'react';
import Accordion from '@/components/Accordion';
import data from "@/data/data.json";

function FaqSection() {
    const accordionItems = data.home.faq.items.map((item) => ({
        ...item,
        key: item.title,
        content: <p className="whitespace-pre-line">{item.content}</p>,
    }));

    return (
        <section className="px-4" aria-label="Frequently Asked Questions">
            <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
                <h2 className="text-center section-heading">{data.home.faq.title}</h2>
                <Accordion items={accordionItems} />
            </div>
        </section>
    );
}

export default FaqSection;

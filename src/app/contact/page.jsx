"use client";

import React from "react";
import data from "@/data/data.json";
import Accordion from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";

const AccordionTextContent = ({ text }) => (
    <span className="whitespace-pre-line">{text}</span>
);

export default function ContactPage() {
    const {
        contact: {
            heading,
            subheading,
            form: { fields, privacyNote, submitButton },
        },
        faqSection: { faqs },
    } = data;

    const serviceField = fields.find((field) => field.name === "services");
    const serviceOptions = serviceField?.options || [];

    const faqItems = faqs.map(({ question, answer }) => ({
        title: question,
        content: <AccordionTextContent text={answer} />,
    }));

    return (
        <main className="px-4 my-40 space-y-16">
            <header className="text-center space-y-10" id="contact-header">
                <h1 className="massive2">{heading}</h1>
                <p className="para2 whitespace-pre-line">{subheading}</p>
            </header>

            <section
                className="max-w-7xl mx-auto space-y-10"
                aria-labelledby="contact-form-heading"
            >
                <h2 id="contact-form-heading" className="sr-only">
                    Contact Form
                </h2>
                <ContactForm
                    fields={fields}
                    serviceOptions={serviceOptions}
                    privacyNote={privacyNote}
                    submitLabel={submitButton?.label ?? "Submit"}
                />
            </section>

            <section
                className="max-w-7xl mx-auto"
                aria-labelledby="faqs-heading"
            >
                <h2 id="faqs-heading" className="main text-center">
                    FAQs
                </h2>
                <Accordion items={faqItems} />
            </section>
        </main>
    );
}

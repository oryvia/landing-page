import React from "react";
import data from "@/data/data.json";
import Accordion from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

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
        <>
            {/* ✅ SEO Section */}
            <SEO
                title="Contact Oryvia – Let's Build Your Next Digital Project"
                description="Get in touch with Oryvia to discuss your web development, design, or branding needs. Contact us today to build high-performance websites and scalable digital platforms."
                keywords="Oryvia, Contact, web development, design inquiry, branding consultation, digital project, website contact, business inquiry"
                image="https://www.oryvia.in/og-image.webp"
                url="https://www.oryvia.in/contact"
                author="Oryvia"
                type="website"
            />

            {/* ✅ Structured Data (Contact Page Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        name: "Contact Oryvia",
                        url: "https://www.oryvia.in/contact",
                        description:
                            "Get in touch with Oryvia to discuss your web development, design, or branding needs. Contact us today to build high-performance websites and scalable digital platforms.",
                        publisher: {
                            "@type": "Organization",
                            name: "Oryvia",
                            url: "https://www.oryvia.in",
                            logo: "https://www.oryvia.in/oryvia-logo.png",
                        },
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+91-0000000000",
                            email: "info@oryvia.in",
                            contactType: "customer support",
                            areaServed: "IN",
                            availableLanguage: ["English"],
                        },
                    }),
                }}
            />

            <main className="px-4 space-y-10 md:space-y-12 lg:space-y-16 my-26 md:my-36">
                <header className="text-center space-y-10" id="contact-header">
                    <h1 className="main-page-heading">{heading}</h1>
                    <p className="intro-text whitespace-pre-line">{subheading}</p>
                </header>

                <section className="max-w-7xl mx-auto " aria-labelledby="contact-form-heading">
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
                    <h2 id="faqs-heading" className="section-heading text-center">
                        FAQs
                    </h2>
                    <Accordion items={faqItems} />
                </section>
            </main>
        </>
    );
}

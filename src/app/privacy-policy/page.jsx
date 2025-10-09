import React from 'react';
import Accordion from '@/components/Accordion';
import data from "@/data/data.json";
import SEO from "@/components/SEO";

const AccordionTextContent = ({ text }) => (
    <p className="whitespace-pre-line">{text}</p>
);

const PrivacyPolicy = () => {
    const accordionItems = data.privacyPolicy.items.map((item) => ({
        ...item,
        content: <AccordionTextContent text={item.content} />,
    }));

    return (
        <>
            {/* ✅ SEO Section */}
            <SEO
                title="Privacy Policy – Oryvia"
                description="Read Oryvia’s Privacy Policy to understand how we collect, use, and protect your personal information when you use our website and services."
                keywords="Oryvia, Privacy Policy, data protection, information security, user privacy, website policy, company data policy"
                image="https://www.oryvia.in/og-image.webp"
                url="https://www.oryvia.in/privacy-policy"
                author="Oryvia"
                type="website"
            />

            {/* ✅ Structured Data (Privacy Policy Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Privacy Policy",
                        url: "https://www.oryvia.in/privacy-policy",
                        description:
                            "Read Oryvia’s Privacy Policy to understand how we collect, use, and protect your personal information when you use our website and services.",
                        publisher: {
                            "@type": "Organization",
                            name: "Oryvia",
                            url: "https://www.oryvia.in",
                            logo: "https://www.oryvia.in/oryvia-logo.png",
                        },
                    }),
                }}
            />
            <main className="px-4 my-26 md:my-36" role="main">
                <article className="max-w-7xl mx-auto space-y-10 md:space-y-12 lg:space-y-16" aria-labelledby="privacy-policy-title">
                    <header className='space-y-10'>
                        <h1 id="privacy-policy-title" className="main-page-heading text-center">
                            {data.privacyPolicy.title}
                        </h1>
                        <p className="intro-text text-muted text-center">{data.privacyPolicy.description}</p>
                    </header>

                    <section role="region" aria-labelledby="privacy-accordion">
                        <Accordion items={accordionItems} />
                    </section>
                </article>
            </main>
        </>
    );
};

export default PrivacyPolicy;

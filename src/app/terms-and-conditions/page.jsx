import React from 'react';
import data from "@/data/data.json";
import SEO from "@/components/SEO";

export default function TermsPage() {
    // ✅ helper to detect and format links/emails
    function formatTextWithLinks(text) {
        const urlRegex = /(https?:\/\/[^\s]+)|(mailto:[^\s]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(www\.[^\s]+)/g;

        return text.split(urlRegex).map((part, i) => {
            if (!part) return null;

            // If it's an email but not mailto:
            if (part.includes("@") && !part.startsWith("mailto:")) {
                return (
                    <a
                        key={i}
                        href={`mailto:${part}`}
                        className="text-accent font-normal hover:underline"
                    >
                        {part}
                    </a>
                );
            }

            // If it's a URL or mailto link
            if (part.startsWith("http") || part.startsWith("mailto:")) {
                return (
                    <a
                        key={i}
                        href={part}
                        className="text-accent font-normal hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {part}
                    </a>
                );
            }

            // If it's a www link
            if (part.startsWith("www")) {
                return (
                    <a
                        key={i}
                        href={`https://${part}`}
                        className="text-accent font-normal hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {part}
                    </a>
                );
            }

            // Plain text
            return part;
        });
    }

    return (
        <>
            <SEO
                title="Terms and Conditions – Oryvia"
                description="Read the Terms and Conditions of Oryvia. This page outlines the policies, usage rules, and legal guidelines that govern your use of Oryvia’s website and services."
                keywords="Oryvia, Terms and Conditions, website policies, user agreement, legal guidelines, privacy, company terms"
                image="https://www.oryvia.in/og-image.webp"
                url="https://www.oryvia.in/terms-and-conditions"
                author="Oryvia"
                type="website"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Terms and Conditions",
                        url: "https://www.oryvia.in/terms-and-conditions",
                        description:
                            "Read the Terms and Conditions of Oryvia. This page outlines the policies, usage rules, and legal guidelines that govern your use of Oryvia’s website and services.",
                        publisher: {
                            "@type": "Organization",
                            name: "Oryvia",
                            url: "https://www.oryvia.in",
                            logo: "https://www.oryvia.in/oryvia-logo.png",
                        },
                    }),
                }}
            />
            <main className="max-w-4xl mx-auto my-26 md:my-36 px-4">
                <article className="space-y-10 md:space-y-12 lg:space-y-16">
                    <div className='space-y-10'>
                        <h1 className="text-center main-page-heading">
                            {data.terms.title}
                        </h1>
                        <p className="whitespace-pre-line intro-text text-muted">
                            {formatTextWithLinks(data.terms.intro)}
                        </p>
                    </div>

                    {data.terms.sections.map((section, index) => (
                        <section
                            key={index}
                            role="region"
                            aria-label={section.heading}
                            className="space-y-2"
                        >
                            <header>
                                <h2 className="label-heading">{section.heading}</h2>
                            </header>

                            {section.content?.map((para, i) => (
                                <p key={i} className="body-default text-muted">
                                    {formatTextWithLinks(para)}
                                </p>
                            ))}

                            {section.list && (
                                <ul className="list-disc list-inside body-default text-muted">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.note && (
                                <p className="body-sm text-muted">{section.note}</p>
                            )}
                        </section>
                    ))}
                </article>
            </main>
        </>
    );
}

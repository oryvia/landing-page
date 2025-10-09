import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';
import SEO from "@/components/SEO";

export default function WebsiteRedesign() {
    return (
        <>
            {/* ✅ SEO Section */}
            <SEO
                title="Website Redesign Services – Oryvia"
                description="Oryvia provides professional website redesign services to improve performance, design, and user experience. Transform your outdated site into a high-performing digital platform that drives growth."
                keywords="Oryvia, website redesign, website revamp, UI UX redesign, responsive redesign, modern website, web performance, brand refresh"
                image="https://www.oryvia.in/og-image.webp"
                url="https://www.oryvia.in/services/website-redesign"
                author="Oryvia"
                type="website"
            />

            {/* ✅ Structured Data (Service Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Website Redesign Services",
                        url: "https://www.oryvia.in/services/website-redesign",
                        description:
                            "Oryvia provides expert website redesign services that focus on improving design, user experience, and performance for businesses worldwide.",
                        provider: {
                            "@type": "Organization",
                            name: "Oryvia",
                            url: "https://www.oryvia.in",
                            logo: "https://www.oryvia.in/oryvia-logo.png",
                            description: "A development-based company offering global digital solutions."
                        },
                        areaServed: {
                            "@type": "Place",
                            name: "Worldwide"
                        },
                        serviceType: "Website Redesign",
                        offers: {
                            "@type": "Offer",
                            url: "https://www.oryvia.in/contact",
                            priceCurrency: "Multiple",
                            acceptedPaymentMethod: ["CreditCard", "PayPal", "BankTransfer"],
                            availability: "https://schema.org/InStock",
                            eligibleRegion: {
                                "@type": "Place",
                                name: "Worldwide"
                            }
                        }
                    }),
                }}
            />

            <section className="md:my-36 my-26 px-4">
                <div className="max-w-7xl mx-auto space-y-10 md:space-y-12 lg:space-y-16">
                    <div className='space-y-10'>
                        <h2 className="main-page-heading text-center">{data.services.websiteRedesign.title}</h2>
                        <p className="text-center intro-text text-muted">{data.services.websiteRedesign.description}</p>
                    </div>
                    <MediaTextBlock
                        image={data.services.websiteRedesign.image}
                        mobileImage={data.services.websiteRedesign.mobileImage}
                        imageAlt={data.services.websiteRedesign.imageAlt}
                        services={data.services.websiteRedesign.services}
                    />
                </div>
            </section>
        </>
    );
}

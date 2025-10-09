import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';
import SEO from "@/components/SEO";

export default function CustomWebsite() {
    return (
        <>
            {/* ✅ SEO Section */}
            <SEO
                title="Custom Website Development – Oryvia"
                description="Oryvia specializes in custom website development designed for performance, scalability, and conversion. Get tailor-made websites that align perfectly with your brand and business goals."
                keywords="Oryvia, custom website development, website design, responsive websites, scalable web solutions, business website, professional website, website redesign"
                image="https://www.oryvia.in/og-image.webp"
                url="https://www.oryvia.in/services/custom-website"
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
                        name: "Custom Website Development",
                        url: "https://www.oryvia.in/services/custom-website",
                        description:
                            "Oryvia provides custom website development solutions that focus on high performance, scalability, and design precision to help businesses build a strong online presence.",
                        provider: {
                            "@type": "Organization",
                            name: "Oryvia",
                            url: "https://www.oryvia.in",
                            logo: "https://www.oryvia.in/oryvia-logo.png",
                        },
                        areaServed: {
                            "@type": "Place",
                            name: "Worldwide"
                        },
                        serviceType: "Web Development",
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
                        <h2 className="main-page-heading text-center">{data.services.customWebsite.title}</h2>
                        <p className="text-center intro-text text-muted">{data.services.customWebsite.description}</p>
                    </div>
                    <MediaTextBlock
                        image={data.services.customWebsite.image}
                        mobileImage={data.services.customWebsite.mobileImage}
                        imageAlt={data.services.customWebsite.imageAlt}
                        services={data.services.customWebsite.services}
                    />
                </div>
            </section>
        </>
    );
}

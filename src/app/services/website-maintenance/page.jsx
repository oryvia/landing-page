import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';
import SEO from "@/components/SEO";

export default function WebsiteMaintenance() {
    return (
        <>
            {/* ✅ SEO Section */}
            <SEO
                title="Website Maintenance Services – Oryvia"
                description="Oryvia provides professional website maintenance services ensuring your site stays secure, fast, and up to date. From technical updates to performance optimization, we keep your website running smoothly."
                keywords="Oryvia, website maintenance, web support, performance optimization, website updates, security monitoring, maintenance plans, bug fixes"
                image="https://www.oryvia.in/og-image.webp"
                url="https://www.oryvia.in/services/website-maintenance"
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
                        name: "Website Maintenance Services",
                        url: "https://www.oryvia.in/services/website-maintenance",
                        description:
                            "Oryvia offers comprehensive website maintenance services that cover security, updates, and performance optimization to ensure seamless user experiences.",
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
                        serviceType: "Website Maintenance",
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
                <div className="max-w-7xl mx-auto space-y-10 md:space-y-12 lg:space-y-16 ">
                    <div className='space-y-10'>
                        <h2 className="main-page-heading text-center">{data.services.websiteMaintenance.title}</h2>
                        <p className="text-center intro-text text-muted">{data.services.websiteMaintenance.description}</p>
                    </div>
                    <MediaTextBlock
                        image={data.services.websiteMaintenance.image}
                        mobileImage={data.services.websiteMaintenance.mobileImage}
                        imageAlt={data.services.websiteMaintenance.imageAlt}
                        services={data.services.websiteMaintenance.services}
                    />
                </div>
            </section>
        </>
    );
}

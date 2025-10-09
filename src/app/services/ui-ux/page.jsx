import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';
import SEO from "@/components/SEO";

export default function UIUX() {
    return (
        <>
            {/* ✅ SEO Section */}
            <SEO
                title="UI/UX Design Services – Oryvia"
                description="Oryvia offers professional UI/UX design services focused on creating user-friendly, engaging, and conversion-driven interfaces. We craft seamless digital experiences tailored to your brand and audience."
                keywords="Oryvia, UI UX design, user interface, user experience, product design, web app design, mobile app design, interaction design, UX strategy, design agency"
                image="https://www.oryvia.in/og-image.webp"
                url="https://www.oryvia.in/services/ui-ux"
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
                        name: "UI/UX Design Services",
                        url: "https://www.oryvia.in/services/ui-ux",
                        description:
                            "Oryvia provides expert UI/UX design services that focus on usability, accessibility, and visual appeal to create high-performing digital experiences.",
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
                        serviceType: "Design Services",
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
                        <h2 className="main-page-heading text-center">{data.services.uiux.title}</h2>
                        <p className="text-center intro-text text-muted">{data.services.uiux.description}</p>
                    </div>
                    <MediaTextBlock
                        animationName="v1"
                        image={data.services.uiux.image}
                        mobileImage={data.services.uiux.mobileImage}
                        imageAlt={data.services.uiux.imageAlt}
                        services={data.services.uiux.services}
                    />
                </div>
            </section>
        </>
    );
}

'use client'
import React from 'react';
import Image from 'next/image';

function MediaTextBlock({ image,mobileImage, imageAlt = 'Service image', services = [] }) {
    const containerClass = "flex flex-col md:flex-row  gap-4 max-w-4xl mx-auto h-auto p-2 rounded-3xl bg-white";
    const imageWrapperClass = " hidden md:block rounded-l-2xl overflow-hidden flex-shrink-0 w-1/4";
    const mobileImageWrapperClass = " block md:hidden rounded-t-2xl overflow-hidden flex-shrink-0 w-full";
    const contentClass = "flex-1 space-y-6 p-2";

    return (
        <section className={containerClass}>
            {/* Mobile Image */}
            <div className={mobileImageWrapperClass}>
                {image && (
                    <Image
                        src={mobileImage}
                        alt={imageAlt}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover md:min-h-[250px]"
                    />
                )}
            </div>
                {/* Desktop Image */}
            <div className={imageWrapperClass}>
                {image && (
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover md:min-h-[250px]"
                    />
                )}
            </div>

            {/* Content Section */}
            <article className={contentClass}>
                {services.map((service, index) => (
                    <div key={index}>
                        <h3 className="intro-text">• {service.title}</h3>
                        <p className="body-default text-muted whitespace-pre-line text-justify">
                            {service.description}
                        </p>
                    </div>
                ))}
            </article>
        </section>
    );
}

export default MediaTextBlock;

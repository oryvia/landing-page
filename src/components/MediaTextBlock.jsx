'use client'
import React from 'react';
import Image from 'next/image';

function MediaTextBlock({ image, imageAlt = 'Service image', services = [] }) {
    const containerClass = "flex flex-col md:flex-row  gap-4 max-w-3xl mx-auto h-auto ";
    const imageWrapperClass = "hidden md:block rounded-l-3xl overflow-hidden flex-shrink-0 w-1/4";
    const contentClass = "flex-1 space-y-6";

    return (
        <section className={containerClass}>
            {/* Image Section */}
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
                        <h3 className="para1">• {service.title}</h3>
                        <p className="para3 whitespace-pre-line text-justify">
                            {service.description}
                        </p>
                    </div>
                ))}
            </article>
        </section>
    );
}

export default MediaTextBlock;

import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';

export default function UIUX() {
    return (
        <section className="my-36 px-4">
            <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16 ">
                <h2 className="main-page-heading text-center">{data.services.uiux.title}</h2>
                <p className="text-center intro-text mb-12">{data.services.uiux.description}</p>
                <MediaTextBlock
                animationName="v1"
                    image={data.services.uiux.image}
                    mobileImage={data.services.uiux.mobileImage}
                    imageAlt={data.services.uiux.imageAlt}
                    services={data.services.uiux.services}
                />
            </div>
        </section>
    );
}

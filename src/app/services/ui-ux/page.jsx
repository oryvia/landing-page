import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';

export default function UIUX() {
    return (
        <section className="my-40 px-4">
            <div className="max-w-7xl mx-auto space-y-8 ">
                <h2 className="massive2 text-center">{data.services.uiux.title}</h2>
                <p className="text-center para2 mb-12">{data.services.uiux.description}</p>
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

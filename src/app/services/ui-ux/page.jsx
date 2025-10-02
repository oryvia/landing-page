import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';

export default function UIUX() {
    return (
        <section className="md:my-36 my-26 px-4">
            <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16 ">
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
    );
}

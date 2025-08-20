import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';

export default function CustomWebsite() {
    return (
        <section className="my-40 px-4">
            <div className="max-w-7xl mx-auto space-y-8 ">
                <h2 className="massive2 text-center">{data.services.customWebsite.title}</h2>
                <p className="text-center para2 mb-12">{data.services.customWebsite.description}</p>
                <MediaTextBlock
                    image={data.services.customWebsite.image}
                    mobileImage={data.services.customWebsite.mobileImage}
                    imageAlt={data.services.customWebsite.imageAlt}
                    services={data.services.customWebsite.services}
                />
            </div>
        </section>
    );
}

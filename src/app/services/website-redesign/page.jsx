import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';

export default function WebsiteRedesign() {
    return (
        <section className="my-40 px-4">
            <div className="max-w-7xl mx-auto space-y-8 ">
                <h2 className="massive2 text-center">{data.services.websiteRedesign.title}</h2>
                <p className="text-center para2 mb-12">{data.services.websiteRedesign.description}</p>
                <MediaTextBlock
                    image={data.services.websiteRedesign.image}
                    mobileImage={data.services.websiteRedesign.mobileImage}
                    imageAlt={data.services.websiteRedesign.imageAlt}
                    services={data.services.websiteRedesign.services}
                />
            </div>
        </section>
    );
}

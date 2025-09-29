import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';

export default function WebsiteMaintenance() {
    return (
        <section className="my-36 px-4">
            <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16 ">
                <h2 className="main-page-heading text-center">{data.services.websiteMaintenance.title}</h2>
                <p className="text-center intro-text mb-12">{data.services.websiteMaintenance.description}</p>
                <MediaTextBlock
                    image={data.services.websiteMaintenance.image}
                    mobileImage={data.services.websiteMaintenance.mobileImage}
                    imageAlt={data.services.websiteMaintenance.imageAlt}
                    services={data.services.websiteMaintenance.services}
                />
            </div>
        </section>
    );
}

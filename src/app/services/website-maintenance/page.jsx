import data from '@/data/data.json';
import React from 'react';
import MediaTextBlock from '@/components/MediaTextBlock';

export default function WebsiteMaintenance() {
    return (
        <section className="my-40 px-4">
            <div className="max-w-7xl mx-auto space-y-8 ">
                <h2 className="massive2 text-center">{data.services.websiteMaintenance.title}</h2>
                <p className="text-center para2 mb-12">{data.services.websiteMaintenance.description}</p>
                <MediaTextBlock
                    image={data.services.websiteMaintenance.image}
                    imageAlt={data.services.websiteMaintenance.imageAlt}
                    services={data.services.websiteMaintenance.services}
                />
            </div>
        </section>
    );
}

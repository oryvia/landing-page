import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Sample project data (replace with dynamic fetch if needed)
const projects = [
    {
        title: 'E-Commerce Redesign for ShopVerse',
        description:
            'Transformed ShopVerse’s outdated interface into a modern, mobile-first experience with streamlined checkout and integrated vendor dashboards.',
        image: '/images/ecommerce.jpg',
        link: '/case-studies/shopverse',
    },
    {
        title: 'SaaS Analytics Dashboard for DataPulse',
        description:
            'Built a scalable, modular dashboard with real-time graphs and customizable widgets for enterprise-level data monitoring.',
        image: '/images/saas-dashboard.jpg',
        link: '/case-studies/datapulse',
    },
    {
        title: 'Creative Portfolio for a Design Agency',
        description:
            'Developed a bold and interactive portfolio website for a creative agency, featuring dynamic project filtering and smooth animations.',
        image: '/images/portfolio.jpg',
        link: '/case-studies/design-agency',
    },
];

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900 px-4 md:px-12 py-20">
            <section className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold tracking-tight mb-4">Featured Projects</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore how we've helped businesses grow through modern web design, custom development, and interactive experiences.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative w-full h-52">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold border-t pt-4">{project.title}</h3>
                                <p className="text-sm text-gray-600 mt-3 mb-6">{project.description}</p>
                                <Link
                                    href={project.link}
                                    className="inline-block text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition"
                                >
                                    Read case study →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

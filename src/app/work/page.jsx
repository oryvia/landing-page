import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import data from '@/data/data.json';
import SEO from '@/components/SEO';

export default function WorkPage() {
    return (
        <>
            <SEO
                title="Our Work – Oryvia’s Portfolio of High-Performance Websites and Digital Projects"
                description="Explore Oryvia’s portfolio featuring high-performance websites, scalable platforms, and branding projects crafted for startups and businesses. See how we turn ideas into impactful digital experiences."
                keywords="Oryvia, web development projects, website portfolio, UI UX design, case studies, web design, branding, digital transformation, scalable platforms"
                image="https://www.oryvia.in/og-image.webp"
                url="https://www.oryvia.in/work"
                author="Oryvia"
                type="website"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Oryvia Work Portfolio",
                        url: "https://www.oryvia.in/work",
                        description:
                            "Explore Oryvia’s portfolio showcasing high-performance websites, digital platforms, and branding solutions for startups and businesses.",
                        publisher: {
                            "@type": "Organization",
                            name: "Oryvia",
                            url: "https://www.oryvia.in",
                            logo: "https://www.oryvia.in/oryvia-logo.png",
                        },
                        mainEntity: data.work.projects.map((project) => ({
                            "@type": "CreativeWork",
                            name: project.title,
                            description: project.description,
                            image: project.image
                                ? `https://www.oryvia.in${project.image}`
                                : undefined,
                            url: project.link
                                ? `https://www.oryvia.in${project.link}`
                                : undefined,
                        })),
                    }),
                }}
            />
            <main className="px-4 my-26 md:my-36">
                <section className="max-w-7xl mx-auto space-y-10 md:space-y-12 lg:space-y-16 ">
                    <div className="text-center space-y-10">
                        <h1 className="main-page-heading">{data.work.heading}</h1>
                        <p className="intro-text text-muted mx-auto">
                            {data.work.description}
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {data.work.projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                link={project.link}
                                cta={project.cta}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

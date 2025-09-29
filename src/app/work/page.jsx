import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import data from '@/data/data.json';

export default function WorkPage() {
    return (
        <main className="min-h-screen px-4 my-36">
            <section className="max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16 ">
                <div className="text-center mb-16">
                    <h1 className="main-page-heading mb-4">{data.work.heading}</h1>
                    <p className="intro-text mx-auto">
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
    );
}

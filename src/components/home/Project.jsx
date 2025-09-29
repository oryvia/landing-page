import data from "@/data/data.json";
import ProjectCard from "../ProjectCard";

export default function Work() {
    const {
        heading,
        description,
        projects,
        cta
    } = data.home.workSection;

    // Guard clause for invalid data
    if (!heading || !Array.isArray(projects) || projects.length === 0) return null;

    return (
        <section
            id="projects"
            aria-labelledby="featured-projects-heading"
            aria-label="Featured projects section"
            role="region"
            className="px-5 md:px-8 lg:px-16"
        >
            <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
                <header className="space-y-2">
                    <h2 id="featured-projects-heading" className="section-heading">
                        {heading}
                    </h2>
                    {description && (
                        <p className="max-w-3xl body-default">
                            {description}
                        </p>
                    )}
                </header>
                <div className="grid gap-8 md:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map(
                            (
                                { title, image, description, ...rest },
                                index
                            ) => (
                                    <ProjectCard
                                key={index}
                                        title={title}
                                        image={image}
                                        alt={title}
                                        description={description}
                                        {...rest}
                                        cta={cta || "Read more →"}
                                    />
                            )
                        )}
                </div>
            </div>
        </section>
    );
}

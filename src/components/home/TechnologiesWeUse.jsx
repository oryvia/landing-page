import Image from "next/image";
import data from "@/data/data";

const TechnologiesWeUse = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-12" aria-label="Technologies We Use">
            <div className="max-w-7xl mx-auto  text-center">
                <h2 className="main mb-4">
                    {data.home.technologiesSection.heading}
                </h2>
                <p className="para2 mb-16 max-w-2xl mx-auto">
                    {data.home.technologiesSection.description}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
                    {data.home.technologiesSection.technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="bg-light flex flex-col items-center rounded-3xl p-3"
                        >
                            <div className="w-14 h-14 relative mb-3">
                                <Image
                                    src={tech.logo}
                                    alt={`Logo of ${tech.name}`}
                                    title={tech.name}
                                    fill
                                    loading="lazy"
                                    className="object-contain transition duration-300 hover:drop-shadow-md"
                                />
                            </div>
                            <span className="para1" title={tech.name}>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesWeUse;

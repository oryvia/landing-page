import Image from "next/image";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "./Button";

export default function ProjectCard({
    title = "Untitled Project",
    description = "No description provided.",
    image = "/images/default.jpg",
    link = "#",
    cta,
}) {
    return (
        <article
            className={clsx(
                "group cursor-pointer transition-all duration-300 rounded-3xl overflow-hidden",
                "hover:shadow-xl hover:bg-light"
            )}
        >
            <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                    src={image}
                    alt={title || "Project image"}
                    fill
                    className="object-cover transition-transform duration-300 rounded-3xl"
                    unoptimized
                />
            </div>
            <div className="p-5 space-y-2">
                <h3 className="content-heading">{title}</h3>
                <p className="body-sm">{description}</p>
                {cta && (
                    <div>
                        <Button href={link} variant="linkBlue">
                            {cta}
                        </Button>
                    </div>
                )}
            </div>
        </article>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    cta: PropTypes.string,
};

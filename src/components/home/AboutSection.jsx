import { useMemo, Fragment } from "react";
import Button from "../Button";
import data from "@/data/data.json";

export default function AboutSection() {
    const { heading, content, buttonText, highlighted } = data.home.about;

    const highlightedParts = useMemo(() => {
        const regex = new RegExp(`(${highlighted.join("|")})`, "gi");
        return content.split(regex).map((part, index) =>
            highlighted.includes(part) ? (
                <span key={index} className="font-normal text-accent">
                    {part}
                </span>
            ) : (
                <Fragment key={index}>{part}</Fragment>
            )
        );
    }, [content, highlighted]);

    return (
        <section className="text-center px-5 md:px-8 lg:px-16" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto space-y-16">
                <h2 id="about-heading" className="main">
                    {heading}
                </h2>
                <div className="space-y-10">
                    <p className="para3" aria-label="About content">
                        {highlightedParts}
                    </p>
                    <Button href="/about" variant="secondary">
                        {buttonText}
                    </Button>
                </div>
            </div>
        </section>
    );
}

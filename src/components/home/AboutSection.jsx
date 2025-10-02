import { useMemo, Fragment } from "react";
import Button from "../Button";
import data from "@/data/data.json";

export default function AboutSection() {
    const { heading, content, buttonText, highlighted } = data.home.about;

    const highlightedParts = useMemo(() => {
        const regex = new RegExp(`(${highlighted.join("|")})`, "gi");
        return content.split(regex).map((part, index) =>
            highlighted.includes(part) ? (
                <span key={index} className="font-medium text-dark">
                    {part}
                </span>
            ) : (
                <Fragment key={index}>{part}</Fragment>
            )
        );
    }, [content, highlighted]);

    return (
        <section className="text-center p-4" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
                <h2 id="about-heading" className="section-heading">
                    {heading}
                </h2>
                <div className="space-y-4">
                    <p className="body-default text-muted" aria-label="About content">
                        {highlightedParts}
                    </p>
                    <Button href="/about" variant="secondary" aria-label="Learn more about our team and mission">
                        {buttonText}
                    </Button>
                </div>
            </div>
        </section>
    );
}

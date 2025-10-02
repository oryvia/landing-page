import Image from "next/image";
import data from "@/data/data.json";

export default function Profile() {
    const {
        name,
        title,
        introduction,
        coreExpertiseTitle,
        coreExpertise,
        description,
        quoteSection,
        image
    } = data.teamProfiles.abhijeet;

    return (
        <section className="max-w-4xl mx-auto px-4 space-y-16 my-40">
            <h1 className="main-page-heading text-center">{name}</h1>
            <div className="flex flex-col md:flex-row gap-4 ">
                <div className="hidden rounded-tl-3xl overflow-hidden flex-shrink-0  w-1/3 ">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className=" space-y-6 ">
                    <h2 className="content-heading">{title}</h2>
                    <p className="body-default text-justify">{introduction}</p>
                    <div>
                        <h3 className="label-heading">{coreExpertiseTitle}</h3>
                        <ul className="list-disc list-inside para3">
                            {coreExpertise.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="body-default text-justify">{description}</p>
                </div>
            </div>
            <div className="space-y-2 ">
                <h4 className="label-heading">{quoteSection.title}</h4>
                <p className="body-default text-justify">{quoteSection.quote}</p>
            </div>
        </section>
    );
}

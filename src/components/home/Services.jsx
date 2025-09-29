import NewServiceCard from "../ServiceCard";
import data from "@/data/data.json";
import Link from "next/link";

export default function NewServiceSection() {
    const services = data?.home?.newServices || [];
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:px-3 mx-auto">
            {services.map(({ link, ...service }, index) => (
                    <NewServiceCard key={index} service={service} />
            ))}
        </section>
    );
}

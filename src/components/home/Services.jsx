import NewServiceCard from "../ServiceCard";
import data from "@/data/data.json";

export default function NewServiceSection() {
    const services = data?.home?.services || [];
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:px-3 mx-auto">
            {services.map((service) => (
                <NewServiceCard key={service.link} service={service} />
            ))}
        </section>
    );
}


import NewServiceCard from "../newServiceCard";
import data from "@/data/data.json";

export default function NewServiceSection() {
    const services = data?.home?.newServices || [];
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:px-3 mx-auto">
            {services.map((service, index) => (
                <NewServiceCard key={index} data={service} />
            ))}
        </section>
    );
}

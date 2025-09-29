import data from '@/data/data.json';
import TeamCard from '../TeamCard';
import Link from "next/link";

const { teamSection } = data.home;
const { heading, description, members } = teamSection;

export default function Team() {
    return (
        <section className="" aria-label="Team Section">
            <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="section-heading mb-4">{heading}</h2>
                <p className="body-default mb-12">{description}</p>
                <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-3 justify-center">
                    {members.map(({ name, role, image, link }, idx) => (
                        <Link key={idx} href={link} className="block">
                            <TeamCard name={name} role={role} image={image} link={link} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

import Image from 'next/image';
import data from '@/data/data.json';
import Button from '../Button';

const { heading, description, members } = data.home.teamSection;

export default function Team() {
    return (
        <section className="py-20" aria-label="Team Section">
            <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{heading}</h2>
                <p className="text-lg text-gray-600 mb-12">{description}</p>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((member, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="relative w-32 h-32 mb-4">
                                <Image
                                    src={member.image}
                                    alt={`Profile photo of ${member.name}`}
                                    fill
                                    className="rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                            <Button href={member.link} variant="linkBlue">
                                {member.role}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

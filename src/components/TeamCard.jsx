import Image from "next/image";
import Link from "next/link";

const TeamCard = ({ image, name, role, link }) => {
    return (
            <div className="flex w-64 p-2 bg-light rounded-full items-center cursor-pointer">
                <div className="relative w-16 h-16">
                    <Image
                        src={image}
                        alt={`Profile photo of ${name}`}
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="p-2 text-start">
                    <h3 className="label-heading">{name}</h3>
                    {role && <span className="body-sm text-accent">{role}</span>}
                </div>
            </div>
    );
};

export default TeamCard;

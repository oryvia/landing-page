'use client';
import React, { useState } from "react";
import Image from "next/image";
import data from "@/data/data.json";

const TeamMemberCard = ({ name, role, image }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative transition-all duration-300 ease-in-out transform ${hovered ? "w-fit h-fit" : "w-fit h-fit"
                } bg-light rounded-3xl flex items-center justify-start overflow-hidden`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Compact View */}
            {!hovered && (
                <div className="flex items-center space-x-3 px-4 py-2">
                    <Image
                        src={image}
                        alt={name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover aspect-square"
                    />
                    <div>
                        <h3 className="text-sm font-semibold">{name}</h3>
                        <p className="text-xs text-blue-500">{role}</p>
                    </div>
                </div>
            )}

            {/* Expanded View */}
            {hovered && (
                <div className="flex flex-col items-center text-center ">
                    <Image
                        src={image}
                        alt={name}
                        width={150}
                        height={150}
                        className="rounded-3xl object-cover aspect-square"
                    />
                    <div className="p-2">
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <p className="text-sm text-blue-500">{role}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const TeamCard = () => {
    return (
        <div className="flex flex-wrap gap-4">
            {data.home.teamSection.members.map((member, index) => (
                <TeamMemberCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                />
            ))}
        </div>
    );
};

export default TeamCard;

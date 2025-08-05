import React from "react";
import Button from "./Button";

export default function WorkCard({ imageSrc, title, onView, onMoreDetails }) {
    return (
        <article className="w-full h-full bg-gray-200 rounded-3xl overflow-hidden flex flex-col justify-between p-2">
            <div className="w-full aspect-video sm:aspect-square md:aspect-[4/3] lg:aspect-[5/4] overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title || "Project image"}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            <div className="flex flex-col justify-between flex-grow px-2 pt-4 space-y-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="flex justify-between items-center">
                    <Button href="#" variant="primary" onClick={onView}>
                        View
                    </Button>
                    <Button href="#" variant="secondary" onClick={onMoreDetails}>
                        More Details
                    </Button>
                </div>
            </div>
        </article>
    );
}

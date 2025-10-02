'use client';

import React, { useState, useCallback } from 'react';
import { Plus } from 'lucide-react';
import PropTypes from 'prop-types';

// ✅ Helper function to highlight URLs and emails
function formatTextWithLinks(text) {
    const urlRegex = /(https?:\/\/[^\s]+)|(mailto:[^\s]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(www\.[^\s]+)/g;

    return text.split(urlRegex).map((part, i) => {
        if (!part) return null;

        // Email without mailto:
        if (part.includes("@") && !part.startsWith("mailto:")) {
            return (
                <a
                    key={i}
                    href={`mailto:${part}`}
                    className="text-accent font-semibold hover:underline"
                >
                    {part}
                </a>
            );
        }

        // URLs or mailto links
        if (part.startsWith("http") || part.startsWith("mailto:")) {
            return (
                <a
                    key={i}
                    href={part}
                    className="text-accent font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {part}
                </a>
            );
        }

        // www links
        if (part.startsWith("www")) {
            return (
                <a
                    key={i}
                    href={`https://${part}`}
                    className="text-accent font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {part}
                </a>
            );
        }

        // Plain text
        return part;
    });
}

const AccordionItem = React.memo(({ title, content, isOpen, onClick, index }) => {
    const contentId = `accordion-content-${index}`;

    return (
        <section className="border-b border-gray-200">
            <button
                type="button"
                onClick={onClick}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full flex justify-between items-center py-4 px-4 text-left hover:text-accent"
            >
                <span className="label-heading">{title}</span>
                <Plus
                    className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                />
            </button>
            <div
                id={contentId}
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 px-4 pb-4 overflow-y-auto' : 'max-h-0 px-4 pb-0 overflow-hidden'}`}
            >
                <div className={`transition-opacity duration-200 body-default text-muted ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {typeof content === "string" ? formatTextWithLinks(content) : content}
                </div>
            </div>
        </section>
    );
});
AccordionItem.displayName = 'AccordionItem';

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = useCallback(
        (index) => {
            setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
        },
        []
    );

    return (
        <div className="rounded-md divide-y divide-gray-200">
            {items?.map((item, index) => (
                <AccordionItem
                    key={index}
                    index={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};

Accordion.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
};

export default Accordion;

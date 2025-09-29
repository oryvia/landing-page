'use client';

import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import PropTypes from 'prop-types';

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
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                id={contentId}
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 px-4 pb-4 overflow-y-auto' : 'max-h-0 px-4 pb-0 overflow-hidden'}`}
            >
                <div className={`transition-opacity duration-200 body-default ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {content}
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

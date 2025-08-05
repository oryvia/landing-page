import React from "react";
import Button from "./Button";
import data from "@/data/data.json";

const ContactForm = ({ form = {}, onSubmit }) => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center">
                    <h2 className="main">{data.contact.form.heading}</h2>
                    <p className="para3">{data.contact.form.subheading}</p>
                </div>

                <form className="space-y-6" aria-label="Project inquiry form" onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {data.contact.form.fields?.map((field, idx) => {
                            const commonClasses = "p-3 rounded-2xl w-full ring-1 ring-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-dark";

                            if (field.type === "textarea") {
                                return (
                                    <div key={idx} className="col-span-full">
                                        <label htmlFor={field.name} className="sr-only">{field.label}</label>
                                        <textarea
                                            id={field.name}
                                            name={field.name}
                                            placeholder={field.label}
                                            className={`${commonClasses} h-32`}
                                        />
                                    </div>
                                );
                            } else if (field.type === "select") {
                                return (
                                    <div key={idx} className="col-span-full relative">
                                        <label htmlFor={field.name} className="sr-only">{field.label}</label>
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            className={`${commonClasses} pr-10 appearance-none`}
                                        >
                                            <option>{field.label}</option>
                                            {field.options?.map((option, optIdx) => (
                                                <option key={optIdx} value={option}>{option}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                                            ▼
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={idx} className="flex flex-col">
                                        <label htmlFor={field.name} className="sr-only">{field.label}</label>
                                        <input
                                            id={field.name}
                                            name={field.name}
                                            type={field.type || "text"}
                                            required={field.required || false}
                                            placeholder={field.label}
                                            className={commonClasses}
                                        />
                                    </div>
                                );
                            }
                        })}
                    </div>

                    {data.contact.form.privacyNote && (
                        <p className="text-sm text-gray-500">
                            {data.contact.form.privacyNote}{" "}
                            <a href="/privacy-policy" className="text-blue-500">Read our Privacy Policy</a>
                        </p>
                    )}

                    <Button type="submit" variant="primaryFull">
                        {data.contact.form.submitButton?.label ?? "Submit"}
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;

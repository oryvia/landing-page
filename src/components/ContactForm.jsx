"use client";

import React, { useState } from "react";
import Button from "./Button";
import data from "@/data/data.json";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());
        console.log("Submitting form with payload:", payload);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await res.json();
            if (result.success) {
                setStatus("✅ Form submitted successfully! We'll get back to you soon.");
                e.target.reset();

                // Reset after 3s
                setTimeout(() => {
                    setStatus(null);
                }, 10000);
            } else {
                setStatus("❌ Failed to submit. Please try again.");
                // Reset after 3s
                // setTimeout(() => {
                //     setStatus(null);
                // }, 3000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("⚠️ Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center">
                    <h2 className="section-heading">{data.contact.form.heading}</h2>
                    <p className="body-default">{data.contact.form.subheading}</p>
                </div>

                <form
    className="space-y-6"
    aria-label="Project inquiry form"
    onSubmit={handleSubmit}
>
    <fieldset disabled={loading} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.contact.form.fields?.map((field, idx) => {
                const commonClasses =
                    "p-3 rounded-2xl w-full ring-1 ring-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";

                if (field.type === "textarea") {
                    return (
                        <div key={idx} className="col-span-full">
                            <label htmlFor={field.name} className="sr-only">
                                {field.label}
                            </label>
                            <textarea
                                id={field.name}
                                name={field.name}
                                placeholder={field.label}
                                required={field.required || false}
                                className={`${commonClasses} h-32`}
                            />
                        </div>
                    );
                } else if (field.type === "select") {
                    return (
                        <div key={idx} className="col-span-full relative">
                            <label htmlFor={field.name} className="sr-only">
                                {field.label}
                            </label>
                            <select
                                id={field.name}
                                name={field.name}
                                required={field.required || false}
                                className={`${commonClasses} pr-10 appearance-none`}
                            >
                                <option value="">{field.label}</option>
                                {field.options?.map((option, optIdx) => (
                                    <option key={optIdx} value={option}>
                                        {option}
                                    </option>
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
                            <label htmlFor={field.name} className="sr-only">
                                {field.label}
                            </label>
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
            <p className="body-sm ">
                {data.contact.form.privacyNote}{" "}
                <a href="/privacy-policy" className="text-accent">
                    Read our Privacy Policy
                </a>
            </p>
        )}

        <Button
            type="submit"
            disabled={loading}
            variant={
                status?.startsWith("✅")
                    ? "success"
                    : status?.startsWith("❌") || status?.startsWith("⚠️")
                        ? "destructive"
                        : "primaryFull"
            }
        >
            {loading
                ? "Submitting..."
                : status?.startsWith("✅")
                    ? "Submitted successfully"
                    : status?.startsWith("❌") || status?.startsWith("⚠️")
                        ? "Try Again"
                        : "Submit"}
        </Button>
    </fieldset>
</form>
            </div>
        </section>
    );
};

export default ContactForm;

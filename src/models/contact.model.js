import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        emailAddress: {
            type: String,
            required: [true, "Email address is required"],
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
        },
        companyName: {
            type: String,
            trim: true,
        },
        businessEmail: {
            type: String,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid business email"],
            default: null,
        },
        projectDescription: {
            type: String,
            required: [true, "Project description is required"],
        },
        service: {
            type: String,
            enum: [
                "UIUX",
                "Website Maintenance",
                "Custom Website",
                "Website Redesign",
            ],
            required: [true, "Service type is required"],
        },
    },
    { timestamps: true }
);

export const Contact =
    mongoose.models.Contact || mongoose.model("Contact", contactSchema);

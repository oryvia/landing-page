import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dbConnect from "@/db/dbConnect";
import { Contact } from "@/models/contact.model";

export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();
        console.log("Received contact form data:", body);

        // Map frontend keys -> schema keys
        const mappedData = {
            name: body.name,
            emailAddress: body.email || body.emailAddress,
            companyName: body.company || body.companyName,
            businessEmail: body.businessEmail || null,
            projectDescription: body.description || body.projectDescription,
            service: body.services || body.service,
        };

        // Save to MongoDB
        const contact = await Contact.create(mappedData);
        console.log("Contact saved:", contact);

        // Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Mail Options
        const mailOptions = {
            from: `"Oryvia Contact" <${process.env.SMTP_USER}>`,
            to: "info@oryvia.in",
            subject: "New Contact Form Submission",
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${mappedData.name}</p>
        <p><strong>Email Address:</strong> ${mappedData.emailAddress}</p>
        <p><strong>Company Name:</strong> ${mappedData.companyName}</p>
        <p><strong>Business Email:</strong> ${mappedData.businessEmail || "N/A"}</p>
        <p><strong>Service:</strong> ${mappedData.service}</p>
        <p><strong>Project Description:</strong> ${mappedData.projectDescription}</p>
        `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info);
        return NextResponse.json(
            { success: true, message: "Form submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong" },
            { status: 500 }
        );
    }
}

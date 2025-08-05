import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
];

export default function Footer() {
    return (
        <footer className="bg-dark text-gray-300 px-6 md:px-12 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo */}
                <div className="col-span-1 md:col-span-1">
                    <Image
                        src="/images/full-logo.svg"
                        alt="Oryvia Logo"
                        width={150}
                        height={50}
                        className="mb-4"
                    />
                    <p className="text-sm text-gray-500">
                        Empowering brands with impactful digital experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-3 text-base">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        {quickLinks.map(({ label, href }) => (
                            <li key={href}>
                                <Link href={href} className="hover:text-white">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="font-semibold mb-3 text-base">Follow Us</h4>
                    <ul className="flex flex-col space-y-2 text-sm">
                        {socialLinks.map(({ href, label }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-white"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold mb-3 text-base">Contact Us</h4>
                    <p className="text-sm hover:text-white cursor-pointer">info@oryvia.in</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                <p>&copy; 2025 Oryvia. All rights reserved.</p>
                <div className="mt-2 md:mt-0 space-x-4">
                    <Link href="/privacy-policy" className="hover:text-white">
                        Privacy Policy
                    </Link>
                    <span>|</span>
                    <Link href="/terms&conditions" className="hover:text-white">
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>
    );
}

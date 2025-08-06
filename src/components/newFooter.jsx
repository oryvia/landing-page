import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '/work' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
];

export default function NewFooter() {
    return (
        <footer className="bg-light text-gray-600 px-6 md:px-12 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo */}
                <div className="col-span-1 md:col-span-1">
                    <Image
                        src="/images/new-full-logo.svg"
                        alt="Oryvia Logo"
                        style={{ width: 'auto', height: 'auto' }}
                        width={0}
                        height={0}
                        className="mb-4"
                        priority
                    />
                    <p className="text-sm text-gray-500">
                        Empowering brands with impactful digital experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-3 text-sm md:text-base">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        {quickLinks.map(({ label, href }) => (
                            <li key={href}>
                                <a href={href} className="hover:text-gray-900">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="font-semibold mb-3 text-sm md:text-base">Follow Us</h4>
                    <ul className="flex flex-col space-y-2 text-sm">
                        {socialLinks.map(({ href, label }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Visit our ${label} page on a new tab`}
                                    className="hover:text-gray-900"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold mb-3 text-sm md:text-base">Contact Us</h4>
                    <p className="text-sm hover:text-gray-900 cursor-pointer">info@oryvia.in</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 pt-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                <p>&copy; 2025 Oryvia. All rights reserved.</p>
                <div className="mt-2 md:mt-0 space-x-4">
                    <Link href="/privacy-policy" className="hover:text-gray-900">
                        Privacy Policy
                    </Link>
                    <span>|</span>
                    <Link href="/terms&conditions" className="hover:text-gray-900">
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>
    );
}

import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

const services = [
    { label: 'UI/UX Design', href: '/services/ui-ux' },
    { label: 'Website Maintenance', href: '/services/website-maintenance' },
    { label: 'Custom Development', href: '/services/custom-website' },
    { label: 'Website Redesign', href: '/services/website-redesign' },
];

const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/oryvia' },
    { label: 'X (Twitter)', href: 'https://x.com/oryvia_in' },
    { label: 'Instagram', href: 'https://www.instagram.com/oryvia.in' },
];

export default function NewFooter() {
    return (
        <footer
            className="bg-light text-gray-600 px-6 md:px-12 py-12"
            aria-label="Oryvia website footer"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-8">
                {/* Logo and Brand */}
                <div className="col-span-1">
                    <Image
                        src="/images/new-full-logo.svg"
                        alt="Oryvia full logo - web development and design company"
                        style={{ width: 'auto', height: 'auto' }}
                        width={120}
                        height={40}
                        className="mb-4"
                        priority
                    />
                    <p className="text-sm text-gray-500">
                        Building high-performance digital experiences globally.
                    </p>
                </div>

                {/* Quick Links */}
                <nav aria-label="Quick links navigation">
                    <h5 className="font-semibold mb-3 text-sm md:text-base">Quick Links</h5>
                    <ul className="space-y-2 text-sm">
                        {quickLinks.map(({ label, href }) => (
                            <li key={href}>
                                <Link href={href} rel="internal" className="hover:text-gray-900">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Services */}
                <nav aria-label="Service links navigation">
                    <h5 className="font-semibold mb-3 text-sm md:text-base">Services</h5>
                    <ul className="space-y-2 text-sm">
                        {services.map(({ label, href }) => (
                            <li key={href}>
                                <Link href={href} rel="internal" className="hover:text-gray-900">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social Media Links */}
                <nav aria-label="Social media links">
                    <h5 className="font-semibold mb-3 text-sm md:text-base">Follow Us</h5>
                    <ul className="flex flex-col space-y-2 text-sm">
                        {socialLinks.map(({ href, label }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit Oryvia on ${label}`}
                                    title={`Oryvia ${label} page`}
                                    className="hover:text-gray-900"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Info */}
                <div aria-label="Company contact information">
                    <h5 className="font-semibold mb-3 text-sm md:text-base">Contact Us</h5>
                    <a
                        href="mailto:info@oryvia.in"
                        className="text-sm hover:text-gray-900"
                        aria-label="Send email to info@oryvia.in"
                    >
                        info@oryvia.in
                    </a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 pt-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Oryvia. All rights reserved.</p>
                <div className="mt-2 md:mt-0 space-x-4">
                    <Link href="/privacy-policy" rel="internal" className="hover:text-gray-900">
                        Privacy Policy
                    </Link>
                    <span>|</span>
                    <Link href="/terms-and-conditions" rel="internal" className="hover:text-gray-900">
                        Terms & Conditions
                    </Link>
                </div>
            </div>

            {/* ✅ Structured Data for Organization */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Oryvia",
                        url: "https://www.oryvia.in",
                        logo: "https://www.oryvia.in/oryvia-logo.png",
                        description:
                            "Oryvia is a development-based company offering global web development, UI/UX design, and digital branding solutions.",
                        contactPoint: {
                            "@type": "ContactPoint",
                            email: "info@oryvia.in",
                            contactType: "customer support",
                            availableLanguage: ["English"],
                        },
                        sameAs: [
                            "https://www.linkedin.com/company/oryvia",
                            "https://x.com/oryvia_in",
                            "https://www.instagram.com/oryvia.in",
                        ],
                    }),
                }}
            />
        </footer>
    );
}

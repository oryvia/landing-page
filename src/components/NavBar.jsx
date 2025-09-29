'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './Button';
import { navLinks } from './NavConfig';

// Custom hook to detect if component has mounted (avoids hydration mismatch)
const useHasMounted = () => {
    const [hasMounted, setHasMounted] = useState(false);
    React.useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted;
};

/**
 * Renders individual nav links or a dropdown if subLinks exist.
 * Handles both desktop and mobile views.
 */
const NavLinkItem = ({
    link,
    currentPath,
    hasMounted,
    onClick,
    activeDropdown,
    toggleDropdown,
    isMobile = false,
}) => {
    const { label, href, subLinks } = link;
    const isOpen = activeDropdown === label;

    // If the link has subLinks, render a dropdown (accordion-style for mobile)
    if (subLinks) {
        return (
            <div key={label} className="relative w-full">
                <button
                    type="button"
                    onClick={() => toggleDropdown(label)}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    className={`flex items-center justify-between w-full text-sm transition-colors rounded-3xl ${
                        hasMounted && subLinks.some(sub => sub.href === currentPath)
                            ? 'font-medium text-dark'
                            : 'text-dark'
                    } ${isMobile ? 'intro-text px-3 py-2 hover:bg-accent hover:text-white' : 'hover:text-accent'}`}
                >
                    {label}
                    <ChevronDown
                        className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        size={16}
                    />
                </button>
                <div
                    className={`transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                        isMobile
                            ? 'pl-4 space-y-2'
                            : 'absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-white shadow-lg rounded-3xl p-2 z-50 min-w-[190px]'
                    } ${isOpen ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'}`}
                >
                    {subLinks.map(({ label, href }) => (
                        <Link key={label} href={href} onClick={() => { onClick(); toggleDropdown(null); }}>
                            <span
                                className={`block w-full text-sm px-3 rounded-3xl hover:bg-accent hover:text-white ${currentPath === href ? 'font-medium text-accent' : 'text-dark'} ${isMobile ? 'py-2 intro-text' : 'py-2 px-4'}`}
                            >
                                {label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    // Regular nav link
    return (
        <Link key={label} href={href} onClick={onClick} className="w-full">
            <span
                className={`block w-full rounded-3xl text-sm transition-colors ${isMobile ? 'intro-text px-3 py-2 hover:bg-accent hover:text-white' : 'hover:text-accent'} ${
                    hasMounted && currentPath === href ? 'font-medium text-dark' : 'text-dark'
                }`}
            >
                {label}
            </span>
        </Link>
    );
};

/**
 * Main navigation bar component with responsive support.
 * Displays a logo, nav links (with optional submenus), and a CTA button.
 */
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const currentPath = usePathname();

    const hasMounted = useHasMounted();

    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = useCallback((label) => {
        setActiveDropdown(prev => (prev === label ? null : label));
    }, []);

    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null);
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const onEsc = (e) => {
            if (e.key === 'Escape') {
                setActiveDropdown(null);
                setMenuOpen(false);
            }
        };
        document.addEventListener('keydown', onEsc);
        return () => document.removeEventListener('keydown', onEsc);
    }, []);

    const handleMenuToggle = useCallback(() => {
        setMenuOpen(prev => !prev);
    }, []);

    const handleLinkClick = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl bg-white/10 backdrop-blur-sm border border-gray-200 rounded-3xl px-6 py-3 flex items-center justify-between"
            aria-label="Main Navigation"
        >
            {/* Logo (left side) */}
            <Link href="/" aria-label="Oryvia Home" className="flex items-center">
                <Image
                    src="/images/logo.svg"
                    alt="Oryvia Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                    priority
                />
            </Link>

            {/* Navigation links (center - desktop only) */}
            <div className="hidden lg:flex space-x-8 ">
                {navLinks.map(link => (
                    <NavLinkItem
                        key={link.label}
                        link={link}
                        currentPath={currentPath}
                        hasMounted={hasMounted}
                        onClick={handleLinkClick}
                        activeDropdown={activeDropdown}
                        toggleDropdown={toggleDropdown}
                        isMobile={false}
                    />
                ))}
            </div>

            {/* Contact button (right - desktop only) */}
            <div className="hidden lg:flex">
                <Button href="/contact" variant="primary" aria-label="Contact Us">
                    Contact us
                </Button>
            </div>

            {/* Hamburger menu toggle (mobile only) */}
            <div className="lg:hidden">
                <button
                    onClick={handleMenuToggle}
                    aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
                    className="relative w-6 h-6 text-dark"
                >
                    <Menu
                        className={`absolute inset-0 w-6 h-6 transition-transform duration-300 ${
                            menuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                        }`}
                    />
                    <X
                        className={`absolute inset-0 w-6 h-6 transition-transform duration-300 ${
                            menuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                        }`}
                    />
                </button>
            </div>

            {/* Mobile dropdown menu (opened when hamburger is toggled) */}
            <div
                className={`transition-all duration-300 ease-in-out transform origin-top lg:hidden absolute top-20 left-4 right-4 bg-white shadow-lg rounded-3xl p-5 flex flex-col items-start space-y-4 z-[100] ${
                    menuOpen ? 'translate-y-0 opacity-100 scale-y-100' : 'translate-y-[-10px] opacity-0 scale-y-95 pointer-events-none'
                }`}
                aria-hidden={!menuOpen}
            >
                {navLinks.map(link => (
                    <NavLinkItem
                        key={link.label}
                        link={link}
                        currentPath={currentPath}
                        hasMounted={hasMounted}
                        onClick={handleLinkClick}
                        activeDropdown={activeDropdown}
                        toggleDropdown={toggleDropdown}
                        isMobile={true}
                    />
                ))}
                <Button href="/contact" onClick={handleLinkClick} variant="primaryFull">
                    Contact us
                </Button>
            </div>
        </nav>
    );
};

export default NavBar;

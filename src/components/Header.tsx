"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="text-[#370FAF] fixed w-full z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto lg:px-0 px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <img src="/images/un-properties-logo.svg" className="lg:w-auto w-50" alt="UN Properties" />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" >
                        Home
                    </Link>
                    <Link href="/projects">
                        Projects
                    </Link>
                    <Link href="/services">
                        Services
                    </Link>
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center relative"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {/* Line 1 */}
                    <span
                        className="w-full h-0.5 bg-[#370FAF] transition-all duration-300"
                        style={{
                            transform: mobileMenuOpen ? 'rotate(45deg) translateY(12px)' : 'rotate(0)',
                        }}
                    ></span>

                    {/* Line 2 */}
                    <span
                        className="w-full h-0.5 bg-[#370FAF] transition-all duration-300"
                        style={{
                            opacity: mobileMenuOpen ? 0 : 1,
                        }}
                    ></span>

                    {/* Line 3 */}
                    <span
                        className="w-full h-0.5 bg-[#370FAF] transition-all duration-300"
                        style={{
                            transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-12px)' : 'rotate(0)',
                        }}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <nav className="md:hidden fixed inset-0 top-[73px] bg-white z-40">
                    <div className="max-w-7xl mt-20 mx-auto px-4 py-8 flex flex-col">
                        <Link
                            href="/"
                            className="text-[#370FAF] text-[40px] uppercase font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/projects"
                            className="text-[#370FAF] text-[40px] uppercase font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/services"
                            className="text-[#370FAF] text-[40px] uppercase font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            className="text-[#370FAF] text-[40px] uppercase font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[#370FAF] text-[40px] uppercase font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        <div className="mt-32 text-[#333333] text-sm uppercase">
                            <p>info@unpropertiesltd.com</p>
                            <p>+234 907 777 2111</p>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}

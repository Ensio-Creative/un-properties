import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0E062B] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-3">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <img className="lg:w-auto w-64" src="/images/un-properties-footer-logo.svg" alt="" />
                        </Link>

                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">EXPLORE</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/projects" className="">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">FOLLOW</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-1 col-span-3">
                        <h3 className="font-bold text-lg mb-4">CONTACT</h3>
                        <a href="tel:+2349077772111" className="text-sm mb-2 inline-block">
                            +234 907 777 2111
                        </a>
                        {/* <p className="text-sm">info@unproperties.com</p> */}
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} UN Properties. All Rights Reserved.
                    </p>
                    <a href="https://www.ensiocreative.co" target="_blank" rel="noopener noreferrer">
                        <p className="text-sm">
                            Site by Ensio Creative
                        </p>
                    </a>
                </div>
            </div>
        </footer>
    );
}

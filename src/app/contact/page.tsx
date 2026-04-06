import Hero from "@/components/Hero";

export default function Contact() {
    return (
        <main>
            {/* Hero Section */}
            <Hero title="CONTACT US" img="un-properties-contact-hero" text='From specific projects to enquiries, reach out anytime. Let’s start the conversation.' />

            {/* Contact Content */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Side - Contact Info */}
                        <div>
                            {/* Office Address */}
                            <div className="mb-12">
                                <h3 className="text-sm font-bold text-[#370FAF] tracking-widest mb-4">
                                    OFFICE ADDRESS
                                </h3>
                                <p className="text-[#333333] text-sm leading-relaxed">
                                    D2R, FFAR Mall Area 11, Garki, Abuja
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="mb-12">
                                <h3 className="text-sm font-bold text-[#370FAF] tracking-widest mb-4">
                                    CONTACT DETAILS
                                </h3>
                                <p className="text-[#333333] text-sm mb-2">+234 907 777 2111</p>
                                <p className="text-[#333333] text-sm">info@unpropertiesltd.com</p>
                            </div>

                            {/* Office Hours */}
                            <div>
                                <p className="text-[#333333] text-sm">
                                    Note: Our doors are open Mon – Sat, 9 AM – 5 PM
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="bg-[#F5F5F5] border border-[#D1D1D1] lg:p-8 p-4 rounded-lg">
                            <form className="space-y-6 lg:py-0 py-4">
                                <div>
                                    <label htmlFor="full-name" className="block text-[#333333] text-sm font-medium mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="full-name"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#370FAF] text-gray-800 placeholder-gray-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-[#333333] text-sm font-medium mb-2">
                                        Phone
                                    </label>

                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#370FAF] text-gray-800 placeholder-gray-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-[#333333] text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#370FAF] text-gray-800 placeholder-gray-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-[#333333] text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#370FAF] text-gray-800 placeholder-gray-500 resize-none"
                                        id="message"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-sm border border-[#370FAF] rounded-sm text-[#370FAF] text-sm py-3 px-6 transition tracking-wider"
                                >
                                    REQUEST A CALLBACK
                                </button>

                                <p className="text-center text-[#333333] text-sm">
                                    Expect a response within 2 hours during work hours.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="">
                <div className="w-full h-[600px] overflow-hidden shadow">
                    <iframe
                        title="UN Properties Location"
                        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=D28, EFAB Mall Area 11, Garki, Abuja&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}

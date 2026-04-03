export default function Contact() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-96 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center text-white max-w-4xl px-4">
                    <p className="text-sm font-semibold tracking-widest mb-4">CONTACT US</p>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        From specific projects to enquiries, reach out anytime. Let's start the conversation.
                    </h1>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Side - Contact Info */}
                        <div>
                            {/* Office Address */}
                            <div className="mb-12">
                                <h3 className="text-sm font-bold text-blue-600 tracking-widest mb-4">
                                    OFFICE ADDRESS
                                </h3>
                                <p className="text-gray-800 leading-relaxed">
                                    D2R, FFAR Mall Area 11, Garki, Abuja
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="mb-12">
                                <h3 className="text-sm font-bold text-blue-600 tracking-widest mb-4">
                                    CONTACT DETAILS
                                </h3>
                                <p className="text-gray-800 mb-2">+234 907 777 2111</p>
                                <p className="text-gray-800">info@unpropertiesltd.com</p>
                            </div>

                            {/* Office Hours */}
                            <div>
                                <p className="text-gray-600 text-sm">
                                    Note: Our doors are open Mon – Sat, 9 AM – 5 PM
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <form className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-600 text-gray-800 placeholder-gray-500"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-600 text-gray-800 placeholder-gray-500"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Interest"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-600 text-gray-800 placeholder-gray-500"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        placeholder="Message"
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-600 text-gray-800 placeholder-gray-500 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 transition tracking-wider"
                                >
                                    REQUEST A CALLBACK
                                </button>

                                <p className="text-center text-gray-600 text-sm">
                                    Expect a response within 2 hours during work hours.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-600">
                            <p className="text-lg font-semibold">GOOGLE MAP OF THEIR ADDRESS</p>
                            <p className="text-sm mt-2">
                                (Embed your Google Map here using react-google-maps or similar)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

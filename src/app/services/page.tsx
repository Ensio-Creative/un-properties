import Hero from "@/components/Hero";

export default function Services() {
    return (
        <main>
            {/* Hero Section */}
            <Hero img="un-properties-services-hero" />

            {/* Introduction */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-gray-800 text-lg leading-relaxed">
                        From professional property management to bespoke home acquisitions, we provide tailored real estate services that put your needs first.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Design & Construction */}
                    <div className="mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Image */}
                            <div className="bg-gradient-to-br from-gray-400 to-gray-500 h-80 rounded-lg flex items-center justify-center">
                                <span className="text-white text-8xl">🏗️</span>
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-4xl font-bold text-blue-600 mb-6">Design & Construction</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    From initial concept to final polish, UN Properties delivers end-to-end construction excellence. By blending contemporary Nigerian design with international engineering standards, we create high-value assets that prioritize structural integrity and premium aesthetics.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sales & Marketing */}
                    <div className="mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Content */}
                            <div className="md:order-2">
                                <h2 className="text-4xl font-bold text-blue-600 mb-6">Sales & Marketing</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We deliver a strategic, result-driven sales approach that connects premium assets with the right buyers. By combining deep market insights with high-end visual storytelling—including drone cinematography—we ensure your property achieves maximum visibility and value.
                                </p>
                            </div>

                            {/* Image */}
                            <div className="bg-gradient-to-br from-gray-400 to-gray-500 h-80 rounded-lg flex items-center justify-center md:order-1">
                                <span className="text-white text-8xl">📊</span>
                            </div>
                        </div>
                    </div>

                    {/* Real Estate Investment */}
                    <div className="mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Image */}
                            <div className="bg-gradient-to-br from-gray-400 to-gray-500 h-80 rounded-lg flex items-center justify-center">
                                <span className="text-white text-8xl">💼</span>
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-4xl font-bold text-blue-600 mb-6">Real Estate Investment</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We offer high-yield investment opportunities focused on long-term capital appreciation. We provide exclusive access to land banking and premium developments in high-growth corridors, ensuring our clients enter the market ahead of the curve.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Real Estate Consultancy */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Content */}
                            <div className="md:order-2">
                                <h2 className="text-4xl font-bold text-blue-600 mb-6">Real Estate Consultancy</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    UN Properties provides expert advisory services that turn market complexity into clear, actionable strategy. We offer comprehensive due diligence, feasibility studies, and accurate valuations to ensure every decision is informed and strategic. Our diversification is backed by data and professional insight.
                                </p>
                            </div>

                            {/* Image */}
                            <div className="bg-gradient-to-br from-gray-400 to-gray-500 h-80 rounded-lg flex items-center justify-center md:order-1">
                                <span className="text-white text-8xl">🏢</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Register Interest Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div className="bg-gradient-to-br from-gray-400 to-gray-500 h-80 rounded-lg hidden md:flex items-center justify-center">
                            <span className="text-white text-8xl">🤝</span>
                        </div>

                        {/* Right Form */}
                        <div>
                            <h2 className="text-4xl font-bold text-blue-600 mb-8">Register your Interest</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-600 text-gray-800 placeholder-gray-500"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-600 text-gray-800 placeholder-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-600 text-gray-800 placeholder-gray-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Interest</label>
                                    <input
                                        type="text"
                                        placeholder="Interest"
                                        className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-600 text-gray-800 placeholder-gray-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 transition tracking-wider"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

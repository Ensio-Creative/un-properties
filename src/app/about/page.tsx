export default function About() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-80 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <h1 className="relative z-10 text-6xl md:text-7xl font-bold text-white">About</h1>
            </section>

            {/* About Description */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="mb-12">
                        <p className="text-gray-800 text-lg leading-relaxed mb-8">
                            At UN Properties, we believe that real estate is more than just transactions—it is about the meticulous creation of value and the preservation of wealth. We are a premier real estate firm dedicated to delivering structurally sound, legally verified, and aesthetically superior properties across Nigeria's most promising investment corridors.
                        </p>

                        <div className="flex items-center gap-4">
                            <span className="text-gray-600">ESTD.</span>
                            <span className="text-3xl font-bold text-blue-600">2022</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="relative py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
                <div className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23333" width="1200" height="600"/%3E%3C/svg")' }}></div>

                <div className="relative z-20 max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                        <div>
                            <h2 className="text-5xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-300 leading-relaxed">
                                To empower individuals and corporate investors by providing secure, high-value real estate assets through expert consultancy, transparent marketing, and superior construction.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-400 to-gray-500 h-64 rounded-lg"></div>
                    </div>
                </div>
            </section>

            {/* Core Pillars Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-blue-600 mb-12">Core Pillars</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Side - Pillars List */}
                        <div className="space-y-8">
                            {/* Precision */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-blue-600 text-blue-600">
                                        <span className="text-lg">◉</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-600 mb-2">Precision</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We prioritize international engineering standards. By utilizing high-grade materials and strict on-site supervision, we build structures that stand the test of.
                                    </p>
                                </div>
                            </div>

                            {/* Rectitude */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-blue-600 text-blue-600">
                                        <span className="text-lg">◉</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-600 mb-2">Rectitude</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Integrity is non-negotiable. Every property undergoes rigorous legal verification before offering to clients.
                                    </p>
                                </div>
                            </div>

                            {/* Transparency */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-blue-600 text-blue-600">
                                        <span className="text-lg">◉</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-600 mb-2">Transparency</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Clear communication and honest dealings define our relationships with clients and stakeholders.
                                    </p>
                                </div>
                            </div>

                            {/* Innovation */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-blue-600 text-blue-600">
                                        <span className="text-lg">◉</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-600 mb-2">Innovation</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We embrace modern construction techniques and sustainable building practices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-96 rounded-lg"></div>
                    </div>
                </div>
            </section>

            {/* Register Interest Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div className="bg-gradient-to-br from-gray-400 to-gray-500 h-80 rounded-lg hidden md:block"></div>

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

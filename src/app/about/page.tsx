import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - UN Properties",
};

import Hero from "@/components/Hero";
import RegisterInterest from "@/components/RegisterInterest";
import AccordionPillars from "./AccordionPillars";

export default function About() {
    return (
        <main>
            {/* Hero Section */}
            <Hero img="un-properties-about-hero" text="About" />

            {/* About Description */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="mb-12">
                        <p className="text-[#1A1A1A] font-normal lg:text-[35px] text-lg leading-tight mb-8">
                            At UN Properties, we believe that real estate is more than just transactions—it is about the meticulous creation of value and the preservation of wealth. We are a premier real estate firm dedicated to delivering structurally sound, legally verified, and aesthetically superior properties across Nigeria's most promising investment corridors.
                        </p>

                        <div className="flex items-center gap-4">
                            <span className="text-[#1A1A1A] lg:text-3xl font-bold">ESTD.</span>
                            <span className="lg:text-3xl font-bold text-[#370FAF]">2022</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="relative h-[90vh] text-white overflow-hidden flex items-end">
                <div className="absolute inset-0 bg-black opacity-60 w-full h-full z-10"></div>
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/un-properties-mission.jpg")' }}></div>

                <div className="relative z-20 max-w-7xl mx-auto w-full pb-32">
                    <div className="lg:flex lg:mx-0 mx-4 justify-between border-t pt-6 border-white">
                        <h2 className="lg:text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-white lg:text-sm lg:w-[30%] leading-relaxed">
                            To empower individuals and corporate investors by providing secure, high-value real estate assets through expert consultancy, transparent marketing, and superior construction.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Pillars Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto lg:px-0 px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Side - Pillars List */}
                        <div>
                            <h2 className="lg:text-5xl text-3xl font-bold text-[#370FAF] mb-12">Core Pillars</h2>
                            <AccordionPillars />
                        </div>

                        {/* Right Side - Image */}
                        <img src="/images/un-properties-core-pillars.jpg" alt="" />
                    </div>
                </div>
            </section>

            {/* Register Interest Section */}
            <RegisterInterest />
        </main>
    );
}

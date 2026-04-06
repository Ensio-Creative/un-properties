import Hero from "@/components/Hero";
import RegisterInterest from "@/components/RegisterInterest";

export default function Services() {
    return (
        <main>
            {/* Hero Section */}
            <Hero img="un-properties-services-hero" text="Our Services" />

            {/* Introduction */}
            <section className="bg-white my-12">
                <div className="max-w-7xl mx-auto lg:px-0 px-4">
                    <p className="text-[#333333] lg:w-1/2 leading-relaxed">
                        From professional property management to bespoke home acquisitions, we provide tailored real estate services that put your needs first.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="lg:pt-20 pb-20 lg:px-0 px-4">
                <div className="lg:flex border-y border-[#D1D1D1] lg:px-20 gap-10">
                    <div className="lg:w-[20%] mt-auto">
                        <p className="text-3xl text-[#370FAF] my-6 font-bold">Design &
                            Construction</p>
                    </div>
                    <div className="lg:w-[30%]">
                        <img className="" src="/images/services/un-properties-design-and-construction-services.jpg" alt="" />
                    </div>
                    <div className="lg:w-[50%] lg:my-auto my-8">
                        <p className="text-[#333333] lg:text-[18px]">From initial concept to final polish, UN Properties delivers end-to-end construction excellence. By blending contemporary Nigerian design with international engineering standards, we create high-value assets that prioritize structural integrity and premium aesthetics.</p>
                    </div>
                </div>
                
                <div className="lg:flex justify-between border-b border-[#D1D1D1] lg:pr-20 gap-10">
                    <div className="lg:hidden">
                        <p className="text-3xl lg:!ml-auto lg:w-1/2 text-[#370FAF] my-6 font-bold">Sales &
                            Marketing</p>
                    </div>

                    <div className="lg:w-[30%]">
                        <img className="" src="/images/services/un-properties-sales-and-marketing-services.jpg" alt="" />
                    </div>
                    <div className="lg:w-[50%] lg:my-auto my-8">
                        <p className="text-[#333333] lg:text-[18px]">We deliver a strategic, result-driven sales approach that connects premium assets with the right buyers. By combining deep market insights with high-end visual storytelling—including drone cinematography—we ensure your property achieves maximum visibility and value.</p>
                    </div>
                    <div className="lg:w-[20%] mt-auto lg:block hidden">
                        <p className="text-3xl lg:!ml-auto lg:w-1/2 text-[#370FAF] my-6 font-bold">Sales &
                            Marketing</p>
                    </div>
                </div>

                <div className="lg:flex border-y border-[#D1D1D1] lg:px-20 gap-10">
                    <div className="lg:w-[20%] mt-auto">
                        <p className="text-3xl text-[#370FAF] my-6 font-bold">Real Estate
                            Investment</p>
                    </div>
                    <div className="lg:w-[30%]">
                        <img className="" src="/images/services/un-properties-investment-services.jpg" alt="" />
                    </div>
                    <div className="lg:w-[50%] lg:my-auto my-8">
                        <p className="text-[#333333] lg:text-[18px]">We offer high-yield investment opportunities focused on long-term capital appreciation. We provide exclusive access to land banking and premium developments in high-growth corridors, ensuring our clients enter the market ahead of the curve.</p>
                    </div>
                </div>

                <div className="lg:flex justify-between border-b border-[#D1D1D1] lg:pr-20 gap-10">
                    <div className="lg:hidden">
                        <p className="text-3xl lg:!ml-auto lg:w-1/2 text-[#370FAF] my-6 font-bold">Real Estate
                            Consultancy</p>
                    </div>

                    <div className="lg:w-[30%]">
                        <img className="" src="/images/services/un-properties-consultancy-services.jpg" alt="" />
                    </div>
                    <div className="lg:w-[50%] lg:my-auto my-8">
                        <p className="text-[#333333] lg:text-[18px]">
                            UN Properties provides expert advisory services that turn market complexity into clear, actionable strategy. We offer comprehensive due diligence, feasibility studies, and accurate valuations to ensure every decision from land acquisition to portfolio diversification is backed by data and professional insight.                        </p>
                    </div>
                    <div className="lg:w-[20%] mt-auto lg:block hidden">
                        <p className="text-3xl  text-[#370FAF] my-6 font-bold">Real Estate
                            Consultancy</p>
                    </div>
                </div>
            </section>

            {/* Register Interest Section */}
            <RegisterInterest />
        </main>
    );
}

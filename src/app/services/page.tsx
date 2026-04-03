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
                    <p className="text-[#333333] w-1/2 leading-relaxed">
                        From professional property management to bespoke home acquisitions, we provide tailored real estate services that put your needs first.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="py-20">
               
            </section>

            {/* Register Interest Section */}
            <RegisterInterest />
        </main>
    );
}

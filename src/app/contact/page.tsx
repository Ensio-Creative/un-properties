
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact - UN Properties",
};

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
                        <ContactForm />
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

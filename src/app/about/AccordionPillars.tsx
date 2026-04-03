'use client';

import { useState } from "react";

const pillars = [
    {
        title: "Precision",
        content:
            "We prioritize international engineering standards. By utilizing high-grade materials and strict on-site supervision, we build structures that stand the test of.",
    },
    {
        title: "Rectitude",
        content:
            "Integrity is non-negotiable. Every property undergoes rigorous legal verification before offering to clients.",
    },
    {
        title: "Transparency",
        content:
            "Clear communication and honest dealings define our relationships with clients and stakeholders.",
    },
    {
        title: "Innovation",
        content:
            "We embrace modern construction techniques and sustainable building practices.",
    },
];

export default function AccordionPillars() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {pillars.map((pillar, idx) => (
                <div key={pillar.title} className={`${openIndex === idx ? 'bg-[#F5F5F5] border border-[#D1D1D1] rounded-md' : 'rounded-lg'}`}>
                    <button
                        className="w-full flex cursor-pointer items-center justify-between px-6 py-4 focus:outline-none"
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        aria-expanded={openIndex === idx}
                        aria-controls={`pillar-content-${idx}`}
                    >
                        <div className="flex items-center gap-4">
                            <img className="w-7" src="/images/icon.svg" alt="" />
                            <span className="text-xl font-bold text-[#370FAF]">{pillar.title}</span>
                        </div>

                    </button>
                    {openIndex === idx && (
                        <div id={`pillar-content-${idx}`} className="px-6 ml-12 pb-6 text-[#333333] text-sm leading-relaxed animate-fade-in">
                            {pillar.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
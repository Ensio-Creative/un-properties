'use client'
import React, { useState } from 'react';

const ProjectCard = ({ img, title, text, type }: { img: string, title: string, text: string, type: string[] }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="cursor-pointer" onClick={() => setOpen(true)}>
                <img src={`/images/projects/${img}.jpg`} alt="" />
                <p className='text-[#370FAF] mt-3 font-medium text-lg'>{title}</p>
                <p className='text-[#666666] text-sm'>{text}</p>
            </div>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setOpen(false)}>
                    <div className="bg-white m-4 shadow-lg overflow-auto max-w-6xl max-h-[85vh] w-full lg:p-12 p-6 relative" onClick={e => e.stopPropagation()}>
                        <button className="absolute lg:top-2 top-2 lg:right-2 right-2 text-2xl text-[#370FAF]" onClick={() => setOpen(false)}>&times;</button>
                        <img src={`/images/projects/${img}.jpg`} alt="" className="w-full mb-8" />
                        <div className='lg:flex lg:mb-0 mb-4'>
                            <div className='lg:w-1/2'>
                                <h2 className="text-2xl font-bold text-[#370FAF] mb-2">{title}</h2>
                            </div>
                            <div className="lg:w-1/2">
                                <div className='grid grid-cols-2 py-3 border-y border-[#D1D1D1]'>
                                    <p className='text-[#370FAF] font-bold'>Type</p>
                                    <p className="text-[#666666] font-medium">{type.join(', ')}</p>
                                </div>
                                {/* {type && type.map((t) => (
                                    <span key={t} className="bg-[#F5F5F5] text-[#370FAF] px-3 py-1 rounded text-xs font-medium">{t}</span>
                                ))} */}
                                <div className='grid grid-cols-2 py-3 border-b border-[#D1D1D1]'>
                                    <p className='text-[#370FAF] font-bold'>Location</p>
                                    <p className="text-[#666666] font-medium">{text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
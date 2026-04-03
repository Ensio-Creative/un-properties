import React from 'react';

const Hero = ({ title, img, text }: { title?: string; img: string; text: string }) => {
    return (
        <div className='relative lg:h-[85vh] h-[60vh] max-w-7xl mx-auto mt-20'>
            <img src={`/images/${img}.jpg`} className='w-full object-cover h-full' alt="" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white max-w-4xl mx-auto px-4">
                {title && <p className="text-sm font-semibold tracking-widest mb-2">{title}</p>}
                <h1 className="text-3xl md:text-6xl font-bold lg:leading-16">
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default Hero;
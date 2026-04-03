import React from 'react';

const Hero = ({ title, img, text }: { title: string; img: string; text?: string }) => {
    return (
        <div className='relative lg:h-[95vh] h-[70vh] max-w-7xl mx-auto'>
            <img src={`/images/${img}.jpg`} className='w-full object-cover h-full' alt="" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute lg:top-50 top-25 left-0 right-0 mx-auto z-10 text-center text-white max-w-4xl px-4 py-20">
                {title && <p className="text-sm font-semibold tracking-widest mb-2">{title}</p>}
                <h1 className="text-3xl md:text-6xl font-bold lg:leading-16">
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default Hero;
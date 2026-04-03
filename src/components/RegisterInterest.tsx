import React from 'react';

const RegisterInterest = () => {
    return (
        <section className="bg-white mb-20 mt-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Left Content */}
                    <img src="/images/register-your-interest.jpg" alt="" />

                    {/* Right  */}
                    <div className="bg-[#F5F5F5] h-full p-10">
                        <h2 className="lg:text-5xl text-3xl font-bold text-[#370FAF] mb-12">Register your Interest</h2>
                        <div className='my-4'>
                            <input type="text" placeholder='Full Name' className='border-b border-[#D1D1D1] w-full' />
                        </div>
                        <div className='flex gap-4'>
                            <div className='my-2 w-full'>
                                <input type="number" placeholder='Phone Number' className='border-b border-[#D1D1D1] w-full' />
                            </div>
                            <div className='my-2 w-full'>
                                <input type="text" placeholder='Email Address' className='border-b border-[#D1D1D1] w-full' />
                            </div>
                        </div>
                        <div className='my-4'>
                            <input type="text" placeholder='Interest' className='border-b border-[#D1D1D1] w-full' />
                        </div>
                        <button className="border-1 border-[#370FAF] text-[#370FAF] text-sm px-8 py-3 font-medium mt-10">
                            SUBMIT
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RegisterInterest;
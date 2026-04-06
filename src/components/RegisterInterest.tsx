'use client';

import React, { useState } from 'react';
import axios from 'axios';

const RegisterInterest = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        interest: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await axios.post('https://formsubmit.co/info@unproperties.com', {
                fullName: formData.fullName,
                phone: formData.phone,
                email: formData.email,
                interest: formData.interest,
                _captcha: 'false'
            });

            setSuccessMessage('Thank you! Your interest has been registered successfully.');
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                interest: ''
            });
        } catch (error) {
            setErrorMessage('Failed to register interest. Please try again later.');
            console.error('Form submission error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="bg-white mb-20 mt-10">
            <div className="max-w-7xl mx-auto lg:px-0 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Left Content */}
                    <img src="/images/register-your-interest.jpg" alt="" />

                    {/* Right  */}
                    <div className="bg-[#F5F5F5] text-sm h-full lg:p-10 p-5">
                        <h2 className="lg:text-5xl text-3xl font-bold text-[#370FAF] mt-4 mb-10">Register your Interest</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='my-2'>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder='Full Name'
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className='border-b py-3 border-[#D1D1D1] w-full'
                                />
                            </div>
                            <div className='flex my-2 gap-4'>
                                <div className='w-full'>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder='Phone Number'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className='border-b py-3 border-[#D1D1D1] w-full'
                                    />
                                </div>
                                <div className='w-full'>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email Address'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className='border-b py-3 border-[#D1D1D1] w-full'
                                    />
                                </div>
                            </div>
                            <div className='my-2'>
                                <input
                                    type="text"
                                    name="interest"
                                    placeholder='Interest'
                                    value={formData.interest}
                                    onChange={handleChange}
                                    required
                                    className='border-b py-3 border-[#D1D1D1] w-full'
                                />
                            </div>

                            {successMessage && (
                                <p className="text-green-600 text-sm mt-3">
                                    {successMessage}
                                </p>
                            )}

                            {errorMessage && (
                                <p className="text-red-600 text-sm mt-3">
                                    {errorMessage}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="border-1 rounded-sm border-[#370FAF] text-[#370FAF] text-sm px-8 py-3 font-medium mt-4 lg:mb-0 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'SUBMITTING...' : 'SUBMIT'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RegisterInterest;
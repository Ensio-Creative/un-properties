'use client';

import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                message: formData.message,
                _captcha: 'false'
            });

            setSuccessMessage('Thank you! Your message has been sent successfully.');
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setErrorMessage('Failed to send message. Please try again later.');
            console.error('Form submission error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#F5F5F5] border border-[#D1D1D1] lg:p-8 p-4 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6 lg:py-0 py-4">
                <div>
                    <label htmlFor="fullName" className="block text-[#333333] text-sm font-medium mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#370FAF] text-gray-800 placeholder-gray-500"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-[#333333] text-sm font-medium mb-2">
                        Phone
                    </label>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#370FAF] text-gray-800 placeholder-gray-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-[#333333] text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#370FAF] text-gray-800 placeholder-gray-500"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-[#333333] text-sm font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        rows={5}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#370FAF] text-gray-800 placeholder-gray-500 resize-none"
                    ></textarea>
                </div>

                {successMessage && (
                    <p className="text-green-600 text-sm text-center">
                        {successMessage}
                    </p>
                )}

                {errorMessage && (
                    <p className="text-red-600 text-sm text-center">
                        {errorMessage}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-sm border border-[#370FAF] text-[#370FAF] text-sm py-3 px-6 transition tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'SENDING...' : 'REQUEST A CALLBACK'}
                </button>

                <p className="text-center text-[#333333] text-sm">
                    Expect a response within 2 hours during work hours.
                </p>
            </form>
        </div>
    );
}

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.send(
            'service_vreb175',
            'template_ami8ker',
            form,
            'mjxVAFkd9EnKck1zG'
        )
            .then(result => {
                console.log('Success:', result.text);
                alert('Message sent successfully!');
                setForm({ name: '', email: '', subject: '', message: '' });
            })
            .catch(error => {
                console.error('Error:', error.text);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div className="border rounded-lg p-4 sm:p-6 md:py-6 md:px-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic mb-4 md:mb-6">
                Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
                <div>
                    <label className="block mb-1 text-sm sm:text-base text-gray-200">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-amber-500"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm sm:text-base text-gray-200">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-amber-500"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm sm:text-base text-gray-200">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-amber-500"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm sm:text-base text-gray-200">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows="3"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-amber-500 resize-none"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 sm:py-3 bg-black border cursor-pointer border-gray-400 hover:bg-gray-800 text-white font-semibold rounded transition"
                >
                    SUBMIT
                </button>
            </form>
        </div>

    );
}

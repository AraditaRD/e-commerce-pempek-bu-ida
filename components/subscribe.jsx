    'use client';
    import { useState } from 'react';

    export default function Subscribe() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleSubscribe = () => {
        if (!email) {
        setMessage({ text: 'Email tidak boleh kosong!', type: 'error' });
        return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        setMessage({ text: '❌ Format email tidak valid.', type: 'error' });
        return;
        }
        setMessage({ text: '✅ Berhasil! Kode diskon 20% telah dikirim ke email Anda.', type: 'success' });
        setEmail('');
        setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    };

    return (
        <section id="subscribe" className="mt-16">
        <div className="bg-gradient-to-r from-green-800 to-emerald-800 rounded-3xl p-8 text-white text-center md:text-left md:flex items-center justify-between">
            <div>
            <h3 className="text-2xl md:text-3xl font-bold">Subscribe & Save</h3>
            <p className="text-3xl md:text-4xl font-black mt-1">20% off</p>
            <p className="text-lg opacity-90">Your Next Order</p>
            </div>
            <div className="mt-5 md:mt-0 w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email *"
                className="px-5 py-3 rounded-full w-full sm:w-64 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                onClick={handleSubscribe}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full w-full sm:w-auto transition"
                >
                Subscribe
                </button>
            </div>
            <div className={`text-sm mt-2 text-center md:text-left min-h-[24px] ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                {message.text}
            </div>
            <label className="flex items-center justify-center md:justify-start gap-2 mt-3 text-sm">
                <input type="checkbox" className="rounded bg-white" />
                <span>Yes, subscribe me to your newsletter.</span>
            </label>
            </div>
        </div>
        </section>
    );
    }
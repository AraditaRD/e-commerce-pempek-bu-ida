    'use client';
    import { useCart } from '@/context/CartContext';
    import Link from 'next/link';
    import { useState } from 'react';

    export default function Navbar() {
    const { cart, removeFromCart, totalItems, totalPrice, isCartOpen, toggleCart, closeCart } = useCart();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-5 z-40 px-4">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent">
                Pempek Bu Ida
                </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
                <a href="#best-seller" className="hover:text-green-700 transition">Best Seller</a>
                <a href="#kategori" className="hover:text-green-700 transition">Kategori</a>
                <a href="#mulai-belanja" className="hover:text-green-700 transition">Belanja</a>
                <a href="#subscribe" className="hover:text-green-700 transition">Subscribe</a>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center text-sm bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                <span className="font-semibold text-amber-800">20% off</span>
                <span className="text-amber-700 mx-1">•</span>
                <span className="text-amber-800">first order</span>
                <a href="#subscribe" className="ml-2 text-xs bg-amber-600 text-white px-3 py-1 rounded-full hover:bg-amber-700 transition font-medium">
                    Subscribe
                </a>
                </div>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-green-700">Log In</a>

                {/* Cart */}
                <div className="relative">
                <button onClick={toggleCart} className="p-2 rounded-md text-gray-700 hover:bg-gray-100 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {totalItems}
                    </span>
                    )}
                </button>

                {/* Cart Dropdown */}
                <div className={`cart-dropdown ${isCartOpen ? 'show' : 'hide'} absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden`}>
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-gray-900">Keranjang Belanja</h3>
                    <span className="text-sm text-gray-500">{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="max-h-80 overflow-y-auto p-2 space-y-2">
                    {cart.length === 0 ? (
                        <div className="text-center text-gray-500 py-6">Keranjang kosong</div>
                    ) : (
                        cart.map(item => (
                        <div key={item.name} className="flex items-start gap-3 p-2 border-b border-gray-100 last:border-0">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm text-gray-800 truncate">{item.name}</h4>
                            <p className="text-xs text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                            <p className="text-sm font-semibold text-gray-900 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.name)} className="text-red-500 hover:text-red-700 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            </button>
                        </div>
                        ))
                    )}
                    </div>
                    {cart.length > 0 && (
                    <div className="p-4 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-900">Total</span>
                        <span className="font-bold text-lg text-green-700">${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-xl transition">
                        Checkout
                        </button>
                    </div>
                    )}
                </div>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </button>
            </div>
            </div>
        </div>

        {/* Mobile menu dropdown (sederhana) */}
        {mobileMenuOpen && (
            <div className="md:hidden mt-2 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <nav className="flex flex-col space-y-2">
                <a href="#best-seller" className="py-2 hover:text-green-700" onClick={() => setMobileMenuOpen(false)}>Best Seller</a>
                <a href="#kategori" className="py-2 hover:text-green-700" onClick={() => setMobileMenuOpen(false)}>Kategori</a>
                <a href="#mulai-belanja" className="py-2 hover:text-green-700" onClick={() => setMobileMenuOpen(false)}>Belanja</a>
                <a href="#subscribe" className="py-2 hover:text-green-700" onClick={() => setMobileMenuOpen(false)}>Subscribe</a>
            </nav>
            </div>
        )}
        </header>
    );
    }
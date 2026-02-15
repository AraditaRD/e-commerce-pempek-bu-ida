    'use client';
    import { createContext, useContext, useState, useEffect } from 'react';

    const CartContext = createContext();

    export const useCart = () => useContext(CartContext);

    export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart dari localStorage saat mount
    useEffect(() => {
        const savedCart = localStorage.getItem('pempekCart');
        if (savedCart) setCart(JSON.parse(savedCart));
    }, []);

    // Simpan ke localStorage setiap cart berubah
    useEffect(() => {
        localStorage.setItem('pempekCart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (name, price, image) => {
        setCart(prev => {
        const existing = prev.find(item => item.name === name);
        if (existing) {
            return prev.map(item => item.name === name ? { ...item, quantity: item.quantity + 1 } : item);
        } else {
            return [...prev, { name, price: parseFloat(price), image, quantity: 1 }];
        }
        });
    };

    const removeFromCart = (name) => {
        setCart(prev => prev.filter(item => item.name !== name));
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const toggleCart = () => setIsCartOpen(prev => !prev);
    const closeCart = () => setIsCartOpen(false);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, totalPrice, isCartOpen, toggleCart, closeCart }}>
        {children}
        </CartContext.Provider>
    );
    };
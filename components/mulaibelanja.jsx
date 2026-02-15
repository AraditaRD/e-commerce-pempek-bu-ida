    'use client';
    import { useCart } from '@/context/CartContext';

    const products = [
    { name: 'Pempek Adaan', price: 15000, image: '/pempek adaan.webp', category: 'Makanan' },
    { name: 'Pempek Kapal Selam', price: 35000, image: '/pempek kapal selam.jpg', category: 'Makanan' },
    { name: 'Pempek Telur', price: 18000, image: '/pempek telur.jpg', category: 'Makanan' },
    { name: 'Pempek Kulit', price: 15000, image: '/pempek kulit.webp', category: 'Makanan' },
    { name: 'Laksan', price: 15000, image: '/laksan.webp', category: 'Makanan' },
    { name: 'Model', price: 15000, image: '/model.jpg', category: 'Makanan' },
    { name: 'Pindang Patin', price: 45000, image: '/pindang patin.webp', category: 'Makanan' },
    { name: 'Burgo', price: 15000, image: '/burgo.webp', category: 'Makanan' },
    { name: 'Opor Ayam Nanas', price: 30000, image: '/opor ayam nanas.jpg', category: 'Makanan' },
    { name: 'Kemplang', price: 2000, image: '/kemplang.webp', category: 'Makanan' },
    { name: 'Es Kacang Merah', price: 15000, image: '/es kacang merah.jpg', category: 'Minuman' },
    { name: 'Es Durian', price: 18000, image: '/es durian.webp', category: 'Minuman' },
    { name: 'Es Jeruk', price: 10000, image: '/es jeruk.jpg', category: 'Minuman' },
    { name: 'Es Dawet', price: 12000, image: '/es dawet.webp', category: 'Minuman' },
    { name: 'Es Pukat Kocok', price: 15000, image: '/es pukat kocok.webp', category: 'Minuman' },
    { name: 'Air Putih', price: 5000, image: '/air putih.webp', category: 'Minuman' },
    { name: 'Es Batu', price: 2000, image: '/es batu.webp', category: 'Minuman' },
    { name: 'Es Teh', price: 8000, image: '/es teh.webp', category: 'Minuman' },
    ];

    export default function MulaiBelanja() {
    const { addToCart } = useCart();

    return (
        <section id="mulai-belanja" className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">🛒 Mulai Belanja</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {products.map((product) => (
            <div key={product.name} className="bg-white p-2 rounded-2xl border border-gray-100 relative">
                <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold badge">
                {product.category}
                </span>
                <div className="product-image-container w-full h-28">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-medium mt-3">{product.name}</h4>
                <div className="mt-1">
                <span className="text-xl font-bold">Rp. {product.price.toLocaleString()}</span>
                </div>
                <button
                onClick={() => addToCart(product.name, product.price, product.image)}
                className="absolute bottom-3 right-3 w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-md"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </button>
            </div>
            ))}
        </div>
        </section>
    );
    }

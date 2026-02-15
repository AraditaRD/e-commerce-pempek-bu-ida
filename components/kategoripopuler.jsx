    import Image from 'next/image';

    export default function KategoriPopuler() {
    return (
        <section id="kategori" className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">🔥 Kategori Paling Populer</h2>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-5">
            {/* Makanan */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 text-center hover:shadow-md transition">
            <div className="bg-green-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center overflow-hidden">
                <img src="/images/Pempek-Palembang.webp" alt="Makanan" className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold mt-3">Makanan</p>
            </div>

            {/* Minuman */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 text-center hover:shadow-md transition">
            <div className="bg-amber-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center overflow-hidden">
                <img src="/images/es kacang merah.jpg" alt="Minuman" className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold mt-3">Minuman</p>
            </div>

            {/* Add Topping */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 text-center hover:shadow-md transition">
            <div className="bg-purple-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center overflow-hidden">
                <img src="/images/kemplang.webp" alt="Add Topping" className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold mt-3">Add Toping</p>
            </div>
        </div>
        </section>
    );
    }
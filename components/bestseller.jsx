    export default function BestSeller() {
    return (
        <section id="best-seller" className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🏷️ Best Seller
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {/* Pempek Kapal Selam */}
            <div className="product-card bg-white rounded-2xl p-4 border border-gray-100 flex flex-col">
            <div className="product-image-container w-full h-32">
                <img  src="/e-commerce-pempek-bu-ida/images/pempek kapal selam.jpg" alt="Pempek Kapal Selam" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold mt-3 text-gray-800">Pempek Kapal Selam</h3>
            <p className="text-sm text-gray-500">Makanan</p>
            </div>

            {/* Tekwan */}
            <div className="product-card bg-white rounded-2xl p-4 border border-gray-100">
            <div className="product-image-container w-full h-32">
                <img src="/images/tekwan.webp" alt="Tekwan" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold mt-3">Tekwan</h3>
            <p className="text-sm text-gray-500">Makanan</p>
            </div>

            {/* Pempek Telur */}
            <div className="product-card bg-white rounded-2xl p-4 border border-gray-100">
            <div className="product-image-container w-full h-32">
                <img src="/images/pempek telur.jpg" alt="Pempek Telur" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold mt-3">Pempek Telur</h3>
            <p className="text-sm text-gray-500">Makanan</p>
            </div>

            {/* Es Kacang Merah */}
            <div className="product-card bg-white rounded-2xl p-4 border border-gray-100">
            <div className="product-image-container w-full h-32">
                <img src="/images/es kacang merah.jpg" alt="Es Kacang Merah" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold mt-3">Es Kacang Merah</h3>
            <p className="text-sm text-gray-500">Minuman</p>
            </div>
        </div>
        </section>
    );
    }

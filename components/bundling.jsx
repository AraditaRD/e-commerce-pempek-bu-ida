    export default function Bundling() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-100">
            <div className="absolute inset-0 w-full h-full">
            <img src="https://placehold.co/800x600/amber-50/f59e0b?text=Promo+Bundling" alt="Bundling background" className="w-full h-full object-cover opacity-30" />
            </div>
            <div className="relative z-10 p-6 flex flex-col items-start">
            <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">BUNDLING</span>
            <h2 className="text-3xl font-bold mt-3 text-amber-900">Beli 2 Lebih Hemat!</h2>
            <p className="text-amber-800 font-medium mt-1 max-w-xs">Dapatkan diskon 10% saat membeli 2 produk dari kategori ini.</p>
            <button className="mt-4 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md transition">Shop Now</button>
            </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-50 to-orange-100">
            <div className="absolute inset-0 w-full h-full">
            <img src="https://placehold.co/800x600/red-50/ef4444?text=Diskon+Hari+Ini" alt="Diskon background" className="w-full h-full object-cover opacity-30" />
            </div>
            <div className="relative z-10 p-6 flex flex-col items-start">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Diskon</span>
            <h2 className="text-3xl font-bold mt-3 text-red-900">Diskon Hari Ini</h2>
            <button className="mt-4 bg-red-700 hover:bg-red-800 text-white px-8 py-2.5 rounded-full text-sm font-medium shadow-md transition">Shop Now</button>
            </div>
        </div>
        </div>
    );
    }
    import Image from 'next/image';

    export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Enak, Murah &<br />Cepat Sampai
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-3">
            Makanan Khas Dari <span className="font-bold text-green-700">Palembang</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="bg-white px-5 py-2 rounded-full text-sm font-medium shadow-sm">
                🇮🇩 INDONESIA
            </span>
            <span className="bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-green-800 transition cursor-pointer">
                Shop now
            </span>
            </div>
        </div>
        <div className="relative mt-8 md:mt-0 md:w-1/2 lg:w-5/12 flex justify-center">
            <div className="absolute -left-6 top-0 bottom-0 w-16 text-green-700 opacity-20 hidden md:block">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0,0 Q30,50 0,100 L100,100 L100,0 Z" fill="currentColor" />
            </svg>
            </div>
            <Image 
            src="/e-commerce-pempek-bu-ida/images/pempek kapal selam.jpg"
            alt="Makanan Khas Palembang" 
            width={500} 
            height={300} 
            className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
            />
        </div>
        </section>
    );
    }

import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import BestSeller from '@/components/bestseller';
import Bundling from '@/components/bundling';
import KategoriPopuler from '@/components/kategoripopuler';
import MulaiBelanja from '@/components/mulaibelanja';
import Subscribe from '@/components/subscribe';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <CartProvider>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 lg:space-y-16">
        <Hero />
        <BestSeller />
        <Bundling />
        <KategoriPopuler />
        <MulaiBelanja />
        <Subscribe />
        <Footer />
      </main>
    </CartProvider>
  );
}
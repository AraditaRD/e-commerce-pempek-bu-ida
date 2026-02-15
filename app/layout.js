import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Pempek Bu Ida',
  description: 'Makanan khas Palembang',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.className}>
      <body className="antialiased text-gray-800">{children}</body>
    </html>
  );
}
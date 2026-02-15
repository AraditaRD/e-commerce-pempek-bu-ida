    export default function Footer() {
    return (
        <footer className="border-t border-gray-200 pt-10 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-sm">
            <div>
            <h5 className="font-bold text-gray-900 mb-3">Pempek Bu Ida</h5>
            <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-green-700">Best Seller</a></li>
                <li><a href="#" className="hover:text-green-700">Kategori</a></li>
                <li><a href="#" className="hover:text-green-700">Belanja</a></li>
                <li><a href="#" className="hover:text-green-700">Subscribe</a></li>
            </ul>
            </div>
            <div>
            <h5 className="font-bold text-gray-900 mb-3">Need Help?</h5>
            <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-green-700">FAQ</a></li>
                <li><a href="#" className="hover:text-green-700">Visit our Customer Support</a></li>
                <li><a href="#" className="hover:text-green-700">About Us</a></li>
                <li><a href="#" className="hover:text-green-700">Locations</a></li>
            </ul>
            </div>
            <div>
            <h5 className="font-bold text-gray-900 mb-3">My Orders</h5>
            <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-green-700">Favorites</a></li>
                <li><a href="#" className="hover:text-green-700">My Orders</a></li>
                <li className="text-xs text-gray-500 mt-2">Call us: 123-456-7890</li>
            </ul>
            </div>
            <div>
            <h5 className="font-bold text-gray-900 mb-3">Departments</h5>
            <ul className="space-y-2 text-gray-600">
                <li>Pempek</li><li>Food</li><li>Tasty</li><li>Palembang</li><li>Indonesia</li>
            </ul>
            </div>
            <div>
            <h5 className="font-bold text-gray-900 mb-3">More</h5>
            <ul className="space-y-2 text-gray-600">
                <li>Soft Drinks</li><li>Comfort Foof</li><li>Snacks</li>
            </ul>
            </div>
            <div>
            <h5 className="font-bold text-gray-900 mb-3">Shipping & Returns</h5>
            <ul className="space-y-2 text-gray-600">
                <li>Terms & Conditions</li><li>Payment Methods</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-3 text-xs text-gray-700">
                <span className="bg-gray-100 px-2 py-1 rounded">Mbanking</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Qris</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Seabank</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Dana/Gopay</span>
                <span className="bg-gray-100 px-2 py-1 rounded">ShopeePay</span>
            </div>
            </div>
        </div>
        <div className="mt-10 text-center text-xs text-gray-500 border-t pt-6">
            &copy; 2026 Pempek Bu Ida. By Aradita Ratu Disanda
        </div>
        </footer>
    );
    }
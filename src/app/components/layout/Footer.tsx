import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              parquet<span className="text-amber-600">Planner</span>
            </h3>
            <p className="text-gray-600 max-w-xs">
              Smart planning for your perfect parquet flooring layouts.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#how-it-works" className="text-gray-600 hover:text-amber-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">Newsletter</h4>
            <p className="text-gray-600">Stay updated with our latest features.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-amber-600 px-4 py-2 text-white font-medium rounded-r-md hover:bg-amber-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} parquetPlanner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
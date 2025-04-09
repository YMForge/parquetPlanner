import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-sm bg-white/80">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-semibold text-gray-800">
            parquet<span className="text-amber-600">Planner</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#how-it-works" className="text-gray-600 hover:text-amber-600 transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-amber-600 transition-colors">
            Pricing
          </Link>
        </nav>
        
        <Link 
          href="#try-now"
          className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-700 transition-colors"
        >
          Try Now
        </Link>
      </div>
    </header>
  );
} 
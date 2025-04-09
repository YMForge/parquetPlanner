import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      {/* Background pattern/texture */}
      <div className="absolute inset-0 z-0 opacity-20 bg-repeat" style={{
        backgroundImage: "url('/parquet-pattern.svg')",
        backgroundSize: "200px"
      }}></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Plan Your Perfect Floor — <span className="text-amber-600">With Precision.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10">
            parquetPlanner makes the planning of floor laying and patterns easy.
          </p>
          
          <Link 
            href="#try-now" 
            id="try-now"
            className="inline-block rounded-full bg-amber-600 px-8 py-4 text-lg font-medium text-white hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Try It Now For Free
          </Link>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
          <Image
            src="/screenshot.png"
            alt="parquetPlanner interface"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
} 
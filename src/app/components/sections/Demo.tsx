import Image from "next/image";
import Link from "next/link";

export default function Demo() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            See How <span className="text-amber-600">It Works</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our intuitive interface makes planning your parquet flooring simple and efficient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/screenshot.png"
                alt="parquetPlanner interface"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center mr-3">1</span>
                Define Your Space
              </h3>
              <p className="text-gray-600 pl-11">
                Input your room dimensions and any obstacles like columns or fixtures.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center mr-3">2</span>
                Choose Your Pattern
              </h3>
              <p className="text-gray-600 pl-11">
                Select from various parquet patterns including herringbone, chevron, and basket weave.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center mr-3">3</span>
                Optimize Layout
              </h3>
              <p className="text-gray-600 pl-11">
                Our algorithm calculates the most efficient layout to minimize waste and cuts.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center mr-3">4</span>
                Get Your Plan
              </h3>
              <p className="text-gray-600 pl-11">
                View your detailed plan with material list, cut diagrams, and layout guidance.
              </p>
            </div>
            
            <div className="pt-4">
              <Link 
                href="#try-now"
                className="inline-block rounded-full bg-amber-600 px-8 py-3 text-base font-medium text-white hover:bg-amber-700 transition-colors shadow-md"
              >
                Try It Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
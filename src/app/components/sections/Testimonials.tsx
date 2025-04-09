type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company?: string;
};

function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
      <svg className="h-8 w-8 text-amber-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>

      <p className="text-gray-600 mb-6 italic">{quote}</p>
      
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          <p className="text-gray-500 text-sm">{role}{company && `, ${company}`}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our <span className="text-amber-600">Users Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join the community of satisfied customers who&apos;ve transformed their flooring projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Testimonial
            quote="parquetPlanner saved me over $300 in materials by optimizing my parquet layout. The visualization tool made it easy to see exactly how the floor would look."
            author="Michael Johnson"
            role="Homeowner"
          />
          
          <Testimonial
            quote="As a contractor, I use parquetPlanner for all my flooring projects now. The time savings alone has increased my productivity by 30%. Clients love seeing the detailed plans too."
            author="Sara Rodriguez"
            role="Flooring Contractor"
            company="SR Flooring"
          />
          
          <Testimonial
            quote="The material list feature is a game-changer. It calculated exactly what I needed to order, right down to accounting for the pattern wastage. Brilliant tool!"
            author="Thomas Lee"
            role="DIY Enthusiast"
          />
        </div>
      </div>
    </section>
  );
} 
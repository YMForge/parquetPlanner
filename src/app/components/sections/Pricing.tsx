import Link from "next/link";

type PricingTierProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
};

function PricingTier({
  title,
  price,
  description,
  features,
  ctaText,
  popular = false,
}: PricingTierProps) {
  return (
    <div className={`rounded-2xl p-8 border ${popular ? 'border-amber-500 shadow-xl' : 'border-gray-200 shadow-md'} bg-white flex flex-col h-full relative`}>
      {popular && (
        <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <div className="mb-3">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        {price !== "Free" && <span className="text-gray-600">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        href="#try-now"
        className={`w-full py-3 px-6 rounded-lg font-medium text-center ${
          popular
            ? 'bg-amber-600 text-white hover:bg-amber-700'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        } transition-colors`}
      >
        {ctaText}
      </Link>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Simple <span className="text-amber-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that works best for your flooring projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingTier
            title="Basic"
            price="Free"
            description="See how the app works."
            features={[
              "Basic room layouts",
              "Single room planning",
              "Standard patterns",
              "Material list",
              "7-day access"
            ]}
            ctaText="Get Started"
          />
          
          <PricingTier
            title="One time use"
            price="99NOK"
            description="For the one time parquet project."
            features={[
              "Complex room layouts",
              "Multi-room planning",
              "All pattern types",
              "Detailed material list",
              "Cut optimization",
              "Export to PDF",
              "One time use"
            ]}
            popular={true}
            ctaText="Try Pro"
          />
          
          <PricingTier
            title="Business"
            price="990"
            description="For flooring businesses with ongoing projects."
            features={[
              "Everything in Professional",
              "Unlimited projects",
              "Client management",
              "Cost calculation",
              "Team collaboration",
              "Priority support",
              "Unlimited access"
            ]}
            ctaText="Contact Sales"
          />
        </div>
      </div>
    </section>
  );
} 
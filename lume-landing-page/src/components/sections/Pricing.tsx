import { Card } from "../ui/card";

function Pricing() {
  const commonFeatures = ["Strict Mode", "Track usage", "Custom blocks"];

  const pricingPlans = [
    { title: "Monthly", price: "$1.99", description: "$23.99 a year • cancel anytime" },
    { title: "Yearly", price: "$14.99", description: "$14.99 a year • cancel anytime" },
    { title: "Lifetime", price: "$49.99", description: "One-time payment" },
  ];

  return (
    <div className="flex flex-col justify-center items-center relative py-12 sm:py-20">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-semibold mb-10 text-center">
        Make Focusing Easier
      </h2>

      {/* Pricing grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-4 sm:px-6">
        {pricingPlans.map((plan, idx) => (
          <Card
            key={idx}
            className="flex flex-col items-start text-left p-6 sm:p-8 hover:scale-105 transition-transform duration-300 shadow-lg w-full"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">{plan.title}</h3>

            {/* Price + description */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full mb-4">
              <div>
                <p className="text-2xl sm:text-3xl font-bold">{plan.price}</p>
                <p className="text-xs sm:text-sm text-gray-500">{plan.description}</p>
              </div>
            </div>

            {/* Features */}
            <ul className="mb-6 space-y-2">
              {commonFeatures.map((feature, i) => (
                <li key={i} className="text-gray-700 text-sm sm:text-base">
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Pricing;

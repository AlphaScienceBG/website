
import { Card, CardContent } from "@/components/ui/card";

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry Focus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering data science solutions for two of the world's most complex and data-rich industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Finance Industry */}
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-64 bg-gradient-to-r from-datablue-700 to-datablue-900 relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236e3?auto=format&fit=crop&q=80')]
               bg-cover bg-center"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">Finance Sector</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-datablue-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datablue-500 w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Algorithmic Trading</span>: Develop high-frequency trading algorithms that leverage market inefficiencies.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datablue-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datablue-500 w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Fraud Detection</span>: Implement real-time anomaly detection systems for transaction monitoring.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datablue-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datablue-500 w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Risk Assessment</span>: Create sophisticated models for credit risk, market risk, and operational risk.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datablue-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datablue-500 w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Wealth Management</span>: Personalize investment strategies through advanced customer segmentation.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Energy Industry */}
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-64 bg-gradient-to-r from-datateal-700 to-datateal-900 relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80')]
               bg-cover bg-center"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">Energy Sector</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datateal-500 w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Demand Forecasting</span>: Predict energy consumption patterns for optimized grid management.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datateal-500 w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Asset Performance</span>: Maximize equipment lifecycle through predictive maintenance analytics.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datateal-500 w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Trading Optimization</span>: Analyze market conditions to optimize energy trading portfolios.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datateal-500 w-2 h-2"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Sustainability Analytics</span>: Track and optimize carbon footprint with comprehensive ESG metrics.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Industries;

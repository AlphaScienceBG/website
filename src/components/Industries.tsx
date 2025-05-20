import { Card, CardContent } from "@/components/ui/card";

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solution Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering quantitative solutions for complex,
            data-rich domains with high-performance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Business Intelligence */}
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-64 bg-gradient-to-r from-datablue-700 to-datablue-900 relative">
              <div
                className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236e3?auto=format&fit=crop&q=80')]
               bg-cover bg-center"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">
                  Business Intelligence
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-datablue-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datablue-500 w-2 h-2" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Quantitative Modeling</span>
                    : End-to-end automated systems with data pipelines, model
                    training, and intelligent decision support.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datablue-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datablue-500 w-2 h-2" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Data Analytics</span>:
                    Specialized solutions for data aggregation, trend analysis,
                    and automated reporting.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datablue-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datablue-500 w-2 h-2" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Risk Assessment</span>:
                    Advanced models for business risk, operational risk, and
                    comprehensive reporting.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datablue-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datablue-500 w-2 h-2" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Predictive Analysis</span>:
                    Data-driven forecasting with predictive modeling and
                    customized research tools.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Technical Solutions */}
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-64 bg-gradient-to-r from-datateal-700 to-datateal-900 relative">
              <div
                className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80')]
               bg-cover bg-center"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">
                  Technical Solutions
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datateal-500 w-2 h-2" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Advanced Analytics</span>:
                    Multi-source analysis, pattern recognition, and real-time
                    decision making tools.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datateal-500 w-2 h-2" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Health Analytics</span>:
                    Health metrics analysis and privacy-preserving synthetic
                    data generation
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datateal-500 w-2 h-2" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Data Engineering</span>:
                    Scalable data pipelines and infrastructure for
                    domain-specific modeling and analytics.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
                    <div className="rounded-full bg-datateal-500 w-2 h-2" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Simulation & Modeling</span>
                    : Advanced numerical models and automation scripts for
                    optimization and analysis.
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

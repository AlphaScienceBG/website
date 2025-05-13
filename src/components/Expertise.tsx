const technologiesData = [
  { name: "Python", percentage: 95 },
  { name: "Java", percentage: 85 },
  { name: "R", percentage: 85 },
  { name: "SQL & NoSQL", percentage: 90 },
  { name: "Machine Learning", percentage: 90 },
  { name: "ETL infrastructure", percentage: 90 },
  { name: "Cloud platforms", percentage: 80 },
  { name: "Time Series Analysis", percentage: 95 },
  { name: "Algorithmic Trading", percentage: 95 },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="py-20 bg-gradient-to-br from-gray-900 to-datablue-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With a team of quantitative analysts, data scientists, and
            engineers, we leverage cutting-edge technologies to deliver
            exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technology Stack */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-datateal-300">
              Technology Stack
            </h3>
            <div className="space-y-6">
              {technologiesData.map((tech) => (
                <div key={tech.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm text-gray-400">
                      {tech.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-datateal-400 to-datablue-500"
                      style={{ width: `${tech.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Science Approach */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-datagold-300">
              Our Approach
            </h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 mr-4">
                  <span className="font-bold text-datagold-300">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Problem Analysis
                  </h4>
                  <p className="text-gray-300">
                    We begin by deeply understanding your business challenges,
                    data landscape, and performance objectives.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 mr-4">
                  <span className="font-bold text-datagold-300">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Data Engineering
                  </h4>
                  <p className="text-gray-300">
                    Our team builds robust data pipelines to collect, clean, and
                    process the necessary data for your specific use case.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 mr-4">
                  <span className="font-bold text-datagold-300">03</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Model Development
                  </h4>
                  <p className="text-gray-300">
                    We develop and test sophisticated quantitative models and
                    algorithms tailored to your specific requirements.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 mr-4">
                  <span className="font-bold text-datagold-300">04</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Implementation & Deployment
                  </h4>
                  <p className="text-gray-300">
                    Our solutions are seamlessly integrated into your existing
                    infrastructure with comprehensive documentation and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

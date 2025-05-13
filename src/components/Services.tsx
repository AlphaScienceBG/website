import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartBar,
  Database,
  ChartLine,
  ChartPie,
  Target,
  ShieldCheck,
} from "lucide-react";

const ServicesData = [
  {
    icon: <Database className="h-10 w-10 text-datablue-600" />,
    title: "Quantitative Modeling Systems",
    description: "End-to-end platforms with automated data ingestion, predictive modeling, signal generation, and intelligent decision-making frameworks.",
  },
  {
    icon: <ChartBar className="h-10 w-10 text-datateal-600" />,
    title: "Data Engineering",
    description: "Robust ETL pipelines and infrastructure for collecting, processing, and storing massive datasets from multiple sources efficiently.",
  },
  {
    icon: <ChartLine className="h-10 w-10 text-datagold-600" />,
    title: "Simulation & Backtesting",
    description: "Advanced simulation platforms accounting for real-world constraints, edge cases, and variables with precision and accuracy.",
  },
  {
    icon: <ChartPie className="h-10 w-10 text-datablue-600" />,
    title: "Machine Learning & Predictive Analytics",
    description: "Sophisticated machine learning models to forecast trends, predict outcomes, and generate actionable insights from complex datasets.",
  },
  {
    icon: <Target className="h-10 w-10 text-datateal-600" />,
    title: "Decision Intelligence Tools",
    description: "Custom applications for tracking, risk assessment, and real-time visualization of data and key performance indicators.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-datagold-600" />,
    title: "Synthetic Data Generation",
    description: "Privacy-preserving synthetic data generation tools for model training and research without compromising sensitive information.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver end-to-end data science solutions tailored for the unique
            challenges of the finance and energy sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

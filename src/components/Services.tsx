
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartBar, Database, ChartLine, ChartPie, Target, ShieldCheck } from "lucide-react";

const ServicesData = [
  {
    icon: <Database className="h-10 w-10 text-datablue-600" />,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure to collect, process, and store massive datasets efficiently.",
  },
  {
    icon: <ChartBar className="h-10 w-10 text-datateal-600" />,
    title: "Predictive Analytics",
    description: "Forecast market trends, customer behaviors, and operational outcomes with sophisticated statistical modeling.",
  },
  {
    icon: <ChartLine className="h-10 w-10 text-datagold-600" />,
    title: "Risk Analytics",
    description: "Identify, quantify, and mitigate risks with advanced modeling techniques tailored for finance and energy sectors.",
  },
  {
    icon: <ChartPie className="h-10 w-10 text-datablue-600" />,
    title: "Business Intelligence",
    description: "Transform raw data into intuitive dashboards and reports that drive strategic decision-making.",
  },
  {
    icon: <Target className="h-10 w-10 text-datateal-600" />,
    title: "AI & Machine Learning",
    description: "Implement cutting-edge algorithms to automate processes, detect patterns, and generate intelligent insights.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-datagold-600" />,
    title: "Data Governance",
    description: "Ensure data quality, security, and compliance with industry regulations and internal standards.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver end-to-end data science solutions tailored for the unique challenges of the finance and energy sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
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

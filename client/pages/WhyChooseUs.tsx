import PublicHeader from "@/components/PublicHeader";
import { Link } from "react-router-dom";
import { Shield, Award, Users, Zap, DollarSign, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Your payments and data are protected with enterprise-grade security.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We ensure high-quality work with our satisfaction guarantee.",
  },
  {
    icon: Users,
    title: "Global Talent Pool",
    description: "Access skilled freelancers from around the world.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your projects completed quickly and efficiently.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Find the best value for your budget with competitive rates.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our support team is available around the clock to help you.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-white">
      <PublicHeader />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-dark mb-4">
            Why Choose GigClickers?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best platform for connecting clients with talented freelancers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-brand-green-light rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of satisfied clients who trust GigClickers for their projects.
          </p>
          <Link
            to="/post-job"
            className="inline-block bg-brand-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Post Your First Job
          </Link>
        </div>
      </main>
    </div>
  );
}

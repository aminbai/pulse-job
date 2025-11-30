import PublicHeader from "@/components/PublicHeader";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Users, Shield, Clock } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Sign Up",
    description: "Create your free account and complete your profile",
    icon: Users,
  },
  {
    step: "2",
    title: "Browse Jobs",
    description: "Find projects that match your skills and interests",
    icon: Shield,
  },
  {
    step: "3",
    title: "Apply & Work",
    description: "Submit proposals and start working on projects",
    icon: Clock,
  },
  {
    step: "4",
    title: "Get Paid",
    description: "Complete work and receive secure payments",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <PublicHeader />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-dark mb-4">
            How ClickerPlus Works
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is simple. Follow these easy steps to begin your
            freelancing journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/signup"
            className="inline-flex items-center bg-brand-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </main>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useState, useEffect, useMemo, memo, lazy, Suspense } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Megaphone,
  Users,
  Shield,
  Zap,
  Award,
  Search,
  Clock,
  Briefcase,
  FileText,
  Plus,
  Minus,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Star,
  TrendingUp,
  CheckCircle,
  Play,
  ChevronDown,
  Globe,
  Target,
  Sparkles,
} from "lucide-react";

// Lazy load components for better performance
const PublicHeader = lazy(() => import("@/components/PublicHeader"));

// Memoized data to prevent unnecessary re-renders
const categories = [
  {
    name: "Web Development",
    jobs: 1250,
    icon: Code,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    name: "Graphic Design",
    jobs: 890,
    icon: Palette,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    name: "Mobile Apps",
    jobs: 650,
    icon: Smartphone,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    name: "Digital Marketing",
    jobs: 1200,
    icon: Megaphone,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    name: "Writing & Content",
    jobs: 950,
    icon: FileText,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    name: "Video & Animation",
    jobs: 450,
    icon: Briefcase,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
];

const employerFeatures = [
  {
    icon: Users,
    title: "Global Talent Pool",
    description: "Access to 100k+ verified freelancers worldwide",
    stat: "100k+",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "100% secure escrow system with buyer protection",
    stat: "100%",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Search,
    title: "AI-Powered Matching",
    description: "Smart algorithms find the perfect freelancer",
    stat: "AI",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Satisfaction guaranteed or money back",
    stat: "24/7",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const workerFeatures = [
  {
    icon: Briefcase,
    title: "Find Great Projects",
    description: "Discover high-paying projects that match your expertise",
    stat: "$2.5k",
    color: "text-blue-400",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work remotely on your own schedule",
    stat: "24/7",
    color: "text-green-400",
  },
  {
    icon: Zap,
    title: "Fast Payments",
    description: "Get paid within 24 hours of project completion",
    stat: "<24h",
    color: "text-yellow-400",
  },
  {
    icon: Award,
    title: "Build Reputation",
    description: "Earn reviews and build your professional brand",
    stat: "5★",
    color: "text-orange-400",
  },
];

const stats = [
  { number: "50k+", label: "Active Freelancers", icon: Users },
  { number: "$10M+", label: "Total Paid Out", icon: TrendingUp },
  { number: "99.9%", label: "Uptime", icon: Shield },
  { number: "4.9/5", label: "Client Satisfaction", icon: Star },
];

const faqs = [
  {
    question: "How do I get started as a freelancer?",
    answer:
      "Simply sign up for free, create your professional profile, showcase your portfolio, and start bidding on projects that match your expertise. Our AI matching system will also recommend relevant opportunities.",
  },
  {
    question: "How does the payment system work?",
    answer:
      "We use a secure escrow system. Funds are deposited by clients and held safely until project milestones are completed to satisfaction. Payments are processed within 24 hours of approval.",
  },
  {
    question: "What types of projects are available?",
    answer:
      "We have thousands of projects across 100+ categories including web development, design, writing, marketing, data science, mobile apps, and much more. From small tasks to large enterprise projects.",
  },
  {
    question: "How do I ensure quality work?",
    answer:
      "All freelancers go through a verification process. We have a comprehensive rating system, work samples, client reviews, and a satisfaction guarantee. Plus 24/7 support to resolve any issues.",
  },
  {
    question: "Are there any fees?",
    answer:
      "It's free to join and browse projects. We charge a small service fee only when you successfully complete projects. Transparent pricing with no hidden costs.",
  },
];

// Memoized components for performance
const CategoryCard = memo(
  ({ category, index }: { category: any; index: number }) => {
    const IconComponent = category.icon;
    return (
      <Link
        to="/browse-jobs"
        className={`group relative ${category.bgColor} border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden`}
        style={{
          animationDelay: `${index * 100}ms`,
          animation: "fadeInUp 0.6s ease-out forwards",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${category.color.split(" ")[1]}, ${category.color.split(" ")[3]})`,
          }}
        ></div>
        <div className="relative z-10">
          <div
            className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <IconComponent className={`w-6 h-6 ${category.textColor}`} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            {category.jobs.toLocaleString()} active jobs
          </p>
          <div className="flex items-center text-brand-green text-sm font-medium">
            Browse Jobs{" "}
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    );
  },
);

const FeatureCard = memo(
  ({
    feature,
    index,
    variant = "light",
  }: {
    feature: any;
    index: number;
    variant?: "light" | "dark";
  }) => {
    const IconComponent = feature.icon;
    const isDark = variant === "dark";

    return (
      <div
        className={`group text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
          isDark
            ? "bg-white bg-opacity-10 backdrop-blur-sm"
            : "bg-white shadow-lg hover:shadow-xl"
        }`}
        style={{
          animationDelay: `${index * 150}ms`,
          animation: "fadeInUp 0.8s ease-out forwards",
        }}
      >
        <div
          className={`relative w-16 h-16 mx-auto mb-4 ${
            isDark ? "bg-white bg-opacity-20" : feature.bgColor
          } rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <IconComponent
            className={`w-8 h-8 ${isDark ? "text-white" : feature.color}`}
          />
          {feature.stat && (
            <div className="absolute -top-2 -right-2 bg-brand-green text-white text-xs font-bold px-2 py-1 rounded-full">
              {feature.stat}
            </div>
          )}
        </div>
        <h3
          className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {feature.title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${isDark ? "text-green-100" : "text-gray-600"}`}
        >
          {feature.description}
        </p>
      </div>
    );
  },
);

const FAQItem = memo(
  ({
    faq,
    index,
    isOpen,
    onToggle,
  }: {
    faq: any;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
  }) => (
    <div className="mb-4 group">
      <button
        onClick={onToggle}
        className="w-full bg-white rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300 text-left border border-gray-100"
        aria-expanded={isOpen}
        aria-controls={`faq-${index}`}
      >
        <span className="font-semibold text-gray-900 pr-4 group-hover:text-brand-green transition-colors">
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-brand-green-light flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-brand-green" />
          ) : (
            <Plus className="w-4 h-4 text-brand-green" />
          )}
        </div>
      </button>
      <div
        id={`faq-${index}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white px-6 pb-6 pt-2 border-t border-gray-50">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  ),
);

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Performance optimization: memoize FAQ toggle function
  const toggleFaq = useMemo(
    () => (index: number) => {
      setOpenFaq(openFaq === index ? null : index);
    },
    [openFaq],
  );

  // Loading animation effect
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const memoizedCategories = useMemo(() => categories, []);
  const memoizedEmployerFeatures = useMemo(() => employerFeatures, []);
  const memoizedWorkerFeatures = useMemo(() => workerFeatures, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <Suspense
        fallback={
          <div className="h-20 bg-white border-b flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-green"></div>
          </div>
        }
      >
        <PublicHeader />
      </Suspense>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-green-light via-green-50 to-blue-50 py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand-green opacity-10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute top-1/2 -left-8 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div
              className={`space-y-6 lg:space-y-8 ${isLoaded ? "animate-slideInFromLeft" : "opacity-0"}`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-green bg-opacity-10 text-brand-green text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  #1 Freelance Platform
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Find Top <span className="text-brand-green">Talent</span> &
                  <br className="hidden sm:block" />
                  Amazing <span className="text-brand-green">Jobs</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Connect with talented freelancers and find the perfect
                  projects. Whether you're hiring or seeking work, we make
                  success simple.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/browse-jobs"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white rounded-xl text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl text-lg font-semibold hover:border-brand-green hover:text-brand-green transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <IconComponent className="w-5 h-5 text-brand-green mr-2" />
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.number}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Main hero image/graphic */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-green-600 rounded-3xl transform rotate-6 shadow-2xl animate-float"></div>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl transform -rotate-6 shadow-2xl opacity-80"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="relative z-10 w-full h-full bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-brand-green rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                      <Briefcase className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      Find Your
                    </div>
                    <div className="text-2xl font-bold text-brand-green">
                      Perfect Match
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg animate-float"
                  style={{ animationDelay: "3s" }}
                >
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories/Deal Marketplace */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Job Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover thousands of opportunities across diverse skill sets and
              industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {memoizedCategories.map((category, index) => (
              <CategoryCard
                key={category.name}
                category={category}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/browse-jobs"
              className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              View All Categories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              For Employers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access global talent, manage projects effortlessly, and scale your
              business with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {memoizedEmployerFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/post-job"
              className="inline-flex items-center px-8 py-4 bg-brand-green text-white rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Post Your First Job
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Workers */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-green to-green-600 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              For Freelancers
            </h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Find high-quality projects, build your reputation, and grow your
              freelance career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {memoizedWorkerFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                variant="dark"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-green rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Freelancing Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of satisfied freelancers and clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-green-light to-blue-50 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 mb-6">
                  "ClickerPlus transformed my freelance career. The quality of
                  projects and clients is outstanding, and the payment system is
                  incredibly reliable."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">John Doe</div>
                    <div className="text-gray-600">Full-Stack Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openFaq === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-green to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg lg:text-xl text-green-100 mb-8">
              Join millions of freelancers and businesses who trust ClickerPlus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Sign Up Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/browse-jobs"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl text-lg font-semibold hover:bg-white hover:text-brand-green transition-all duration-300"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">ClickerPlus</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connecting talent with opportunity worldwide. Build your career
                or grow your business with us.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/press"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/browse-jobs"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Find Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/post-job"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Post Job
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dmca"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    DMCA
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2024 ClickerPlus. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">
                  Made with ❤️ for freelancers worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

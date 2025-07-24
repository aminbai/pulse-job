import { Link } from "react-router-dom";
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
} from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Web Development", jobs: 150, icon: Code },
  { name: "Graphic Design", jobs: 89, icon: Palette },
  { name: "Mobile Apps", jobs: 65, icon: Smartphone },
  { name: "Digital Marketing", jobs: 120, icon: Megaphone },
  { name: "Writing & Content", jobs: 95, icon: FileText },
  { name: "Video & Animation", jobs: 45, icon: Briefcase },
];

const employerFeatures = [
  {
    icon: Users,
    title: "Access to Talent Pool",
    description: "Connect with skilled freelancers from around the world",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and reliable payment system with buyer protection",
  },
  {
    icon: Search,
    title: "Easy Job Posting",
    description: "Post your job in minutes with our simple interface",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Get quality work with our satisfaction guarantee",
  },
];

const workerFeatures = [
  {
    icon: Briefcase,
    title: "Find Great Projects",
    description: "Discover projects that match your skills and interests",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work when you want, where you want",
  },
  {
    icon: Zap,
    title: "Fast Payments",
    description: "Get paid quickly after completing your work",
  },
  {
    icon: Award,
    title: "Build Reputation",
    description: "Earn reviews and build your professional reputation",
  },
];

const faqs = [
  {
    question: "How do I get started as a freelancer?",
    answer:
      "Simply sign up, create your profile, showcase your skills, and start bidding on projects that match your expertise.",
  },
  {
    question: "How does the payment system work?",
    answer:
      "We use a secure escrow system. Funds are held safely until the project is completed to satisfaction.",
  },
  {
    question: "What types of projects are available?",
    answer:
      "We have projects in web development, design, writing, marketing, and many other categories.",
  },
  {
    question: "How do I ensure quality work?",
    answer:
      "All freelancers are vetted, and we have a rating system plus satisfaction guarantee for all projects.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-text-dark">
              GigClickers
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/jobs"
                className="text-text-dark hover:text-brand-green transition-colors"
              >
                Browse Jobs
              </Link>
              <Link
                to="/job-board"
                className="text-text-dark hover:text-brand-green transition-colors"
              >
                Job Board
              </Link>
              <Link
                to="/faq"
                className="text-text-dark hover:text-brand-green transition-colors"
              >
                FAQ
              </Link>
              <Link
                to="/share-earn"
                className="text-text-dark hover:text-brand-green transition-colors"
              >
                Share & Earn
              </Link>
              <Link
                to="/articles"
                className="text-text-dark hover:text-brand-green transition-colors"
              >
                Article
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 border border-brand-green text-brand-green rounded hover:bg-brand-green hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-brand-green text-white rounded hover:bg-green-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-green-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-text-dark mb-6 leading-tight">
                Location Of Small And Large Jobs
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Connect with talented freelancers and find the perfect projects.
                Whether you're looking to hire or seeking work, we make it easy
                to get things done.
              </p>
              <Link
                to="/signup"
                className="inline-block bg-brand-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-brand-green to-green-600 rounded-full flex items-center justify-center">
                <div className="text-white text-center">
                  <Briefcase className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-lg font-semibold">
                    Find Your Perfect Match
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Marketplace */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-dark mb-16">
            Deal Marketplace
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={index}
                  to="/jobs"
                  className="bg-white border border-brand-green-light rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer block"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-brand-green mr-3" />
                    <h3 className="text-xl font-semibold text-text-dark">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {category.jobs} jobs available
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Employers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-dark mb-16">
            For Employers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employerFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-brand-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
        </div>
      </section>

      {/* Workers Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">For Workers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workerFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-green-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Share & Earn Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <div className="text-white text-center">
                  <Award className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Celebrate Success</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-text-dark mb-6">
                Share & Earn
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">
                    Invite friends and earn commission on their first project
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">
                    Get bonus credits for successful referrals
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">
                    Build your network and grow together
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">
                    Track your earnings in real-time
                  </span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="inline-block bg-brand-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-green-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-dark mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full bg-white rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <span className="text-left font-semibold text-text-dark">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-brand-green" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-green" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="bg-white rounded-b-lg p-6 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">GigClickers</h3>
              <p className="text-gray-300 mb-4">
                Connecting talent with opportunity worldwide.
              </p>
              <p className="text-sm text-gray-400">
                &copy; 2024 GigClickers. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2">
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
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Agreement</h4>
              <ul className="space-y-2">
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

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

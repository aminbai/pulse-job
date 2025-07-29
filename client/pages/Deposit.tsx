import { Link } from "react-router-dom";
import { useState } from "react";
import {
  CreditCard,
  Wallet,
  Building2,
  Smartphone,
  DollarSign,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const paymentMethods = [
  {
    id: "manual-deposit",
    name: "Manual Deposit",
    icon: CreditCard,
    description: "Bank transfer or manual payment",
    color: "bg-gray-100 border-gray-300",
    iconColor: "text-gray-600",
  },
  {
    id: "payeer",
    name: "Payeer",
    icon: Wallet,
    description: "Digital wallet payment",
    color: "bg-blue-50 border-blue-300",
    iconColor: "text-blue-600",
  },
  {
    id: "nagad",
    name: "Nagad Agent Cashout",
    icon: Smartphone,
    description: "Mobile payment via Nagad",
    color: "bg-orange-50 border-orange-300",
    iconColor: "text-orange-600",
  },
  {
    id: "bkash",
    name: "Bkash Agent Cashout",
    icon: Smartphone,
    description: "Mobile payment via bKash",
    color: "bg-pink-50 border-pink-300",
    iconColor: "text-pink-600",
  },
  {
    id: "binance",
    name: "Binance",
    icon: DollarSign,
    description: "Cryptocurrency payment",
    color: "bg-yellow-50 border-yellow-300",
    iconColor: "text-yellow-600",
  },
  {
    id: "eastern-bank",
    name: "Eastern Bank PLC",
    icon: Building2,
    description: "Bank payment gateway",
    color: "bg-green-50 border-green-300",
    iconColor: "text-green-600",
  },
];

export default function Deposit() {
  const [activeTab, setActiveTab] = useState("deposit");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-brand-green text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-bold hover:text-green-100 transition-colors"
            >
              ClickerPlus
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/find-jobs"
                className="hover:text-green-100 transition-colors"
              >
                Find Jobs
              </Link>
              <Link
                to="/dashboard"
                className="hover:text-green-100 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/job-board"
                className="hover:text-green-100 transition-colors"
              >
                Job Board
              </Link>
              <Link
                to="/my-work"
                className="hover:text-green-100 transition-colors"
              >
                My Work
              </Link>
              <Link
                to="/post-job"
                className="bg-white text-brand-green px-4 py-2 rounded font-medium hover:bg-green-50 transition-colors"
              >
                POST JOB
              </Link>
            </nav>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-green-600 py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between text-sm">
              <span>Pending: $0.000</span>
              <span>Earned: $0.000</span>
              <span>Deposit: $1.909</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab("deposit")}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === "deposit"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Deposit
            </button>
            <span className="px-2 py-2 text-gray-400">|</span>
            <Link
              to="/deposit-history"
              className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Transaction History
            </Link>
          </div>
        </div>

        {/* Manual Deposit Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Manual Deposit
          </h2>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-gray-300 transition-colors cursor-pointer">
            <div className="flex items-center justify-center flex-col">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Manual Deposit</h3>
            </div>
          </div>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {paymentMethods.slice(1).map((method) => {
            const IconComponent = method.icon;
            return (
              <div
                key={method.id}
                className={`${method.color} rounded-lg border-2 p-6 hover:shadow-md transition-all cursor-pointer`}
              >
                <div className="flex items-center justify-center flex-col text-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className={`w-8 h-8 ${method.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {method.name}
                  </h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-green-light text-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-green">
                ClickerPlus
              </h3>
              <p className="text-sm mb-4">
                Connecting talent with opportunity worldwide.
              </p>
              <p className="text-xs text-gray-600">
                &copy; 2025 clickerplus.com. All Rights Reserved.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">About ClickerPlus</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-brand-green transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-600 hover:text-brand-green transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-600 hover:text-brand-green transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Agreement</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/microjob"
                    className="text-gray-600 hover:text-brand-green transition-colors"
                  >
                    Microjob Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    to="/deal"
                    className="text-gray-600 hover:text-brand-green transition-colors"
                  >
                    Deal Marketplace
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Social Media</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-green transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-green transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-green transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

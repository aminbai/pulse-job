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
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

const withdrawalMethods = [
  {
    id: "nagad",
    name: "Nagad Agent",
    icon: Smartphone,
    amount: "0.000",
    color: "bg-orange-50 border-orange-300",
    iconColor: "text-orange-600",
  },
  {
    id: "binance",
    name: "Binance",
    icon: DollarSign,
    amount: "0.000",
    color: "bg-yellow-50 border-yellow-300",
    iconColor: "text-yellow-600",
  },
  {
    id: "payeer",
    name: "Payeer",
    icon: Wallet,
    amount: "0.000",
    color: "bg-blue-50 border-blue-300",
    iconColor: "text-blue-600",
  },
  {
    id: "bkash",
    name: "bKash",
    icon: Smartphone,
    amount: "0.000",
    color: "bg-pink-50 border-pink-300",
    iconColor: "text-pink-600",
  },
];

const transactionHistory = [
  // Empty for now - matches "0 Result" in the image
];

export default function MyWork() {
  const [activeTab, setActiveTab] = useState("withdraw");

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
                to="/my-post"
                className="hover:text-green-100 transition-colors"
              >
                My Post
              </Link>
              <Link
                to="/my-work"
                className="hover:text-green-100 transition-colors bg-green-600 px-3 py-1 rounded font-medium"
              >
                My Work
              </Link>
              <Link
                to="/browse-deal"
                className="hover:text-green-100 transition-colors"
              >
                Browse Deal
              </Link>
              <Link
                to="/deal-history"
                className="hover:text-green-100 transition-colors"
              >
                Deal History
              </Link>
              <Link
                to="/deposit"
                className="hover:text-green-100 transition-colors"
              >
                Deposit
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
              onClick={() => setActiveTab("withdraw")}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === "withdraw"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Withdraw
            </button>
            <span className="px-2 py-2 text-gray-400">|</span>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === "history"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Transaction History
            </button>
          </div>
        </div>

        {/* Withdraw Tab */}
        {activeTab === "withdraw" && (
          <div className="space-y-8">
            {/* Warning Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  Withdrawal will be confirmed within 96 business hours. Minimum
                  withdrawal is $8 and withdrawal fee 20%.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Withdrawal Methods */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-6">
                  {withdrawalMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`${method.color} rounded-lg border-2 p-6 hover:shadow-md transition-all cursor-pointer`}
                      >
                        <div className="flex items-center justify-center flex-col text-center">
                          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                            <IconComponent
                              className={`w-8 h-8 ${method.iconColor}`}
                            />
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {method.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="mr-1">Withdraw</span>
                            <span className="font-medium">{method.amount}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Earning Balance */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Earning Balance
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Name
                      </label>
                      <p className="font-medium text-gray-900">মনোয়ার আহসান</p>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Balance
                      </label>
                      <p className="font-bold text-lg text-gray-900">$0.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Transaction History Tab */}
        {activeTab === "history" && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Transaction History
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {transactionHistory.length} Result
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Method
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactionHistory.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-12 text-center text-gray-500"
                      >
                        No transactions found
                      </td>
                    </tr>
                  )}
                  {transactionHistory.map((transaction: any) => (
                    <tr
                      key={transaction.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          {transaction.status === "approved" && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                          {transaction.status === "rejected" && (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                          {transaction.status === "pending" && (
                            <Clock className="w-5 h-5 text-yellow-600" />
                          )}
                          <span
                            className={`font-medium capitalize ${
                              transaction.status === "approved"
                                ? "text-green-600"
                                : transaction.status === "rejected"
                                  ? "text-red-600"
                                  : "text-yellow-600"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        {transaction.amount}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {transaction.method}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {transaction.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden p-4 space-y-4">
              {transactionHistory.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No transactions found
                </div>
              ) : (
                transactionHistory.map((transaction: any) => (
                  <div
                    key={transaction.id}
                    className="bg-gray-50 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {transaction.status === "approved" && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                        {transaction.status === "rejected" && (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        {transaction.status === "pending" && (
                          <Clock className="w-5 h-5 text-yellow-600" />
                        )}
                        <span
                          className={`font-medium capitalize ${
                            transaction.status === "approved"
                              ? "text-green-600"
                              : transaction.status === "rejected"
                                ? "text-red-600"
                                : "text-yellow-600"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {transaction.amount}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{transaction.method}</span>
                      <span>{transaction.date}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
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

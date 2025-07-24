import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "Navigating Deposits and Withdrawals on GigClickers.com",
      category: "Deposit and withdrawal",
      date: "Feb 18, 2024",
      image: "/placeholder.svg",
      description:
        "Learn how to efficiently manage your finances on our platform with step-by-step guides for deposits and withdrawals.",
    },
    {
      id: 2,
      title:
        "Seamless Sign-Up and Login: A Guide to Getting Started on GigClickers.com",
      category: "Sign up and login",
      date: "Feb 18, 2024",
      image: "/placeholder.svg",
      description:
        "Complete guide to creating your account and accessing all the features GigClickers has to offer.",
    },
    {
      id: 3,
      title: "Maximize Your Earnings with GigClickers.com Referral Program",
      category: "Referral program",
      date: "Feb 18, 2024",
      image: "/placeholder.svg",
      description:
        "Discover how to earn more by referring friends and building your network on GigClickers.",
    },
    {
      id: 4,
      title: "A Step-by-Step Guide to Posting a Job on GigClickers.com",
      category: "Posting Job",
      date: "Feb 18, 2024",
      image: "/placeholder.svg",
      description:
        "Master the art of creating compelling job posts that attract the best freelancers.",
    },
    {
      id: 5,
      title: "Finding the Perfect Job on GigClickers.com",
      category: "Find Job",
      date: "Feb 18, 2024",
      image: "/placeholder.svg",
      description:
        "Tips and strategies for freelancers to find and secure their ideal projects.",
    },
    {
      id: 6,
      title: "Taskburg.com: Revolutionizing the Microjob Landscape",
      category: "partner website",
      date: "Mar 04, 2025",
      image: "/placeholder.svg",
      description:
        "Explore our partner platform and discover new opportunities in the microjob marketplace.",
    },
    {
      id: 7,
      title:
        "TaskBurg.com: A Reliable Microjob Platform for Earning and Hiring",
      category: "partner website",
      date: "Mar 15, 2025",
      image: "/placeholder.svg",
      description:
        "Learn about TaskBurg's features and how it complements the GigClickers ecosystem.",
    },
    {
      id: 8,
      title: "A Revolutionary Microjob Platform for Freelancing",
      category: "partner website",
      date: "Mar 15, 2025",
      image: "/placeholder.svg",
      description:
        "The future of freelancing and microjobs in the digital economy.",
    },
    {
      id: 9,
      title: "Taskburg Withdrawal",
      category: "taskburg.com",
      date: "Mar 15, 2025",
      image: "/placeholder.svg",
      description:
        "Step-by-step guide to withdrawing your earnings from Taskburg platform.",
    },
    {
      id: 10,
      title: "Taskburg.com",
      category: "taskburg",
      date: "Mar 15, 2025",
      image: "/placeholder.svg",
      description:
        "Everything you need to know about our partner platform Taskburg.com",
    },
  ];

  const categories = [
    "Deposit and withdrawal",
    "Sign up and login",
    "Referral program",
    "Posting Job",
    "Find Job",
    "partner website",
    "taskburg.com",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Balance Bar */}
      <div className="bg-green-100 py-2 px-6">
        <div className="max-w-6xl mx-auto flex justify-between text-sm">
          <span>
            Pending:{" "}
            <span className="text-green-600 font-semibold">$0.000</span>
          </span>
          <span>
            Earned: <span className="text-green-600 font-semibold">$0.000</span>
          </span>
          <span>
            Deposit:{" "}
            <span className="text-green-600 font-semibold">-$1.909</span>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Article Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Article</h1>
            <div className="flex space-x-4 text-sm text-gray-600">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={`#${category.replace(/\s+/g, "-").toLowerCase()}`}
                  className="hover:text-brand-green"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Latest Articles Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Latest Article
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">G</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <span className="text-xs text-blue-600 font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3">
                      {article.description}
                    </p>
                    <div className="text-xs text-gray-500">{article.date}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Popular Categories
              </h3>
              <div className="space-y-2">
                {categories.slice(0, 5).map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-200"
                  >
                    <span className="text-gray-700">{category}</span>
                    <span className="text-sm text-gray-500">
                      {Math.floor(Math.random() * 20) + 5} articles
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <a
                  href="/help"
                  className="block text-brand-green hover:underline"
                >
                  Help Center
                </a>
                <a
                  href="/tutorials"
                  className="block text-brand-green hover:underline"
                >
                  Video Tutorials
                </a>
                <a
                  href="/faq"
                  className="block text-brand-green hover:underline"
                >
                  Frequently Asked Questions
                </a>
                <a
                  href="/contact"
                  className="block text-brand-green hover:underline"
                >
                  Contact Support
                </a>
                <a
                  href="/community"
                  className="block text-brand-green hover:underline"
                >
                  Community Forum
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-100 py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-brand-green">
                GigClickers
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  About GigClickers
                </h4>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    <a href="/about" className="hover:text-brand-green">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-brand-green">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-brand-green">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Agreement</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    <a
                      href="/microjob-marketplace"
                      className="hover:text-brand-green"
                    >
                      Microjob Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      href="/deal-marketplace"
                      className="hover:text-brand-green"
                    >
                      Deal Marketplace
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Social Media
                </h4>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-xs">
                    f
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs">
                    in
                  </div>
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
                    yt
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-green-200 text-center text-sm text-gray-600">
            © 2025 gigclickers.com. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

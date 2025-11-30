import { useState } from "react";
import {
  Search,
  Plus,
  Minus,
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  Star,
  Shield,
  CreditCard,
  Users,
  Briefcase,
  Settings,
  FileText,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import PublicHeader from "@/components/PublicHeader";

const faqCategories = [
  {
    id: "getting-started",
    name: "Getting Started",
    icon: Users,
    color: "bg-blue-100 text-blue-800",
    count: 8
  },
  {
    id: "payments",
    name: "Payments & Billing",
    icon: CreditCard,
    color: "bg-green-100 text-green-800",
    count: 12
  },
  {
    id: "projects",
    name: "Projects & Work",
    icon: Briefcase,
    color: "bg-purple-100 text-purple-800",
    count: 15
  },
  {
    id: "account",
    name: "Account & Profile",
    icon: Settings,
    color: "bg-orange-100 text-orange-800",
    count: 10
  },
  {
    id: "safety",
    name: "Safety & Security",
    icon: Shield,
    color: "bg-red-100 text-red-800",
    count: 7
  },
  {
    id: "policies",
    name: "Policies & Legal",
    icon: FileText,
    color: "bg-gray-100 text-gray-800",
    count: 6
  }
];

const faqData = [
  // Getting Started
  {
    id: 1,
    category: "getting-started",
    question: "How do I get started on ClickerPlus?",
    answer: "Getting started is easy! Simply sign up for a free account, complete your profile with your skills and experience, and start browsing projects or posting jobs. For freelancers, showcase your portfolio and set your rates. For clients, describe your project needs clearly to attract the best talent.",
    popular: true
  },
  {
    id: 2,
    category: "getting-started", 
    question: "What's the difference between freelancer and client accounts?",
    answer: "Freelancer accounts are for service providers who want to find work and offer their skills. Client accounts are for businesses or individuals who need to hire freelancers. You can have both roles on the same account - many users both offer services and hire others.",
    popular: false
  },
  {
    id: 3,
    category: "getting-started",
    question: "How do I create an effective profile?",
    answer: "An effective profile includes: a professional photo, detailed description of your skills, portfolio samples, clear pricing, client testimonials, and relevant certifications. Be specific about your expertise and what makes you unique. Regular updates and active engagement also improve your visibility.",
    popular: true
  },
  {
    id: 4,
    category: "getting-started",
    question: "Is ClickerPlus free to use?",
    answer: "Yes, it's free to create an account and browse projects. We charge a small service fee only when you successfully complete transactions. For freelancers, we take 10% of project earnings. For clients, there's a 3% payment processing fee. No hidden costs or monthly subscriptions.",
    popular: true
  },

  // Payments & Billing
  {
    id: 5,
    category: "payments",
    question: "How do payments work on ClickerPlus?",
    answer: "We use a secure escrow system. Clients deposit funds when hiring, which are held safely until project milestones are completed. Freelancers get paid when clients approve the work. This protects both parties and ensures secure transactions.",
    popular: true
  },
  {
    id: 6,
    category: "payments",
    question: "When do I get paid as a freelancer?",
    answer: "Payments are released when clients approve your work or automatically after 14 days if no disputes are raised. Once released, funds appear in your ClickerPlus balance within 24 hours. You can then withdraw to your preferred payment method.",
    popular: true
  },
  {
    id: 7,
    category: "payments",
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, bank transfers, and various regional payment methods including bKash, Nagad, and mobile banking. For withdrawals, options include bank transfer, PayPal, Payeer, and cryptocurrency depending on your location.",
    popular: false
  },
  {
    id: 8,
    category: "payments",
    question: "Are there any fees for using ClickerPlus?",
    answer: "Service fees are: 10% for freelancers on completed projects, 3% payment processing for clients. Withdrawal fees vary by method (typically $1-3). No membership fees, listing fees, or hidden charges. You only pay when you successfully complete transactions.",
    popular: true
  },
  {
    id: 9,
    category: "payments",
    question: "What if there's a payment dispute?",
    answer: "We have a structured dispute resolution process: 1) Direct communication between parties, 2) Mediation by our support team, 3) Review of project deliverables and communications, 4) Fair resolution based on evidence. Our team is available 24/7 to help resolve issues.",
    popular: false
  },

  // Projects & Work
  {
    id: 10,
    category: "projects",
    question: "How do I find the right freelancer for my project?",
    answer: "Use our advanced search and filtering tools to find freelancers by skills, experience, location, and budget. Review portfolios, client feedback, and ratings. Post a detailed job description to attract quality proposals. Consider conducting interviews before hiring.",
    popular: true
  },
  {
    id: 11,
    category: "projects",
    question: "How do I write a winning project proposal?",
    answer: "A winning proposal should: address the client's specific needs, showcase relevant experience, provide a clear timeline and budget breakdown, include portfolio samples, ask clarifying questions, and demonstrate understanding of the project requirements. Personalize each proposal.",
    popular: true
  },
  {
    id: 12,
    category: "projects",
    question: "What happens if I'm not satisfied with the work?",
    answer: "If work doesn't meet agreed specifications, first communicate with the freelancer to request revisions. If issues persist, contact our support team. We'll review the project requirements, deliverables, and communications to mediate a fair resolution, including potential refunds if warranted.",
    popular: false
  },
  {
    id: 13,
    category: "projects",
    question: "Can I work with someone outside the platform?",
    answer: "We strongly recommend keeping all work and payments within ClickerPlus for your protection. Working outside the platform means losing our payment protection, dispute resolution, and support services. It also violates our Terms of Service and may result in account suspension.",
    popular: false
  },

  // Account & Profile
  {
    id: 14,
    category: "account",
    question: "How do I verify my account?",
    answer: "Account verification involves confirming your email, phone number, and identity. Upload a government-issued ID and proof of address. Verification typically takes 24-48 hours and increases your credibility with clients. Verified accounts get priority in search results and higher trust ratings.",
    popular: true
  },
  {
    id: 15,
    category: "account",
    question: "Can I change my username or account type?",
    answer: "Usernames can be changed once every 30 days from your account settings. You can switch between freelancer and client modes anytime, or use both simultaneously. However, some profile elements like completion history and ratings are maintained separately for each role.",
    popular: false
  },
  {
    id: 16,
    category: "account",
    question: "How do I delete my account?",
    answer: "To delete your account, go to Settings → Account → Delete Account. Complete any ongoing projects first and withdraw your balance. Account deletion is permanent and cannot be undone. Some information may be retained for legal compliance as outlined in our Privacy Policy.",
    popular: false
  },

  // Safety & Security
  {
    id: 17,
    category: "safety",
    question: "Is ClickerPlus safe and secure?",
    answer: "Yes, we use industry-standard security measures including 256-bit SSL encryption, secure payment processing, identity verification, and fraud detection systems. Our platform is monitored 24/7, and we have strict policies against scams and fraudulent activity.",
    popular: true
  },
  {
    id: 18,
    category: "safety",
    question: "How do I avoid scams on the platform?",
    answer: "Red flags include: requests for personal information, payments outside the platform, too-good-to-be-true offers, urgent pressure tactics, and poor communication. Always use our secure messaging and payment systems. Report suspicious activity immediately.",
    popular: true
  },
  {
    id: 19,
    category: "safety",
    question: "What should I do if I encounter suspicious activity?",
    answer: "Report it immediately using the 'Report' button on profiles or projects, or contact our security team at security@clickerplus.com. Provide details about the suspicious behavior, screenshots if possible, and any relevant communication. We investigate all reports promptly.",
    popular: false
  },

  // Policies & Legal  
  {
    id: 20,
    category: "policies",
    question: "What are the platform's Terms of Service?",
    answer: "Our Terms of Service outline user rights and responsibilities, platform rules, payment terms, intellectual property policies, and dispute resolution procedures. All users must agree to these terms when creating an account. You can find the full terms at clickerplus.com/terms.",
    popular: false
  },
  {
    id: 21,
    category: "policies",
    question: "How do you handle intellectual property?", 
    answer: "We respect intellectual property rights and comply with DMCA regulations. Clients typically own work they commission and pay for, while freelancers retain rights to their general methods and expertise. Specific arrangements should be clarified in project agreements.",
    popular: false
  },
  {
    id: 22,
    category: "policies",
    question: "What is your refund policy?",
    answer: "Refunds are handled case-by-case based on project agreements and deliverable quality. If work doesn't meet specifications despite good faith efforts, partial or full refunds may be issued. We aim for fair resolutions that consider both parties' interests and the work completed.",
    popular: false
  }
];

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant help from our support team",
    action: "Start Chat",
    availability: "24/7 Available"
  },
  {
    icon: Mail,
    title: "Email Support", 
    description: "Send us a detailed message",
    action: "Send Email",
    availability: "Response within 2 hours"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a support agent",
    action: "Call Now",
    availability: "Mon-Fri 9AM-6PM"
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFaqs = faqData.filter(faq => faq.popular);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="bg-brand-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Find answers to common questions about using ClickerPlus
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-4 text-gray-900 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Browse by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === "all" 
                        ? "bg-brand-green text-white" 
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>All Questions</span>
                      <span className="text-sm">{faqData.length}</span>
                    </div>
                  </button>
                  
                  {faqCategories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id 
                            ? "bg-brand-green text-white" 
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <IconComponent className="w-4 h-4 mr-2" />
                            <span className="text-sm">{category.name}</span>
                          </div>
                          <span className="text-xs">{category.count}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Support Options */}
            <Card>
              <CardHeader>
                <CardTitle>Need More Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-brand-green-light rounded-lg flex items-center justify-center mr-3">
                            <IconComponent className="w-5 h-5 text-brand-green" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                            <p className="text-xs text-green-600 mb-3">{option.availability}</p>
                            <Button size="sm" variant="outline" className="w-full">
                              {option.action}
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Popular FAQs */}
            {selectedCategory === "all" && !searchTerm && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-yellow-500" />
                  Most Popular Questions
                </h2>
                <div className="space-y-4">
                  {popularFaqs.slice(0, 5).map((faq) => (
                    <Card key={faq.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center">
                            <Badge className="bg-yellow-100 text-yellow-800 mr-3">Popular</Badge>
                            <span className="font-semibold text-gray-900">{faq.question}</span>
                          </div>
                          {openFaq === faq.id ? (
                            <Minus className="w-5 h-5 text-brand-green flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-brand-green flex-shrink-0" />
                          )}
                        </button>
                        {openFaq === faq.id && (
                          <div className="px-6 pb-6 border-t border-gray-100">
                            <p className="text-gray-600 pt-4 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Search Results / Category Results */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {searchTerm ? "Search Results" : 
                   selectedCategory === "all" ? "All Questions" :
                   faqCategories.find(cat => cat.id === selectedCategory)?.name}
                </h2>
                <span className="text-gray-600">{filteredFaqs.length} questions found</span>
              </div>

              {filteredFaqs.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your search terms or browse different categories
                    </p>
                    <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                      Show All Questions
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map((faq) => (
                    <Card key={faq.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center flex-1">
                            {faq.popular && (
                              <Badge className="bg-yellow-100 text-yellow-800 mr-3">Popular</Badge>
                            )}
                            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                          </div>
                          {openFaq === faq.id ? (
                            <Minus className="w-5 h-5 text-brand-green flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-brand-green flex-shrink-0" />
                          )}
                        </button>
                        {openFaq === faq.id && (
                          <div className="px-6 pb-6 border-t border-gray-100">
                            <p className="text-gray-600 pt-4 leading-relaxed">{faq.answer}</p>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                              <span className="text-sm text-gray-500">Was this helpful?</span>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="ghost" className="text-green-600 hover:bg-green-50">
                                  👍 Yes
                                </Button>
                                <Button size="sm" variant="ghost" className="text-red-600 hover:bg-red-50">
                                  👎 No
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </section>

            {/* Still Need Help */}
            <Card className="bg-gradient-to-r from-brand-green to-green-600 text-white">
              <CardContent className="p-8 text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Still Need Help?</h3>
                <p className="mb-6 opacity-90">
                  Can't find what you're looking for? Our support team is here to help you 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-green">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start Live Chat
                  </Button>
                  <Button className="bg-white text-brand-green hover:bg-gray-100">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ClickerPlus</h3>
              <p className="text-gray-300 mb-4">
                Your questions answered. Your success supported.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/tutorials" className="text-gray-300 hover:text-white transition-colors">Tutorials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="/safety" className="text-gray-300 hover:text-white transition-colors">Safety Tips</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/community" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  support@clickerplus.com
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +880 1234-567890
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  24/7 Support Available
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 ClickerPlus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

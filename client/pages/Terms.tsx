import { useState } from "react";
import {
  Calendar,
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle,
  Scale,
  Users,
  CreditCard,
  Lock,
  Mail,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PublicHeader from "@/components/PublicHeader";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms", icon: CheckCircle },
  { id: "description", title: "2. Description of Service", icon: FileText },
  { id: "registration", title: "3. User Registration", icon: Users },
  { id: "conduct", title: "4. User Conduct", icon: Shield },
  { id: "payments", title: "5. Payments and Fees", icon: CreditCard },
  { id: "intellectual", title: "6. Intellectual Property", icon: Lock },
  { id: "privacy", title: "7. Privacy Policy", icon: Shield },
  { id: "disputes", title: "8. Dispute Resolution", icon: Scale },
  { id: "termination", title: "9. Termination", icon: AlertTriangle },
  { id: "limitation", title: "10. Limitation of Liability", icon: AlertTriangle },
  { id: "governing", title: "11. Governing Law", icon: Scale },
  { id: "contact", title: "12. Contact Information", icon: Mail },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="bg-brand-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-6">
              Please read these terms carefully before using GigClickers
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Last Updated: January 15, 2024</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                <span>Version 2.1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`flex items-center p-2 rounded text-sm transition-colors ${
                          activeSection === section.id
                            ? 'bg-brand-green text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-xs">{section.title}</span>
                      </a>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Introduction */}
              <Card>
                <CardContent className="p-8">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to GigClickers</h2>
                    <p className="text-gray-700 mb-4">
                      These Terms of Service ("Terms") govern your use of the GigClickers website and services 
                      operated by GigClickers Ltd. ("we", "us", "our"). By accessing or using our service, 
                      you agree to be bound by these Terms.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-yellow-800">Important Notice</h3>
                          <p className="text-sm text-yellow-700 mt-1">
                            If you do not agree to these terms, please do not use our services. 
                            These terms may be updated from time to time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 1: Acceptance of Terms */}
              <Card id="acceptance">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-brand-green" />
                    1. Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    By accessing and using GigClickers, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, 
                    please do not use this service.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>These Terms constitute a legally binding agreement between you and GigClickers</li>
                    <li>You must be at least 18 years old to use our services</li>
                    <li>You represent that you have the legal capacity to enter into these Terms</li>
                    <li>Your continued use of the service constitutes acceptance of any updates to these Terms</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section 2: Description of Service */}
              <Card id="description">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-brand-green" />
                    2. Description of Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    GigClickers is an online marketplace that connects freelancers with clients seeking 
                    various services. Our platform facilitates:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Project posting and bidding systems</li>
                    <li>Secure payment processing and escrow services</li>
                    <li>Communication tools between clients and freelancers</li>
                    <li>Dispute resolution mechanisms</li>
                    <li>Rating and review systems</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of our service 
                    at any time with or without notice.
                  </p>
                </CardContent>
              </Card>

              {/* Section 3: User Registration */}
              <Card id="registration">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-brand-green" />
                    3. User Registration
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>To use GigClickers, you must register for an account. You agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and update your information to keep it accurate and current</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">Account Types</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• <strong>Freelancer Account:</strong> For service providers</li>
                      <li>• <strong>Client Account:</strong> For service buyers</li>
                      <li>• <strong>Hybrid Account:</strong> Can act as both freelancer and client</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: User Conduct */}
              <Card id="conduct">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-brand-green" />
                    4. User Conduct
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>You agree not to use GigClickers to:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Prohibited Activities</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Post false, misleading, or fraudulent content</li>
                        <li>Harass, abuse, or harm other users</li>
                        <li>Violate any applicable laws or regulations</li>
                        <li>Infringe on intellectual property rights</li>
                        <li>Attempt to circumvent platform fees</li>
                        <li>Create multiple accounts to manipulate reviews</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Required Conduct</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Communicate professionally and respectfully</li>
                        <li>Deliver services as described in project agreements</li>
                        <li>Respond to communications in a timely manner</li>
                        <li>Provide honest and accurate project descriptions</li>
                        <li>Respect confidentiality agreements</li>
                        <li>Report suspicious or fraudulent activity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5: Payments and Fees */}
              <Card id="payments">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-brand-green" />
                    5. Payments and Fees
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Service Fees</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Freelancer service fee: 10% of project value</li>
                        <li>• Client processing fee: 3% of payment amount</li>
                        <li>• Withdrawal fees vary by payment method</li>
                        <li>• Premium membership available for reduced fees</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Payment Terms</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Payments held in escrow until work completion</li>
                        <li>• Funds released upon client approval</li>
                        <li>• Automatic release after 14 days (if no disputes)</li>
                        <li>• Refunds processed according to our refund policy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                    <h4 className="font-medium text-green-800 mb-2">Payment Protection</h4>
                    <p className="text-sm text-green-700">
                      All payments are processed securely through our platform. We provide payment 
                      protection for both clients and freelancers when transactions occur through our system.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 6: Intellectual Property */}
              <Card id="intellectual">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-brand-green" />
                    6. Intellectual Property
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    Intellectual property rights for work completed through GigClickers are governed 
                    by the specific agreement between the client and freelancer. Generally:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Clients own the rights to work they commission and pay for</li>
                    <li>Freelancers retain rights to their general methods and expertise</li>
                    <li>Both parties must respect third-party intellectual property</li>
                    <li>GigClickers retains rights to our platform, logo, and proprietary technology</li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-medium text-amber-800 mb-2">Copyright Notice</h4>
                    <p className="text-sm text-amber-700">
                      All content on GigClickers, including text, graphics, logos, and software, 
                      is protected by copyright and other intellectual property laws.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 7: Privacy Policy */}
              <Card id="privacy">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-brand-green" />
                    7. Privacy Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    Your privacy is important to us. Our Privacy Policy explains how we collect, 
                    use, and protect your information when you use our services.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We collect information necessary to provide our services</li>
                    <li>We use industry-standard security measures to protect your data</li>
                    <li>We do not sell your personal information to third parties</li>
                    <li>You can request access to or deletion of your personal data</li>
                  </ul>
                  <div className="text-center">
                    <Button asChild variant="outline">
                      <a href="/privacy">Read Full Privacy Policy</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Section 8: Dispute Resolution */}
              <Card id="disputes">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="w-5 h-5 mr-2 text-brand-green" />
                    8. Dispute Resolution
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    We provide a structured process for resolving disputes between users:
                  </p>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Step 1: Direct Communication</h4>
                      <p className="text-sm text-gray-600">
                        Users should first attempt to resolve disputes through direct communication 
                        using our platform's messaging system.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Step 2: Mediation</h4>
                      <p className="text-sm text-gray-600">
                        If direct communication fails, either party can request mediation 
                        through our customer support team.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Step 3: Arbitration</h4>
                      <p className="text-sm text-gray-600">
                        For unresolved disputes involving significant amounts, binding arbitration 
                        may be required as specified in your service agreement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 9: Termination */}
              <Card id="termination">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-brand-green" />
                    9. Termination
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    Either you or GigClickers may terminate your account at any time:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">User-Initiated Termination</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>You may close your account at any time</li>
                        <li>Complete all ongoing projects before termination</li>
                        <li>Withdraw any remaining balance</li>
                        <li>Some data may be retained for legal compliance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">GigClickers-Initiated Termination</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Violation of Terms of Service</li>
                        <li>Fraudulent or suspicious activity</li>
                        <li>Repeated policy violations</li>
                        <li>Non-payment of fees</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 10: Limitation of Liability */}
              <Card id="limitation">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-brand-green" />
                    10. Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    GigClickers provides a platform for connecting freelancers and clients. 
                    Our liability is limited as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We are not responsible for the quality or delivery of services between users</li>
                    <li>We do not guarantee the accuracy of user-provided information</li>
                    <li>Our total liability is limited to the fees paid to us in the past 12 months</li>
                    <li>We are not liable for indirect, incidental, or consequential damages</li>
                  </ul>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-medium text-red-800 mb-2">Disclaimer</h4>
                    <p className="text-sm text-red-700">
                      The service is provided "as is" without warranty of any kind. 
                      Use at your own risk.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 11: Governing Law */}
              <Card id="governing">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="w-5 h-5 mr-2 text-brand-green" />
                    11. Governing Law
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    These Terms shall be interpreted and governed by the laws of Bangladesh, 
                    without regard to its conflict of law provisions.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Legal disputes will be resolved in the courts of Dhaka, Bangladesh</li>
                    <li>International users agree to Bangladesh jurisdiction for legal matters</li>
                    <li>Arbitration proceedings will follow Bangladesh Arbitration Act</li>
                    <li>Consumer protection laws of your country may also apply</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section 12: Contact Information */}
              <Card id="contact">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-brand-green" />
                    12. Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Legal Inquiries</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-gray-400" />
                          <span>legal@gigclickers.com</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-gray-400" />
                          <span>+880 1234-567890</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Mailing Address</h4>
                      <div className="text-sm text-gray-600">
                        <p>GigClickers Ltd.</p>
                        <p>123 Gulshan Avenue</p>
                        <p>Gulshan-2, Dhaka 1212</p>
                        <p>Bangladesh</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Updates Notice */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Terms Updates</h3>
                    <p className="text-gray-600 mb-4">
                      We may update these Terms from time to time. We will notify users of 
                      significant changes via email or platform notifications.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button asChild variant="outline">
                        <a href="/privacy">Privacy Policy</a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href="/contact">Contact Us</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

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
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="/dmca" className="text-gray-300 hover:text-white transition-colors">DMCA</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>legal@gigclickers.com</div>
                <div>+880 1234-567890</div>
                <div>Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

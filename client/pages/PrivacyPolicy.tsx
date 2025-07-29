import { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Phone,
  Calendar,
  FileText,
  Users,
  Globe,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PublicHeader from "@/components/PublicHeader";

const sections = [
  { id: "information-collection", title: "1. Information We Collect", icon: Database },
  { id: "use-of-information", title: "2. How We Use Your Information", icon: Eye },
  { id: "information-sharing", title: "3. Information Sharing", icon: Users },
  { id: "data-security", title: "4. Data Security", icon: Shield },
  { id: "cookies", title: "5. Cookies and Tracking", icon: Globe },
  { id: "your-rights", title: "6. Your Privacy Rights", icon: CheckCircle },
  { id: "data-retention", title: "7. Data Retention", icon: Calendar },
  { id: "international-transfers", title: "8. International Transfers", icon: Globe },
  { id: "children-privacy", title: "9. Children's Privacy", icon: Shield },
  { id: "updates", title: "10. Policy Updates", icon: FileText },
  { id: "contact", title: "11. Contact Us", icon: Mail },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="bg-brand-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-6">
              Your privacy is important to us. Learn how we protect and handle your data.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Last Updated: January 15, 2024</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                <span>Version 3.0</span>
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                    <p className="text-gray-700 mb-4">
                      At ClickerPlus, we respect your privacy and are committed to protecting your personal data. 
                      This privacy policy explains how we collect, use, store, and protect your information when you 
                      use our platform.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-blue-800">Important</h3>
                          <p className="text-sm text-blue-700 mt-1">
                            By using ClickerPlus, you agree to the collection and use of information in accordance with this policy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 1: Information Collection */}
              <Card id="information-collection">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2 text-brand-green" />
                    1. Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Name, email address, and phone number</li>
                    <li>Profile information and professional skills</li>
                    <li>Payment information and billing details</li>
                    <li>Identity verification documents</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h4 className="font-semibold text-gray-900 mb-3">Usage Information</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Platform usage analytics and behavior patterns</li>
                    <li>Project history and transaction records</li>
                    <li>Communication logs and support interactions</li>
                  </ul>

                  <h4 className="font-semibold text-gray-900 mb-3">Technical Information</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cookies and similar tracking technologies</li>
                    <li>Log files and error reports</li>
                    <li>Performance metrics and system diagnostics</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section 2: Use of Information */}
              <Card id="use-of-information">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-brand-green" />
                    2. How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Platform Operations</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Account creation and management</li>
                        <li>Project matching and recommendations</li>
                        <li>Payment processing and invoicing</li>
                        <li>Communication facilitation</li>
                        <li>Dispute resolution</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Service Improvement</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Platform optimization and analytics</li>
                        <li>Security monitoring and fraud prevention</li>
                        <li>Customer support and assistance</li>
                        <li>Marketing and promotional communications</li>
                        <li>Legal compliance and reporting</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Information Sharing */}
              <Card id="information-sharing">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-brand-green" />
                    3. Information Sharing
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">We may share your information in the following circumstances:</p>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">With Other Users</h4>
                      <p className="text-sm text-gray-600">
                        Profile information, work history, and ratings are visible to facilitate platform matching.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                      <p className="text-sm text-gray-600">
                        Third-party services for payment processing, email delivery, and analytics.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                      <p className="text-sm text-gray-600">
                        When required by law, regulation, or legal process.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: Data Security */}
              <Card id="data-security">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-brand-green" />
                    4. Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Safeguards</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>256-bit SSL encryption</li>
                        <li>Secure data centers with 99.9% uptime</li>
                        <li>Regular security audits and penetration testing</li>
                        <li>Multi-factor authentication</li>
                        <li>Automated threat detection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Administrative Controls</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Limited access on need-to-know basis</li>
                        <li>Employee background checks and training</li>
                        <li>Regular access reviews and audits</li>
                        <li>Incident response procedures</li>
                        <li>Data breach notification protocols</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5: Your Rights */}
              <Card id="your-rights">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-brand-green" />
                    6. Your Privacy Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Access & Control</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Access your personal data</li>
                        <li>Update or correct information</li>
                        <li>Delete your account and data</li>
                        <li>Export your data</li>
                        <li>Restrict processing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Communication Preferences</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Opt-out of marketing emails</li>
                        <li>Manage notification settings</li>
                        <li>Control cookie preferences</li>
                        <li>Request data portability</li>
                        <li>File privacy complaints</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                    <h4 className="font-medium text-green-800 mb-2">Exercise Your Rights</h4>
                    <p className="text-sm text-green-700">
                      To exercise any of these rights, contact us at privacy@clickerplus.com or 
                      use the privacy settings in your account dashboard.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card id="contact">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-brand-green" />
                    11. Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Privacy Officer</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-gray-400" />
                          <span>privacy@clickerplus.com</span>
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
                        <p>ClickerPlus Ltd.</p>
                        <p>Privacy Department</p>
                        <p>123 Gulshan Avenue</p>
                        <p>Gulshan-2, Dhaka 1212</p>
                        <p>Bangladesh</p>
                      </div>
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
              <h3 className="text-2xl font-bold mb-4">ClickerPlus</h3>
              <p className="text-gray-300 mb-4">
                Your privacy is our priority. We're committed to transparency and data protection.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Privacy Resources</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/dmca" className="text-gray-300 hover:text-white transition-colors">DMCA Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Privacy Team</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>privacy@clickerplus.com</div>
                <div>+880 1234-567890</div>
                <div>Available 24/7</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 ClickerPlus. All rights reserved. | Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

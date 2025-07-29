import { useState } from "react";
import {
  Shield,
  FileText,
  Mail,
  Clock,
  AlertTriangle,
  CheckCircle,
  Send,
  Phone,
  Calendar,
  Download,
  Upload,
  User,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import PublicHeader from "@/components/PublicHeader";

const dmcaSteps = [
  {
    step: "1",
    title: "Identify Infringement",
    description: "Clearly identify the copyrighted work and the infringing content",
    icon: FileText,
    timeframe: "Before filing"
  },
  {
    step: "2", 
    title: "Gather Evidence",
    description: "Collect proof of ownership and evidence of infringement",
    icon: Shield,
    timeframe: "Before filing"
  },
  {
    step: "3",
    title: "Submit Notice",
    description: "Send a complete DMCA takedown notice to our designated agent",
    icon: Send,
    timeframe: "Immediate"
  },
  {
    step: "4",
    title: "Review Process",
    description: "We review and process valid DMCA notices",
    icon: Clock,
    timeframe: "24-48 hours"
  },
  {
    step: "5",
    title: "Content Removal",
    description: "Infringing content is removed if notice is valid",
    icon: CheckCircle,
    timeframe: "Upon validation"
  }
];

export default function DMCAPolicy() {
  const [noticeForm, setNoticeForm] = useState({
    complainantName: "",
    complainantEmail: "",
    complainantPhone: "",
    copyrightWork: "",
    originalLocation: "",
    infringingLocation: "",
    relationshipToWork: "",
    statement: "",
    signature: "",
    date: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNoticeForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitNotice = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to the backend
    alert("DMCA notice submitted successfully. You will receive a confirmation email shortly.");
    setNoticeForm({
      complainantName: "",
      complainantEmail: "",
      complainantPhone: "",
      copyrightWork: "",
      originalLocation: "",
      infringingLocation: "",
      relationshipToWork: "",
      statement: "",
      signature: "",
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="bg-brand-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">DMCA Copyright Policy</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-6">
              ClickerPlus respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA)
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Last Updated: January 15, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Response Time: 24-48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Quick Action Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Copyright Infringement Report:</strong> If you believe your copyrighted work has been 
            infringed on ClickerPlus, you can file a DMCA takedown notice using the form below or contact 
            our designated agent directly.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* DMCA Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-brand-green" />
                  DMCA Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">
                  The Digital Millennium Copyright Act (DMCA) provides a process for copyright owners to 
                  request removal of infringing content. ClickerPlus takes intellectual property rights 
                  seriously and will respond promptly to valid DMCA notices.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Our Commitment</h4>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Promptly investigate all valid DMCA notices</li>
                  <li>Remove or disable infringing content when appropriate</li>
                  <li>Notify users when their content is subject to a DMCA notice</li>
                  <li>Respect both copyright holders' and users' rights</li>
                  <li>Maintain transparency in our process</li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Important Note</h4>
                  <p className="text-sm text-blue-700">
                    Filing a false DMCA notice may result in legal consequences. Ensure you have a good faith 
                    belief that the use is not authorized before submitting a notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* DMCA Process */}
            <Card>
              <CardHeader>
                <CardTitle>DMCA Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {dmcaSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <IconComponent className="w-5 h-5 text-brand-green mr-2" />
                            <h3 className="font-semibold text-gray-900">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-2">{step.description}</p>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {step.timeframe}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Required Information */}
            <Card>
              <CardHeader>
                <CardTitle>Required Information for DMCA Notice</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">
                  To file a valid DMCA takedown notice, you must provide the following information:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">About You</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Your full legal name</li>
                      <li>Physical address</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Electronic signature</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">About the Infringement</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Description of copyrighted work</li>
                      <li>Location of original work</li>
                      <li>Location of infringing content</li>
                      <li>Relationship to copyrighted work</li>
                      <li>Good faith statement</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <h4 className="font-medium text-yellow-800 mb-2">Legal Statements Required</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Good faith belief that use is not authorized</li>
                    <li>• Statement that information is accurate</li>
                    <li>• Statement under penalty of perjury that you are authorized to act</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* DMCA Notice Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2 text-brand-green" />
                  File a DMCA Takedown Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitNotice} className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="complainantName">Full Legal Name *</Label>
                        <Input
                          id="complainantName"
                          name="complainantName"
                          value={noticeForm.complainantName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full legal name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="complainantEmail">Email Address *</Label>
                        <Input
                          id="complainantEmail"
                          name="complainantEmail"
                          type="email"
                          value={noticeForm.complainantEmail}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="complainantPhone">Phone Number</Label>
                        <Input
                          id="complainantPhone"
                          name="complainantPhone"
                          value={noticeForm.complainantPhone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Copyright Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Copyright Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="copyrightWork">Description of Copyrighted Work *</Label>
                        <Textarea
                          id="copyrightWork"
                          name="copyrightWork"
                          value={noticeForm.copyrightWork}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          placeholder="Describe the copyrighted work that is being infringed"
                        />
                      </div>
                      <div>
                        <Label htmlFor="originalLocation">Location of Original Work *</Label>
                        <Input
                          id="originalLocation"
                          name="originalLocation"
                          value={noticeForm.originalLocation}
                          onChange={handleInputChange}
                          required
                          placeholder="URL or description of where the original work can be found"
                        />
                      </div>
                      <div>
                        <Label htmlFor="infringingLocation">Location of Infringing Content *</Label>
                        <Input
                          id="infringingLocation"
                          name="infringingLocation"
                          value={noticeForm.infringingLocation}
                          onChange={handleInputChange}
                          required
                          placeholder="URL or specific location of the infringing content on ClickerPlus"
                        />
                      </div>
                      <div>
                        <Label htmlFor="relationshipToWork">Your Relationship to the Work *</Label>
                        <select
                          id="relationshipToWork"
                          name="relationshipToWork"
                          value={noticeForm.relationshipToWork}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                        >
                          <option value="">Select your relationship</option>
                          <option value="copyright-owner">I am the copyright owner</option>
                          <option value="authorized-agent">I am authorized to act on behalf of the copyright owner</option>
                          <option value="exclusive-licensee">I am an exclusive licensee</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Legal Statements */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Statements</h3>
                    <div>
                      <Label htmlFor="statement">Good Faith Statement *</Label>
                      <Textarea
                        id="statement"
                        name="statement"
                        value={noticeForm.statement}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="State that you have a good faith belief that the use is not authorized by the copyright owner, its agent, or the law"
                      />
                    </div>
                  </div>

                  {/* Electronic Signature */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Electronic Signature</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="signature">Electronic Signature *</Label>
                        <Input
                          id="signature"
                          name="signature"
                          value={noticeForm.signature}
                          onChange={handleInputChange}
                          required
                          placeholder="Type your full legal name as electronic signature"
                        />
                      </div>
                      <div>
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={noticeForm.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-medium text-red-800 mb-2">Legal Warning</h4>
                    <p className="text-sm text-red-700">
                      By submitting this notice, you certify under penalty of perjury that the information 
                      is accurate and that you are authorized to act on behalf of the copyright owner. 
                      False claims may result in legal consequences.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" className="bg-brand-green hover:bg-green-600">
                      <Send className="w-4 h-4 mr-2" />
                      Submit DMCA Notice
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Counter-Notice Information */}
            <Card>
              <CardHeader>
                <CardTitle>Counter-Notice Process</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">
                  If your content was removed due to a DMCA notice and you believe the removal was improper, 
                  you may file a counter-notice.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Counter-Notice Requirements</h4>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Your physical signature</li>
                  <li>Identification of removed content and its location</li>
                  <li>Statement under penalty of perjury of good faith belief</li>
                  <li>Your name, address, and phone number</li>
                  <li>Consent to jurisdiction of federal court</li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Counter-Notice Process</h4>
                  <ol className="text-sm text-blue-700 space-y-1 list-decimal pl-4">
                    <li>Submit counter-notice to our designated agent</li>
                    <li>We forward your counter-notice to the original complainant</li>
                    <li>If no court action is filed within 10-14 business days, we may restore content</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Designated Agent */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Designated DMCA Agent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        <span>Legal Department</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                        <span>dmca@clickerplus.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                        <span>+880 1234-567890</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Mailing Address</h4>
                    <div className="text-sm text-gray-600">
                      <p>ClickerPlus Ltd.</p>
                      <p>DMCA Designated Agent</p>
                      <p>123 Gulshan Avenue</p>
                      <p>Gulshan-2, Dhaka 1212</p>
                      <p>Bangladesh</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Download DMCA Form
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Email DMCA Agent
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    View DMCA Law
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">DMCA Notice Review</span>
                    <span className="text-sm font-medium">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Content Removal</span>
                    <span className="text-sm font-medium">Upon validation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Counter-Notice</span>
                    <span className="text-sm font-medium">10-14 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Agent Response</span>
                    <span className="text-sm font-medium">Within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Legal Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="https://www.copyright.gov/legislation/dmca.pdf" target="_blank" rel="noopener noreferrer" 
                     className="block text-sm text-brand-green hover:underline">
                    DMCA Full Text
                  </a>
                  <a href="https://www.copyright.gov/" target="_blank" rel="noopener noreferrer"
                     className="block text-sm text-brand-green hover:underline">
                    U.S. Copyright Office
                  </a>
                  <a href="/terms" className="block text-sm text-brand-green hover:underline">
                    Terms of Service
                  </a>
                  <a href="/privacy" className="block text-sm text-brand-green hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Protecting Intellectual Property</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              ClickerPlus respects copyright and intellectual property rights. We respond promptly to 
              valid DMCA notices and work to protect both content creators and platform users.
            </p>
            <div className="space-x-4">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                Contact DMCA Agent
              </Button>
              <Button className="bg-brand-green hover:bg-green-600">
                File DMCA Notice
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 ClickerPlus. All rights reserved. | DMCA Designated Agent: dmca@clickerplus.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

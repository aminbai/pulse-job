import { useState } from "react";
import {
  Cookie,
  Settings,
  Shield,
  BarChart3,
  Target,
  Globe,
  CheckCircle,
  XCircle,
  Info,
  Mail,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import PublicHeader from "@/components/PublicHeader";

const cookieTypes = [
  {
    id: "essential",
    name: "Essential Cookies",
    description: "Required for basic website functionality",
    icon: Shield,
    required: true,
    color: "bg-green-100 text-green-800",
    examples: ["Session management", "Security tokens", "Load balancing"]
  },
  {
    id: "analytics",
    name: "Analytics Cookies",
    description: "Help us understand how you use our website",
    icon: BarChart3,
    required: false,
    color: "bg-blue-100 text-blue-800",
    examples: ["Page views", "User interactions", "Performance metrics"]
  },
  {
    id: "marketing",
    name: "Marketing Cookies",
    description: "Used to deliver relevant advertisements",
    icon: Target,
    required: false,
    color: "bg-purple-100 text-purple-800",
    examples: ["Ad targeting", "Campaign tracking", "Social media integration"]
  },
  {
    id: "functional",
    name: "Functional Cookies",
    description: "Remember your preferences and settings",
    icon: Settings,
    required: false,
    color: "bg-orange-100 text-orange-800",
    examples: ["Language preference", "Theme settings", "Recently viewed"]
  }
];

const specificCookies = [
  {
    name: "_cp_session",
    purpose: "Session management and user authentication",
    type: "Essential",
    duration: "Session",
    provider: "ClickerPlus"
  },
  {
    name: "_cp_auth",
    purpose: "Remember login status",
    type: "Essential", 
    duration: "30 days",
    provider: "ClickerPlus"
  },
  {
    name: "_ga",
    purpose: "Google Analytics tracking",
    type: "Analytics",
    duration: "2 years",
    provider: "Google"
  },
  {
    name: "_gid",
    purpose: "Google Analytics session tracking",
    type: "Analytics",
    duration: "24 hours",
    provider: "Google"
  },
  {
    name: "_fbp",
    purpose: "Facebook Pixel tracking",
    type: "Marketing",
    duration: "90 days",
    provider: "Facebook"
  },
  {
    name: "cp_preferences",
    purpose: "Store user preferences",
    type: "Functional",
    duration: "1 year",
    provider: "ClickerPlus"
  }
];

export default function CookiePolicy() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    functional: true
  });

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const savePreferences = () => {
    // In a real app, this would save to localStorage/backend
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="bg-brand-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Cookie className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-6">
              Learn how we use cookies to improve your experience on ClickerPlus
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Last Updated: January 15, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Cookie Preferences Panel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2 text-brand-green" />
              Manage Your Cookie Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              You can control which cookies we use on your device. Essential cookies cannot be disabled 
              as they are necessary for the website to function properly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {cookieTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <div key={type.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{type.name}</h3>
                          <Badge className={type.color}>
                            {type.required ? "Required" : "Optional"}
                          </Badge>
                        </div>
                      </div>
                      <Switch
                        checked={cookiePreferences[type.id as keyof typeof cookiePreferences]}
                        onCheckedChange={(checked) => handlePreferenceChange(type.id, checked)}
                        disabled={type.required}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                    <div className="text-xs text-gray-500">
                      <strong>Examples:</strong> {type.examples.join(", ")}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex justify-end mt-6">
              <Button onClick={savePreferences} className="bg-brand-green hover:bg-green-600">
                Save Preferences
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What Are Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="w-5 h-5 mr-2 text-brand-green" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">
                  Cookies are small text files that are stored on your device when you visit a website. 
                  They help websites remember information about your visit, which can both make it easier 
                  to visit the site again and make the site more useful to you.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Types of Cookies We Use</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until deleted</li>
                  <li><strong>First-party Cookies:</strong> Set directly by ClickerPlus</li>
                  <li><strong>Third-party Cookies:</strong> Set by external services we use</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Essential Functions</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Keeping you logged in during your session</li>
                      <li>Remembering your language preference</li>
                      <li>Maintaining your shopping cart contents</li>
                      <li>Enabling security features</li>
                      <li>Load balancing for optimal performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Enhanced Experience</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Personalizing content and recommendations</li>
                      <li>Remembering your search preferences</li>
                      <li>Analyzing usage patterns to improve our service</li>
                      <li>Providing relevant advertisements</li>
                      <li>Enabling social media integration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookie Details Table */}
            <Card>
              <CardHeader>
                <CardTitle>Detailed Cookie Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-2 font-semibold">Cookie Name</th>
                        <th className="text-left py-3 px-2 font-semibold">Purpose</th>
                        <th className="text-left py-3 px-2 font-semibold">Type</th>
                        <th className="text-left py-3 px-2 font-semibold">Duration</th>
                        <th className="text-left py-3 px-2 font-semibold">Provider</th>
                      </tr>
                    </thead>
                    <tbody>
                      {specificCookies.map((cookie, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-2 font-mono text-xs">{cookie.name}</td>
                          <td className="py-3 px-2">{cookie.purpose}</td>
                          <td className="py-3 px-2">
                            <Badge variant="outline" className="text-xs">
                              {cookie.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-2">{cookie.duration}</td>
                          <td className="py-3 px-2">{cookie.provider}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Managing Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h4 className="font-semibold text-gray-900 mb-3">Browser Settings</h4>
                <p className="mb-4">
                  You can control cookies through your browser settings. However, disabling certain 
                  cookies may affect the functionality of our website.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Chrome</h5>
                    <p className="text-sm text-gray-600">
                      Settings → Privacy and security → Cookies and other site data
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Firefox</h5>
                    <p className="text-sm text-gray-600">
                      Options → Privacy & Security → Cookies and Site Data
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Safari</h5>
                    <p className="text-sm text-gray-600">
                      Preferences → Privacy → Manage Website Data
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Edge</h5>
                    <p className="text-sm text-gray-600">
                      Settings → Cookies and site permissions → Manage and delete cookies
                    </p>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900 mb-3">Third-Party Opt-Outs</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Google Analytics:</strong> 
                    <a href="https://tools.google.com/dlpage/gaoptout" className="text-brand-green hover:underline ml-1">
                      Google Analytics Opt-out
                    </a>
                  </li>
                  <li>
                    <strong>Facebook:</strong> 
                    <a href="https://www.facebook.com/settings?tab=ads" className="text-brand-green hover:underline ml-1">
                      Facebook Ad Preferences
                    </a>
                  </li>
                  <li>
                    <strong>Digital Advertising Alliance:</strong> 
                    <a href="http://optout.aboutads.info/" className="text-brand-green hover:underline ml-1">
                      Opt-out of Interest-Based Ads
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Cookie Preferences
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Privacy Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Globe className="w-4 h-4 mr-2" />
                    Browser Settings Guide
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  If you have questions about our cookie policy or need assistance with cookie settings:
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                    <span>privacy@clickerplus.com</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Support available 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Policies */}
            <Card>
              <CardHeader>
                <CardTitle>Related Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="/privacy" className="block text-sm text-brand-green hover:underline">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="block text-sm text-brand-green hover:underline">
                    Terms of Service
                  </a>
                  <a href="/dmca" className="block text-sm text-brand-green hover:underline">
                    DMCA Policy
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
            <h3 className="text-xl font-bold mb-4">Your Privacy Matters</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're committed to transparency about how we use cookies and protecting your privacy. 
              You're in control of your cookie preferences.
            </p>
            <div className="space-x-4">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                Manage Cookies
              </Button>
              <Button className="bg-brand-green hover:bg-green-600">
                Contact Privacy Team
              </Button>
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

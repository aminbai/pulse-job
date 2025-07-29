import { useState } from "react";
import {
  Download,
  Calendar,
  ExternalLink,
  Mail,
  Phone,
  User,
  Building,
  Award,
  Users,
  TrendingUp,
  Globe,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PublicHeader from "@/components/PublicHeader";

const pressReleases = [
  {
    id: 1,
    title: "GigClickers Reaches 1 Million Registered Users Milestone",
    date: "2024-01-15",
    excerpt: "Leading freelance platform celebrates significant growth with enhanced features and global expansion plans.",
    content: "GigClickers, the rapidly growing freelance marketplace, today announced it has reached the milestone of 1 million registered users worldwide...",
    category: "Company News",
    featured: true,
  },
  {
    id: 2,
    title: "GigClickers Launches AI-Powered Job Matching System",
    date: "2024-01-10",
    excerpt: "Revolutionary technology helps freelancers find better-matched projects while reducing client search time by 60%.",
    content: "GigClickers today unveiled its groundbreaking AI-powered job matching system, designed to revolutionize how freelancers and clients connect...",
    category: "Product Launch",
    featured: true,
  },
  {
    id: 3,
    title: "GigClickers Secures $10M Series A Funding Round",
    date: "2024-01-05",
    excerpt: "Investment will fuel platform expansion and new feature development to serve growing freelance economy.",
    content: "GigClickers announced today the successful completion of its Series A funding round, raising $10 million from leading venture capital firms...",
    category: "Funding",
    featured: true,
  },
  {
    id: 4,
    title: "GigClickers Expands Operations to Southeast Asia",
    date: "2023-12-20",
    excerpt: "Platform now supports local currencies and payment methods in 8 new countries across the region.",
    content: "Following successful growth in Bangladesh and India, GigClickers is expanding its operations to serve the rapidly growing freelance markets across Southeast Asia...",
    category: "Expansion",
    featured: false,
  },
  {
    id: 5,
    title: "GigClickers Partners with Leading Universities for Skills Development",
    date: "2023-12-15",
    excerpt: "New initiative provides certified training programs for freelancers in emerging technologies.",
    content: "GigClickers has announced strategic partnerships with top universities to offer specialized training programs for freelancers...",
    category: "Partnership",
    featured: false,
  },
];

const mediaKit = [
  {
    name: "Company Logo Package",
    description: "High-resolution logos in various formats (PNG, SVG, EPS)",
    type: "Images",
    size: "2.5 MB",
    icon: ImageIcon,
  },
  {
    name: "Brand Guidelines",
    description: "Complete brand guidelines and usage instructions",
    type: "PDF",
    size: "1.8 MB",
    icon: FileText,
  },
  {
    name: "Company Factsheet",
    description: "Key statistics, milestones, and company information",
    type: "PDF",
    size: "650 KB",
    icon: FileText,
  },
  {
    name: "Executive Photos",
    description: "High-resolution photos of leadership team",
    type: "Images",
    size: "5.2 MB",
    icon: ImageIcon,
  },
  {
    name: "Product Screenshots",
    description: "Platform screenshots and UI elements",
    type: "Images",
    size: "3.1 MB",
    icon: ImageIcon,
  },
];

const companyStats = [
  {
    icon: Users,
    number: "1M+",
    label: "Registered Users",
    description: "Active freelancers and clients worldwide",
  },
  {
    icon: Building,
    number: "500K+",
    label: "Projects Completed",
    description: "Successful projects across all categories",
  },
  {
    icon: Globe,
    number: "150+",
    label: "Countries",
    description: "Global reach and presence",
  },
  {
    icon: TrendingUp,
    number: "$50M+",
    label: "Total Earnings",
    description: "Paid out to freelancers",
  },
];

const leadership = [
  {
    name: "Rahman Ahmed",
    position: "CEO & Co-Founder",
    bio: "Former tech executive with 15+ years experience in marketplace platforms.",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Sarah Johnson",
    position: "CTO & Co-Founder", 
    bio: "Ex-Google engineer specializing in scalable systems and AI technologies.",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Maria Garcia",
    position: "VP of Marketing",
    bio: "Marketing strategist with expertise in global expansion and brand building.",
    image: "/api/placeholder/150/150",
  },
];

const awards = [
  {
    year: "2024",
    title: "Best Freelance Platform",
    organization: "Tech Innovation Awards",
  },
  {
    year: "2023",
    title: "Startup of the Year",
    organization: "Bangladesh Tech Awards",
  },
  {
    year: "2023",
    title: "Best User Experience",
    organization: "Design Excellence Awards",
  },
];

export default function Press() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    outlet: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Media inquiry submitted successfully! We'll get back to you within 24 hours.");
    setContactForm({ name: "", email: "", outlet: "", subject: "", message: "" });
  };

  const handleDownload = (item: typeof mediaKit[0]) => {
    // Simulate download
    alert(`Downloading ${item.name}...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="bg-brand-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Latest news, press releases, and media resources about GigClickers
            </p>
            <div className="flex justify-center">
              <Button variant="outline" className="text-brand-green bg-white hover:bg-gray-100">
                <Mail className="w-4 h-4 mr-2" />
                Media Inquiries
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Company Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About GigClickers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GigClickers is a leading global marketplace connecting talented freelancers with businesses seeking 
              quality services. Founded in 2022, we've revolutionized how people work by creating opportunities 
              for millions worldwide.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {companyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-brand-green-light rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-brand-green" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map(release => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{release.title}</h3>
                        {release.featured && (
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(release.date).toLocaleDateString()}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {release.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{release.excerpt}</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Read Full Release
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Media Kit */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Kit</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Download our media kit containing logos, brand guidelines, product screenshots, 
                  and other resources for media coverage.
                </p>
                <div className="space-y-4">
                  {mediaKit.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <p className="text-xs text-gray-500">{item.type} • {item.size}</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownload(item)}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 text-center">
                  <Button className="bg-brand-green hover:bg-green-600">
                    <Download className="w-4 h-4 mr-2" />
                    Download Complete Media Kit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Media Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Contact</h2>
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Press Inquiries</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <span>press@gigclickers.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <span>+880 1234-567890</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Sarah Johnson, Head of Communications</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmitContact} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="outlet">Media Outlet</Label>
                    <Input
                      id="outlet"
                      name="outlet"
                      value={contactForm.outlet}
                      onChange={handleInputChange}
                      placeholder="Publication/Organization name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Interview request, quote needed, etc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Tell us about your story and deadline..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brand-green hover:bg-green-600">
                    Submit Media Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Leadership Team */}
        <section className="mt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-brand-green font-medium mb-3">{leader.position}</p>
                  <p className="text-sm text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{award.title}</div>
                  <div className="text-sm text-gray-600 mb-1">{award.organization}</div>
                  <div className="text-xs text-gray-500">{award.year}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ for Media */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Frequently Asked Questions - Media</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What is GigClickers?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    GigClickers is a global freelance marketplace that connects skilled professionals 
                    with businesses seeking quality services.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2">When was GigClickers founded?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    GigClickers was founded in 2022 by Rahman Ahmed and Sarah Johnson.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2">Where is GigClickers based?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our headquarters are in Dhaka, Bangladesh, with additional offices in 
                    San Francisco and Singapore.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How many users does GigClickers have?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    We have over 1 million registered users globally, including both 
                    freelancers and clients.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2">What makes GigClickers different?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our AI-powered matching system, focus on emerging markets, and 
                    commitment to fair pricing set us apart.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2">Is GigClickers profitable?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    We're currently focused on growth and market expansion. Financial 
                    details are available upon request for verified media.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
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
              <h4 className="text-lg font-semibold mb-4">Press Resources</h4>
              <ul className="space-y-2">
                <li><a href="/press" className="text-gray-300 hover:text-white transition-colors">Press Releases</a></li>
                <li><a href="/press#media-kit" className="text-gray-300 hover:text-white transition-colors">Media Kit</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Company Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Media Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>press@gigclickers.com</div>
                <div>+880 1234-567890</div>
                <div>Sarah Johnson, Head of Communications</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

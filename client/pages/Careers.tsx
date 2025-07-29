import { useState } from "react";
import {
  MapPin,
  Clock,
  Users,
  Heart,
  Award,
  Zap,
  Building,
  DollarSign,
  Calendar,
  Send,
  ChevronRight,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PublicHeader from "@/components/PublicHeader";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$30,000 - $45,000",
    description: "We're looking for a skilled Frontend Developer to join our team and help build the future of freelancing.",
    requirements: [
      "3+ years of React/TypeScript experience",
      "Experience with modern CSS frameworks",
      "Understanding of responsive design",
      "Experience with REST APIs",
    ],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    experience: "4-6 years",
    salary: "$40,000 - $60,000",
    description: "Lead product strategy and work with cross-functional teams to deliver exceptional user experiences.",
    requirements: [
      "4+ years of product management experience",
      "Experience with agile methodologies",
      "Strong analytical and communication skills",
      "Background in marketplace platforms",
    ],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$25,000 - $40,000",
    description: "Build scalable backend systems that power millions of freelancer and client interactions.",
    requirements: [
      "2+ years of Node.js/Python experience",
      "Experience with databases (MongoDB, PostgreSQL)",
      "Understanding of microservices architecture",
      "Experience with cloud platforms (AWS/GCP)",
    ],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$20,000 - $35,000",
    description: "Design intuitive and beautiful user experiences that make freelancing accessible to everyone.",
    requirements: [
      "2+ years of UX/UI design experience",
      "Proficiency in Figma/Sketch",
      "Understanding of user-centered design",
      "Portfolio showcasing web applications",
    ],
    posted: "5 days ago",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work-life balance with flexible working hours",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Budget for courses, conferences, and skill development",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with passionate and talented individuals",
  },
  {
    icon: Building,
    title: "Modern Office",
    description: "Beautiful workspace in the heart of Dhaka",
  },
  {
    icon: Award,
    title: "Performance Bonus",
    description: "Competitive salary with performance-based bonuses",
  },
];

const companyValues = [
  {
    title: "Innovation",
    description: "We embrace new ideas and technologies to solve real problems",
  },
  {
    title: "Transparency",
    description: "Open communication and honest feedback drive our growth",
  },
  {
    title: "Empowerment",
    description: "We believe in empowering freelancers and businesses worldwide",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do",
  },
];

export default function Careers() {
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  });
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleApply = (jobId: number) => {
    setSelectedJob(jobId);
    const job = jobOpenings.find(j => j.id === jobId);
    if (job) {
      setApplicationForm(prev => ({ ...prev, position: job.title }));
    }
    // Scroll to application form
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully! We'll get back to you soon.");
    setApplicationForm({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverLetter: "",
    });
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="bg-brand-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Help us build the future of freelancing and connect talent with opportunity worldwide.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-green-100">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-green-100">Open Positions</div>
            </div>
            <div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-green-100">Office Locations</div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-brand-green-light rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-brand-green" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Job Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.experience}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="ml-6 text-right">
                      <p className="text-xs text-gray-500 mb-3">Posted {job.posted}</p>
                      <Button onClick={() => handleApply(job.id)} className="bg-brand-green hover:bg-green-600">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Apply for a Position</CardTitle>
              <p className="text-gray-600 text-center">
                Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={applicationForm.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={applicationForm.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={applicationForm.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position of Interest</Label>
                    <select
                      id="position"
                      name="position"
                      value={applicationForm.position}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <select
                    id="experience"
                    name="experience"
                    value={applicationForm.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationForm.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us why you'd be a great fit for our team..."
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" className="bg-brand-green hover:bg-green-600 px-8">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Culture */}
        <section className="mb-16">
          <div className="bg-brand-green-light rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We're building a platform that empowers millions of freelancers and businesses worldwide. 
              If you're passionate about making a difference and want to be part of something bigger, we'd love to hear from you.
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <a href="/about">Learn More About Us</a>
              </Button>
              <Button asChild className="bg-brand-green hover:bg-green-600">
                <a href="#application-form">Apply Now</a>
              </Button>
            </div>
          </div>
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
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Apply</h4>
              <p className="text-gray-300 text-sm mb-3">
                Send your resume to: careers@gigclickers.com
              </p>
              <p className="text-gray-300 text-sm">
                HR Hotline: +880 1234-567890
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <p className="text-gray-300 text-sm">
                Stay updated with our latest job openings and company news.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

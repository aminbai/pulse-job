import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Briefcase,
  Users,
  Calendar,
  Heart,
  Share,
  Flag,
  Shield,
  CheckCircle,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import DashboardHeader from "@/components/DashboardHeader";

// Sample job data (in a real app, this would come from an API)
const sampleJobData = {
  id: 1,
  title: "Gmail Account Creation",
  description: `Need 50 new Gmail accounts with phone verification. Must be created from different IP addresses.

**Requirements:**
- Create 50 unique Gmail accounts
- Each account must be phone verified
- Use different IP addresses for each account
- Provide username and password for each account
- All accounts should be active and functional

**Deliverables:**
- Excel file with usernames and passwords
- Screenshots of successful verification
- Test each account by sending/receiving emails

**Timeline:**
- Project should be completed within 2-3 days
- Daily progress updates required
- Final delivery with all credentials

**Additional Notes:**
- Experience with account creation preferred
- Must follow Google's terms of service
- Bulk account creation tools knowledge is a plus`,
  category: "Digital Marketing",
  subcategory: "Account Creation",
  client: {
    name: "TechCorp Solutions",
    rating: 4.8,
    reviewsCount: 45,
    jobsPosted: 15,
    hireRate: 87,
    totalSpent: 12500,
    location: "United States",
    memberSince: "2022",
    verified: true,
    lastSeen: "2 hours ago",
  },
  budget: { min: 25, max: 50 },
  duration: "2-3 days",
  experienceLevel: "Entry Level",
  location: "Remote",
  country: "International",
  skills: ["Gmail", "Account Management", "Data Entry", "IP Management"],
  postedAt: "2 hours ago",
  proposals: 8,
  verified: true,
  urgent: false,
  featured: true,
  status: "Open",
  applicationsDeadline: "7 days",
  connectionsRequired: 2,
  clientHistory: [
    {
      jobTitle: "Social Media Account Setup",
      freelancer: "John D.",
      budget: 75,
      rating: 5,
      feedback: "Excellent work, delivered on time with great quality.",
    },
    {
      jobTitle: "Email Marketing Campaign",
      freelancer: "Sarah M.",
      budget: 150,
      rating: 4.5,
      feedback: "Good communication and professional work.",
    },
  ],
};

export default function JobDetail() {
  const { id } = useParams();
  const [saved, setSaved] = useState(false);
  const [proposalText, setProposalText] = useState("");
  const [proposalBudget, setProposalBudget] = useState("");
  const [proposalDuration, setProposalDuration] = useState("");
  const [showProposalForm, setShowProposalForm] = useState(false);

  const job = sampleJobData; // In real app, fetch by ID

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: job.description.substring(0, 100) + "...",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleSubmitProposal = () => {
    // Handle proposal submission
    alert("Proposal submitted successfully!");
    setShowProposalForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/browse-jobs"
            className="inline-flex items-center text-brand-green hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Browse Jobs
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h1 className="text-2xl font-bold text-gray-900">
                        {job.title}
                      </h1>
                      {job.featured && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      )}
                      {job.urgent && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                          Urgent
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Posted {job.postedAt}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.proposals} proposals
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                        <span className="font-semibold">
                          ${job.budget.min} - ${job.budget.max}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-blue-600" />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1 text-purple-600" />
                        <span>{job.experienceLevel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSave}
                      className={saved ? "text-red-600" : "text-gray-400"}
                    >
                      <Heart
                        className={`w-4 h-4 ${saved ? "fill-current" : ""}`}
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleShare}
                      className="text-gray-400"
                    >
                      <Share className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400">
                      <Flag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    className="bg-brand-green hover:bg-green-600"
                    onClick={() => setShowProposalForm(!showProposalForm)}
                  >
                    Apply for this Job
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Client
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Proposal Form */}
            {showProposalForm && (
              <Card>
                <CardHeader>
                  <CardTitle>Submit Your Proposal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter
                    </label>
                    <Textarea
                      placeholder="Describe your approach to this project..."
                      value={proposalText}
                      onChange={(e) => setProposalText(e.target.value)}
                      rows={6}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Budget ($)
                      </label>
                      <input
                        type="number"
                        placeholder="Enter your budget"
                        value={proposalBudget}
                        onChange={(e) => setProposalBudget(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Time
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 3 days"
                        value={proposalDuration}
                        onChange={(e) => setProposalDuration(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      onClick={handleSubmitProposal}
                      className="bg-brand-green hover:bg-green-600"
                    >
                      Submit Proposal
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowProposalForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-gray-700">
                    {job.description}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Required */}
            <Card>
              <CardHeader>
                <CardTitle>Skills Required</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-brand-green-light text-brand-green px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Client History */}
            <Card>
              <CardHeader>
                <CardTitle>Client's Previous Work</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {job.clientHistory.map((work, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <h4 className="font-medium text-gray-900">
                        {work.jobTitle}
                      </h4>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                        <span>Freelancer: {work.freelancer}</span>
                        <span>${work.budget}</span>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 mr-1" />
                          {work.rating}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {work.feedback}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Client Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  About the Client
                  {job.client.verified && (
                    <Shield className="w-4 h-4 ml-2 text-brand-green" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {job.client.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{job.client.rating}</span>
                    </div>
                    <span className="text-gray-500">
                      ({job.client.reviewsCount} reviews)
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Jobs Posted</p>
                    <p className="font-medium">{job.client.jobsPosted}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Hire Rate</p>
                    <p className="font-medium">{job.client.hireRate}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Total Spent</p>
                    <p className="font-medium">
                      ${job.client.totalSpent.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Member Since</p>
                    <p className="font-medium">{job.client.memberSince}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{job.client.location}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Last seen {job.client.lastSeen}</span>
                </div>
              </CardContent>
            </Card>

            {/* Job Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Category</span>
                  <span className="font-medium">{job.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Subcategory</span>
                  <span className="font-medium">{job.subcategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Project Type</span>
                  <span className="font-medium">Fixed Price</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Applications</span>
                  <span className="font-medium">{job.proposals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Deadline</span>
                  <span className="font-medium">
                    {job.applicationsDeadline}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="border-b border-gray-200 pb-3 last:border-b-0"
                  >
                    <h4 className="text-sm font-medium text-gray-900 hover:text-brand-green cursor-pointer">
                      Account Creation for Social Media Platforms
                    </h4>
                    <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
                      <span>$30 - $60</span>
                      <span>2 days ago</span>
                    </div>
                  </div>
                ))}
                <Link
                  to="/browse-jobs"
                  className="text-brand-green text-sm hover:text-green-600 transition-colors"
                >
                  View more similar jobs →
                </Link>
              </CardContent>
            </Card>

            {/* Warning */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-orange-800">
                      Stay Safe
                    </h4>
                    <p className="text-xs text-orange-700 mt-1">
                      Always communicate through our platform and never share
                      personal information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

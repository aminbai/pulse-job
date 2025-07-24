import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Clock,
  DollarSign,
  MapPin,
  Star,
  Briefcase,
  Users,
  Search,
  Trash2,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DashboardHeader from "@/components/DashboardHeader";

// Sample saved jobs data
const savedJobsData = [
  {
    id: 1,
    title: "Gmail Account Creation",
    description:
      "Need 50 new Gmail accounts with phone verification. Must be created from different IP addresses.",
    category: "Digital Marketing",
    client: "TechCorp Solutions",
    clientRating: 4.8,
    budget: { min: 25, max: 50 },
    duration: "2-3 days",
    experienceLevel: "Entry Level",
    location: "Remote",
    skills: ["Gmail", "Account Management", "Data Entry"],
    postedAt: "2 hours ago",
    proposals: 8,
    savedAt: "1 hour ago",
    status: "Open",
  },
  {
    id: 2,
    title: "WordPress Website Development",
    description:
      "Create a responsive WordPress website for small business. Include contact forms, gallery, and booking system.",
    category: "Web Development",
    client: "Digital Agency",
    clientRating: 4.9,
    budget: { min: 500, max: 800 },
    duration: "1-2 weeks",
    experienceLevel: "Expert",
    location: "Remote",
    skills: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
    postedAt: "1 day ago",
    proposals: 25,
    savedAt: "3 hours ago",
    status: "Open",
  },
  {
    id: 3,
    title: "Mobile App UI/UX Design",
    description:
      "Design modern and user-friendly interface for iOS and Android mobile application.",
    category: "Design",
    client: "Startup Company",
    clientRating: 4.7,
    budget: { min: 300, max: 600 },
    duration: "1-2 weeks",
    experienceLevel: "Intermediate",
    location: "Remote",
    skills: ["Figma", "UI Design", "Mobile Design"],
    postedAt: "6 hours ago",
    proposals: 18,
    savedAt: "2 days ago",
    status: "Open",
  },
];

export default function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState(savedJobsData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRemoveJob = (jobId: number) => {
    setSavedJobs((prev) => prev.filter((job) => job.id !== jobId));
  };

  const filteredJobs = savedJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Jobs</h1>
          <p className="text-gray-600">
            Jobs you've saved for later. Apply when you're ready!
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search saved jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
            />
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? "No jobs found" : "No saved jobs yet"}
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm
                  ? "Try adjusting your search terms"
                  : "Save jobs you're interested in to view them here"}
              </p>
              <Link to="/browse-jobs">
                <Button className="bg-brand-green hover:bg-green-600">
                  Browse Jobs
                </Button>
              </Link>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          <Link
                            to={`/job/${job.id}`}
                            className="hover:text-brand-green transition-colors"
                          >
                            {job.title}
                          </Link>
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">
                            Saved {job.savedAt}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />$
                          {job.budget.min} - ${job.budget.max}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.duration}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.experienceLevel}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.proposals} proposals
                        </span>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {job.client}
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                              <div className="flex items-center">
                                <Star className="w-3 h-3 text-yellow-400 mr-1" />
                                {job.clientRating}
                              </div>
                              <span>•</span>
                              <span>Posted {job.postedAt}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2 ml-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveJob(job.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Link to={`/job/${job.id}`}>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </Link>
                      <Link to={`/job/${job.id}`}>
                        <Button className="bg-brand-green hover:bg-green-600">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Stats */}
        {savedJobs.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Stats
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-green">
                  {savedJobs.length}
                </div>
                <div className="text-sm text-gray-600">Total Saved Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {savedJobs.filter((job) => job.status === "Open").length}
                </div>
                <div className="text-sm text-gray-600">Still Open</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {savedJobs.reduce((acc, job) => acc + job.proposals, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Proposals</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

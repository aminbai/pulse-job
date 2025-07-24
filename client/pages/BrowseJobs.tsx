import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Briefcase,
  Users,
  Calendar,
  ChevronDown,
  Heart,
  Share,
  Eye,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PublicHeader from "@/components/PublicHeader";

// Sample job data
const sampleJobs = [
  {
    id: 1,
    title: "Gmail Account Creation",
    description: "Need 50 new Gmail accounts with phone verification. Must be created from different IP addresses.",
    category: "Digital Marketing",
    subcategory: "Account Creation",
    client: "TechCorp Solutions",
    clientRating: 4.8,
    clientJobs: 15,
    budget: { min: 25, max: 50 },
    duration: "2-3 days",
    experienceLevel: "Entry Level",
    location: "Remote",
    country: "International",
    skills: ["Gmail", "Account Management", "Data Entry"],
    postedAt: "2 hours ago",
    proposals: 8,
    verified: true,
    urgent: false,
    featured: true,
    status: "Open",
  },
  {
    id: 2,
    title: "Facebook Page Management",
    description: "Looking for experienced social media manager to handle Facebook page for local restaurant. Daily posting and customer engagement required.",
    category: "Digital Marketing",
    subcategory: "Social Media",
    client: "Restaurant Owner",
    clientRating: 4.5,
    clientJobs: 8,
    budget: { min: 200, max: 400 },
    duration: "1 month",
    experienceLevel: "Intermediate",
    location: "Remote",
    country: "Bangladesh",
    skills: ["Facebook Marketing", "Social Media", "Content Creation"],
    postedAt: "5 hours ago",
    proposals: 15,
    verified: true,
    urgent: true,
    featured: false,
    status: "Open",
  },
  {
    id: 3,
    title: "WordPress Website Development",
    description: "Create a responsive WordPress website for small business. Include contact forms, gallery, and booking system.",
    category: "Web Development",
    subcategory: "WordPress",
    client: "Digital Agency",
    clientRating: 4.9,
    clientJobs: 45,
    budget: { min: 500, max: 800 },
    duration: "1-2 weeks",
    experienceLevel: "Expert",
    location: "Remote",
    country: "International",
    skills: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
    postedAt: "1 day ago",
    proposals: 25,
    verified: true,
    urgent: false,
    featured: true,
    status: "Open",
  },
  {
    id: 4,
    title: "Data Entry from PDF to Excel",
    description: "Convert 100 pages of PDF documents into Excel spreadsheet. Accuracy is very important.",
    category: "Data Entry",
    subcategory: "Excel",
    client: "Small Business",
    clientRating: 4.2,
    clientJobs: 3,
    budget: { min: 30, max: 60 },
    duration: "3-5 days",
    experienceLevel: "Entry Level",
    location: "Remote",
    country: "International",
    skills: ["Excel", "Data Entry", "PDF Conversion"],
    postedAt: "3 hours ago",
    proposals: 12,
    verified: false,
    urgent: false,
    featured: false,
    status: "Open",
  },
  {
    id: 5,
    title: "Mobile App UI/UX Design",
    description: "Design modern and user-friendly interface for iOS and Android mobile application. Figma files required.",
    category: "Design",
    subcategory: "UI/UX",
    client: "Startup Company",
    clientRating: 4.7,
    clientJobs: 12,
    budget: { min: 300, max: 600 },
    duration: "1-2 weeks",
    experienceLevel: "Intermediate",
    location: "Remote",
    country: "International",
    skills: ["Figma", "UI Design", "Mobile Design", "Prototyping"],
    postedAt: "6 hours ago",
    proposals: 18,
    verified: true,
    urgent: true,
    featured: false,
    status: "Open",
  },
  {
    id: 6,
    title: "YouTube Video Editing",
    description: "Edit promotional videos for YouTube channel. Add animations, transitions, and background music.",
    category: "Video & Animation",
    subcategory: "Video Editing",
    client: "Content Creator",
    clientRating: 4.6,
    clientJobs: 20,
    budget: { min: 100, max: 200 },
    duration: "1 week",
    experienceLevel: "Intermediate",
    location: "Remote",
    country: "International",
    skills: ["Video Editing", "After Effects", "Premiere Pro"],
    postedAt: "8 hours ago",
    proposals: 22,
    verified: true,
    urgent: false,
    featured: false,
    status: "Open",
  },
];

const categories = [
  "All Categories",
  "Web Development",
  "Digital Marketing", 
  "Design",
  "Data Entry",
  "Video & Animation",
  "Writing & Translation",
  "Programming",
];

const experienceLevels = [
  "All Levels",
  "Entry Level",
  "Intermediate", 
  "Expert",
];

const budgetRanges = [
  "All Budgets",
  "$0 - $50",
  "$50 - $200",
  "$200 - $500", 
  "$500 - $1000",
  "$1000+",
];

const sortOptions = [
  "Most Recent",
  "Budget: Low to High",
  "Budget: High to Low",
  "Most Proposals",
  "Fewest Proposals",
];

const countries = [
  "All Countries",
  "Bangladesh",
  "India",
  "Pakistan",
  "United States",
  "International",
];

export default function BrowseJobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedExperience, setSelectedExperience] = useState("All Levels");
  const [selectedBudget, setSelectedBudget] = useState("All Budgets");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const jobsPerPage = 6;

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    let filtered = sampleJobs.filter(job => {
      // Search filter
      if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !job.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "All Categories" && job.category !== selectedCategory) {
        return false;
      }

      // Experience filter
      if (selectedExperience !== "All Levels" && job.experienceLevel !== selectedExperience) {
        return false;
      }

      // Budget filter
      if (selectedBudget !== "All Budgets") {
        const budgetMin = job.budget.min;
        const budgetMax = job.budget.max;
        
        switch (selectedBudget) {
          case "$0 - $50":
            return budgetMax <= 50;
          case "$50 - $200":
            return budgetMin >= 50 && budgetMax <= 200;
          case "$200 - $500":
            return budgetMin >= 200 && budgetMax <= 500;
          case "$500 - $1000":
            return budgetMin >= 500 && budgetMax <= 1000;
          case "$1000+":
            return budgetMin >= 1000;
          default:
            return true;
        }
      }

      // Country filter
      if (selectedCountry !== "All Countries" && job.country !== selectedCountry) {
        return false;
      }

      return true;
    });

    // Sort jobs
    switch (sortBy) {
      case "Budget: Low to High":
        filtered.sort((a, b) => a.budget.min - b.budget.min);
        break;
      case "Budget: High to Low":
        filtered.sort((a, b) => b.budget.max - a.budget.max);
        break;
      case "Most Proposals":
        filtered.sort((a, b) => b.proposals - a.proposals);
        break;
      case "Fewest Proposals":
        filtered.sort((a, b) => a.proposals - b.proposals);
        break;
      default:
        // Most Recent (default)
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedExperience, selectedBudget, selectedCountry, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  const handleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setSelectedExperience("All Levels");
    setSelectedBudget("All Budgets");
    setSelectedCountry("All Countries");
    setSortBy("Most Recent");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="bg-brand-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Browse Jobs</h1>
            <p className="text-xl text-green-100 mb-8">
              Find the perfect job that matches your skills and interests
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs by title, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="text-xs"
                  >
                    Clear All
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    {experienceLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {/* Job Type Checkboxes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-brand-green focus:ring-brand-green" />
                      <span className="ml-2 text-sm text-gray-700">Featured Jobs</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-brand-green focus:ring-brand-green" />
                      <span className="ml-2 text-sm text-gray-700">Urgent Jobs</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-brand-green focus:ring-brand-green" />
                      <span className="ml-2 text-sm text-gray-700">Verified Clients</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">{filteredJobs.length}</span> jobs found
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(true)}
                    className="lg:hidden flex items-center"
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    {sortOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {paginatedJobs.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              ) : (
                paginatedJobs.map(job => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">
                                  <Link to={`/job/${job.id}`} className="hover:text-brand-green transition-colors">
                                    {job.title}
                                  </Link>
                                </h3>
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
                              
                              <p className="text-gray-600 mb-3 line-clamp-2">{job.description}</p>
                              
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                                <span className="flex items-center">
                                  <DollarSign className="w-4 h-4 mr-1" />
                                  ${job.budget.min} - ${job.budget.max}
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
                                {job.skills.map(skill => (
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
                                    <p className="text-sm font-medium text-gray-900 flex items-center">
                                      {job.client}
                                      {job.verified && (
                                        <span className="ml-1 text-brand-green">✓</span>
                                      )}
                                    </p>
                                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                                      <div className="flex items-center">
                                        <Star className="w-3 h-3 text-yellow-400 mr-1" />
                                        {job.clientRating}
                                      </div>
                                      <span>•</span>
                                      <span>{job.clientJobs} jobs posted</span>
                                      <span>•</span>
                                      <span>{job.postedAt}</span>
                                    </div>
                                  </div>
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
                            onClick={() => handleSaveJob(job.id)}
                            className={`${savedJobs.includes(job.id) ? 'text-red-600' : 'text-gray-400'}`}
                          >
                            <Heart className={`w-4 h-4 ${savedJobs.includes(job.id) ? 'fill-current' : ''}`} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400">
                            <Share className="w-4 h-4" />
                          </Button>
                          <Link to={`/job/${job.id}`}>
                            <Button className="bg-brand-green hover:bg-green-600">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "bg-brand-green hover:bg-green-600" : ""}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">GigClickers</h3>
              <p className="text-gray-300 mb-4">
                Find the perfect freelance opportunities that match your skills.
              </p>
              <p className="text-sm text-gray-400">
                &copy; 2024 GigClickers. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Freelancers</h4>
              <ul className="space-y-2">
                <li><Link to="/browse-jobs" className="text-gray-300 hover:text-white transition-colors">Browse Jobs</Link></li>
                <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/signup" className="text-gray-300 hover:text-white transition-colors">Sign Up</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Clients</h4>
              <ul className="space-y-2">
                <li><Link to="/post-job" className="text-gray-300 hover:text-white transition-colors">Post a Job</Link></li>
                <li><Link to="/why-choose-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</Link></li>
                <li><Link to="/signup" className="text-gray-300 hover:text-white transition-colors">Get Started</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";
import {
  Search,
  Clock,
  DollarSign,
  Star,
  MapPin,
  Calendar,
  Briefcase,
  Code,
  Palette,
  Megaphone,
  FileText,
  Smartphone,
  Video,
  Camera,
  Database,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";

// Comprehensive job data with more realistic entries
const jobListings = [
  {
    id: 1,
    title: "Build a React E-commerce Website",
    category: "Web Development",
    subcategory: "Frontend Development",
    reward: "$2,500",
    estimatedTime: "2-3 weeks",
    postedDate: "2 hours ago",
    location: "Remote",
    difficulty: "Intermediate",
    proposals: 15,
    rating: 4.8,
    verified: true,
    urgent: false,
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Logo Design for Tech Startup",
    category: "Graphic Design",
    subcategory: "Logo Design",
    reward: "$300",
    estimatedTime: "3-5 days",
    postedDate: "4 hours ago",
    location: "Remote",
    difficulty: "Beginner",
    proposals: 28,
    rating: 4.9,
    verified: true,
    urgent: true,
    skills: ["Adobe Illustrator", "Brand Design"],
  },
  {
    id: 3,
    title: "iOS Mobile App Development",
    category: "Mobile Development",
    subcategory: "iOS Development",
    reward: "$3,200",
    estimatedTime: "3-4 weeks",
    postedDate: "6 hours ago",
    location: "Remote",
    difficulty: "Expert",
    proposals: 8,
    rating: 4.7,
    verified: true,
    urgent: false,
    skills: ["Swift", "iOS", "Core Data"],
  },
  {
    id: 4,
    title: "Content Writing for Blog Posts",
    category: "Writing & Content",
    subcategory: "Blog Writing",
    reward: "$150",
    estimatedTime: "1 week",
    postedDate: "8 hours ago",
    location: "Remote",
    difficulty: "Beginner",
    proposals: 35,
    rating: 4.6,
    verified: false,
    urgent: false,
    skills: ["SEO Writing", "Research"],
  },
  {
    id: 5,
    title: "Data Analysis and Visualization",
    category: "Data Science",
    subcategory: "Data Analysis",
    reward: "$800",
    estimatedTime: "1-2 weeks",
    postedDate: "12 hours ago",
    location: "Remote",
    difficulty: "Intermediate",
    proposals: 12,
    rating: 4.8,
    verified: true,
    urgent: false,
    skills: ["Python", "Pandas", "Matplotlib"],
  },
  {
    id: 6,
    title: "Video Editing for YouTube Channel",
    category: "Video & Animation",
    subcategory: "Video Editing",
    reward: "$500",
    estimatedTime: "5-7 days",
    postedDate: "1 day ago",
    location: "Remote",
    difficulty: "Intermediate",
    proposals: 22,
    rating: 4.5,
    verified: true,
    urgent: true,
    skills: ["Adobe Premiere Pro", "After Effects"],
  },
  {
    id: 7,
    title: "WordPress Website Development",
    category: "Web Development",
    subcategory: "WordPress",
    reward: "$1,200",
    estimatedTime: "2 weeks",
    postedDate: "1 day ago",
    location: "Remote",
    difficulty: "Intermediate",
    proposals: 18,
    rating: 4.7,
    verified: true,
    urgent: false,
    skills: ["WordPress", "PHP", "CSS"],
  },
  {
    id: 8,
    title: "Social Media Marketing Campaign",
    category: "Digital Marketing",
    subcategory: "Social Media",
    reward: "$600",
    estimatedTime: "2-3 weeks",
    postedDate: "2 days ago",
    location: "Remote",
    difficulty: "Intermediate",
    proposals: 31,
    rating: 4.4,
    verified: false,
    urgent: false,
    skills: ["Facebook Ads", "Instagram", "Analytics"],
  },
  {
    id: 9,
    title: "UI/UX Design for Mobile App",
    category: "Design",
    subcategory: "UI/UX Design",
    reward: "$1,800",
    estimatedTime: "2-3 weeks",
    postedDate: "2 days ago",
    location: "Remote",
    difficulty: "Expert",
    proposals: 14,
    rating: 4.9,
    verified: true,
    urgent: false,
    skills: ["Figma", "User Research", "Prototyping"],
  },
  {
    id: 10,
    title: "SEO Optimization for E-commerce Site",
    category: "Digital Marketing",
    subcategory: "SEO",
    reward: "$450",
    estimatedTime: "1-2 weeks",
    postedDate: "3 days ago",
    location: "Remote",
    difficulty: "Intermediate",
    proposals: 26,
    rating: 4.6,
    verified: true,
    urgent: false,
    skills: ["SEO", "Google Analytics", "Keyword Research"],
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Web Development":
      return Code;
    case "Graphic Design":
    case "Design":
      return Palette;
    case "Mobile Development":
      return Smartphone;
    case "Writing & Content":
      return FileText;
    case "Digital Marketing":
      return Megaphone;
    case "Video & Animation":
      return Video;
    case "Data Science":
      return Database;
    default:
      return Briefcase;
  }
};

const formatTimeAgo = (timeString: string) => {
  return timeString;
};

export default function JobBoard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-brand-green text-white shadow-lg">
        {/* Top Navigation */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-bold hover:text-green-100 transition-colors"
            >
              GigClickers
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/find-jobs"
                className="hover:text-green-100 transition-colors"
              >
                Find Jobs
              </Link>
              <Link
                to="/my-account"
                className="hover:text-green-100 transition-colors"
              >
                My Account
              </Link>
              <Link
                to="/browse-jobs"
                className="hover:text-green-100 transition-colors"
              >
                Browse Jobs
              </Link>
              <Link
                to="/post-new-job"
                className="hover:text-green-100 transition-colors"
              >
                Post a New Job
              </Link>
              <button className="bg-white text-brand-green px-4 py-2 rounded font-medium hover:bg-green-50 transition-colors">
                Post a Job
              </button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="bg-green-600 border-t border-green-400">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-6">
                <Link
                  to="/"
                  className="text-white hover:text-green-100 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/my-work"
                  className="text-white hover:text-green-100 transition-colors"
                >
                  My Work
                </Link>
                <Link
                  to="/job-board"
                  className="text-white hover:text-green-100 transition-colors font-medium bg-green-500 px-3 py-1 rounded"
                >
                  Job Board
                </Link>
              </nav>
              <button className="bg-green-500 hover:bg-green-400 px-4 py-1 rounded text-sm font-medium transition-colors">
                Find Jobs
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green">
              <option>All Categories</option>
              <option>Web Development</option>
              <option>Design</option>
              <option>Mobile Development</option>
              <option>Writing & Content</option>
              <option>Digital Marketing</option>
            </select>
            <button className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Job Listings Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                    Job Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                    Rewards
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                    Search/Est. time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                    Most Recent
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobListings.map((job, index) => {
                  const IconComponent = getCategoryIcon(job.category);
                  return (
                    <tr
                      key={job.id}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 1 ? "bg-gray-25" : "bg-white"
                      }`}
                    >
                      {/* Job Title */}
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-brand-green" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <Link
                              to={`/job/${job.id}`}
                              className="text-brand-green hover:text-green-600 font-medium transition-colors block"
                            >
                              {job.title}
                              {job.urgent && (
                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                                  Urgent
                                </span>
                              )}
                              {job.verified && (
                                <span className="ml-2 inline-flex items-center">
                                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                </span>
                              )}
                            </Link>
                            <div className="flex items-center mt-1 text-xs text-gray-500">
                              <span>{job.difficulty}</span>
                              <span className="mx-1">•</span>
                              <span>{job.proposals} proposals</span>
                              <span className="mx-1">•</span>
                              <span className="flex items-center">
                                <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                {job.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {job.category}
                        </div>
                        <div className="text-xs text-gray-500">
                          {job.subcategory}
                        </div>
                      </td>

                      {/* Rewards */}
                      <td className="px-6 py-4">
                        <div className="flex items-center text-brand-green font-semibold">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.reward.replace("$", "")}
                        </div>
                        <div className="text-xs text-gray-500">Fixed Price</div>
                      </td>

                      {/* Search/Est. time */}
                      <td className="px-6 py-4">
                        <div className="flex items-center text-gray-700">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          {job.estimatedTime}
                        </div>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          {job.location}
                        </div>
                      </td>

                      {/* Most Recent */}
                      <td className="px-6 py-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {formatTimeAgo(job.postedDate)}
                        </div>
                        <div className="mt-1">
                          <div className="flex flex-wrap gap-1">
                            {job.skills.slice(0, 2).map((skill, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
                              >
                                {skill}
                              </span>
                            ))}
                            {job.skills.length > 2 && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                +{job.skills.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden">
            {jobListings.map((job) => {
              const IconComponent = getCategoryIcon(job.category);
              return (
                <div
                  key={job.id}
                  className="border-b border-gray-100 p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <IconComponent className="w-6 h-6 text-brand-green mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/job/${job.id}`}
                        className="text-brand-green hover:text-green-600 font-medium transition-colors block mb-1"
                      >
                        {job.title}
                      </Link>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-600">
                          {job.category}
                        </span>
                        {job.urgent && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                            Urgent
                          </span>
                        )}
                        {job.verified && (
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        )}
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-brand-green font-semibold">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.reward.replace("$", "")}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.estimatedTime}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{job.postedDate}</span>
                        <span>{job.proposals} proposals</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {job.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">147</span> results
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-2 text-sm bg-brand-green text-white rounded-lg">
              1
            </button>
            <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              3
            </button>
            <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-green text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GigClickers</h3>
              <p className="text-green-100 text-sm mb-4">
                Connecting talent with opportunity worldwide.
              </p>
              <p className="text-xs text-green-200">
                &copy; 2024 GigClickers. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">About</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/press"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/terms"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dmca"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    DMCA
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

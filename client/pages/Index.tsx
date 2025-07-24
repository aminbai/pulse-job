import { Link } from "react-router-dom";
import { 
  Briefcase, 
  DollarSign, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Clock,
  Search
} from "lucide-react";

const jobListings = [
  {
    id: 1,
    title: "Senior React Developer",
    category: "Web Development",
    reward: "$2,500",
    estimatedTime: "2-3 weeks",
    postedDate: "2 hours ago",
    icon: "💻"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    category: "Design",
    reward: "$1,800",
    estimatedTime: "1-2 weeks",
    postedDate: "4 hours ago",
    icon: "🎨"
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "Mobile Development",
    reward: "$3,200",
    estimatedTime: "3-4 weeks",
    postedDate: "6 hours ago",
    icon: "📱"
  },
  {
    id: 4,
    title: "Content Writer",
    category: "Writing",
    reward: "$800",
    estimatedTime: "1 week",
    postedDate: "1 day ago",
    icon: "✍️"
  },
  {
    id: 5,
    title: "Data Analysis Project",
    category: "Data Science",
    reward: "$2,100",
    estimatedTime: "2 weeks",
    postedDate: "1 day ago",
    icon: "📊"
  },
  {
    id: 6,
    title: "Logo Design",
    category: "Graphic Design",
    reward: "$450",
    estimatedTime: "3-5 days",
    postedDate: "2 days ago",
    icon: "🖼️"
  },
  {
    id: 7,
    title: "E-commerce Website",
    category: "Web Development",
    reward: "$4,500",
    estimatedTime: "4-6 weeks",
    postedDate: "3 days ago",
    icon: "🛒"
  },
  {
    id: 8,
    title: "Video Editing",
    category: "Video Production",
    reward: "$1,200",
    estimatedTime: "1 week",
    postedDate: "4 days ago",
    icon: "🎬"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-text-dark font-sans">
      {/* Header */}
      <header className="bg-brand-green text-white">
        {/* Top Navigation */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              Giglancers
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/find-jobs" className="hover:text-green-100 transition-colors">Find Jobs</Link>
              <Link to="/my-account" className="hover:text-green-100 transition-colors">My Account</Link>
              <Link to="/browse-jobs" className="hover:text-green-100 transition-colors">Browse Jobs</Link>
              <Link to="/post-new-job" className="hover:text-green-100 transition-colors">Post a New Job</Link>
              <button className="bg-transparent border-2 border-white px-4 py-2 rounded hover:bg-white hover:text-brand-green transition-colors">
                Post a Job
              </button>
            </nav>
            {/* Mobile menu button */}
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="bg-green-600 border-t border-green-400">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-6">
                <Link to="/" className="text-white hover:text-green-100 transition-colors font-medium">Home</Link>
                <Link to="/my-work" className="text-white hover:text-green-100 transition-colors">My work</Link>
              </nav>
              <button className="bg-green-500 hover:bg-green-400 px-4 py-1 rounded text-sm font-medium transition-colors">
                Find jobs
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-text-dark">Job title</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-text-dark">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-text-dark">Rewards</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-text-dark">Search/Est. time</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-text-dark">Most Recent</th>
                </tr>
              </thead>
              <tbody>
                {jobListings.map((job, index) => (
                  <tr 
                    key={job.id} 
                    className={`border-b hover:bg-gray-50 transition-colors ${
                      index % 2 === 1 ? 'bg-table-stripe' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{job.icon}</span>
                        <Link 
                          to={`/job/${job.id}`} 
                          className="text-brand-green hover:text-green-600 font-medium transition-colors"
                        >
                          {job.title}
                        </Link>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{job.category}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-green-600 font-semibold">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.reward.replace('$', '')}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.estimatedTime}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{job.postedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden">
            {jobListings.map((job) => (
              <div key={job.id} className="border-b p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-3 mb-2">
                  <span className="text-2xl">{job.icon}</span>
                  <div className="flex-1">
                    <Link
                      to={`/job/${job.id}`}
                      className="text-brand-green hover:text-green-600 font-medium transition-colors block mb-1"
                    >
                      {job.title}
                    </Link>
                    <p className="text-sm text-gray-600 mb-2">{job.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-green-600 font-semibold">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.reward.replace('$', '')}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.estimatedTime}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{job.postedDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination or Load More Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-brand-green text-white px-6 py-2 rounded hover:bg-green-600 transition-colors">
            Load More Jobs
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-green text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p>&copy; GigClickers</p>
              <p className="text-sm text-green-100">All Rights Reserved</p>
            </div>

            {/* Footer Links */}
            <nav className="flex flex-wrap justify-center space-x-6">
              <Link to="/about" className="hover:text-green-100 transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-green-100 transition-colors">Contact Us</Link>
              <Link to="/privacy" className="hover:text-green-100 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-green-100 transition-colors">Terms of Service</Link>
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-100 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-100 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-100 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-100 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

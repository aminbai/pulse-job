import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Star,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Search,
} from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";

const myJobs = [
  {
    id: 1,
    title: "গমেইল নতুন একাউন্ট তৈরি করার জন্য ১০ টাকা",
    status: "submitted",
    progress: "14/16",
    notRated: 2,
    cost: "$0.062",
    statusIcon: "⏳",
  }
];

export default function MyJobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("most-recent");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">My Jobs</h1>
          <p className="text-gray-600">Submitted works must be rated within six days</p>
          <p className="text-sm text-gray-500 mt-1">1 Result</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search Job Title"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                />
              </div>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
            >
              <option value="most-recent">Most Recent</option>
              <option value="oldest">Oldest</option>
              <option value="highest-pay">Highest Pay</option>
              <option value="lowest-pay">Lowest Pay</option>
            </select>
          </div>
        </div>

        {/* Jobs Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Job Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Progress
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Not Rated
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {myJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{job.statusIcon}</span>
                        <span className="text-sm text-gray-600 capitalize">{job.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link 
                        to={`/job/${job.id}`}
                        className="text-brand-green hover:text-green-600 font-medium transition-colors"
                      >
                        {job.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {job.progress}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {job.notRated}
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {job.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden p-4 space-y-4">
            {myJobs.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{job.statusIcon}</span>
                  <span className="text-sm text-gray-600 capitalize">{job.status}</span>
                </div>
                <Link 
                  to={`/job/${job.id}`}
                  className="text-brand-green hover:text-green-600 font-medium transition-colors block mb-2"
                >
                  {job.title}
                </Link>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Progress: </span>
                    <span className="font-medium">{job.progress}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Not Rated: </span>
                    <span className="font-medium">{job.notRated}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Cost: </span>
                    <span className="font-medium">{job.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {myJobs.length === 0 && (
            <div className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Clock className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs yet</h3>
              <p className="text-gray-600 mb-4">
                Your submitted jobs will appear here.
              </p>
              <Link
                to="/job-board"
                className="inline-flex items-center px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Browse Jobs
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-green-light text-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-green">GigClickers</h3>
              <p className="text-sm mb-4">
                Connecting talent with opportunity worldwide.
              </p>
              <p className="text-xs text-gray-600">
                &copy; 2025 gigclickers.com. All Rights Reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">About GigClickers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-600 hover:text-brand-green transition-colors">About Us</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-brand-green transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-brand-green transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Agreement</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/microjob" className="text-gray-600 hover:text-brand-green transition-colors">Microjob Marketplace</Link></li>
                <li><Link to="/deal" className="text-gray-600 hover:text-brand-green transition-colors">Deal Marketplace</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

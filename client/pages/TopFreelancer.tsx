import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Crown,
  Star,
  TrendingUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Medal,
} from "lucide-react";

const topFreelancers = [
  {
    id: 1,
    username: "1729567585",
    country: "Bangladesh",
    success: "77%",
    earned: "$471.856",
    tasks: 1748,
    rank: 1,
  },
  {
    id: 2,
    username: "Mamun111",
    country: "Bangladesh",
    success: "80%",
    earned: "$427.736",
    tasks: 436,
    rank: 2,
  },
  {
    id: 3,
    username: "Rakibonlin",
    country: "Bangladesh",
    success: "97%",
    earned: "$425.073",
    tasks: 462,
    rank: 3,
  },
  {
    id: 4,
    username: "Ry58",
    country: "Bangladesh",
    success: "98%",
    earned: "$305.920",
    tasks: 442,
    rank: 4,
  },
  {
    id: 5,
    username: "rimonkr202",
    country: "Bangladesh",
    success: "74%",
    earned: "$278.138",
    tasks: 1763,
    rank: 5,
  },
  {
    id: 6,
    username: "miyad8",
    country: "Bangladesh",
    success: "95%",
    earned: "$277.760",
    tasks: 21,
    rank: 6,
  },
  {
    id: 7,
    username: "rahat1819",
    country: "Bangladesh",
    success: "89%",
    earned: "$276.500",
    tasks: 820,
    rank: 7,
  },
  {
    id: 8,
    username: "Nahid540",
    country: "Bangladesh",
    success: "90%",
    earned: "$266.209",
    tasks: 1418,
    rank: 8,
  },
  {
    id: 9,
    username: "Farjana262",
    country: "Bangladesh",
    success: "96%",
    earned: "$255.247",
    tasks: 505,
    rank: 9,
  },
  {
    id: 10,
    username: "Rakiba1234",
    country: "Bangladesh",
    success: "96%",
    earned: "$239.764",
    tasks: 941,
    rank: 10,
  },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-5 h-5 text-yellow-500" />;
    case 2:
      return <Medal className="w-5 h-5 text-gray-400" />;
    case 3:
      return <Medal className="w-5 h-5 text-amber-600" />;
    default:
      return <span className="w-5 h-5 flex items-center justify-center text-gray-600 font-bold">{rank}</span>;
  }
};

export default function TopFreelancer() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-brand-green text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-green-100 transition-colors">
              GigClickers
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/my-post"
                className="hover:text-green-100 transition-colors"
              >
                My Post ▼
              </Link>
              <Link
                to="/my-work"
                className="hover:text-green-100 transition-colors"
              >
                My Work ▼
              </Link>
              <Link
                to="/browse-deal"
                className="hover:text-green-100 transition-colors"
              >
                Browse Deal ▼
              </Link>
              <Link
                to="/deal-history"
                className="hover:text-green-100 transition-colors"
              >
                Deal History ▼
              </Link>
              <Link
                to="/deposit"
                className="hover:text-green-100 transition-colors"
              >
                Deposit
              </Link>
              <Link
                to="/post-job"
                className="bg-white text-brand-green px-4 py-2 rounded font-medium hover:bg-green-50 transition-colors"
              >
                POST JOB
              </Link>
            </nav>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-green-600 py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between text-sm">
              <span>Pending: $0.000</span>
              <span>Earned: $0.000</span>
              <span>Deposit: $1.909</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-6 h-6 text-brand-green" />
            <h1 className="text-2xl font-semibold text-gray-900">Top Freelancer</h1>
          </div>
          <p className="text-sm text-gray-600">{topFreelancers.length} Result</p>
        </div>

        {/* Freelancers Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Rank
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Username
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Country
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Success
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Earned
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Tasks
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topFreelancers.map((freelancer) => (
                  <tr 
                    key={freelancer.id} 
                    className={`hover:bg-gray-50 transition-colors ${
                      freelancer.rank <= 3 ? 'bg-yellow-50' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {getRankIcon(freelancer.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link 
                        to={`/freelancer/${freelancer.username}`}
                        className="text-brand-green hover:text-green-600 font-medium transition-colors"
                      >
                        {freelancer.username}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {freelancer.country}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className={`font-medium ${
                          parseInt(freelancer.success) >= 90 ? 'text-green-600' :
                          parseInt(freelancer.success) >= 80 ? 'text-yellow-600' :
                          'text-gray-600'
                        }`}>
                          {freelancer.success}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-brand-green font-semibold">
                      {freelancer.earned}
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {freelancer.tasks.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden p-4 space-y-4">
            {topFreelancers.map((freelancer) => (
              <div 
                key={freelancer.id} 
                className={`rounded-lg p-4 ${
                  freelancer.rank <= 3 ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getRankIcon(freelancer.rank)}
                    <Link 
                      to={`/freelancer/${freelancer.username}`}
                      className="text-brand-green hover:text-green-600 font-medium transition-colors"
                    >
                      {freelancer.username}
                    </Link>
                  </div>
                  <span className="text-brand-green font-semibold">
                    {freelancer.earned}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Country: </span>
                    <span className="font-medium">{freelancer.country}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Success: </span>
                    <span className={`font-medium ${
                      parseInt(freelancer.success) >= 90 ? 'text-green-600' :
                      parseInt(freelancer.success) >= 80 ? 'text-yellow-600' :
                      'text-gray-600'
                    }`}>
                      {freelancer.success}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Tasks: </span>
                    <span className="font-medium">{freelancer.tasks.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
            <span className="font-medium">{topFreelancers.length}</span> results
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-2 text-sm bg-brand-green text-white rounded-lg">1</button>
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

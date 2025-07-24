import { Link } from "react-router-dom";
import {
  Briefcase,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  Settings,
  Bell,
  Eye,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Plus,
  ArrowRight,
} from "lucide-react";

const dashboardStats = [
  {
    title: "Active Jobs",
    value: "8",
    change: "+2 this week",
    icon: Briefcase,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Total Earnings",
    value: "$4,250",
    change: "+$850 this month",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Completed Projects",
    value: "23",
    change: "+5 this month",
    icon: CheckCircle,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Client Rating",
    value: "4.9",
    change: "Excellent",
    icon: Star,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
];

const recentJobs = [
  {
    id: 1,
    title: "React E-commerce Website",
    client: "TechCorp Inc.",
    status: "In Progress",
    dueDate: "Dec 15, 2024",
    budget: "$2,500",
    progress: 75,
  },
  {
    id: 2,
    title: "Mobile App UI Design",
    client: "StartupXYZ",
    status: "Review",
    dueDate: "Dec 10, 2024",
    budget: "$800",
    progress: 100,
  },
  {
    id: 3,
    title: "Logo Design Project",
    client: "Brand Solutions",
    status: "Completed",
    dueDate: "Dec 5, 2024",
    budget: "$300",
    progress: 100,
  },
];

const recentActivity = [
  {
    id: 1,
    action: "New job proposal submitted",
    project: "WordPress Website Development",
    time: "2 hours ago",
    type: "proposal",
  },
  {
    id: 2,
    action: "Payment received",
    project: "Logo Design Project",
    time: "1 day ago",
    type: "payment",
  },
  {
    id: 3,
    action: "Project milestone completed",
    project: "React E-commerce Website",
    time: "2 days ago",
    type: "milestone",
  },
  {
    id: 4,
    action: "New message from client",
    project: "Mobile App UI Design",
    time: "3 days ago",
    type: "message",
  },
];

export default function Dashboard() {
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
                to="/find-jobs"
                className="hover:text-green-100 transition-colors"
              >
                Find Jobs
              </Link>
              <Link
                to="/dashboard"
                className="hover:text-green-100 transition-colors bg-green-600 px-3 py-1 rounded font-medium"
              >
                Dashboard
              </Link>
              <Link
                to="/job-board"
                className="hover:text-green-100 transition-colors"
              >
                Job Board
              </Link>
              <Link
                to="/my-work"
                className="hover:text-green-100 transition-colors"
              >
                My Work
              </Link>
              <Link
                to="/post-job"
                className="bg-white text-brand-green px-4 py-2 rounded font-medium hover:bg-green-50 transition-colors"
              >
                POST JOB
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">3</span>
              </button>
              <Link to="/settings">
                <Settings className="w-6 h-6 hover:text-green-100 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your projects today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.change}</p>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Jobs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Jobs</h2>
                  <Link 
                    to="/my-work" 
                    className="text-brand-green hover:text-green-600 transition-colors flex items-center"
                  >
                    View all <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                          <p className="text-sm text-gray-600">Client: {job.client}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          job.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          job.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {job.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Due: {job.dueDate}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.budget}
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-brand-green h-2 rounded-full transition-all duration-300"
                          style={{ width: `${job.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{job.progress}% Complete</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'proposal' ? 'bg-blue-100' :
                        activity.type === 'payment' ? 'bg-green-100' :
                        activity.type === 'milestone' ? 'bg-purple-100' :
                        'bg-orange-100'
                      }`}>
                        {activity.type === 'proposal' && <FileText className="w-4 h-4 text-blue-600" />}
                        {activity.type === 'payment' && <DollarSign className="w-4 h-4 text-green-600" />}
                        {activity.type === 'milestone' && <CheckCircle className="w-4 h-4 text-purple-600" />}
                        {activity.type === 'message' && <MessageSquare className="w-4 h-4 text-orange-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600 truncate">{activity.project}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm mt-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <Link 
                    to="/post-job"
                    className="w-full bg-brand-green text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Post New Job
                  </Link>
                  <Link 
                    to="/find-jobs"
                    className="w-full border border-brand-green text-brand-green px-4 py-3 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Find Jobs
                  </Link>
                  <Link 
                    to="/job-board"
                    className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Browse Jobs
                  </Link>
                </div>
              </div>
            </div>
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
                <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-green-100 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/press" className="text-green-100 hover:text-white transition-colors">Press</Link></li>
                <li><Link to="/blog" className="text-green-100 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="text-green-100 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-green-100 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-green-100 hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link to="/dmca" className="text-green-100 hover:text-white transition-colors">DMCA</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
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

import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Star, Clock, Search, Globe, MapPin, CheckCircle, ArrowLeft, ArrowRight, Plus,
  Briefcase, DollarSign, Calendar, FileText, MessageSquare, Filter, Eye, Users,
  TrendingUp, Award, Target, BookmarkIcon, Send, Download, Upload, Edit, Trash2,
  Bell, Settings, CreditCard, BarChart3, PieChart, Activity, Zap, Heart,
  AlertTriangle, Info, Package, Truck, ShoppingCart, Home, UserCheck, Timer,
  Phone, Mail, ExternalLink, Copy, Share2, ThumbsUp, ThumbsDown, Flag,
  Archive, RefreshCw, MoreHorizontal, ChevronDown, ChevronUp, X, Check,
  AlertCircle, Wallet, TrendingDown, LineChart, Layers, Grid, List
} from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";

// Types
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'freelancer' | 'buyer' | 'both';
  rating: number;
  completedJobs: number;
  totalEarnings: number;
  joinDate: string;
  skills: string[];
  verified: boolean;
  location: string;
  level: 'Beginner' | 'Intermediate' | 'Expert' | 'Top Rated';
}

interface Job {
  id: string;
  title: string;
  description: string;
  client: string;
  freelancer?: string;
  budget: number;
  status: 'active' | 'in_progress' | 'completed' | 'cancelled' | 'disputed' | 'pending' | 'submitted';
  category: string;
  subcategory: string;
  postedDate: string;
  deadline: string;
  progress: number;
  applications: number;
  requirements: string[];
  skills: string[];
  priority: 'low' | 'medium' | 'high' | 'urgent';
  featured: boolean;
  urgent: boolean;
  clientRating?: number;
  freelancerRating?: number;
}

interface Message {
  id: string;
  from: string;
  to: string;
  content: string;
  timestamp: string;
  read: boolean;
  type: 'text' | 'file' | 'system';
}

interface Transaction {
  id: string;
  type: 'earned' | 'spent' | 'withdrawal' | 'deposit' | 'fee';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  jobId?: string;
}

export default function Dashboard() {
  // User state - This would come from context/auth in real app
  const [currentUser] = useState<User>({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'both', // both freelancer and buyer
    rating: 4.8,
    completedJobs: 45,
    totalEarnings: 12500,
    joinDate: '2023-06-15',
    skills: ['React', 'Node.js', 'UI/UX Design', 'Python', 'WordPress'],
    verified: true,
    location: 'Dhaka, Bangladesh',
    level: 'Expert'
  });

  // State management
  const [activeTab, setActiveTab] = useState("overview");
  const [viewMode, setViewMode] = useState<'freelancer' | 'buyer'>('freelancer');
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock data
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      title: 'React E-commerce Website Development',
      description: 'Build a complete e-commerce platform with React, Redux, and payment integration.',
      client: 'TechCorp Inc.',
      freelancer: 'John Doe',
      budget: 2500,
      status: 'in_progress',
      category: 'Web Development',
      subcategory: 'Frontend Development',
      postedDate: '2024-01-10',
      deadline: '2024-02-15',
      progress: 75,
      applications: 23,
      requirements: ['React experience', 'Redux knowledge', 'Payment gateway integration'],
      skills: ['React', 'Redux', 'JavaScript', 'CSS'],
      priority: 'high',
      featured: true,
      urgent: false,
      clientRating: 4.9,
      freelancerRating: 4.8
    },
    {
      id: '2',
      title: 'Mobile App UI/UX Design',
      description: 'Create modern, user-friendly mobile app design for iOS and Android.',
      client: 'StartupXYZ',
      budget: 800,
      status: 'completed',
      category: 'Design',
      subcategory: 'UI/UX Design',
      postedDate: '2024-01-05',
      deadline: '2024-01-20',
      progress: 100,
      applications: 15,
      requirements: ['Figma proficiency', 'Mobile design experience'],
      skills: ['Figma', 'Adobe XD', 'UI Design', 'UX Research'],
      priority: 'medium',
      featured: false,
      urgent: false,
      clientRating: 5.0,
      freelancerRating: 4.7
    },
    {
      id: '3',
      title: 'WordPress Blog Website',
      description: 'Simple blog website with custom theme and basic functionality.',
      client: 'Blog Solutions',
      budget: 500,
      status: 'active',
      category: 'Web Development',
      subcategory: 'WordPress',
      postedDate: '2024-01-12',
      deadline: '2024-01-30',
      progress: 0,
      applications: 8,
      requirements: ['WordPress expertise', 'Custom theme development'],
      skills: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
      priority: 'low',
      featured: false,
      urgent: true,
      clientRating: 4.5
    },
    {
      id: '4',
      title: 'Python Data Analysis Script',
      description: 'Create data analysis scripts for processing CSV files and generating reports.',
      client: 'DataTech Solutions',
      budget: 350,
      status: 'pending',
      category: 'Programming',
      subcategory: 'Python Development',
      postedDate: '2024-01-08',
      deadline: '2024-01-25',
      progress: 0,
      applications: 12,
      requirements: ['Python expertise', 'Data analysis experience', 'Pandas/NumPy'],
      skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
      priority: 'medium',
      featured: false,
      urgent: false
    }
  ]);

  const [transactions] = useState<Transaction[]>([
    {
      id: 'T001',
      type: 'earned',
      amount: 800,
      description: 'Payment for Mobile App UI/UX Design',
      date: '2024-01-20',
      status: 'completed',
      jobId: '2'
    },
    {
      id: 'T002',
      type: 'spent',
      amount: 500,
      description: 'Payment for WordPress Blog Website',
      date: '2024-01-15',
      status: 'completed',
      jobId: '3'
    },
    {
      id: 'T003',
      type: 'fee',
      amount: 80,
      description: 'Platform fee (10%)',
      date: '2024-01-20',
      status: 'completed'
    },
    {
      id: 'T004',
      type: 'withdrawal',
      amount: 1000,
      description: 'Bank withdrawal',
      date: '2024-01-18',
      status: 'pending'
    }
  ]);

  const [messages] = useState<Message[]>([
    {
      id: 'M001',
      from: 'TechCorp Inc.',
      to: 'John Doe',
      content: 'Great progress on the e-commerce project! The dashboard looks fantastic.',
      timestamp: '2024-01-15T10:30:00Z',
      read: false,
      type: 'text'
    },
    {
      id: 'M002',
      from: 'John Doe',
      to: 'StartupXYZ',
      content: 'UI designs are ready for review. Please check the Figma file.',
      timestamp: '2024-01-14T15:45:00Z',
      read: true,
      type: 'text'
    }
  ]);

  // Computed values
  const freelancerStats = useMemo(() => {
    const freelancerJobs = jobs.filter(job => job.freelancer === currentUser.name);
    const activeJobs = freelancerJobs.filter(job => ['active', 'in_progress'].includes(job.status));
    const completedJobs = freelancerJobs.filter(job => job.status === 'completed');
    const totalEarnings = completedJobs.reduce((sum, job) => sum + job.budget, 0);
    
    return {
      activeJobs: activeJobs.length,
      completedJobs: completedJobs.length,
      totalEarnings,
      averageRating: currentUser.rating,
      pendingJobs: freelancerJobs.filter(job => job.status === 'pending').length
    };
  }, [jobs, currentUser]);

  const buyerStats = useMemo(() => {
    const buyerJobs = jobs.filter(job => job.client === currentUser.name || job.client.includes('Corp') || job.client.includes('Solutions'));
    const activeJobs = buyerJobs.filter(job => ['active', 'in_progress'].includes(job.status));
    const completedJobs = buyerJobs.filter(job => job.status === 'completed');
    const totalSpent = completedJobs.reduce((sum, job) => sum + job.budget, 0);
    
    return {
      activeProjects: activeJobs.length,
      completedProjects: completedJobs.length,
      totalSpent,
      savedJobs: 5,
      applicationsReceived: buyerJobs.reduce((sum, job) => sum + job.applications, 0)
    };
  }, [jobs, currentUser]);

  const filteredJobs = useMemo(() => {
    let filtered = jobs;
    
    if (viewMode === 'freelancer') {
      filtered = jobs.filter(job => job.freelancer === currentUser.name || !job.freelancer);
    } else {
      filtered = jobs.filter(job => job.client === currentUser.name || job.client.includes('Corp') || job.client.includes('Solutions'));
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter(job => job.status === filterStatus);
    }

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'budget':
          return b.budget - a.budget;
        case 'deadline':
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        case 'applications':
          return b.applications - a.applications;
        default:
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
      }
    });
  }, [jobs, viewMode, filterStatus, searchTerm, sortBy, currentUser.name]);

  const unreadMessages = messages.filter(msg => !msg.read && msg.to === currentUser.name).length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'in_progress': return 'bg-purple-100 text-purple-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'disputed': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'active': return Activity;
      case 'in_progress': return Clock;
      case 'pending': return Timer;
      case 'cancelled': return X;
      case 'disputed': return AlertTriangle;
      default: return Clock;
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Welcome back, {currentUser.name}!
            </h1>
            <p className="text-blue-100 mb-4">
              {viewMode === 'freelancer' 
                ? `You have ${freelancerStats.activeJobs} active projects and ${unreadMessages} new messages.`
                : `You have ${buyerStats.activeProjects} active projects and ${buyerStats.applicationsReceived} total applications.`
              }
            </p>
            <div className="flex items-center gap-4">
              <Badge className="bg-white text-blue-600">
                {currentUser.level}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{currentUser.rating}</span>
              </div>
              {currentUser.verified && (
                <Badge className="bg-green-500">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
          </div>
          <Avatar className="w-16 h-16 md:w-20 md:h-20">
            <AvatarImage src={currentUser.avatar} />
            <AvatarFallback className="text-2xl">{currentUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Mode Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Dashboard View</h2>
          <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg">
            <Button
              variant={viewMode === 'freelancer' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('freelancer')}
              className="flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Freelancer
            </Button>
            <Button
              variant={viewMode === 'buyer' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('buyer')}
              className="flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Buyer
            </Button>
          </div>
        </div>
        <Button variant="outline" onClick={() => setShowNotifications(!showNotifications)}>
          <Bell className="w-4 h-4 mr-2" />
          Notifications
          {unreadMessages > 0 && (
            <Badge className="ml-2 bg-red-500">{unreadMessages}</Badge>
          )}
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {viewMode === 'freelancer' ? (
          <>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                    <p className="text-2xl font-bold text-gray-900">{freelancerStats.activeJobs}</p>
                    <p className="text-sm text-green-600">+2 this week</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                    <p className="text-2xl font-bold text-gray-900">${freelancerStats.totalEarnings.toLocaleString()}</p>
                    <p className="text-sm text-green-600">+$850 this month</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed Projects</p>
                    <p className="text-2xl font-bold text-gray-900">{freelancerStats.completedJobs}</p>
                    <p className="text-sm text-green-600">+5 this month</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Average Rating</p>
                    <p className="text-2xl font-bold text-gray-900">{freelancerStats.averageRating}</p>
                    <p className="text-sm text-yellow-600">Excellent</p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Projects</p>
                    <p className="text-2xl font-bold text-gray-900">{buyerStats.activeProjects}</p>
                    <p className="text-sm text-blue-600">In progress</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Spent</p>
                    <p className="text-2xl font-bold text-gray-900">${buyerStats.totalSpent.toLocaleString()}</p>
                    <p className="text-sm text-red-600">On projects</p>
                  </div>
                  <div className="p-3 bg-red-100 rounded-lg">
                    <CreditCard className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed Projects</p>
                    <p className="text-2xl font-bold text-gray-900">{buyerStats.completedProjects}</p>
                    <p className="text-sm text-green-600">Successfully delivered</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Applications Received</p>
                    <p className="text-2xl font-bold text-gray-900">{buyerStats.applicationsReceived}</p>
                    <p className="text-sm text-purple-600">Total applications</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Jobs */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent {viewMode === 'freelancer' ? 'Jobs' : 'Projects'}</CardTitle>
                <Link
                  to={viewMode === 'freelancer' ? '/my-work' : '/my-jobs'}
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                >
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredJobs.slice(0, 3).map((job) => {
                  const StatusIcon = getStatusIcon(job.status);
                  return (
                    <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                          <p className="text-sm text-gray-600">
                            {viewMode === 'freelancer' ? `Client: ${job.client}` : `Freelancer: ${job.freelancer || 'Not assigned'}`}
                          </p>
                        </div>
                        <Badge className={getStatusColor(job.status)}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {job.status.replace('_', ' ')}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Due: {new Date(job.deadline).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-green-600">
                          <DollarSign className="w-4 h-4" />
                          ${job.budget.toLocaleString()}
                        </span>
                      </div>

                      {job.status === 'in_progress' && (
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{job.progress}%</span>
                          </div>
                          <Progress value={job.progress} className="h-2" />
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {job.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <Link to={`/job/${job.id}`}>
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Link>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {viewMode === 'freelancer' ? (
                <>
                  <Button asChild className="w-full">
                    <Link to="/find-jobs">
                      <Search className="w-4 h-4 mr-2" />
                      Find Jobs
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/my-proposals">
                      <FileText className="w-4 h-4 mr-2" />
                      My Proposals
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/earnings">
                      <Wallet className="w-4 h-4 mr-2" />
                      Earnings
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/profile">
                      <UserCheck className="w-4 h-4 mr-2" />
                      Update Profile
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild className="w-full">
                    <Link to="/post-job">
                      <Plus className="w-4 h-4 mr-2" />
                      Post New Job
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/browse-freelancers">
                      <Users className="w-4 h-4 mr-2" />
                      Browse Freelancers
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/manage-jobs">
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Jobs
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/saved-freelancers">
                      <BookmarkIcon className="w-4 h-4 mr-2" />
                      Saved Freelancers
                    </Link>
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Messages</CardTitle>
                <Badge variant="secondary">{unreadMessages} unread</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {messages.slice(0, 3).map((message) => (
                  <div key={message.id} className={`p-3 rounded-lg border ${message.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'}`}>
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-sm">{message.from}</p>
                      <span className="text-xs text-gray-500">
                        {new Date(message.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{message.content}</p>
                  </div>
                ))}
                <Button asChild variant="outline" className="w-full" size="sm">
                  <Link to="/messages">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    View All Messages
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderJobs = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {viewMode === 'freelancer' ? 'My Work' : 'My Projects'}
          </h2>
          <p className="text-gray-600">
            {viewMode === 'freelancer' 
              ? 'Track your ongoing projects and applications'
              : 'Manage your posted jobs and applications'
            }
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link to={viewMode === 'freelancer' ? '/find-jobs' : '/post-job'}>
              <Plus className="w-4 h-4 mr-2" />
              {viewMode === 'freelancer' ? 'Find Jobs' : 'Post Job'}
            </Link>
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="budget">Highest Budget</SelectItem>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="applications">Most Applications</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-4">
                {viewMode === 'freelancer' 
                  ? "You haven't worked on any projects yet. Start by finding your first job!"
                  : "You haven't posted any jobs yet. Create your first project to get started!"
                }
              </p>
              <Button asChild>
                <Link to={viewMode === 'freelancer' ? '/find-jobs' : '/post-job'}>
                  <Plus className="w-4 h-4 mr-2" />
                  {viewMode === 'freelancer' ? 'Find Jobs' : 'Post First Job'}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          filteredJobs.map((job) => {
            const StatusIcon = getStatusIcon(job.status);
            return (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                        {job.featured && <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>}
                        {job.urgent && <Badge variant="destructive">Urgent</Badge>}
                      </div>
                      <p className="text-gray-600 mb-3 line-clamp-2">{job.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {viewMode === 'freelancer' ? `Client: ${job.client}` : `Freelancer: ${job.freelancer || 'Not assigned'}`}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Due: {new Date(job.deadline).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          ${job.budget.toLocaleString()}
                        </span>
                        {viewMode === 'buyer' && (
                          <span className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            {job.applications} applications
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getStatusColor(job.status)}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {job.status.replace('_', ' ')}
                      </Badge>
                      {job.status === 'in_progress' && (
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Progress</p>
                          <p className="text-lg font-semibold">{job.progress}%</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {job.status === 'in_progress' && (
                    <div className="mb-4">
                      <Progress value={job.progress} className="h-2" />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 5).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link to={`/job/${job.id}`}>
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Link>
                      </Button>
                      {viewMode === 'buyer' && job.status === 'active' && (
                        <Button size="sm" variant="outline" asChild>
                          <Link to={`/job/${job.id}/edit`}>
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Link>
                        </Button>
                      )}
                      {job.status === 'in_progress' && (
                        <Button size="sm" asChild>
                          <Link to={`/job/${job.id}/workspace`}>
                            <Send className="w-4 h-4 mr-1" />
                            Workspace
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );

  const renderFinances = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Financial Overview</h2>
          <p className="text-gray-600">Track your earnings, expenses, and transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button asChild>
            <Link to="/deposit">
              <Plus className="w-4 h-4 mr-2" />
              Add Funds
            </Link>
          </Button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Balance</p>
                <p className="text-2xl font-bold text-gray-900">$2,450.00</p>
                <p className="text-sm text-green-600">Ready to withdraw</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Wallet className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">$890.00</p>
                <p className="text-sm text-green-600">+15% from last month</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">$1,200.00</p>
                <p className="text-sm text-yellow-600">In escrow</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Earned</p>
                <p className="text-2xl font-bold text-gray-900">$12,500.00</p>
                <p className="text-sm text-purple-600">All time</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link to="/transactions">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    transaction.type === 'earned' ? 'bg-green-100' :
                    transaction.type === 'spent' ? 'bg-red-100' :
                    transaction.type === 'withdrawal' ? 'bg-blue-100' :
                    transaction.type === 'deposit' ? 'bg-purple-100' :
                    'bg-gray-100'
                  }`}>
                    {transaction.type === 'earned' && <TrendingUp className="w-4 h-4 text-green-600" />}
                    {transaction.type === 'spent' && <TrendingDown className="w-4 h-4 text-red-600" />}
                    {transaction.type === 'withdrawal' && <Download className="w-4 h-4 text-blue-600" />}
                    {transaction.type === 'deposit' && <Upload className="w-4 h-4 text-purple-600" />}
                    {transaction.type === 'fee' && <DollarSign className="w-4 h-4 text-gray-600" />}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'earned' || transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'earned' || transaction.type === 'deposit' ? '+' : '-'}${transaction.amount}
                  </p>
                  <Badge className={
                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                    transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }>
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
          <p className="text-gray-600">Communicate with clients and freelancers</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Message
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`p-4 rounded-lg border ${
                message.read ? 'bg-white' : 'bg-blue-50 border-blue-200'
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{message.from.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{message.from}</p>
                      <p className="text-sm text-gray-600">{new Date(message.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                  {!message.read && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                </div>
                <p className="text-gray-700 mb-3">{message.content}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Send className="w-4 h-4 mr-2" />
                    Reply
                  </Button>
                  <Button size="sm" variant="outline">
                    <Archive className="w-4 h-4 mr-2" />
                    Archive
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
          <p className="text-gray-600">Manage your personal information and preferences</p>
        </div>
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={currentUser.avatar} />
                  <AvatarFallback className="text-2xl">{currentUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Change Photo
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">JPG, PNG, or GIF. Max size 5MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue={currentUser.name.split(' ')[0]} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue={currentUser.name.split(' ')[1]} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={currentUser.email} />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue={currentUser.location} />
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
              </div>

              <div>
                <Label>Skills</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentUser.skills.map((skill) => (
                    <Badge key={skill} className="flex items-center gap-1">
                      {skill}
                      <X className="w-3 h-3 cursor-pointer" />
                    </Badge>
                  ))}
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Skill
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-600">Receive notifications about your account</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Profile Visibility</Label>
                  <p className="text-sm text-gray-600">Make your profile visible to clients</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-600">Add extra security to your account</p>
                </div>
                <Button variant="outline" size="sm">Enable</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{currentUser.rating}</div>
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= currentUser.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Completed Jobs</span>
                  <span className="font-medium">{currentUser.completedJobs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Earnings</span>
                  <span className="font-medium">${currentUser.totalEarnings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Member Since</span>
                  <span className="font-medium">{new Date(currentUser.joinDate).getFullYear()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Response Time</span>
                  <span className="font-medium">&lt; 1 hour</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email Verified</span>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Phone Verified</span>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Identity Verified</span>
                {currentUser.verified ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <Button variant="outline" size="sm">Verify</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userName={currentUser.name} />

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              {viewMode === 'freelancer' ? 'My Work' : 'My Projects'}
            </TabsTrigger>
            <TabsTrigger value="finances" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Finances
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Messages
              {unreadMessages > 0 && <Badge className="ml-1 bg-red-500 text-xs">{unreadMessages}</Badge>}
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            {renderOverview()}
          </TabsContent>

          <TabsContent value="jobs" className="mt-0">
            {renderJobs()}
          </TabsContent>

          <TabsContent value="finances" className="mt-0">
            {renderFinances()}
          </TabsContent>

          <TabsContent value="messages" className="mt-0">
            {renderMessages()}
          </TabsContent>

          <TabsContent value="profile" className="mt-0">
            {renderProfile()}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart3,
  Users,
  DollarSign,
  Briefcase,
  TrendingUp,
  AlertTriangle,
  Shield,
  Settings,
  Database,
  FileText,
  Mail,
  Bell,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Upload,
  UserCheck,
  UserX,
  MessageSquare,
  Star,
  Calendar,
  Clock,
  Activity,
  Target,
  Award,
  Zap,
  Globe,
  Lock,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertCircle,
  MoreVertical,
  Plus,
  Minus,
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock admin data
  const adminStats = {
    totalUsers: 25847,
    activeJobs: 1456,
    totalEarnings: 2584720,
    monthlyGrowth: 12.5,
    pendingApprovals: 89,
    reportedIssues: 23,
    activeFreelancers: 15670,
    activeBuyers: 10177,
    completedProjects: 8945,
    revenue: {
      thisMonth: 145600,
      lastMonth: 128900,
      growth: 12.9,
    },
  };

  const recentUsers = [
    {
      id: 1,
      name: "আহমেদ করিম",
      email: "ahmed@example.com",
      type: "Freelancer",
      status: "Active",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "ফাতিমা খান",
      email: "fatima@example.com",
      type: "Buyer",
      status: "Pending",
      joinDate: "2024-01-14",
    },
    {
      id: 3,
      name: "রহিম উদ্দিন",
      email: "rahim@example.com",
      type: "Freelancer",
      status: "Active",
      joinDate: "2024-01-13",
    },
    {
      id: 4,
      name: "সালমা বেগম",
      email: "salma@example.com",
      type: "Buyer",
      status: "Suspended",
      joinDate: "2024-01-12",
    },
    {
      id: 5,
      name: "নাসির আহমেদ",
      email: "nasir@example.com",
      type: "Freelancer",
      status: "Active",
      joinDate: "2024-01-11",
    },
  ];

  const recentJobs = [
    {
      id: 1,
      title: "React Developer",
      client: "TechCorp",
      budget: 50000,
      status: "Active",
      posted: "2 hours ago",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      client: "StartupXYZ",
      budget: 30000,
      status: "Pending",
      posted: "5 hours ago",
    },
    {
      id: 3,
      title: "Content Writer",
      client: "BlogCorp",
      budget: 15000,
      status: "Active",
      posted: "1 day ago",
    },
    {
      id: 4,
      title: "Python Developer",
      client: "DataTech",
      budget: 75000,
      status: "Completed",
      posted: "2 days ago",
    },
    {
      id: 5,
      title: "Graphic Designer",
      client: "CreativeHub",
      budget: 25000,
      status: "Active",
      posted: "3 days ago",
    },
  ];

  const reportedIssues = [
    {
      id: 1,
      type: "Payment Dispute",
      reporter: "আহমেদ করিম",
      description: "Payment not received",
      priority: "High",
      status: "Open",
    },
    {
      id: 2,
      type: "Spam Content",
      reporter: "ফাতিমা খান",
      description: "Inappropriate job posting",
      priority: "Medium",
      status: "Investigating",
    },
    {
      id: 3,
      type: "Account Suspension",
      reporter: "রহিম উদ্দিন",
      description: "Account wrongly suspended",
      priority: "High",
      status: "Resolved",
    },
    {
      id: 4,
      type: "Technical Issue",
      reporter: "সালমা বেগম",
      description: "Unable to upload files",
      priority: "Low",
      status: "Open",
    },
  ];

  const systemStats = [
    { label: "Server Uptime", value: "99.9%", status: "good" },
    { label: "Database Size", value: "2.4 GB", status: "good" },
    { label: "Active Sessions", value: "1,247", status: "good" },
    { label: "API Response Time", value: "142ms", status: "warning" },
    { label: "Error Rate", value: "0.02%", status: "good" },
    { label: "Backup Status", value: "Latest: 2h ago", status: "good" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-gray-900 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">ClickerPlus Admin</h1>
            <Badge className="bg-red-600">Super Admin</Badge>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-gray-800"
            >
              <Bell className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-gray-800"
            >
              <Settings className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">A</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="overview">ওভারভিউ</TabsTrigger>
            <TabsTrigger value="users">ইউজার</TabsTrigger>
            <TabsTrigger value="jobs">জবস</TabsTrigger>
            <TabsTrigger value="finance">ফিন্যান্স</TabsTrigger>
            <TabsTrigger value="reports">রিপোর্ট</TabsTrigger>
            <TabsTrigger value="system">সিস্টেম</TabsTrigger>
            <TabsTrigger value="content">কন্টেন্ট</TabsTrigger>
            <TabsTrigger value="settings">সেটিংস</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">মোট ইউজার</p>
                      <p className="text-2xl font-bold">
                        {adminStats.totalUsers.toLocaleString()}
                      </p>
                      <p className="text-xs text-green-600">
                        +{adminStats.monthlyGrowth}% এই মাসে
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Briefcase className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">চলমান জবস</p>
                      <p className="text-2xl font-bold">
                        {adminStats.activeJobs.toLocaleString()}
                      </p>
                      <p className="text-xs text-blue-600">+8.2% গত সপ্তাহে</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <DollarSign className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">মোট আয়</p>
                      <p className="text-2xl font-bold">
                        ৳{adminStats.totalEarnings.toLocaleString()}
                      </p>
                      <p className="text-xs text-green-600">+15.3% গত মাসে</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">অপেক্ষমান অনুমোদন</p>
                      <p className="text-2xl font-bold">
                        {adminStats.pendingApprovals}
                      </p>
                      <p className="text-xs text-red-600">
                        অবিলম্বে পর্যালোচনা প্রয়োজন
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    রেভিনিউ ট্রেন্ড
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>এই মাস</span>
                      <span className="font-bold">
                        ৳{adminStats.revenue.thisMonth.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>গত মাস</span>
                      <span className="font-bold">
                        ৳{adminStats.revenue.lastMonth.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>বৃদ্ধি</span>
                      <span className="font-bold text-green-600">
                        +{adminStats.revenue.growth}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    ইউজার বিতরণ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>ফ্রিল্যান্সার</span>
                      <span className="font-bold">
                        {adminStats.activeFreelancers.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>বায়ার</span>
                      <span className="font-bold">
                        {adminStats.activeBuyers.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>অনুপাত</span>
                      <span className="font-bold text-blue-600">60:40</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    সিস্টেম অ্যালার্ট
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">
                        {adminStats.reportedIssues} নতুন রিপোর্ট
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">সার্ভার রেসপন্স ধীর</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">সিস্টেম স্বাভাবিক</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>সাম্প্রতিক ইউজার</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentUsers.slice(0, 5).map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
                            {user.name[0]}
                          </div>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.type}</p>
                          </div>
                        </div>
                        <Badge
                          className={
                            user.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : user.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {user.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>সাম্প্রতিক জবস</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentJobs.slice(0, 5).map((job) => (
                      <div
                        key={job.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                      >
                        <div>
                          <p className="font-medium">{job.title}</p>
                          <p className="text-sm text-gray-600">
                            ৳{job.budget.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge
                            className={
                              job.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : job.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : job.status === "Completed"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                            }
                          >
                            {job.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">
                            {job.posted}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">ইউজার ম্যানেজমেন্ট</h2>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  এক্সপোর্ট
                </Button>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  ইউজার যোগ করুন
                </Button>
              </div>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="ইউজার খুঁজুন..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="ইউজার টাইপ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">সকল ইউজার</SelectItem>
                      <SelectItem value="freelancer">ফ্রিল্যান্সার</SelectItem>
                      <SelectItem value="buyer">বা��়ার</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="স্ট্যাটাস" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">সকল স্ট্যাটাস</SelectItem>
                      <SelectItem value="active">সক্রিয়</SelectItem>
                      <SelectItem value="pending">অপেক্ষমান</SelectItem>
                      <SelectItem value="suspended">স্থগিত</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Users Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ইউজার</TableHead>
                      <TableHead>ইমেইল</TableHead>
                      <TableHead>টাইপ</TableHead>
                      <TableHead>যোগদানের তারিখ</TableHead>
                      <TableHead>স্���্যাটাস</TableHead>
                      <TableHead>অ্যাকশন</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white text-sm">
                              {user.name[0]}
                            </div>
                            <span className="font-medium">{user.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.type}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              user.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : user.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Jobs Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">জব ম্যানেজমেন্ট</h2>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  ফিল্টার
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  রিপোর্ট
                </Button>
              </div>
            </div>

            {/* Job Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Briefcase className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">মোট জবস</p>
                  <p className="text-2xl font-bold">4,567</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">চলমান</p>
                  <p className="text-2xl font-bold">{adminStats.activeJobs}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm text-gray-600">সম্পূর্ণ</p>
                  <p className="text-2xl font-bold">
                    {adminStats.completedProjects}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertCircle className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <p className="text-sm text-gray-600">পর্যালোচনা</p>
                  <p className="text-2xl font-bold">234</p>
                </CardContent>
              </Card>
            </div>

            {/* Jobs Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>জব টাইটেল</TableHead>
                      <TableHead>ক্লায়েন্ট</TableHead>
                      <TableHead>বাজেট</TableHead>
                      <TableHead>স্ট্যাটাস</TableHead>
                      <TableHead>পোস্ট করা</TableHead>
                      <TableHead>অ্যাকশন</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentJobs.map((job) => (
                      <TableRow key={job.id}>
                        <TableCell className="font-medium">
                          {job.title}
                        </TableCell>
                        <TableCell>{job.client}</TableCell>
                        <TableCell>৳{job.budget.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              job.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : job.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : job.status === "Completed"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                            }
                          >
                            {job.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{job.posted}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Finance Tab */}
          <TabsContent value="finance" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">আর্থিক ব্যবস্থাপনা</h2>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  তারিখ নির্বাচন
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  আর্থিক রিপোর্ট
                </Button>
              </div>
            </div>

            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">মোট রেভিনিউ</p>
                  <p className="text-2xl font-bold">
                    ৳{adminStats.totalEarnings.toLocaleString()}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">এই মাসের আয়</p>
                  <p className="text-2xl font-bold">
                    ৳{adminStats.revenue.thisMonth.toLocaleString()}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <p className="text-sm text-gray-600">পেন্ডিং পেমেন্ট</p>
                  <p className="text-2xl font-bold">৳45,600</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm text-gray-600">প্ল��যাটফর্ম ফি</p>
                  <p className="text-2xl font-bold">৳28,450</p>
                </CardContent>
              </Card>
            </div>

            {/* Transaction Management */}
            <Card>
              <CardHeader>
                <CardTitle>সাম্প্রতিক লেনদেন</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>লেনদেন ID</TableHead>
                      <TableHead>ইউজার</TableHead>
                      <TableHead>টাইপ</TableHead>
                      <TableHead>পরিমাণ</TableHead>
                      <TableHead>স্ট্যাটাস</TableHead>
                      <TableHead>তারিখ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <TableRow key={i}>
                        <TableCell className="font-mono">
                          #TXN{1000 + i}
                        </TableCell>
                        <TableCell>ইউজার {i}</TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {i % 2 === 0 ? "জমা" : "উত্তোলন"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          ৳{(Math.random() * 10000 + 1000).toFixed(0)}
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">
                            সম্পূর্ণ
                          </Badge>
                        </TableCell>
                        <TableCell>২০২৪-০১-১৫</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">রিপোর্ট ও ইস্যু</h2>
              <Button variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                রিফ্রেশ
              </Button>
            </div>

            {/* Issue Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-600" />
                  <p className="text-sm text-gray-600">মোট রিপোর্ট</p>
                  <p className="text-2xl font-bold">156</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <p className="text-sm text-gray-600">পেন্ডিং</p>
                  <p className="text-2xl font-bold">
                    {adminStats.reportedIssues}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Activity className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">তদন্তাধীন</p>
                  <p className="text-2xl font-bold">45</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">সমাধান</p>
                  <p className="text-2xl font-bold">88</p>
                </CardContent>
              </Card>
            </div>

            {/* Issues Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ইস্যু টাইপ</TableHead>
                      <TableHead>রিপোর্টার</TableHead>
                      <TableHead>বিবরণ</TableHead>
                      <TableHead>অগ্রাধিকার</TableHead>
                      <TableHead>স্ট্যাটাস</TableHead>
                      <TableHead>অ্যাকশন</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reportedIssues.map((issue) => (
                      <TableRow key={issue.id}>
                        <TableCell className="font-medium">
                          {issue.type}
                        </TableCell>
                        <TableCell>{issue.reporter}</TableCell>
                        <TableCell>{issue.description}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              issue.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : issue.priority === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                            }
                          >
                            {issue.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              issue.status === "Open"
                                ? "bg-red-100 text-red-800"
                                : issue.status === "Investigating"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                            }
                          >
                            {issue.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Tab */}
          <TabsContent value="system" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">সিস্টেম মনিটরিং</h2>
              <Button variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                রিফ্রেশ স্ট্যাটাস
              </Button>
            </div>

            {/* System Health */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {systemStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="text-xl font-bold">{stat.value}</p>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          stat.status === "good"
                            ? "bg-green-500"
                            : stat.status === "warning"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    ডেটাবেস ব্যবস্থাপনা
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>ব্যাকআপ তৈরি</span>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        ব্যাকআপ
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>ডেটাবেস অপ্টিমাইজ</span>
                      <Button variant="outline" size="sm">
                        <Zap className="w-4 h-4 mr-2" />
                        অপ্টিমাইজ
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>ক্যাশ ক্লিয়ার</span>
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        ক্লিয়ার
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    নিরাপত্তা নিয়ন্ত্রণ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>ফায়ারওয়াল স্ট্যাটাস</span>
                      <Badge className="bg-green-100 text-green-800">
                        সক্রিয়
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>SSL সার্টিফিকেট</span>
                      <Badge className="bg-green-100 text-green-800">বৈধ</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>নিরাপত্তা স্ক্যান</span>
                      <Button variant="outline" size="sm">
                        <Shield className="w-4 h-4 mr-2" />
                        স্ক্যান
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">কন্টেন্ট ব্যবস্থাপনা</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                নতুন কন্টেন্ট
              </Button>
            </div>

            {/* Content Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">মোট পেইজ</p>
                  <p className="text-2xl font-bold">45</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">ইমেইল টেমপ্লেট</p>
                  <p className="text-2xl font-bold">23</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Bell className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <p className="text-sm text-gray-600">নোটিফিকেশন</p>
                  <p className="text-2xl font-bold">156</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm text-gray-600">ভাষা</p>
                  <p className="text-2xl font-bold">2</p>
                </CardContent>
              </Card>
            </div>

            {/* Content Management */}
            <Card>
              <CardHeader>
                <CardTitle>কন্টেন্ট তালিকা</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "হোম পেইজ",
                      type: "Page",
                      status: "Published",
                      lastModified: "2 days ago",
                    },
                    {
                      title: "About Us",
                      type: "Page",
                      status: "Published",
                      lastModified: "1 week ago",
                    },
                    {
                      title: "Welcome Email",
                      type: "Email Template",
                      status: "Active",
                      lastModified: "3 days ago",
                    },
                    {
                      title: "Privacy Policy",
                      type: "Legal",
                      status: "Published",
                      lastModified: "1 month ago",
                    },
                    {
                      title: "Terms of Service",
                      type: "Legal",
                      status: "Draft",
                      lastModified: "5 days ago",
                    },
                  ].map((content, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{content.title}</h3>
                        <p className="text-sm text-gray-600">
                          {content.type} • {content.lastModified}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={
                            content.status === "Published" ||
                            content.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {content.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">সিস্টেম সেটিংস</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    সাধারণ সেটিংস
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>ইউজার রেজিস্ট্রেশন</span>
                      <Button variant="outline" size="sm">
                        সক্রিয়
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>জব পোস্টিং</span>
                      <Button variant="outline" size="sm">
                        সক্রিয়
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>পেমেন্ট গেটওয়ে</span>
                      <Button variant="outline" size="sm">
                        সক্রিয়
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>ইমেইল নোটিফিকেশন</span>
                      <Button variant="outline" size="sm">
                        সক্রিয়
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    পেমেন্ট সেটিংস
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>প্ল্যাটফর্ম ফি (%)</span>
                      <span className="font-bold">10%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>মিনিমাম উত্তোলন (৳)</span>
                      <span className="font-bold">1000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>সর্বোচ্চ লেনদেন (৳)</span>
                      <span className="font-bold">100,000</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      সম্পাদনা
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

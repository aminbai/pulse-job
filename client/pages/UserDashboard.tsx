import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  DollarSign,
  Users,
  Briefcase,
  Star,
  Clock,
  MessageSquare,
  TrendingUp,
  Eye,
  FileText,
  Settings,
  Bell,
  Download,
  Upload,
  Calendar,
  Target,
  Award,
  Wallet,
  ShoppingCart,
  UserCheck,
  Activity,
  PlusCircle,
  Edit3,
  Search,
} from "lucide-react";
import Header from "@/components/Header";

export default function UserDashboard() {
  const [userRole, setUserRole] = useState<"freelancer" | "buyer">(
    "freelancer",
  );

  // Mock user data
  const userData = {
    freelancer: {
      name: "আহমেদ করিম",
      username: "@ahmedkarim",
      profileCompletion: 85,
      rating: 4.8,
      totalEarnings: 12500,
      activeProjects: 3,
      completedJobs: 47,
      totalReviews: 52,
      availability: "Available",
      responseTime: "2 hours",
      successRate: 98,
      skills: ["React", "Node.js", "UI/UX", "Python"],
      recentJobs: [
        {
          id: 1,
          title: "E-commerce Website",
          client: "রহিম উদ্দিন",
          status: "in-progress",
          payment: 2500,
          deadline: "5 days",
        },
        {
          id: 2,
          title: "Mobile App Design",
          client: "ফাতিমা খান",
          status: "pending",
          payment: 1800,
          deadline: "10 days",
        },
        {
          id: 3,
          title: "Backend API",
          client: "সাইফুল ইসলাম",
          status: "completed",
          payment: 3200,
          deadline: "completed",
        },
      ],
      earnings: {
        thisMonth: 4500,
        lastMonth: 3800,
        pending: 2200,
        available: 8300,
      },
    },
    buyer: {
      name: "ফাতিমা রহমান",
      username: "@fatimarahman",
      totalSpent: 18500,
      activeProjects: 2,
      completedProjects: 12,
      avgRating: 4.9,
      postedJobs: 15,
      savedFreelancers: 23,
      activeContracts: 2,
      totalFreelancers: 89,
      recentProjects: [
        {
          id: 1,
          title: "Website Development",
          freelancer: "আহমেদ করিম",
          status: "in-progress",
          budget: 5000,
          progress: 60,
        },
        {
          id: 2,
          title: "Logo Design",
          freelancer: "নাসির আহমেদ",
          status: "review",
          budget: 800,
          progress: 100,
        },
        {
          id: 3,
          title: "Content Writing",
          freelancer: "সালমা খাতুন",
          status: "completed",
          budget: 1200,
          progress: 100,
        },
      ],
      spending: {
        thisMonth: 6200,
        lastMonth: 4800,
        budgetRemaining: 12000,
        totalBudget: 25000,
      },
    },
  };

  const currentUser = userData[userRole];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* User Type Switcher */}
        <div className="mb-6">
          <div className="flex gap-2">
            <Button
              variant={userRole === "freelancer" ? "default" : "outline"}
              onClick={() => setUserRole("freelancer")}
              className="bg-brand-green hover:bg-green-600"
            >
              Freelancer Dashboard
            </Button>
            <Button
              variant={userRole === "buyer" ? "default" : "outline"}
              onClick={() => setUserRole("buyer")}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Buyer Dashboard
            </Button>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-brand-green to-green-600 rounded-lg p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  স্বাগতম, {currentUser.name}!
                </h1>
                <p className="text-green-100">
                  {userRole === "freelancer"
                    ? "আপনার ফ্রিল্যান্সিং জার্নি পরিচালনা করুন"
                    : "আপনার প্রজেক্ট এবং ফ্রিল্যান্সারদের পরিচালনা করুন"}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">
                  {userRole === "freelancer"
                    ? `৳${currentUser.totalEarnings}`
                    : `৳${currentUser.totalSpent}`}
                </div>
                <div className="text-sm text-green-100">
                  {userRole === "freelancer" ? "মোট আয়" : "মোট খরচ"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">ওভারভিউ</TabsTrigger>
            <TabsTrigger value="projects">
              {userRole === "freelancer" ? "প্রজেক্ট" : "আমার প্রজেক্ট"}
            </TabsTrigger>
            <TabsTrigger value="earnings">
              {userRole === "freelancer" ? "আয়" : "বাজেট"}
            </TabsTrigger>
            <TabsTrigger value="messages">মেসেজ</TabsTrigger>
            <TabsTrigger value="profile">প্রোফাইল</TabsTrigger>
            <TabsTrigger value="settings">সেটিংস</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {userRole === "freelancer" ? (
                <>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">মোট আয়</p>
                          <p className="text-2xl font-bold">
                            ৳{currentUser.totalEarnings}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Briefcase className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">সম্পূর্ণ কাজ</p>
                          <p className="text-2xl font-bold">
                            {currentUser.completedJobs}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                          <Star className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">রেটিং</p>
                          <p className="text-2xl font-bold">
                            {currentUser.rating}/5
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                          <Activity className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            চলমান প্রজেক্ট
                          </p>
                          <p className="text-2xl font-bold">
                            {currentUser.activeProjects}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <DollarSign className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">মোট খরচ</p>
                          <p className="text-2xl font-bold">
                            ৳{currentUser.totalSpent}
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
                          <p className="text-sm text-gray-600">
                            সম্পূর্ণ প্রজেক্ট
                          </p>
                          <p className="text-2xl font-bold">
                            {currentUser.completedProjects}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                          <Star className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">আমার রেটিং</p>
                          <p className="text-2xl font-bold">
                            {currentUser.avgRating}/5
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                          <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            চলমান প্রজেক্ট
                          </p>
                          <p className="text-2xl font-bold">
                            {currentUser.activeProjects}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>

            {/* Profile Completion / Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {userRole === "freelancer" ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      প্রোফাইল সম্পূর্ণতা
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>সম্পূর্ণ</span>
                        <span>{currentUser.profileCompletion}%</span>
                      </div>
                      <Progress
                        value={currentUser.profileCompletion}
                        className="h-2"
                      />
                      <div className="text-sm text-gray-600">
                        প্রোফাইল সম্পূর্ণ করলে আরও বেশি কাজের সুযোগ পাবেন
                      </div>
                      <Link to="/my-account">
                        <Button variant="outline" size="sm">
                          <Edit3 className="w-4 h-4 mr-2" />
                          প্রোফাইল সম্পাদনা
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      দ্রুত কাজ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Link to="/post-job">
                        <Button
                          className="w-full justify-start"
                          variant="outline"
                        >
                          <PlusCircle className="w-4 h-4 mr-2" />
                          নতুন জব পোস্ট করুন
                        </Button>
                      </Link>
                      <Link to="/browse-jobs">
                        <Button
                          className="w-full justify-start"
                          variant="outline"
                        >
                          <Search className="w-4 h-4 mr-2" />
                          ফ্রিল্যান্সার খুঁজুন
                        </Button>
                      </Link>
                      <Link to="/my-post">
                        <Button
                          className="w-full justify-start"
                          variant="outline"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          আমার পোস্ট দেখুন
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    সাম্প্রতিক কার্যক্রম
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {userRole === "freelancer" ? (
                      <>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>নতুন প্রজেক্ট অ্যাসাইন হয়েছে</span>
                          <span className="text-gray-500 ml-auto">
                            ২ ঘন্টা আগে
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>পেমেন্ট রিসিভ করেছেন</span>
                          <span className="text-gray-500 ml-auto">
                            ৫ ঘন্টা আগে
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>নতুন রিভিউ পেয়েছেন</span>
                          <span className="text-gray-500 ml-auto">
                            ১ দিন আগে
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>প্রজেক্ট সম্পূর্ণ হয়েছে</span>
                          <span className="text-gray-500 ml-auto">
                            ৩ ঘন্টা আগে
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>নতুন বিড পেয়েছেন</span>
                          <span className="text-gray-500 ml-auto">
                            ৬ ঘন্টা আগে
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>নতুন জব পোস্ট করেছেন</span>
                          <span className="text-gray-500 ml-auto">
                            ২ দিন আগে
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {userRole === "freelancer"
                  ? "আমার প্রজেক্ট"
                  : "আমার প্রজেক্টসমূহ"}
              </h2>
              {userRole === "buyer" && (
                <Link to="/post-job">
                  <Button className="bg-brand-green hover:bg-green-600">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    নতুন জব পোস্ট
                  </Button>
                </Link>
              )}
            </div>

            <div className="space-y-4">
              {userRole === "freelancer"
                ? currentUser.recentJobs.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">
                              {job.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                              ক্লায়েন্ট: {job.client}
                            </p>
                            <div className="flex items-center gap-4">
                              <Badge
                                className={
                                  job.status === "completed"
                                    ? "bg-green-100 text-green-800"
                                    : job.status === "in-progress"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-yellow-100 text-yellow-800"
                                }
                              >
                                {job.status === "completed"
                                  ? "সম্পূর্ণ"
                                  : job.status === "in-progress"
                                    ? "চলমান"
                                    : "অপেক্ষমান"}
                              </Badge>
                              <span className="text-sm text-gray-600">
                                ৳{job.payment}
                              </span>
                              <span className="text-sm text-gray-600">
                                {job.deadline}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            বিস্তারিত
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                : currentUser.recentProjects.map((project) => (
                    <Card key={project.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                              ফ্রিল্যান্সার: {project.freelancer}
                            </p>
                            <div className="flex items-center gap-4 mb-3">
                              <Badge
                                className={
                                  project.status === "completed"
                                    ? "bg-green-100 text-green-800"
                                    : project.status === "in-progress"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-yellow-100 text-yellow-800"
                                }
                              >
                                {project.status === "completed"
                                  ? "সম্পূর্ণ"
                                  : project.status === "in-progress"
                                    ? "চলমান"
                                    : "রিভিউ"}
                              </Badge>
                              <span className="text-sm text-gray-600">
                                ৳{project.budget}
                              </span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>অগ্রগতি</span>
                                <span>{project.progress}%</span>
                              </div>
                              <Progress
                                value={project.progress}
                                className="h-2"
                              />
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            বিস্তারিত
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </TabsContent>

          {/* Earnings/Budget Tab */}
          <TabsContent value="earnings" className="space-y-6">
            <h2 className="text-2xl font-bold">
              {userRole === "freelancer" ? "আয়ের হিসাব" : "বাজেট ও খরচ"}
            </h2>

            {userRole === "freelancer" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wallet className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <p className="text-sm text-gray-600">এই মাসের আয়</p>
                      <p className="text-2xl font-bold">
                        ৳{currentUser.earnings.thisMonth}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-gray-600">গত মাসের আয়</p>
                      <p className="text-2xl font-bold">
                        ৳{currentUser.earnings.lastMonth}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                      <p className="text-sm text-gray-600">অপেক্ষমান</p>
                      <p className="text-2xl font-bold">
                        ৳{currentUser.earnings.pending}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <DollarSign className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <p className="text-sm text-gray-600">উত্��োলনযোগ্য</p>
                      <p className="text-2xl font-bold">
                        ৳{currentUser.earnings.available}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ShoppingCart className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-gray-600">এই মাসের খরচ</p>
                      <p className="text-2xl font-bold">
                        ৳{currentUser.spending.thisMonth}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BarChart3 className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <p className="text-sm text-gray-600">গত মাসের খরচ</p>
                      <p className="text-2xl font-bold">
                        ৳{currentUser.spending.lastMonth}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wallet className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                      <p className="text-sm text-gray-600">অবশিষ্ট বাজেট</p>
                      <p className="text-2xl font-bold">
                        ৳{currentUser.spending.budgetRemaining}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Target className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <p className="text-sm text-gray-600">মোট বাজেট</p>
                      <p className="text-2xl font-bold">
                        ৳{currentUser.spending.totalBudget}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>দ্রুত কাজ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {userRole === "freelancer" ? (
                    <>
                      <Link to="/deposit-history">
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          পেমেন্ট হিস্ট্রি
                        </Button>
                      </Link>
                      <Button variant="outline">
                        <Upload className="w-4 h-4 mr-2" />
                        টাকা উত্তোলন
                      </Button>
                      <Button variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        ইনভয়েস ডাউনলোড
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/deposit">
                        <Button variant="outline">
                          <Upload className="w-4 h-4 mr-2" />
                          টাকা জমা
                        </Button>
                      </Link>
                      <Link to="/deposit-history">
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          পেমেন্ট হিস্ট্রি
                        </Button>
                      </Link>
                      <Button variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        বিলিং রিপোর্ট
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">মেসেজ</h2>
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                নতুন মেসেজ
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>কথোপকথন</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white">
                          {userRole === "freelancer" ? "ক" : "ফ"}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {userRole === "freelancer"
                              ? "ক্লায়েন্ট"
                              : "ফ্রিল্যান্সার"}{" "}
                            {i}
                          </p>
                          <p className="text-sm text-gray-600">শেষ মেসেজ...</p>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>চ্যাট</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-gray-500 py-12">
                    <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>একটি কথোপকথন নির্বাচন করুন</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold">প্রোফাইল</h2>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {currentUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentUser.name}</h3>
                    <p className="text-gray-600">{currentUser.username}</p>
                    {userRole === "freelancer" && (
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{currentUser.rating}/5</span>
                        <span className="text-gray-600">
                          ({currentUser.totalReviews} রিভিউ)
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {userRole === "freelancer" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">দক্ষতা</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentUser.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">প্রাপ্যতা</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>{currentUser.availability}</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            প্রতিক্রিয়ার সময়: {currentUser.responseTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex gap-4">
                  <Link to="/my-account">
                    <Button>
                      <Edit3 className="w-4 h-4 mr-2" />
                      প্রোফাইল সম্পাদনা
                    </Button>
                  </Link>
                  <Button variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    পাবলিক ভিউ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">সেটিংস</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    নোটিফিকেশন
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>ইমেইল নোটিফিকেশন</span>
                      <Button variant="outline" size="sm">
                        চালু
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>SMS নোটিফিকেশন</span>
                      <Button variant="outline" size="sm">
                        বন্ধ
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>পুশ নোটিফিকেশন</span>
                      <Button variant="outline" size="sm">
                        চালু
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    একাউন্ট সেটিংস
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>দুই-ফ্যাক্টর প্রমাণীকরণ</span>
                      <Button variant="outline" size="sm">
                        সেটআপ
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>পাসওয়ার্ড পরিবর্তন</span>
                      <Button variant="outline" size="sm">
                        পরিবর্তন
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>প্রাইভেসি সেটিংস</span>
                      <Button variant="outline" size="sm">
                        পরিচালনা
                      </Button>
                    </div>
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

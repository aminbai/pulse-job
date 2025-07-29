import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import {
  BarChart3, Users, DollarSign, Briefcase, TrendingUp, AlertTriangle, Shield, Settings,
  Database, FileText, Mail, Bell, Eye, Edit, Trash2, Search, Filter, Download, Upload,
  UserCheck, UserX, MessageSquare, Star, Calendar, Clock, Activity, Target, Award,
  Zap, Globe, Lock, RefreshCw, CheckCircle, XCircle, AlertCircle, MoreVertical,
  Plus, Minus, LogOut, User, CreditCard, Banknote, PieChart, LineChart, BarChart,
  TrendingDown, Home, Building2, MapPin, Phone, ExternalLink, Copy, Bookmark,
  FileCheck, UserPlus, Package, Truck, ShoppingCart, Monitor, Smartphone, Tablet,
  Chrome, Firefox, Safari, Server, Cpu, HardDrive, Wifi, Signal, BatteryLow,
  BatteryFull, WifiOff, AlertOctagon, CheckSquare, Square, MinusSquare, UserCog,
  Ban, ShieldCheck, Flag, Heart, ThumbsUp, ThumbsDown, Share2, Send, Archive,
  FileImage, FileVideo, FileAudio, FilePlus, FolderPlus, Move, Scissors, Clipboard,
  MousePointer, Keyboard, Headphones, Camera, Mic, Video, Image, Music, Film,
  BookOpen, Newspaper, Calendar as CalendarIcon, Clock3, Clock9, ClockArrowUp,
  ClockArrowDown, Timer, Stopwatch, Hourglass, Sun, Moon, CloudRain, CloudSnow,
  Wind, Thermometer, Droplets, Zap as Lightning, Flashlight, Lightbulb, Candle
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  type: 'freelancer' | 'client' | 'admin';
  status: 'active' | 'inactive' | 'suspended' | 'pending';
  joinDate: string;
  lastActivity: string;
  earnings: number;
  completedJobs: number;
  rating: number;
  avatar?: string;
  location: string;
  phone: string;
  verified: boolean;
}

interface Job {
  id: string;
  title: string;
  client: string;
  freelancer?: string;
  budget: number;
  status: 'active' | 'in_progress' | 'completed' | 'cancelled' | 'disputed' | 'pending';
  category: string;
  postedDate: string;
  deadline: string;
  applications: number;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  featured: boolean;
}

interface Transaction {
  id: string;
  userId: string;
  userName: string;
  type: 'deposit' | 'withdrawal' | 'payment' | 'refund' | 'fee';
  amount: number;
  status: 'completed' | 'pending' | 'failed' | 'cancelled';
  date: string;
  method: string;
  description: string;
}

interface SystemMetric {
  name: string;
  value: string | number;
  status: 'good' | 'warning' | 'critical';
  change?: number;
  unit?: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("30d");
  const [notifications, setNotifications] = useState(12);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  // Mock comprehensive data
  const adminStats = {
    totalUsers: 25847,
    activeUsers: 18234,
    newUsersToday: 156,
    totalJobs: 12456,
    activeJobs: 1456,
    completedJobs: 8945,
    totalEarnings: 2584720,
    monthlyRevenue: 145600,
    platformFees: 284750,
    pendingPayouts: 67890,
    averageJobValue: 3500,
    conversionRate: 24.5,
    userGrowthRate: 12.8,
    jobCompletionRate: 89.3,
    averageRating: 4.7,
    supportTickets: 89,
    systemUptime: 99.9,
    serverLoad: 67,
    databaseSize: 2.4,
    apiCalls: 1247893,
    errorRate: 0.02,
    responseTime: 142
  };

  const mockUsers: User[] = [
    {
      id: '1',
      name: 'Ahmed Karim',
      email: 'ahmed@example.com',
      type: 'freelancer',
      status: 'active',
      joinDate: '2024-01-15',
      lastActivity: '2 hours ago',
      earnings: 45600,
      completedJobs: 23,
      rating: 4.8,
      location: 'Dhaka, Bangladesh',
      phone: '+880123456789',
      verified: true
    },
    {
      id: '2',
      name: 'Fatima Khan',
      email: 'fatima@example.com',
      type: 'client',
      status: 'pending',
      joinDate: '2024-01-14',
      lastActivity: '1 day ago',
      earnings: 0,
      completedJobs: 0,
      rating: 0,
      location: 'Chittagong, Bangladesh',
      phone: '+880123456788',
      verified: false
    },
    {
      id: '3',
      name: 'Rahim Uddin',
      email: 'rahim@example.com',
      type: 'freelancer',
      status: 'active',
      joinDate: '2024-01-13',
      lastActivity: '5 minutes ago',
      earnings: 78900,
      completedJobs: 45,
      rating: 4.9,
      location: 'Sylhet, Bangladesh',
      phone: '+880123456787',
      verified: true
    },
    {
      id: '4',
      name: 'Salma Begum',
      email: 'salma@example.com',
      type: 'client',
      status: 'suspended',
      joinDate: '2024-01-12',
      lastActivity: '3 days ago',
      earnings: 0,
      completedJobs: 0,
      rating: 0,
      location: 'Rajshahi, Bangladesh',
      phone: '+880123456786',
      verified: true
    },
    {
      id: '5',
      name: 'Nasir Ahmed',
      email: 'nasir@example.com',
      type: 'freelancer',
      status: 'active',
      joinDate: '2024-01-11',
      lastActivity: '30 minutes ago',
      earnings: 34500,
      completedJobs: 18,
      rating: 4.6,
      location: 'Khulna, Bangladesh',
      phone: '+880123456785',
      verified: true
    }
  ];

  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'React Developer for E-commerce Platform',
      client: 'TechCorp Ltd.',
      freelancer: 'Ahmed Karim',
      budget: 75000,
      status: 'in_progress',
      category: 'Web Development',
      postedDate: '2024-01-15',
      deadline: '2024-02-15',
      applications: 23,
      priority: 'high',
      featured: true
    },
    {
      id: '2',
      title: 'UI/UX Design for Mobile App',
      client: 'StartupXYZ',
      budget: 45000,
      status: 'active',
      category: 'Design',
      postedDate: '2024-01-14',
      deadline: '2024-02-10',
      applications: 15,
      priority: 'medium',
      featured: false
    },
    {
      id: '3',
      title: 'Content Writing for Blog',
      client: 'BlogCorp',
      freelancer: 'Fatima Khan',
      budget: 15000,
      status: 'completed',
      category: 'Writing',
      postedDate: '2024-01-10',
      deadline: '2024-01-20',
      applications: 8,
      priority: 'low',
      featured: false
    },
    {
      id: '4',
      title: 'Python Backend Development',
      client: 'DataTech Solutions',
      budget: 95000,
      status: 'disputed',
      category: 'Programming',
      postedDate: '2024-01-08',
      deadline: '2024-02-08',
      applications: 31,
      priority: 'urgent',
      featured: true
    },
    {
      id: '5',
      title: 'Digital Marketing Campaign',
      client: 'MarketPro',
      budget: 35000,
      status: 'pending',
      category: 'Marketing',
      postedDate: '2024-01-12',
      deadline: '2024-02-12',
      applications: 12,
      priority: 'medium',
      featured: false
    }
  ];

  const mockTransactions: Transaction[] = [
    {
      id: 'TXN001',
      userId: '1',
      userName: 'Ahmed Karim',
      type: 'payment',
      amount: 7500,
      status: 'completed',
      date: '2024-01-15',
      method: 'Bank Transfer',
      description: 'Payment for React development project'
    },
    {
      id: 'TXN002',
      userId: '2',
      userName: 'Fatima Khan',
      type: 'deposit',
      amount: 15000,
      status: 'pending',
      date: '2024-01-14',
      method: 'Mobile Banking',
      description: 'Account deposit for job posting'
    },
    {
      id: 'TXN003',
      userId: '3',
      userName: 'Rahim Uddin',
      type: 'withdrawal',
      amount: 12000,
      status: 'completed',
      date: '2024-01-13',
      method: 'Bank Transfer',
      description: 'Earnings withdrawal'
    },
    {
      id: 'TXN004',
      userId: '4',
      userName: 'Salma Begum',
      type: 'refund',
      amount: 5000,
      status: 'failed',
      date: '2024-01-12',
      method: 'Card',
      description: 'Refund for cancelled project'
    },
    {
      id: 'TXN005',
      userId: '5',
      userName: 'Nasir Ahmed',
      type: 'fee',
      amount: 750,
      status: 'completed',
      date: '2024-01-11',
      method: 'Platform Fee',
      description: 'Platform commission fee'
    }
  ];

  const systemMetrics: SystemMetric[] = [
    { name: 'Server Uptime', value: 99.9, status: 'good', unit: '%' },
    { name: 'CPU Usage', value: 67, status: 'warning', unit: '%', change: 5 },
    { name: 'Memory Usage', value: 78, status: 'warning', unit: '%', change: -2 },
    { name: 'Disk Space', value: 45, status: 'good', unit: '%', change: 1 },
    { name: 'Active Sessions', value: 1247, status: 'good', change: 12 },
    { name: 'API Response Time', value: 142, status: 'warning', unit: 'ms', change: 8 },
    { name: 'Error Rate', value: 0.02, status: 'good', unit: '%', change: -0.01 },
    { name: 'Database Connections', value: 89, status: 'good', change: -3 }
  ];

  const recentActivities = [
    { type: 'user_registered', message: 'New user Ahmed registered', time: '2 minutes ago', icon: UserPlus },
    { type: 'job_posted', message: 'New job posted: React Developer', time: '5 minutes ago', icon: Briefcase },
    { type: 'payment_completed', message: 'Payment of ৳7,500 processed', time: '10 minutes ago', icon: CreditCard },
    { type: 'dispute_opened', message: 'Dispute opened for job #1234', time: '15 minutes ago', icon: AlertTriangle },
    { type: 'user_verified', message: 'User Fatima Khan verified', time: '30 minutes ago', icon: CheckCircle },
    { type: 'system_backup', message: 'Automated backup completed', time: '1 hour ago', icon: Database },
    { type: 'security_alert', message: 'Failed login attempts detected', time: '2 hours ago', icon: Shield },
    { type: 'maintenance', message: 'Server maintenance completed', time: '3 hours ago', icon: Settings }
  ];

  const filteredUsers = useMemo(() => {
    return mockUsers.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'completed': case 'good': return 'bg-green-100 text-green-800';
      case 'pending': case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'suspended': case 'failed': case 'critical': case 'disputed': return 'bg-red-100 text-red-800';
      case 'inactive': case 'cancelled': return 'bg-gray-100 text-gray-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': case 'completed': case 'good': return CheckCircle;
      case 'pending': case 'warning': return Clock;
      case 'suspended': case 'failed': case 'critical': case 'disputed': return XCircle;
      case 'inactive': case 'cancelled': return MinusSquare;
      case 'in_progress': return Activity;
      default: return AlertCircle;
    }
  };

  const handleUserAction = (userId: string, action: string) => {
    console.log(`Performing ${action} on user ${userId}`);
    // Implementation would go here
  };

  const exportData = (type: string) => {
    console.log(`Exporting ${type} data`);
    // Implementation would go here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Admin Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">ClickerPlus Admin</h1>
                  <p className="text-sm text-gray-300">Super Administrator</p>
                </div>
              </div>
              
              {/* System Status Indicator */}
              <div className="flex items-center gap-2 px-3 py-1 bg-green-600 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">System Online</span>
              </div>

              {/* Maintenance Mode Toggle */}
              <div className="flex items-center gap-2">
                <Label htmlFor="maintenance" className="text-sm">Maintenance Mode</Label>
                <Switch
                  id="maintenance"
                  checked={maintenanceMode}
                  onCheckedChange={setMaintenanceMode}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Quick Stats */}
              <div className="hidden md:flex items-center gap-4 text-sm">
                <div className="text-center">
                  <div className="font-bold">{adminStats.activeUsers.toLocaleString()}</div>
                  <div className="text-gray-300">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">৳{(adminStats.monthlyRevenue / 1000).toFixed(0)}k</div>
                  <div className="text-gray-300">Monthly Revenue</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{adminStats.systemUptime}%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
              </div>

              <Separator orientation="vertical" className="h-8 bg-gray-600" />

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700 relative">
                  <Bell className="w-5 h-5" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-500 text-xs">
                      {notifications}
                    </Badge>
                  )}
                </Button>
                
                <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                  <Settings className="w-5 h-5" />
                </Button>

                <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                  <Download className="w-5 h-5" />
                </Button>

                <Separator orientation="vertical" className="h-6 bg-gray-600" />

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/admin-avatar.jpg" />
                    <AvatarFallback className="bg-blue-600">AD</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <div className="font-medium">Admin User</div>
                    <div className="text-xs text-gray-300">Super Admin</div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-9 gap-1 p-1 bg-white rounded-lg shadow-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Jobs
            </TabsTrigger>
            <TabsTrigger value="finance" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Finance
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Support
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              System
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab - Enhanced Dashboard */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Performance Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Users</p>
                      <p className="text-3xl font-bold text-gray-900">{adminStats.totalUsers.toLocaleString()}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-green-600">+{adminStats.userGrowthRate}% this month</span>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                      <p className="text-3xl font-bold text-gray-900">৳{adminStats.monthlyRevenue.toLocaleString()}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-green-600">+15.3% from last month</span>
                      </div>
                    </div>
                    <div className="p-3 bg-green-100 rounded-lg">
                      <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                      <p className="text-3xl font-bold text-gray-900">{adminStats.activeJobs.toLocaleString()}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-green-600">+8.2% this week</span>
                      </div>
                    </div>
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Briefcase className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Support Tickets</p>
                      <p className="text-3xl font-bold text-gray-900">{adminStats.supportTickets}</p>
                      <div className="flex items-center mt-2">
                        <Clock className="w-4 h-4 text-yellow-600 mr-1" />
                        <span className="text-sm text-yellow-600">23 pending review</span>
                      </div>
                    </div>
                    <div className="p-3 bg-red-100 rounded-lg">
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="w-5 h-5" />
                    Platform Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Job Completion Rate</span>
                      <span className="font-medium">{adminStats.jobCompletionRate}%</span>
                    </div>
                    <Progress value={adminStats.jobCompletionRate} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>User Conversion Rate</span>
                      <span className="font-medium">{adminStats.conversionRate}%</span>
                    </div>
                    <Progress value={adminStats.conversionRate} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Rating</span>
                      <span className="font-medium">{adminStats.averageRating}/5.0</span>
                    </div>
                    <Progress value={(adminStats.averageRating / 5) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="w-5 h-5" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Server Uptime</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{adminStats.systemUptime}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Server Load</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${adminStats.serverLoad > 80 ? 'bg-red-500' : adminStats.serverLoad > 60 ? 'bg-yellow-500' : 'bg-green-500'} rounded-full`}></div>
                      <span className="font-medium">{adminStats.serverLoad}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API Response Time</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium">{adminStats.responseTime}ms</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Error Rate</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{adminStats.errorRate}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivities.slice(0, 6).map((activity, index) => {
                      const IconComponent = activity.icon;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className="p-1 bg-gray-100 rounded">
                            <IconComponent className="w-3 h-3 text-gray-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900 truncate">{activity.message}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Recent Data */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="flex flex-col items-center gap-2 h-auto py-4">
                      <UserPlus className="w-6 h-6" />
                      <span>Add User</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4">
                      <Plus className="w-6 h-6" />
                      <span>Create Job</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4">
                      <Download className="w-6 h-6" />
                      <span>Export Data</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4">
                      <Mail className="w-6 h-6" />
                      <span>Send Notice</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{adminStats.totalJobs.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Total Jobs Posted</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">৳{(adminStats.totalEarnings / 1000).toFixed(0)}k</p>
                      <p className="text-sm text-gray-600">Total Transactions</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{adminStats.completedJobs.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Completed Projects</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">৳{(adminStats.platformFees / 1000).toFixed(0)}k</p>
                      <p className="text-sm text-gray-600">Platform Revenue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Enhanced Users Management Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                <p className="text-gray-600">Manage all platform users, their permissions, and activities</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => exportData('users')}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Users
                </Button>
                <Button>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>

            {/* User Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold">{adminStats.totalUsers.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <UserCheck className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold">{adminStats.activeUsers.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <p className="text-sm text-gray-600">New Today</p>
                  <p className="text-2xl font-bold">{adminStats.newUsersToday}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm text-gray-600">Avg. Rating</p>
                  <p className="text-2xl font-bold">{adminStats.averageRating}</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search users by name, email, or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="User Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="freelancer">Freelancers</SelectItem>
                      <SelectItem value="client">Clients</SelectItem>
                      <SelectItem value="admin">Admins</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Users Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Last Activity</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => {
                      const StatusIcon = getStatusIcon(user.status);
                      return (
                        <TableRow key={user.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{user.name}</span>
                                  {user.verified && <CheckCircle className="w-4 h-4 text-green-600" />}
                                </div>
                                <p className="text-sm text-gray-600">{user.email}</p>
                                <p className="text-xs text-gray-500">{user.location}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="capitalize">
                              {user.type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(user.status)}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {user.type === 'freelancer' ? (
                              <div className="text-sm">
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 text-yellow-500" />
                                  <span>{user.rating}</span>
                                </div>
                                <div className="text-gray-600">
                                  {user.completedJobs} jobs • ৳{user.earnings.toLocaleString()}
                                </div>
                              </div>
                            ) : (
                              <span className="text-sm text-gray-500">-</span>
                            )}
                          </TableCell>
                          <TableCell className="text-sm">{user.joinDate}</TableCell>
                          <TableCell className="text-sm text-gray-600">{user.lastActivity}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm" title="View Details">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" title="Edit User">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" title="Send Message">
                                <Mail className="w-4 h-4" />
                              </Button>
                              {user.status === 'active' ? (
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="ghost" size="sm" className="text-red-600" title="Suspend User">
                                      <Ban className="w-4 h-4" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>Suspend User</AlertDialogTitle>
                                      <AlertDialogDescription>
                                        Are you sure you want to suspend {user.name}? They will not be able to access their account.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                                      <AlertDialogAction 
                                        className="bg-red-600 hover:bg-red-700"
                                        onClick={() => handleUserAction(user.id, 'suspend')}
                                      >
                                        Suspend
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              ) : (
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="text-green-600" 
                                  title="Activate User"
                                  onClick={() => handleUserAction(user.id, 'activate')}
                                >
                                  <UserCheck className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enhanced Jobs Management Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Job Management</h2>
                <p className="text-gray-600">Monitor and manage all job postings and applications</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filters
                </Button>
                <Button variant="outline" onClick={() => exportData('jobs')}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Job Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Briefcase className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Total Jobs</p>
                  <p className="text-2xl font-bold">{adminStats.totalJobs.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Activity className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">Active</p>
                  <p className="text-2xl font-bold">{adminStats.activeJobs.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold">{adminStats.completedJobs.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                  <p className="text-sm text-gray-600">Avg. Value</p>
                  <p className="text-2xl font-bold">৳{adminStats.averageJobValue.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-red-600" />
                  <p className="text-sm text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold">{adminStats.jobCompletionRate}%</p>
                </CardContent>
              </Card>
            </div>

            {/* Jobs Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Job Details</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Applications</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockJobs.map((job) => {
                      const StatusIcon = getStatusIcon(job.status);
                      return (
                        <TableRow key={job.id}>
                          <TableCell>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{job.title}</span>
                                {job.featured && <Star className="w-4 h-4 text-yellow-500" />}
                                {job.priority === 'urgent' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                              </div>
                              <Badge variant="outline" className="mt-1 text-xs">
                                {job.category}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>{job.client}</TableCell>
                          <TableCell className="font-semibold">৳{job.budget.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(job.status)}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {job.status.replace('_', ' ')}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="font-medium">{job.applications}</span>
                            <span className="text-gray-500 text-sm ml-1">applications</span>
                          </TableCell>
                          <TableCell className="text-sm">{job.deadline}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
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
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enhanced Finance Tab */}
          <TabsContent value="finance" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Financial Management</h2>
                <p className="text-gray-600">Monitor transactions, revenue, and financial analytics</p>
              </div>
              <div className="flex gap-2">
                <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 3 months</SelectItem>
                    <SelectItem value="1y">Last year</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={() => exportData('finance')}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Banknote className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold">৳{adminStats.totalEarnings.toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-1">+15.3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Platform Fees</p>
                  <p className="text-2xl font-bold">৳{adminStats.platformFees.toLocaleString()}</p>
                  <p className="text-xs text-blue-600 mt-1">10% commission rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <p className="text-sm text-gray-600">Pending Payouts</p>
                  <p className="text-2xl font-bold">৳{adminStats.pendingPayouts.toLocaleString()}</p>
                  <p className="text-xs text-yellow-600 mt-1">45 transactions pending</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm text-gray-600">Monthly Growth</p>
                  <p className="text-2xl font-bold">+{adminStats.userGrowthRate}%</p>
                  <p className="text-xs text-purple-600 mt-1">Revenue growth rate</p>
                </CardContent>
              </Card>
            </div>

            {/* Transaction Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Transactions</span>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockTransactions.map((transaction) => {
                      const StatusIcon = getStatusIcon(transaction.status);
                      return (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-mono">{transaction.id}</TableCell>
                          <TableCell>{transaction.userName}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="capitalize">
                              {transaction.type}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-semibold">
                            <span className={transaction.type === 'withdrawal' || transaction.type === 'refund' ? 'text-red-600' : 'text-green-600'}>
                              {transaction.type === 'withdrawal' || transaction.type === 'refund' ? '-' : '+'}৳{transaction.amount.toLocaleString()}
                            </span>
                          </TableCell>
                          <TableCell>{transaction.method}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(transaction.status)}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {transaction.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm">{transaction.date}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              {transaction.status === 'pending' && (
                                <>
                                  <Button variant="ghost" size="sm" className="text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-red-600">
                                    <XCircle className="w-4 h-4" />
                                  </Button>
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Analytics & Insights</h2>
              <div className="flex gap-2">
                <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 3 months</SelectItem>
                    <SelectItem value="1y">Last year</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Charts
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <LineChart className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">User Growth</p>
                  <p className="text-2xl font-bold">+{adminStats.userGrowthRate}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <BarChart className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">Revenue Growth</p>
                  <p className="text-2xl font-bold">+15.3%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <PieChart className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold">{adminStats.conversionRate}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                  <p className="text-sm text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold">{adminStats.jobCompletionRate}%</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                      <p className="text-gray-500">Revenue chart would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                      <p className="text-gray-500">Activity chart would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Support & Issues</h2>
              <Button variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>

            {/* Support Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <MessageSquare className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Total Tickets</p>
                  <p className="text-2xl font-bold">156</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold">{adminStats.supportTickets}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">Resolved</p>
                  <p className="text-2xl font-bold">67</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Timer className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm text-gray-600">Avg. Response</p>
                  <p className="text-2xl font-bold">2.5h</p>
                </CardContent>
              </Card>
            </div>

            {/* Support Tickets Table */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Support Tickets</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ticket ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 5 }, (_, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-mono">#TKT{1000 + i}</TableCell>
                        <TableCell>User {i + 1}</TableCell>
                        <TableCell>Payment Issue</TableCell>
                        <TableCell>
                          <Badge className={i % 3 === 0 ? 'bg-red-100 text-red-800' : i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}>
                            {i % 3 === 0 ? 'High' : i % 3 === 1 ? 'Medium' : 'Low'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={i % 2 === 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}>
                            {i % 2 === 0 ? 'Open' : 'Resolved'}
                          </Badge>
                        </TableCell>
                        <TableCell>2024-01-{15 - i}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
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

          {/* Enhanced System Tab */}
          <TabsContent value="system" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">System Monitoring</h2>
              <Button variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Status
              </Button>
            </div>

            {/* System Health Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{metric.name}</p>
                        <p className="text-xl font-bold">
                          {metric.value}
                          {metric.unit && <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>}
                        </p>
                        {metric.change && (
                          <div className="flex items-center mt-1">
                            {metric.change > 0 ? (
                              <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                            ) : (
                              <TrendingDown className="w-3 h-3 text-red-600 mr-1" />
                            )}
                            <span className={`text-xs ${metric.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {metric.change > 0 ? '+' : ''}{metric.change}{metric.unit || ''}
                            </span>
                          </div>
                        )}
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          metric.status === 'good'
                            ? 'bg-green-500'
                            : metric.status === 'warning'
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
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
                    Database Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Create Backup</p>
                      <p className="text-sm text-gray-600">Last backup: 2 hours ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Backup Now
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Optimize Database</p>
                      <p className="text-sm text-gray-600">Improve query performance</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Zap className="w-4 h-4 mr-2" />
                      Optimize
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Clear Cache</p>
                      <p className="text-sm text-gray-600">Free up memory space</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Clear
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security & Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Firewall Status</p>
                      <p className="text-sm text-gray-600">All ports protected</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">SSL Certificate</p>
                      <p className="text-sm text-gray-600">Expires: March 15, 2024</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Valid</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Security Scan</p>
                      <p className="text-sm text-gray-600">Run vulnerability check</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Shield className="w-4 h-4 mr-2" />
                      Scan Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Server Information */}
            <Card>
              <CardHeader>
                <CardTitle>Server Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Server Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>OS:</span>
                        <span>Ubuntu 20.04 LTS</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Node.js:</span>
                        <span>v18.17.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Database:</span>
                        <span>PostgreSQL 14.2</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Redis:</span>
                        <span>v7.0.5</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Performance</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>CPU Cores:</span>
                        <span>8 cores</span>
                      </div>
                      <div className="flex justify-between">
                        <span>RAM:</span>
                        <span>32 GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Storage:</span>
                        <span>500 GB SSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Network:</span>
                        <span>1 Gbps</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Monitoring</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Uptime:</span>
                        <span>99.9%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Load Average:</span>
                        <span>0.67</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Disk Usage:</span>
                        <span>45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Memory Usage:</span>
                        <span>78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Content Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Content
              </Button>
            </div>

            {/* Content Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Total Pages</p>
                  <p className="text-2xl font-bold">45</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">Email Templates</p>
                  <p className="text-2xl font-bold">23</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Bell className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <p className="text-sm text-gray-600">Notifications</p>
                  <p className="text-2xl font-bold">156</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm text-gray-600">Languages</p>
                  <p className="text-2xl font-bold">2</p>
                </CardContent>
              </Card>
            </div>

            {/* Content List */}
            <Card>
              <CardHeader>
                <CardTitle>Content Library</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Homepage Content", type: "Page", status: "Published", lastModified: "2 hours ago" },
                    { title: "About Us", type: "Page", status: "Published", lastModified: "1 day ago" },
                    { title: "Welcome Email", type: "Email Template", status: "Active", lastModified: "3 days ago" },
                    { title: "Privacy Policy", type: "Legal", status: "Published", lastModified: "1 week ago" },
                    { title: "Terms of Service", type: "Legal", status: "Draft", lastModified: "5 days ago" },
                    { title: "Job Alert Email", type: "Email Template", status: "Active", lastModified: "2 days ago" },
                    { title: "Footer Content", type: "Component", status: "Published", lastModified: "1 week ago" },
                    { title: "FAQ Section", type: "Page", status: "Published", lastModified: "3 days ago" }
                  ].map((content, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-100 rounded">
                          <FileText className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{content.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Badge variant="outline" className="text-xs">{content.type}</Badge>
                            <span>•</span>
                            <span>Modified {content.lastModified}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={content.status === "Published" || content.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                          {content.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enhanced Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">System Settings</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* General Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    General Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">Site Name</Label>
                      <p className="text-sm text-gray-600">Platform display name</p>
                    </div>
                    <Input value="ClickerPlus" className="w-40" />
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">User Registration</Label>
                      <p className="text-sm text-gray-600">Allow new user signups</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">Job Posting</Label>
                      <p className="text-sm text-gray-600">Allow job creation</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">Email Notifications</Label>
                      <p className="text-sm text-gray-600">Send system emails</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">Platform Fee (%)</Label>
                      <p className="text-sm text-gray-600">Commission rate</p>
                    </div>
                    <Input value="10" className="w-20" />
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">Minimum Withdrawal (৳)</Label>
                      <p className="text-sm text-gray-600">Min payout amount</p>
                    </div>
                    <Input value="1000" className="w-24" />
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">Max Transaction (৳)</Label>
                      <p className="text-sm text-gray-600">Transaction limit</p>
                    </div>
                    <Input value="100000" className="w-28" />
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">Payment Gateway</Label>
                      <p className="text-sm text-gray-600">Active payment method</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">Two-Factor Authentication</Label>
                      <p className="text-sm text-gray-600">Require 2FA for admins</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">Session Timeout</Label>
                      <p className="text-sm text-gray-600">Auto logout time</p>
                    </div>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="30 min" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 min</SelectItem>
                        <SelectItem value="30">30 min</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="240">4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <Label className="text-base">Login Alerts</Label>
                      <p className="text-sm text-gray-600">Notify suspicious logins</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              {/* Email Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>SMTP Server</Label>
                    <Input placeholder="smtp.example.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Port</Label>
                      <Input placeholder="587" />
                    </div>
                    <div className="space-y-2">
                      <Label>Encryption</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="TLS" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tls">TLS</SelectItem>
                          <SelectItem value="ssl">SSL</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>From Email</Label>
                    <Input placeholder="noreply@clickerplus.com" />
                  </div>
                  <Button variant="outline" className="w-full">
                    Test Email Configuration
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Save Settings */}
            <div className="flex justify-end gap-2">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save All Settings</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

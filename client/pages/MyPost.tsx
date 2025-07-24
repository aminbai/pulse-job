import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Eye,
  Edit2,
  Trash2,
  Users,
  DollarSign,
  Calendar,
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function MyPost() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for posted jobs
  const myPosts = [
    {
      id: 1,
      title: "React Developer for E-commerce Website",
      description:
        "Looking for an experienced React developer to build a modern e-commerce platform with advanced features.",
      budget: "$500-1000",
      status: "active",
      applicants: 12,
      views: 89,
      datePosted: "2024-01-15",
      category: "Web Development",
      skills: ["React", "JavaScript", "Node.js"],
      duration: "2-4 weeks",
    },
    {
      id: 2,
      title: "UI/UX Designer for Mobile App",
      description:
        "Need a creative UI/UX designer to design a user-friendly mobile application interface.",
      budget: "$300-600",
      status: "in-progress",
      applicants: 8,
      views: 56,
      datePosted: "2024-01-10",
      category: "Design",
      skills: ["Figma", "UI Design", "UX Research"],
      duration: "1-2 weeks",
    },
    {
      id: 3,
      title: "Content Writer for Blog Articles",
      description:
        "Seeking a skilled content writer to create engaging blog articles for our technology website.",
      budget: "$100-300",
      status: "completed",
      applicants: 15,
      views: 143,
      datePosted: "2024-01-05",
      category: "Writing",
      skills: ["Content Writing", "SEO", "Research"],
      duration: "1 week",
    },
    {
      id: 4,
      title: "Python Backend Developer",
      description:
        "Looking for a Python developer to build REST APIs and handle backend development.",
      budget: "$800-1500",
      status: "draft",
      applicants: 0,
      views: 0,
      datePosted: "2024-01-20",
      category: "Backend Development",
      skills: ["Python", "Django", "PostgreSQL"],
      duration: "3-6 weeks",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredPosts = myPosts.filter((post) => {
    const matchesStatus =
      filterStatus === "all" || post.status === filterStatus;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Page Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                My Posts
              </h1>
              <p className="text-gray-600">
                Manage your job postings and track applications
              </p>
            </div>
            <Link to="/post-job">
              <Button className="bg-brand-green hover:bg-green-600">
                Post New Job
              </Button>
            </Link>
          </div>

          {/* Filters and Search */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search your posts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Eye className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Posts</p>
                    <p className="text-xl font-bold">{myPosts.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Applicants</p>
                    <p className="text-xl font-bold">
                      {myPosts.reduce((sum, post) => sum + post.applicants, 0)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Eye className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Views</p>
                    <p className="text-xl font-bold">
                      {myPosts.reduce((sum, post) => sum + post.views, 0)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <DollarSign className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active Posts</p>
                    <p className="text-xl font-bold">
                      {
                        myPosts.filter((post) => post.status === "active")
                          .length
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Posts List */}
          <div className="space-y-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {post.title}
                          </h3>
                          <Badge className={getStatusColor(post.status)}>
                            {post.status.charAt(0).toUpperCase() +
                              post.status.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{post.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.skills.map((skill, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        <span>{post.budget}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{post.applicants} applicants</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Eye className="w-4 h-4" />
                        <span>{post.views} views</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{post.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="text-gray-400 mb-4">
                    <Users className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No posts found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {filterStatus === "all"
                      ? "You haven't posted any jobs yet."
                      : `No ${filterStatus} posts found.`}
                  </p>
                  <Link to="/post-job">
                    <Button className="bg-brand-green hover:bg-green-600">
                      Post Your First Job
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

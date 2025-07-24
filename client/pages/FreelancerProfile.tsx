import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, DollarSign, MessageCircle, Share2 } from "lucide-react";
import Header from "@/components/Header";

export default function FreelancerProfile() {
  const { username } = useParams<{ username: string }>();

  // Mock freelancer data - in a real app, this would be fetched based on username
  const freelancer = {
    username: username || "Unknown",
    fullName: "Mamun Ahmed",
    title: "Full Stack Developer & UI/UX Designer",
    rating: 4.8,
    reviews: 127,
    completedJobs: 89,
    location: "Dhaka, Bangladesh",
    memberSince: "January 2022",
    hourlyRate: "$15-25",
    responseTime: "Within 2 hours",
    description: "Experienced full-stack developer with 5+ years of expertise in React, Node.js, and modern web technologies. I specialize in creating responsive web applications and user-friendly interfaces.",
    skills: [
      "React", "Node.js", "TypeScript", "JavaScript", "HTML/CSS", 
      "MongoDB", "Express.js", "UI/UX Design", "Figma", "Tailwind CSS"
    ],
    portfolio: [
      {
        id: 1,
        title: "E-commerce Platform",
        image: "/placeholder.svg",
        description: "Modern e-commerce solution with React and Node.js"
      },
      {
        id: 2,
        title: "Dashboard Design",
        image: "/placeholder.svg", 
        description: "Admin dashboard with advanced analytics"
      },
      {
        id: 3,
        title: "Mobile App UI",
        image: "/placeholder.svg",
        description: "Clean and intuitive mobile app interface"
      }
    ],
    reviewsList: [
      {
        id: 1,
        client: "Sarah Johnson",
        rating: 5,
        comment: "Excellent work! Delivered on time and exceeded expectations.",
        date: "2 weeks ago"
      },
      {
        id: 2,
        client: "Mike Chen",
        rating: 5,
        comment: "Very professional and skilled developer. Highly recommended!",
        date: "1 month ago"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {freelancer.fullName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">
                      {freelancer.fullName}
                    </h1>
                    <p className="text-lg text-gray-600 mb-3">
                      @{freelancer.username}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {freelancer.title}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{freelancer.rating}</span>
                        <span>({freelancer.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{freelancer.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Member since {freelancer.memberSince}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {freelancer.description}
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-brand-green-light text-brand-green">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {freelancer.portfolio.map((item) => (
                    <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video bg-gray-100 flex items-center justify-center">
                        <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">P</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({freelancer.reviews})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {freelancer.reviewsList.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm">
                          {review.client[0]}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{review.client}</div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Button className="w-full bg-brand-green hover:bg-green-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Freelancer
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completed Jobs:</span>
                    <span className="font-medium">{freelancer.completedJobs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-medium text-green-600">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-medium">{freelancer.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hourly Rate:</span>
                    <span className="font-medium">{freelancer.hourlyRate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Available for new projects</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Can start immediately
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

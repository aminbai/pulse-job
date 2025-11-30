import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Tag,
  Clock,
  Search,
  Filter,
  Heart,
  Share,
  Eye,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PublicHeader from "@/components/PublicHeader";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Remote Work: Trends and Predictions for 2024",
    excerpt: "Explore the latest trends in remote work and freelancing, and discover what the future holds for digital nomads and remote workers worldwide.",
    content: "Remote work has revolutionized the way we think about employment...",
    author: "Sarah Johnson",
    authorRole: "Product Manager",
    category: "Future of Work",
    tags: ["Remote Work", "Freelancing", "Trends", "2024"],
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    views: 1250,
    likes: 89,
    featured: true,
    image: "/api/placeholder/600/300",
  },
  {
    id: 2,
    title: "How to Build a Successful Freelance Career in Tech",
    excerpt: "A comprehensive guide to starting and growing your freelance career in the technology sector, from finding clients to setting rates.",
    content: "Building a successful freelance career in tech requires more than just technical skills...",
    author: "Ahmed Rahman",
    authorRole: "Senior Developer",
    category: "Career Tips",
    tags: ["Freelancing", "Tech Career", "Tips", "Success"],
    publishedAt: "2024-01-12",
    readTime: "12 min read",
    views: 2100,
    likes: 156,
    featured: false,
    image: "/api/placeholder/600/300",
  },
  {
    id: 3,
    title: "Top 10 Skills Every Freelancer Should Have in 2024",
    excerpt: "Discover the essential skills that will set you apart in the competitive freelancing market and help you secure high-paying projects.",
    content: "The freelancing landscape is constantly evolving...",
    author: "Maria Garcia",
    authorRole: "Career Coach",
    category: "Skills Development",
    tags: ["Skills", "Professional Development", "Freelancing", "Career Growth"],
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    views: 1875,
    likes: 132,
    featured: true,
    image: "/api/placeholder/600/300",
  },
  {
    id: 4,
    title: "Managing Client Relationships: A Freelancer's Guide",
    excerpt: "Learn how to build strong, lasting relationships with your clients that lead to repeat business and positive referrals.",
    content: "Strong client relationships are the foundation of a successful freelance business...",
    author: "David Kim",
    authorRole: "Business Development",
    category: "Client Management",
    tags: ["Client Relations", "Communication", "Business Tips"],
    publishedAt: "2024-01-08",
    readTime: "7 min read",
    views: 980,
    likes: 67,
    featured: false,
    image: "/api/placeholder/600/300",
  },
  {
    id: 5,
    title: "The Rise of AI in Freelancing: Opportunities and Challenges",
    excerpt: "Explore how artificial intelligence is changing the freelancing landscape and what it means for freelancers and clients.",
    content: "Artificial intelligence is reshaping industries across the globe...",
    author: "Dr. Jennifer Lee",
    authorRole: "AI Researcher",
    category: "Technology",
    tags: ["AI", "Technology", "Future", "Innovation"],
    publishedAt: "2024-01-05",
    readTime: "15 min read",
    views: 3200,
    likes: 245,
    featured: true,
    image: "/api/placeholder/600/300",
  },
  {
    id: 6,
    title: "Pricing Your Freelance Services: Strategies for Success",
    excerpt: "Master the art of pricing your freelance services competitively while ensuring you're fairly compensated for your expertise.",
    content: "One of the biggest challenges freelancers face is pricing their services...",
    author: "Michael Brown",
    authorRole: "Freelance Consultant",
    category: "Business Tips",
    tags: ["Pricing", "Business Strategy", "Revenue"],
    publishedAt: "2024-01-03",
    readTime: "9 min read",
    views: 1650,
    likes: 98,
    featured: false,
    image: "/api/placeholder/600/300",
  },
];

const categories = [
  "All Categories",
  "Future of Work",
  "Career Tips", 
  "Skills Development",
  "Client Management",
  "Technology",
  "Business Tips",
];

const popularTags = [
  "Freelancing",
  "Remote Work",
  "Career Growth",
  "Technology",
  "Business Tips",
  "AI",
  "Skills",
  "Success",
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const postsPerPage = 6;

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleShare = (post: typeof blogPosts[0]) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `${window.location.origin}/blog/${post.id}`,
      });
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/blog/${post.id}`);
      alert("Link copied to clipboard!");
    }
  };

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    if (searchTerm && !post.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }

    if (selectedCategory !== "All Categories" && post.category !== selectedCategory) {
      return false;
    }

    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="bg-brand-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">ClickerPlus Blog</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Insights, tips, and stories from the world of freelancing and remote work
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-3 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Featured Posts */}
        {!searchTerm && selectedCategory === "All Categories" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-brand-green" />
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map(post => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-brand-green px-2 py-1 rounded text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-brand-green transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.authorRole}</p>
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{filteredPosts.length}</span> articles found
                </p>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {paginatedPosts.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or category filter</p>
                </div>
              ) : (
                paginatedPosts.map(post => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {post.category}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.readTime}
                            </span>
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {post.views}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            <Link to={`/blog/${post.id}`} className="hover:text-brand-green transition-colors">
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map(tag => (
                              <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                <p className="text-xs text-gray-500">{post.authorRole}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleLike(post.id)}
                                className={likedPosts.includes(post.id) ? "text-red-600" : "text-gray-400"}
                              >
                                <Heart className={`w-4 h-4 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                                {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleShare(post)}
                                className="text-gray-400"
                              >
                                <Share className="w-4 h-4" />
                              </Button>
                              <Link to={`/blog/${post.id}`}>
                                <Button className="bg-brand-green hover:bg-green-600">
                                  Read More
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "bg-brand-green hover:bg-green-600" : ""}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get the latest insights and tips delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full bg-brand-green hover:bg-green-600">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(tag => (
                    <button
                      key={tag}
                      className="bg-gray-100 hover:bg-brand-green-light text-gray-700 hover:text-brand-green px-3 py-1 rounded text-sm transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 5).map(post => (
                    <div key={post.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <h4 className="text-sm font-medium text-gray-900 hover:text-brand-green cursor-pointer line-clamp-2 mb-1">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h4>
                      <div className="flex items-center text-xs text-gray-500 space-x-2">
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ClickerPlus</h3>
              <p className="text-gray-300 mb-4">
                Connecting talent with opportunity worldwide.
              </p>
              <p className="text-sm text-gray-400">
                &copy; 2024 ClickerPlus. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Content</h4>
              <ul className="space-y-2">
                <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Latest Articles</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="/blog?category=Future of Work" className="text-gray-300 hover:text-white transition-colors">Future of Work</a></li>
                <li><a href="/blog?category=Career Tips" className="text-gray-300 hover:text-white transition-colors">Career Tips</a></li>
                <li><a href="/blog?category=Technology" className="text-gray-300 hover:text-white transition-colors">Technology</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
              <p className="text-gray-300 text-sm mb-3">
                Get weekly insights delivered to your inbox.
              </p>
              <div className="flex">
                <Input placeholder="Your email" className="rounded-r-none" />
                <Button className="rounded-l-none bg-brand-green hover:bg-green-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

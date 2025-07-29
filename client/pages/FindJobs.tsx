import { useState, useEffect, useMemo, memo } from 'react';
import { Search, MapPin, DollarSign, Clock, BookmarkIcon, Filter, Grid, List, ChevronDown, Star, Building, Users, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { PublicHeader } from "@/components/PublicHeader";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Remote';
  salary: { min: number; max: number; currency: string };
  experience: 'Entry' | 'Mid' | 'Senior' | 'Executive';
  category: string;
  skills: string[];
  description: string;
  postedDate: string;
  applications: number;
  verified: boolean;
  featured: boolean;
  urgent: boolean;
  rating: number;
  companySize: string;
}

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: { min: 120000, max: 160000, currency: 'USD' },
    experience: 'Senior',
    category: 'Web Development',
    skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS'],
    description: 'We are looking for an experienced frontend developer to join our growing team...',
    postedDate: '2024-01-15',
    applications: 23,
    verified: true,
    featured: true,
    urgent: false,
    rating: 4.8,
    companySize: '100-500 employees'
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    company: 'Design Studio Pro',
    location: 'New York, NY',
    type: 'Contract',
    salary: { min: 80, max: 120, currency: 'USD' },
    experience: 'Mid',
    category: 'Design',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    description: 'Creative UI/UX designer needed for exciting new product launch...',
    postedDate: '2024-01-14',
    applications: 15,
    verified: true,
    featured: false,
    urgent: true,
    rating: 4.6,
    companySize: '50-100 employees'
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'StartupHub',
    location: 'Remote',
    type: 'Remote',
    salary: { min: 90000, max: 130000, currency: 'USD' },
    experience: 'Mid',
    category: 'Web Development',
    skills: ['Node.js', 'React', 'MongoDB', 'Express'],
    description: 'Join our dynamic startup as a full stack developer...',
    postedDate: '2024-01-13',
    applications: 31,
    verified: false,
    featured: false,
    urgent: false,
    rating: 4.2,
    companySize: '10-50 employees'
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'Analytics Plus',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: { min: 110000, max: 140000, currency: 'USD' },
    experience: 'Senior',
    category: 'Data Science',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    description: 'Seeking a data scientist to drive insights from complex datasets...',
    postedDate: '2024-01-12',
    applications: 19,
    verified: true,
    featured: true,
    urgent: false,
    rating: 4.7,
    companySize: '200-500 employees'
  },
  {
    id: '5',
    title: 'Mobile App Developer',
    company: 'MobileTech Solutions',
    location: 'Austin, TX',
    type: 'Part-time',
    salary: { min: 60, max: 90, currency: 'USD' },
    experience: 'Mid',
    category: 'Mobile Development',
    skills: ['React Native', 'iOS', 'Android', 'Firebase'],
    description: 'Part-time mobile developer for innovative app projects...',
    postedDate: '2024-01-11',
    applications: 27,
    verified: true,
    featured: false,
    urgent: true,
    rating: 4.4,
    companySize: '20-50 employees'
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: 'CloudFirst Corp',
    location: 'Denver, CO',
    type: 'Full-time',
    salary: { min: 100000, max: 135000, currency: 'USD' },
    experience: 'Senior',
    category: 'DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    description: 'Lead our cloud infrastructure and deployment automation...',
    postedDate: '2024-01-10',
    applications: 12,
    verified: true,
    featured: false,
    urgent: false,
    rating: 4.5,
    companySize: '100-200 employees'
  }
];

const categories = [
  'Web Development', 'Mobile Development', 'Design', 'Data Science', 
  'DevOps', 'Marketing', 'Sales', 'Writing', 'Customer Service'
];

const JobCard = memo(({ job, viewMode }: { job: Job; viewMode: 'grid' | 'list' }) => {
  const [isSaved, setIsSaved] = useState(false);

  const formatSalary = (salary: Job['salary']) => {
    if (salary.currency === 'USD') {
      if (salary.min < 1000) {
        return `$${salary.min}-${salary.max}/hr`;
      }
      return `$${(salary.min / 1000).toFixed(0)}k-${(salary.max / 1000).toFixed(0)}k/year`;
    }
    return `${salary.min}-${salary.max} ${salary.currency}`;
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  if (viewMode === 'list') {
    return (
      <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                  {job.title}
                </h3>
                {job.featured && <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Featured</Badge>}
                {job.urgent && <Badge variant="destructive">Urgent</Badge>}
                {job.verified && <Badge variant="outline" className="text-green-600 border-green-600">✓ Verified</Badge>}
              </div>
              
              <div className="flex items-center gap-6 text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  <span className="font-medium">{job.company}</span>
                  <div className="flex items-center ml-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">{job.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-medium">{formatSalary(job.salary)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{job.companySize}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-3 line-clamp-2">{job.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {job.skills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {job.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{job.skills.length - 4} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{getTimeAgo(job.postedDate)}</span>
                  </div>
                  <span>{job.applications} applications</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 ml-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSaved(!isSaved)}
                className={isSaved ? 'text-blue-600' : 'text-gray-400'}
              >
                <BookmarkIcon className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
              </Button>
              <Button size="sm" className="min-w-[100px]">
                Apply Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {job.featured && <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Featured</Badge>}
              {job.urgent && <Badge variant="destructive">Urgent</Badge>}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 cursor-pointer mb-1">
              {job.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Building className="w-4 h-4" />
              <span className="font-medium">{job.company}</span>
              {job.verified && <Badge variant="outline" className="text-green-600 border-green-600 text-xs">✓</Badge>}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSaved(!isSaved)}
            className={isSaved ? 'text-blue-600' : 'text-gray-400'}
          >
            <BookmarkIcon className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <Badge variant="outline">{job.type}</Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 font-semibold text-gray-900">
              <DollarSign className="w-4 h-4" />
              <span>{formatSalary(job.salary)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">{job.rating}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>

          <div className="flex flex-wrap gap-1">
            {job.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{job.skills.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{getTimeAgo(job.postedDate)}</span>
              </div>
              <span>{job.applications} applications</span>
            </div>
            <Button size="sm">Apply</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default function FindJobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [salaryRange, setSalaryRange] = useState([0, 200000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFeatured, setShowFeatured] = useState(false);
  const [showRemote, setShowRemote] = useState(false);
  const [showVerified, setShowVerified] = useState(false);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLocation = !selectedLocation || job.location.toLowerCase().includes(selectedLocation.toLowerCase());
      const matchesCategory = !selectedCategory || job.category === selectedCategory;
      const matchesType = !selectedType || job.type === selectedType;
      const matchesExperience = !selectedExperience || job.experience === selectedExperience;
      const matchesSalary = job.salary.min >= salaryRange[0] && job.salary.max <= salaryRange[1];
      const matchesFeatured = !showFeatured || job.featured;
      const matchesRemote = !showRemote || job.type === 'Remote' || job.location.toLowerCase().includes('remote');
      const matchesVerified = !showVerified || job.verified;

      return matchesSearch && matchesLocation && matchesCategory && matchesType && 
             matchesExperience && matchesSalary && matchesFeatured && matchesRemote && matchesVerified;
    });
  }, [searchTerm, selectedLocation, selectedCategory, selectedType, selectedExperience, 
      salaryRange, showFeatured, showRemote, showVerified]);

  const sortedJobs = useMemo(() => {
    const sorted = [...filteredJobs];
    switch (sortBy) {
      case 'date':
        return sorted.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
      case 'salary':
        return sorted.sort((a, b) => b.salary.max - a.salary.max);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'applications':
        return sorted.sort((a, b) => a.applications - b.applications);
      default:
        return sorted.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.urgent && !b.urgent) return -1;
          if (!a.urgent && b.urgent) return 1;
          return 0;
        });
    }
  }, [filteredJobs, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedLocation('');
    setSelectedCategory('');
    setSelectedType('');
    setSelectedExperience('');
    setSalaryRange([0, 200000]);
    setShowFeatured(false);
    setShowRemote(false);
    setShowVerified(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Dream Job
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Discover thousands of opportunities from top companies worldwide
              </p>
            </div>

            {/* Quick Search */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Job title, keywords, or company"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Location"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>
                  <Button size="lg" className="h-12 bg-blue-600 hover:bg-blue-700">
                    Search Jobs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Filters
                    </h2>
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Quick Filters */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Quick Filters</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="featured" 
                          checked={showFeatured}
                          onCheckedChange={setShowFeatured}
                        />
                        <Label htmlFor="featured" className="text-sm">Featured Jobs</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="remote" 
                          checked={showRemote}
                          onCheckedChange={setShowRemote}
                        />
                        <Label htmlFor="remote" className="text-sm">Remote Work</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="verified" 
                          checked={showVerified}
                          onCheckedChange={setShowVerified}
                        />
                        <Label htmlFor="verified" className="text-sm">Verified Companies</Label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Category */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Categories</SelectItem>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Job Type */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Job Type</Label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Types</SelectItem>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Freelance">Freelance</SelectItem>
                        <SelectItem value="Remote">Remote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Experience Level</Label>
                    <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Levels</SelectItem>
                        <SelectItem value="Entry">Entry Level</SelectItem>
                        <SelectItem value="Mid">Mid Level</SelectItem>
                        <SelectItem value="Senior">Senior Level</SelectItem>
                        <SelectItem value="Executive">Executive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Salary Range */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">
                      Salary Range: ${salaryRange[0].toLocaleString()} - ${salaryRange[1].toLocaleString()}
                    </Label>
                    <Slider
                      value={salaryRange}
                      onValueChange={setSalaryRange}
                      max={200000}
                      min={0}
                      step={5000}
                      className="w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Jobs List */}
            <div className="lg:w-3/4">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {sortedJobs.length} Jobs Found
                  </h2>
                  <p className="text-gray-600">
                    {searchTerm && `Showing results for "${searchTerm}"`}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* View Toggle */}
                  <div className="flex items-center border rounded-lg p-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="px-3"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="px-3"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Most Relevant</SelectItem>
                      <SelectItem value="date">Newest First</SelectItem>
                      <SelectItem value="salary">Highest Salary</SelectItem>
                      <SelectItem value="rating">Best Rated</SelectItem>
                      <SelectItem value="applications">Least Competition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Jobs Grid/List */}
              {sortedJobs.length === 0 ? (
                <Card className="p-12 text-center">
                  <div className="text-gray-400 mb-4">
                    <Briefcase className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or clearing some filters
                  </p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </Card>
              ) : (
                <div className={
                  viewMode === 'grid' 
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6" 
                    : "space-y-4"
                }>
                  {sortedJobs.map((job) => (
                    <JobCard key={job.id} job={job} viewMode={viewMode} />
                  ))}
                </div>
              )}

              {/* Load More */}
              {sortedJobs.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Jobs
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Job Alerts CTA */}
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Never Miss Your Dream Job
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Set up job alerts and get notified when new opportunities matching your criteria are posted
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Create Job Alert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

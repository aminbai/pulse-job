import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Star,
  Clock,
  Search,
  Globe,
  MapPin,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Plus,
  Briefcase,
  DollarSign,
  Calendar,
  FileText,
  MessageSquare,
  Filter,
  Eye,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardHeader from "@/components/DashboardHeader";

// Sample data for My Jobs
const myJobs = [
  {
    id: 1,
    title: "গমেইল নতুন একাউন্ট তৈরি করার জন্য ১০ টাকা",
    status: "submitted",
    progress: "14/16",
    notRated: 2,
    cost: "$0.062",
    statusIcon: "⏳",
  }
];

// Sample data for Browse Jobs
const availableJobs = [
  {
    id: 1,
    title: "Create Gmail Accounts",
    description: "Need 10 new Gmail accounts with verification",
    category: "Account Creation",
    budget: "$50",
    duration: "3 days",
    client: "TechCorp",
    postedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Social Media Management",
    description: "Manage Facebook page for 1 month",
    category: "Social Media",
    budget: "$200",
    duration: "30 days",
    client: "StartupXYZ",
    postedAt: "5 hours ago",
  },
];

// Categories for Post Job
const categories = [
  {
    id: "gmail-account",
    name: "Gmail Account",
    subcategories: ["New Gmail Account", "Old Gmail Account", "Gmail + YouTube Account"],
  },
  {
    id: "social-media",
    name: "Social Media",
    subcategories: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
  },
  {
    id: "data-entry",
    name: "Data Entry",
    subcategories: ["Excel Data Entry", "Database Management", "Data Processing"],
  },
];

// Targeting zones for Post Job
const targetingZones = [
  { id: "international", label: "International", icon: Globe },
  { id: "asia", label: "Asia", icon: MapPin },
  { id: "europe", label: "Europe", icon: MapPin },
  { id: "oceana", label: "Oceana", icon: MapPin },
];

// Countries for targeting
const countries = [
  // Asia
  { name: "Bangladesh", region: "asia" },
  { name: "India", region: "asia" },
  { name: "Pakistan", region: "asia" },
  { name: "China", region: "asia" },
  { name: "Japan", region: "asia" },
  // Europe
  { name: "United Kingdom", region: "europe" },
  { name: "Germany", region: "europe" },
  { name: "France", region: "europe" },
  { name: "Italy", region: "europe" },
  // International
  { name: "United States", region: "international" },
  { name: "Canada", region: "international" },
  { name: "Australia", region: "international" },
];

export default function UnifiedDashboard() {
  const [activeTab, setActiveTab] = useState("my-jobs");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("most-recent");
  
  // Post Job states
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedZone, setSelectedZone] = useState("international");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("gmail-account");
  const [selectedSubcategory, setSelectedSubcategory] = useState("New Gmail Account");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [workerNeed, setWorkerNeed] = useState(1);
  const [workerEarn, setWorkerEarn] = useState(1.0);
  const [workDuration, setWorkDuration] = useState(7);

  const handleCountryToggle = (countryName: string) => {
    setSelectedCountries((prev) =>
      prev.includes(countryName)
        ? prev.filter((c) => c !== countryName)
        : [...prev, countryName]
    );
  };

  const handleSelectAll = () => {
    const filteredCountries = countries.filter((c) => c.region === selectedZone);
    const allCountryNames = filteredCountries.map((c) => c.name);

    if (selectedCountries.length === allCountryNames.length) {
      setSelectedCountries([]);
    } else {
      setSelectedCountries(allCountryNames);
    }
  };

  const calculateTotalJobCost = () => {
    const baseCost = workerNeed * workerEarn;
    const serviceFee = baseCost * 0.1;
    return {
      totalCost: (baseCost + serviceFee).toFixed(3),
      serviceFee: serviceFee.toFixed(3),
      baseCost: baseCost.toFixed(3),
    };
  };

  const costs = calculateTotalJobCost();

  const renderMyJobs = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">My Jobs</h2>
          <p className="text-gray-600">Submitted works must be rated within six days</p>
          <p className="text-sm text-gray-500 mt-1">{myJobs.length} Result</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Job Title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
          >
            <option value="most-recent">Most Recent</option>
            <option value="oldest">Oldest</option>
            <option value="highest-pay">Highest Pay</option>
          </select>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Job Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Progress</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Not Rated</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cost</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {myJobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{job.statusIcon}</span>
                    <span className="text-sm text-gray-600 capitalize">{job.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Link 
                    to={`/job/${job.id}`}
                    className="text-brand-green hover:text-green-600 font-medium transition-colors"
                  >
                    {job.title}
                  </Link>
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">{job.progress}</td>
                <td className="px-6 py-4 text-gray-900">{job.notRated}</td>
                <td className="px-6 py-4 text-gray-900 font-medium">{job.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPostJobStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Choose the job targeting region</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {targetingZones.map((zone) => {
          const IconComponent = zone.icon;
          return (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`p-4 rounded-lg border-2 transition-colors ${
                selectedZone === zone.id
                  ? "border-brand-green bg-green-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <IconComponent className="w-8 h-8 mx-auto mb-2 text-gray-600" />
              <p className="font-medium text-gray-900">{zone.label}</p>
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-gray-900">Select Countries</h4>
          <button
            onClick={handleSelectAll}
            className="text-brand-green hover:text-green-600 text-sm font-medium"
          >
            {selectedCountries.length > 0 ? "Deselect All" : "Select All"}
          </button>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-h-60 overflow-y-auto">
          {countries
            .filter((c) => c.region === selectedZone)
            .map((country) => (
              <button
                key={country.name}
                onClick={() => handleCountryToggle(country.name)}
                className={`p-2 text-sm rounded border ${
                  selectedCountries.includes(country.name)
                    ? "bg-brand-green text-white border-brand-green"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                }`}
              >
                {country.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );

  const renderPostJobStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Choose the job category</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id);
              setSelectedSubcategory(category.subcategories[0]);
            }}
            className={`p-4 rounded-lg border-2 text-left transition-colors ${
              selectedCategory === category.id
                ? "border-brand-green bg-green-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
            <div className="space-y-1">
              {category.subcategories.slice(0, 3).map((sub) => (
                <p key={sub} className="text-sm text-gray-600">{sub}</p>
              ))}
            </div>
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Choose subcategory</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {categories
              .find((cat) => cat.id === selectedCategory)
              ?.subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => setSelectedSubcategory(subcategory)}
                  className={`p-3 text-sm rounded border ${
                    selectedSubcategory === subcategory
                      ? "bg-brand-green text-white border-brand-green"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {subcategory}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderPostJobStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Write an accurate and specific job title</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter a clear and specific job title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What specific tasks need to be completed?
            <span className="ml-1 text-yellow-500">!</span>
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={6}
            placeholder="Provide detailed instructions for the job..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="auto-checker"
            className="rounded border-gray-300"
          />
          <label htmlFor="auto-checker" className="text-sm text-gray-700">
            Need Auto Job Checker?
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Required proof the job was completed
            <span className="ml-1 text-yellow-500">!</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Proof 1</label>
              <input
                type="text"
                placeholder="e.g., Username"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Proof 2</label>
              <input
                type="text"
                placeholder="e.g., Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPostJobStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Job Pricing</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Worker Need</label>
          <input
            type="number"
            min="1"
            value={workerNeed}
            onChange={(e) => setWorkerNeed(parseInt(e.target.value) || 1)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Worker Earn</label>
          <input
            type="number"
            min="0"
            step="0.001"
            value={workerEarn}
            onChange={(e) => setWorkerEarn(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Work Duration (Days)</label>
          <input
            type="number"
            min="1"
            value={workDuration}
            onChange={(e) => setWorkDuration(parseInt(e.target.value) || 1)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          className="bg-brand-green text-white px-8 py-3 text-lg font-semibold hover:bg-green-600"
          onClick={() => alert("Job posted successfully!")}
        >
          SUBMIT POST
        </Button>
      </div>
    </div>
  );

  const renderPostJob = () => {
    const steps = [
      { id: 1, name: "Region", active: currentStep === 1, completed: currentStep > 1 },
      { id: 2, name: "Category", active: currentStep === 2, completed: currentStep > 2 },
      { id: 3, name: "Proof", active: currentStep === 3, completed: currentStep > 3 },
      { id: 4, name: "Pricing", active: currentStep === 4, completed: currentStep > 4 },
    ];

    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">Post Jobs</h2>
          <div className="bg-brand-green text-white rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">SUMMARY</h3>
            <div className="space-y-1 text-sm">
              <div>Total Cost: <span className="font-semibold">{costs.totalCost}</span></div>
              <div>Service Fee: <span className="font-semibold">{costs.serviceFee}</span></div>
              <div>Zone: <span className="font-semibold">{selectedZone}</span></div>
              <div>Workers: <span className="font-semibold">{workerNeed}</span></div>
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    step.completed
                      ? "bg-brand-green text-white"
                      : step.active
                        ? "bg-brand-green text-white"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.completed ? "✓" : step.id}
                </div>
                <span className={`ml-2 font-medium ${
                  step.completed || step.active ? "text-brand-green" : "text-gray-600"
                }`}>
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    step.completed ? "bg-brand-green" : "bg-gray-300"
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {currentStep === 1 && renderPostJobStep1()}
          {currentStep === 2 && renderPostJobStep2()}
          {currentStep === 3 && renderPostJobStep3()}
          {currentStep === 4 && renderPostJobStep4()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <Button
            onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
            disabled={currentStep === 4}
            className="flex items-center bg-brand-green hover:bg-green-600"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  };

  const renderBrowseJobs = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Browse Jobs</h2>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green">
            <option>Latest</option>
            <option>Highest Pay</option>
            <option>Shortest Duration</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {availableJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-3">{job.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{job.category}</span>
                    <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1" />{job.budget}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{job.duration}</span>
                    <span>by {job.client}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className="text-xs text-gray-500">{job.postedAt}</span>
                  <Button className="bg-brand-green hover:bg-green-600">
                    Apply Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderDealMarketplace = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Deal Marketplace</h2>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Post Deal (Seller)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              একজন বিক্রেতা Deal Post থেকে যেকোনো অনলাইন সেবা, পণ্য বা অফার বিজ্ঞাপন দিতে পারেন। 
              এবং বিক্রেতার কাছ থেকে এই বিজ্ঞাপন দেওয়ার জন্য কোনো চার্জ নেওয়া হবে না।
            </p>
            <Button className="bg-brand-green hover:bg-green-600">
              <Plus className="w-4 h-4 mr-2" />
              Post New Deal
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Order Service (Buyer)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              GigClickers এ যেকোনো অফার বা সেবা কেনার জন্য ক্রেতার কাছ থেকে কোনো চার্জ কাটা হয় না 
              এবং আপনি purchase এর সময় যে চার্জ দেখেন সেটা হলো local gateway VAT।
            </p>
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Browse Deals
            </Button>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-xl text-red-800">Fraud Alert</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700">
              GigClickers team যেকোনো ক্রেতা বা বিক্রেতার বিরুদ্ধে ব্যবস্থা নেওয়ার ক্ষমতা রাখে 
              যদি কোনো ক্রেতা বা বিক্রেতা কোনো প্রকার জালিয়াতি বা মার্কেটপ্লেসের নীতির বিরুদ্ধে কোনো কাজ করে।
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderMyWork = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">My Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
              Active Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">5</div>
            <p className="text-gray-600">Currently working on</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">23</div>
            <p className="text-gray-600">Successfully finished</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-yellow-600" />
              Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">$1,250</div>
            <p className="text-gray-600">Total earned</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium">Gmail Account Creation - Completed</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium">New message from client</p>
                <p className="text-sm text-gray-600">5 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader userName="John Doe" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="my-jobs">My Jobs</TabsTrigger>
            <TabsTrigger value="post-job">Post Job</TabsTrigger>
            <TabsTrigger value="browse-jobs">Browse Jobs</TabsTrigger>
            <TabsTrigger value="deal-marketplace">Deal Marketplace</TabsTrigger>
            <TabsTrigger value="my-work">My Work</TabsTrigger>
          </TabsList>

          <TabsContent value="my-jobs" className="mt-0">
            {renderMyJobs()}
          </TabsContent>

          <TabsContent value="post-job" className="mt-0">
            {renderPostJob()}
          </TabsContent>

          <TabsContent value="browse-jobs" className="mt-0">
            {renderBrowseJobs()}
          </TabsContent>

          <TabsContent value="deal-marketplace" className="mt-0">
            {renderDealMarketplace()}
          </TabsContent>

          <TabsContent value="my-work" className="mt-0">
            {renderMyWork()}
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-brand-green-light text-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-green">GigClickers</h3>
              <p className="text-sm mb-4">Connecting talent with opportunity worldwide.</p>
              <p className="text-xs text-gray-600">&copy; 2025 gigclickers.com. All Rights Reserved.</p>
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

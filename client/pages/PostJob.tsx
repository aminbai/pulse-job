import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  DollarSign,
  MapPin,
  Tag,
  FileText,
  Zap,
  AlertCircle,
  Eye
} from "lucide-react";
import { AuthContext } from "@/contexts/AuthContext";
import PublicHeader from "@/components/PublicHeader";
import RegionStep from "@/components/PostJobSteps/RegionStep";
import CategoryStep from "@/components/PostJobSteps/CategoryStep";
import JobDetailsStep from "@/components/PostJobSteps/JobDetailsStep";
import PricingStep from "@/components/PostJobSteps/PricingStep";

// Extended targeting zones
const targetingZones = [
  { id: "international", label: "International" },
  { id: "asia", label: "Asia" },
  { id: "europe", label: "Europe" },
  { id: "oceana", label: "Oceania" },
  { id: "africa", label: "Africa" },
  { id: "north-america", label: "North America" },
  { id: "south-america", label: "South America" },
];

// Extended countries data
const countries = [
  // Asia
  { name: "Afghanistan", region: "asia" },
  { name: "Bangladesh", region: "asia" },
  { name: "China", region: "asia" },
  { name: "India", region: "asia" },
  { name: "Indonesia", region: "asia" },
  { name: "Japan", region: "asia" },
  { name: "Pakistan", region: "asia" },
  { name: "Philippines", region: "asia" },
  { name: "South Korea", region: "asia" },
  { name: "Thailand", region: "asia" },
  { name: "Vietnam", region: "asia" },
  
  // Europe
  { name: "United Kingdom", region: "europe" },
  { name: "Germany", region: "europe" },
  { name: "France", region: "europe" },
  { name: "Italy", region: "europe" },
  { name: "Spain", region: "europe" },
  { name: "Netherlands", region: "europe" },
  { name: "Poland", region: "europe" },
  { name: "Romania", region: "europe" },
  { name: "Ukraine", region: "europe" },
  
  // Oceania  
  { name: "Australia", region: "oceana" },
  { name: "New Zealand", region: "oceana" },
  { name: "Fiji", region: "oceana" },
  { name: "Papua New Guinea", region: "oceana" },
  
  // Africa
  { name: "Nigeria", region: "africa" },
  { name: "South Africa", region: "africa" },
  { name: "Egypt", region: "africa" },
  { name: "Kenya", region: "africa" },
  { name: "Morocco", region: "africa" },
  { name: "Ghana", region: "africa" },
  
  // North America
  { name: "United States", region: "north-america" },
  { name: "Canada", region: "north-america" },
  { name: "Mexico", region: "north-america" },
  
  // South America
  { name: "Brazil", region: "south-america" },
  { name: "Argentina", region: "south-america" },
  { name: "Colombia", region: "south-america" },
  { name: "Peru", region: "south-america" },
  { name: "Chile", region: "south-america" },
  
  // International (popular countries from all regions)
  { name: "United States", region: "international" },
  { name: "Canada", region: "international" },
  { name: "United Kingdom", region: "international" },
  { name: "Germany", region: "international" },
  { name: "Australia", region: "international" },
  { name: "India", region: "international" },
  { name: "China", region: "international" },
  { name: "Brazil", region: "international" },
];

// Extended categories
const categories = [
  {
    id: "social-media",
    name: "Social Media Marketing",
    subcategories: ["Facebook Marketing", "Instagram Growth", "Twitter Management", "LinkedIn Marketing", "TikTok Promotion", "YouTube Marketing"],
  },
  {
    id: "gmail-account",
    name: "Account Creation",
    subcategories: ["Gmail Accounts", "Social Media Accounts", "Website Registrations", "App Signups"],
  },
  {
    id: "content-writing", 
    name: "Content & Writing",
    subcategories: ["Article Writing", "Blog Posts", "Product Descriptions", "SEO Content", "Social Media Posts"],
  },
  {
    id: "data-entry",
    name: "Data Entry & Processing",
    subcategories: ["Excel Data Entry", "Database Management", "Data Mining", "Data Cleaning", "CRM Data Entry"],
  },
  {
    id: "web-research",
    name: "Web Research",
    subcategories: ["Market Research", "Lead Generation", "Contact Research", "Product Research", "Competitor Analysis"],
  },
  {
    id: "reviews-ratings",
    name: "Reviews & Ratings",
    subcategories: ["Product Reviews", "App Store Reviews", "Google Reviews", "Yelp Reviews", "Service Reviews"],
  },
  {
    id: "survey-testing",
    name: "Surveys & Testing",
    subcategories: ["Online Surveys", "App Testing", "Website Testing", "User Experience Testing", "Product Testing"],
  },
  {
    id: "promotion-marketing",
    name: "Promotion & Marketing",
    subcategories: ["Brand Promotion", "Product Launch", "Influencer Marketing", "Email Marketing", "Affiliate Marketing"],
  },
  {
    id: "mobile-apps",
    name: "Mobile Applications",
    subcategories: ["App Downloads", "App Reviews", "App Testing", "App Promotion", "Mobile Games"],
  },
  {
    id: "verification-services",
    name: "Verification Services",
    subcategories: ["Phone Verification", "Email Verification", "Identity Verification", "OTP Services", "Document Verification"],
  },
];

export default function PostJob() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // Step management
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  // Form data
  const [formData, setFormData] = useState({
    // Step 1: Region
    selectedZone: "international",
    selectedCountries: ["United States", "Canada", "United Kingdom", "Australia"],
    
    // Step 2: Category
    selectedCategory: "social-media",
    selectedSubcategory: "Facebook Marketing",
    
    // Step 3: Job Details
    jobTitle: "",
    jobDescription: "",
    requirements: "",
    needAutoChecker: false,
    proof1: "",
    proof2: "",
    proof3Type: "Text Proof",
    proof4Type: "Screenshot",
    thumbnailFile: null as File | null,
    
    // Step 4: Pricing
    workerNeed: 1,
    workerEarn: 1.0,
    workDuration: 7,
    maxWorkersPerUser: 1,
    priority: "normal",
    autoApproval: false,
  });

  // Validation
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    switch (step) {
      case 1:
        if (!formData.selectedZone) newErrors.zone = "Please select a targeting zone";
        if (formData.selectedCountries.length === 0) newErrors.countries = "Please select at least one country";
        break;
        
      case 2:
        if (!formData.selectedCategory) newErrors.category = "Please select a category";
        if (!formData.selectedSubcategory) newErrors.subcategory = "Please select a subcategory";
        break;
        
      case 3:
        if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
        if (!formData.jobDescription.trim()) newErrors.jobDescription = "Job description is required";
        if (!formData.proof1.trim()) newErrors.proof1 = "Primary proof is required";
        break;
        
      case 4:
        if (formData.workerNeed < 1) newErrors.workerNeed = "At least 1 worker is required";
        if (formData.workerEarn <= 0) newErrors.workerEarn = "Worker payment must be greater than 0";
        if (formData.workDuration < 1) newErrors.workDuration = "Work duration must be at least 1 day";
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleStepClick = (step: number) => {
    if (step <= currentStep || completedSteps.includes(step - 1)) {
      setCurrentStep(step);
    }
  };

  const handleSubmit = async () => {
    if (validateStep(4)) {
      try {
        // Here you would submit the job data to your API
        console.log("Submitting job:", formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        alert("Job posted successfully!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error posting job:", error);
        alert("Error posting job. Please try again.");
      }
    }
  };

  const calculateTotalCost = () => {
    const baseCost = formData.workerNeed * formData.workerEarn;
    const priorityMultiplier = formData.priority === "urgent" ? 2 : formData.priority === "high" ? 1.5 : 1;
    const priorityCost = baseCost * (priorityMultiplier - 1);
    const serviceFee = (baseCost + priorityCost) * 0.1;
    const totalCost = baseCost + priorityCost + serviceFee;
    
    return {
      baseCost: baseCost.toFixed(3),
      priorityCost: priorityCost.toFixed(3),
      serviceFee: serviceFee.toFixed(3),
      totalCost: totalCost.toFixed(3),
    };
  };

  const costs = calculateTotalCost();

  const steps = [
    { 
      id: 1, 
      name: "Region", 
      icon: MapPin, 
      description: "Select targeting regions and countries" 
    },
    { 
      id: 2, 
      name: "Category", 
      icon: Tag, 
      description: "Choose job category and subcategory" 
    },
    { 
      id: 3, 
      name: "Details", 
      icon: FileText, 
      description: "Provide job details and requirements" 
    },
    { 
      id: 4, 
      name: "Pricing", 
      icon: DollarSign, 
      description: "Set pricing and job settings" 
    },
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        <PublicHeader />
        <div className="container mx-auto px-4 py-16 text-center">
          <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Login Required</h1>
          <p className="text-gray-600 mb-6">You need to be logged in to post a job.</p>
          <button 
            onClick={() => navigate("/login")}
            className="bg-brand-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Login to Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Post a New Job</h1>
              <p className="text-gray-600 mt-1">Create and publish your job in 4 simple steps</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <Eye className="w-4 h-4 mr-1" />
                Preview Mode
              </div>
              <div className="text-sm text-gray-500">
                Step {currentStep} of {steps.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = completedSteps.includes(step.id);
              const isAccessible = step.id <= currentStep || completedSteps.includes(step.id - 1);
              
              return (
                <div key={step.id} className="flex items-center flex-1">
                  <button
                    onClick={() => handleStepClick(step.id)}
                    disabled={!isAccessible}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors w-full ${
                      isActive
                        ? "bg-brand-green text-white"
                        : isCompleted
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : isAccessible
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-gray-50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isActive ? "bg-white bg-opacity-20" : ""
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <IconComponent className="w-5 h-5" />
                      )}
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-medium">{step.name}</div>
                      <div className={`text-xs ${isActive ? "text-white text-opacity-80" : "text-gray-500"}`}>
                        {step.description}
                      </div>
                    </div>
                  </button>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-2 ${
                      completedSteps.includes(step.id) ? "bg-brand-green" : "bg-gray-300"
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Form Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border p-8">
              {/* Step 1: Region */}
              {currentStep === 1 && (
                <RegionStep
                  selectedZone={formData.selectedZone}
                  selectedCountries={formData.selectedCountries}
                  onZoneSelect={(zone) => setFormData({...formData, selectedZone: zone, selectedCountries: []})}
                  onCountryToggle={(country) => {
                    const updatedCountries = formData.selectedCountries.includes(country)
                      ? formData.selectedCountries.filter(c => c !== country)
                      : [...formData.selectedCountries, country];
                    setFormData({...formData, selectedCountries: updatedCountries});
                  }}
                  onSelectAll={() => {
                    const filteredCountries = countries.filter(c => c.region === formData.selectedZone);
                    const allCountryNames = filteredCountries.map(c => c.name);
                    const isAllSelected = allCountryNames.every(name => formData.selectedCountries.includes(name));
                    
                    setFormData({
                      ...formData,
                      selectedCountries: isAllSelected ? [] : allCountryNames
                    });
                  }}
                />
              )}

              {/* Step 2: Category */}
              {currentStep === 2 && (
                <CategoryStep
                  selectedCategory={formData.selectedCategory}
                  selectedSubcategory={formData.selectedSubcategory}
                  onCategorySelect={(category) => {
                    const categoryData = categories.find(c => c.id === category);
                    setFormData({
                      ...formData, 
                      selectedCategory: category,
                      selectedSubcategory: categoryData?.subcategories[0] || ""
                    });
                  }}
                  onSubcategorySelect={(subcategory) => setFormData({...formData, selectedSubcategory: subcategory})}
                />
              )}

              {/* Step 3: Job Details */}
              {currentStep === 3 && (
                <JobDetailsStep
                  jobTitle={formData.jobTitle}
                  jobDescription={formData.jobDescription}
                  requirements={formData.requirements}
                  needAutoChecker={formData.needAutoChecker}
                  proof1={formData.proof1}
                  proof2={formData.proof2}
                  proof3Type={formData.proof3Type}
                  proof4Type={formData.proof4Type}
                  thumbnailFile={formData.thumbnailFile}
                  onJobTitleChange={(title) => setFormData({...formData, jobTitle: title})}
                  onJobDescriptionChange={(description) => setFormData({...formData, jobDescription: description})}
                  onRequirementsChange={(requirements) => setFormData({...formData, requirements: requirements})}
                  onAutoCheckerChange={(checked) => setFormData({...formData, needAutoChecker: checked})}
                  onProof1Change={(proof) => setFormData({...formData, proof1: proof})}
                  onProof2Change={(proof) => setFormData({...formData, proof2: proof})}
                  onProof3TypeChange={(type) => setFormData({...formData, proof3Type: type})}
                  onProof4TypeChange={(type) => setFormData({...formData, proof4Type: type})}
                  onThumbnailUpload={(file) => setFormData({...formData, thumbnailFile: file})}
                />
              )}

              {/* Step 4: Pricing */}
              {currentStep === 4 && (
                <PricingStep
                  workerNeed={formData.workerNeed}
                  workerEarn={formData.workerEarn}
                  workDuration={formData.workDuration}
                  maxWorkersPerUser={formData.maxWorkersPerUser}
                  priority={formData.priority}
                  autoApproval={formData.autoApproval}
                  onWorkerNeedChange={(value) => setFormData({...formData, workerNeed: value})}
                  onWorkerEarnChange={(value) => setFormData({...formData, workerEarn: value})}
                  onWorkDurationChange={(value) => setFormData({...formData, workDuration: value})}
                  onMaxWorkersPerUserChange={(value) => setFormData({...formData, maxWorkersPerUser: value})}
                  onPriorityChange={(priority) => setFormData({...formData, priority: priority})}
                  onAutoApprovalChange={(checked) => setFormData({...formData, autoApproval: checked})}
                />
              )}

              {/* Error Messages */}
              {Object.keys(errors).length > 0 && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <h4 className="text-red-800 font-medium">Please fix the following errors:</h4>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-sm text-red-700">
                    {Object.values(errors).map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>

                {currentStep < steps.length ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Post Job
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Job Summary</h3>
              
              <div className="space-y-4">
                {/* Cost Summary */}
                <div className="bg-brand-green text-white rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">${costs.totalCost}</div>
                    <div className="text-green-100 text-sm">Total Job Cost</div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                    <div className="font-semibold text-gray-900">{formData.workerNeed}</div>
                    <div className="text-xs text-gray-500">Workers</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <Clock className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                    <div className="font-semibold text-gray-900">{formData.workDuration}</div>
                    <div className="text-xs text-gray-500">Days</div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-500">Region</div>
                    <div className="font-medium">
                      {targetingZones.find(z => z.id === formData.selectedZone)?.label || "-"}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-gray-500">Countries</div>
                    <div className="font-medium">
                      {formData.selectedCountries.length > 0 ? (
                        formData.selectedCountries.length <= 3 
                          ? formData.selectedCountries.join(", ")
                          : `${formData.selectedCountries.slice(0, 3).join(", ")} +${formData.selectedCountries.length - 3}`
                      ) : "-"}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-gray-500">Category</div>
                    <div className="font-medium">
                      {categories.find(c => c.id === formData.selectedCategory)?.name || "-"}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-gray-500">Subcategory</div>
                    <div className="font-medium">{formData.selectedSubcategory || "-"}</div>
                  </div>
                  
                  <div>
                    <div className="text-gray-500">Payment per Worker</div>
                    <div className="font-medium">${formData.workerEarn.toFixed(3)}</div>
                  </div>
                </div>

                {/* Priority Badge */}
                {formData.priority !== "normal" && (
                  <div className="mt-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      formData.priority === "urgent" 
                        ? "bg-red-100 text-red-800"
                        : "bg-orange-100 text-orange-800"
                    }`}>
                      <Zap className="w-3 h-3 mr-1" />
                      {formData.priority === "urgent" ? "Urgent Priority" : "High Priority"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

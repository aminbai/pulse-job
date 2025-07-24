import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Globe,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// Targeting zones
const targetingZones = [
  { id: 'international', label: 'International', icon: Globe },
  { id: 'asia', label: 'Asia', icon: MapPin },
  { id: 'europe', label: 'Europe', icon: MapPin },
  { id: 'oceana', label: 'Oceana', icon: MapPin },
];

// Countries data organized by regions
const countries = [
  // Asia
  { name: 'Afghanistan', region: 'asia' },
  { name: 'Armenia', region: 'asia' },
  { name: 'Azerbaijan', region: 'asia' },
  { name: 'Bahrain', region: 'asia' },
  { name: 'Bangladesh', region: 'asia' },
  { name: 'Bhutan', region: 'asia' },
  { name: 'Brunei', region: 'asia' },
  { name: 'Cambodia', region: 'asia' },
  { name: 'China', region: 'asia' },
  { name: 'Cyprus', region: 'asia' },
  { name: 'East Timor', region: 'asia' },
  { name: 'Georgia', region: 'asia' },
  { name: 'India', region: 'asia' },
  { name: 'Indonesia', region: 'asia' },
  { name: 'Iran', region: 'asia' },
  { name: 'Iraq', region: 'asia' },
  { name: 'Israel', region: 'asia' },
  { name: 'Japan', region: 'asia' },
  { name: 'Jordan', region: 'asia' },
  { name: 'Kazakhstan', region: 'asia' },
  { name: 'North Korea', region: 'asia' },
  { name: 'South Korea', region: 'asia' },
  { name: 'Kuwait', region: 'asia' },
  { name: 'Kyrgyzstan', region: 'asia' },
  { name: 'Laos', region: 'asia' },
  { name: 'Lebanon', region: 'asia' },
  { name: 'Malaysia', region: 'asia' },
  { name: 'Maldives', region: 'asia' },
  { name: 'Mongolia', region: 'asia' },
  { name: 'Myanmar', region: 'asia' },
  { name: 'Nepal', region: 'asia' },
  { name: 'Oman', region: 'asia' },
  { name: 'Pakistan', region: 'asia' },
  { name: 'Philippines', region: 'asia' },
  { name: 'Qatar', region: 'asia' },
  { name: 'Saudi Arabia', region: 'asia' },
  { name: 'Singapore', region: 'asia' },
  { name: 'Sri Lanka', region: 'asia' },
  { name: 'Syria', region: 'asia' },
  { name: 'Taiwan', region: 'asia' },
  { name: 'Tajikistan', region: 'asia' },
  { name: 'Thailand', region: 'asia' },
  { name: 'Turkey', region: 'asia' },
  { name: 'Turkmenistan', region: 'asia' },
  { name: 'United Arab Emirates', region: 'asia' },
  { name: 'Uzbekistan', region: 'asia' },
  { name: 'Vietnam', region: 'asia' },
  { name: 'Yemen', region: 'asia' },

  // Europe
  { name: 'Albania', region: 'europe' },
  { name: 'Andorra', region: 'europe' },
  { name: 'Armenia', region: 'europe' },
  { name: 'Austria', region: 'europe' },
  { name: 'Azerbaijan', region: 'europe' },
  { name: 'Belarus', region: 'europe' },
  { name: 'Belgium', region: 'europe' },
  { name: 'Bosnia and Herzegovina', region: 'europe' },
  { name: 'Bulgaria', region: 'europe' },
  { name: 'Croatia', region: 'europe' },
  { name: 'Cyprus', region: 'europe' },
  { name: 'Czech Republic', region: 'europe' },
  { name: 'Denmark', region: 'europe' },
  { name: 'Estonia', region: 'europe' },
  { name: 'Finland', region: 'europe' },
  { name: 'France', region: 'europe' },
  { name: 'Georgia', region: 'europe' },
  { name: 'Germany', region: 'europe' },
  { name: 'Greece', region: 'europe' },
  { name: 'Hungary', region: 'europe' },
  { name: 'Iceland', region: 'europe' },
  { name: 'Ireland', region: 'europe' },
  { name: 'Italy', region: 'europe' },
  { name: 'Kazakhstan', region: 'europe' },
  { name: 'Latvia', region: 'europe' },
  { name: 'Liechtenstein', region: 'europe' },
  { name: 'Lithuania', region: 'europe' },
  { name: 'Luxembourg', region: 'europe' },
  { name: 'Macedonia', region: 'europe' },
  { name: 'Malta', region: 'europe' },
  { name: 'Moldova', region: 'europe' },
  { name: 'Monaco', region: 'europe' },
  { name: 'Montenegro', region: 'europe' },
  { name: 'Netherlands', region: 'europe' },
  { name: 'Norway', region: 'europe' },
  { name: 'Poland', region: 'europe' },
  { name: 'Portugal', region: 'europe' },
  { name: 'Romania', region: 'europe' },
  { name: 'Russia', region: 'europe' },
  { name: 'San Marino', region: 'europe' },
  { name: 'Serbia', region: 'europe' },
  { name: 'Slovakia', region: 'europe' },
  { name: 'Slovenia', region: 'europe' },
  { name: 'Spain', region: 'europe' },
  { name: 'Sweden', region: 'europe' },
  { name: 'Switzerland', region: 'europe' },
  { name: 'Ukraine', region: 'europe' },
  { name: 'United Kingdom', region: 'europe' },
  { name: 'Vatican City', region: 'europe' },
  { name: 'Kosovo', region: 'europe' },

  // Oceana
  { name: 'Australia', region: 'oceana' },
  { name: 'Fiji', region: 'oceana' },
  { name: 'Kiribati', region: 'oceana' },
  { name: 'Marshall Islands', region: 'oceana' },
  { name: 'Micronesia', region: 'oceana' },
  { name: 'Nauru', region: 'oceana' },
  { name: 'New Zealand', region: 'oceana' },
  { name: 'Palau', region: 'oceana' },
  { name: 'Papua New Guinea', region: 'oceana' },
  { name: 'Samoa', region: 'oceana' },
  { name: 'Solomon Islands', region: 'oceana' },
  { name: 'Tonga', region: 'oceana' },
  { name: 'Tuvalu', region: 'oceana' },
  { name: 'Vanuatu', region: 'oceana' },

  // International (selected major countries from all continents)
  { name: 'United States', region: 'international' },
  { name: 'Canada', region: 'international' },
  { name: 'Mexico', region: 'international' },
  { name: 'Brazil', region: 'international' },
  { name: 'Argentina', region: 'international' },
  { name: 'Chile', region: 'international' },
  { name: 'Colombia', region: 'international' },
  { name: 'Peru', region: 'international' },
  { name: 'United Kingdom', region: 'international' },
  { name: 'Germany', region: 'international' },
  { name: 'France', region: 'international' },
  { name: 'Italy', region: 'international' },
  { name: 'Spain', region: 'international' },
  { name: 'Russia', region: 'international' },
  { name: 'China', region: 'international' },
  { name: 'Japan', region: 'international' },
  { name: 'India', region: 'international' },
  { name: 'Australia', region: 'international' },
  { name: 'South Africa', region: 'international' },
  { name: 'Nigeria', region: 'international' },
  { name: 'Egypt', region: 'international' },
  { name: 'Morocco', region: 'international' },
];

// Categories data
const categories = [
  {
    id: 'ads-seo',
    name: 'Ads Click, SEO, Visit, Search, Engage',
    subcategories: ['Sign Up', 'Search Optimization', 'Social Media Engagement']
  },
  {
    id: 'computer-programs',
    name: 'Computer Programs',
    subcategories: ['Software Development', 'Website Creation', 'Mobile Apps']
  },
  {
    id: 'mobile-application',
    name: 'Mobile Application',
    subcategories: ['Android Apps', 'iOS Apps', 'Cross-Platform']
  },
  {
    id: 'forums',
    name: 'Forums',
    subcategories: ['Forum Posting', 'Community Management', 'Discussion Moderation']
  },
  {
    id: 'comment-blogs',
    name: 'Comment on other blogs',
    subcategories: ['Blog Comments', 'Guest Posting', 'Content Engagement']
  },
  {
    id: 'survey',
    name: 'Survey',
    subcategories: ['Online Surveys', 'Market Research', 'Data Collection']
  },
  {
    id: 'identity-verification',
    name: 'Identity Verification',
    subcategories: ['Document Verification', 'KYC Services', 'Background Checks']
  },
  {
    id: 'facebook',
    name: 'Facebook',
    subcategories: ['Facebook Pages', 'Facebook Groups', 'Facebook Ads']
  },
  {
    id: 'twitter',
    name: 'Twitter',
    subcategories: ['Twitter Management', 'Tweet Engagement', 'Twitter Analytics']
  },
  {
    id: 'instagram',
    name: 'Instagram',
    subcategories: ['Instagram Growth', 'Content Creation', 'Story Management']
  },
  {
    id: 'youtube-rumble',
    name: 'Youtube/Rumble',
    subcategories: ['Video Creation', 'Channel Management', 'Video Editing']
  },
  {
    id: 'discord',
    name: 'Discord',
    subcategories: ['Server Management', 'Bot Development', 'Community Building']
  },
  {
    id: 'reddit',
    name: 'Reddit',
    subcategories: ['Reddit Posting', 'Subreddit Management', 'Comment Engagement']
  },
  {
    id: 'telegram',
    name: 'Telegram',
    subcategories: ['Channel Management', 'Bot Creation', 'Group Administration']
  },
  {
    id: 'medium',
    name: 'Medium',
    subcategories: ['Article Writing', 'Content Strategy', 'Publication Management']
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    subcategories: ['Business WhatsApp', 'Message Automation', 'Customer Support']
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    subcategories: ['Content Creation', 'TikTok Growth', 'Video Editing']
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    subcategories: ['Professional Networking', 'Content Strategy', 'Lead Generation']
  },
  {
    id: 'gmail-account',
    name: 'Gmail Account',
    subcategories: [
      'New Gmail Account',
      'Old Gmail Account',
      'Gmail Account + Youtube Account Create',
      'Gmail Account + Instagram Account Create',
      'Gmail Account + Twitter Account Create',
      'Gmail Account + TikTok Account Create',
      'Gmail Account + Facebook Account Create'
    ]
  },
  {
    id: 'review',
    name: 'Review',
    subcategories: ['Product Reviews', 'Service Reviews', 'App Reviews']
  },
  {
    id: 'data-entry',
    name: 'Data Entry',
    subcategories: ['Excel Data Entry', 'Database Management', 'Data Processing']
  },
  {
    id: 'promotion',
    name: 'Promotion',
    subcategories: ['Social Media Promotion', 'Brand Promotion', 'Product Launch']
  },
  {
    id: 'airdrop-offer',
    name: 'Airdrop/Offer Join',
    subcategories: ['Crypto Airdrops', 'Offer Participation', 'Reward Programs']
  },
  {
    id: 'otp-verification',
    name: 'OTP Verification',
    subcategories: ['SMS Verification', 'Phone Verification', 'Two-Factor Authentication']
  },
  {
    id: 'answers',
    name: 'Answers',
    subcategories: ['Q&A Platforms', 'Technical Support', 'Customer Service']
  },
  {
    id: 'other',
    name: 'Other',
    subcategories: ['Custom Tasks', 'Miscellaneous', 'Special Projects']
  },
  {
    id: 'toffee',
    name: 'Toffee',
    subcategories: ['App Testing', 'Content Creation', 'User Engagement']
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    subcategories: ['Snapchat Management', 'Story Creation', 'Snap Ads']
  },
  {
    id: 'quora',
    name: 'Quora',
    subcategories: ['Question Answering', 'Space Management', 'Content Writing']
  }
];

// Proof type options
const proofTypes = [
  'Text Proof',
  'Screenshot',
  'Video Recording',
  'File Upload',
  'URL Link'
];

export default function PostJob() {
  const [selectedZone, setSelectedZone] = useState<string>('international');
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Russia', 'China', 'Japan', 'India', 'Australia', 'South Africa', 'Nigeria', 'Egypt', 'Morocco']);
  const [selectedCategory, setSelectedCategory] = useState<string>('gmail-account');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('New Gmail Account');
  const [currentStep, setCurrentStep] = useState(4);

  // Form data for step 3 (completed)
  const [jobTitle, setJobTitle] = useState<string>('গমেইল নতুন একাউন্ট ১০ টাকা');
  const [jobDescription, setJobDescription] = useState<string>('১. নাম, বয়স, ছুলা, ঠিকানার ইত্যাদির নাম আমি দিবো। info, help, call, gov, ok, not, good, fresh নতুন একটা একাউন্ট এসব তথ্য ফেলবেন মেনে। ৩৫টি ফুলপেকারতি রচনা করন।।সেইম দেশের ই আনলোক করতে হাঙ্গার একজন নির্দেশক দিবেন তাসমাক। \n\n২. আপনাদের নাম দেয়া কোনোও ই-মেইল থাকে এবং ওইটা দিয়ে রিভার করতে হাঙ্গার।\n\n৩. গুগল নাম্বার ভেরিফাই করার প��� স্ক্রিন শট দিতে হাঙ্গার এবং সেই নাম্বার দিয়ে দুইটার অন্যান্য সময় কীটনাশক ব্যবহার করতে পারবেন না।।।তো যেখানে সব প্রোফাইল জোনর হিন্দি ফ্রি আধিকার গড়ে অনলাইন রিম্যাট করলে একটা জি মেইল দিয়ে বেশি একাউন্ট খোলা যাবে না।');
  const [needAutoChecker, setNeedAutoChecker] = useState<boolean>(true);
  const [proof1, setProof1] = useState<string>('ইউজারনে');
  const [proof2, setProof2] = useState<string>('প্যাসওয়ার্ড');
  const [proof3Type, setProof3Type] = useState<string>('Text Proof');
  const [proof4Type, setProof4Type] = useState<string>('Text Proof');
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  // Form data for step 4 (pricing)
  const [workerNeed, setWorkerNeed] = useState<number>(1);
  const [workerEarn, setWorkerEarn] = useState<number>(1.000);
  const [workDuration, setWorkDuration] = useState<number>(7);

  const handleZoneSelect = (zoneId: string) => {
    setSelectedZone(zoneId);
    setSelectedCountries([]);
  };

  const handleCountryToggle = (countryName: string) => {
    setSelectedCountries(prev =>
      prev.includes(countryName)
        ? prev.filter(c => c !== countryName)
        : [...prev, countryName]
    );
  };

  const handleSelectAll = () => {
    const filteredCountries = selectedZone === 'international'
      ? countries.filter(c => c.region === 'international')
      : countries.filter(c => c.region === selectedZone);

    const allCountryNames = filteredCountries.map(c => c.name);

    if (selectedCountries.length === allCountryNames.length) {
      setSelectedCountries([]);
    } else {
      setSelectedCountries(allCountryNames);
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory('');
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
    }
  };

  // Calculate total costs
  const calculateTotalJobCost = () => {
    const baseCost = workerNeed * workerEarn;
    const serviceFee = baseCost * 0.1; // 10% service fee
    return {
      totalCost: (baseCost + serviceFee).toFixed(3),
      serviceFee: serviceFee.toFixed(3),
      baseCost: baseCost.toFixed(3)
    };
  };

  const costs = calculateTotalJobCost();

  const filteredCountries = selectedZone 
    ? countries.filter(c => c.region === selectedZone)
    : [];

  const steps = [
    { id: 1, name: 'Region', active: currentStep === 1, completed: currentStep > 1 },
    { id: 2, name: 'Category', active: currentStep === 2, completed: currentStep > 2 },
    { id: 3, name: 'Proof', active: currentStep === 3, completed: currentStep > 3 },
    { id: 4, name: 'Pricing', active: currentStep === 4, completed: currentStep > 4 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-brand-green text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-green-100 transition-colors">
              GigClickers
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/find-jobs"
                className="hover:text-green-100 transition-colors"
              >
                Find Jobs
              </Link>
              <Link
                to="/dashboard"
                className="hover:text-green-100 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/job-board"
                className="hover:text-green-100 transition-colors"
              >
                Job Board
              </Link>
              <Link
                to="/my-work"
                className="hover:text-green-100 transition-colors"
              >
                My Work
              </Link>
              <Link
                to="/post-job"
                className="bg-white text-brand-green px-4 py-2 rounded font-medium hover:bg-green-50 transition-colors"
              >
                POST JOB
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Post Jobs</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-3">
            {/* Job Pricing */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-8">Job Pricing</h2>

              <div className="space-y-6">
                {/* Worker Need */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Worker Need</label>
                  <input
                    type="number"
                    min="1"
                    value={workerNeed}
                    onChange={(e) => setWorkerNeed(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
                    placeholder="Enter number of workers needed"
                  />
                </div>

                {/* Worker Earn */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Worker Earn</label>
                  <input
                    type="number"
                    min="0"
                    step="0.001"
                    value={workerEarn}
                    onChange={(e) => setWorkerEarn(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
                    placeholder="Enter amount each worker will earn"
                  />
                </div>

                {/* Work Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Duration</label>
                  <input
                    type="number"
                    min="1"
                    value={workDuration}
                    onChange={(e) => setWorkDuration(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
                    placeholder="Enter number of days to complete work"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-12 flex justify-center">
                <button
                  className="bg-brand-green text-white px-16 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
                  onClick={() => {
                    // Handle form submission
                    alert('Job posted successfully!');
                  }}
                >
                  SUBMIT POST
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-brand-green text-white rounded-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-6">SUMMARY</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-green-100 text-sm">Total Job Cost:</p>
                  <p className="font-semibold">{costs.totalCost}</p>
                </div>

                <div>
                  <p className="text-green-100 text-sm">Service Fee:</p>
                  <p className="font-semibold">{costs.serviceFee}</p>
                </div>

                <div>
                  <p className="text-green-100 text-sm">Zone:</p>
                  <p className="font-semibold">
                    {selectedZone ? targetingZones.find(z => z.id === selectedZone)?.label : '-'}
                  </p>
                </div>

                <div>
                  <p className="text-green-100 text-sm">Country:</p>
                  <div className="font-semibold max-h-32 overflow-y-auto text-xs">
                    {selectedCountries.length > 0 ? (
                      <div>
                        {selectedCountries.slice(0, 10).join(', ')}
                        {selectedCountries.length > 10 && (
                          <span className="block mt-1">... and {selectedCountries.length - 10} more</span>
                        )}
                      </div>
                    ) : '-'}
                  </div>
                </div>

                <div>
                  <p className="text-green-100 text-sm">Category:</p>
                  <p className="font-semibold">
                    {selectedCategory
                      ? categories.find(cat => cat.id === selectedCategory)?.name
                      : '-'
                    }
                  </p>
                </div>

                <div>
                  <p className="text-green-100 text-sm">Subcategory:</p>
                  <p className="font-semibold">
                    {selectedSubcategory || '-'}
                  </p>
                </div>

                <div>
                  <p className="text-green-100 text-sm">Workers needed:</p>
                  <p className="font-semibold">{workerNeed}</p>
                </div>

                <div>
                  <p className="text-green-100 text-sm">Worker earn:</p>
                  <p className="font-semibold">{workerEarn.toFixed(3)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Navigation */}
        <div className="mt-12">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8">
            <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            <div className="flex items-center mx-8 space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    step.completed
                      ? 'bg-brand-green text-white'
                      : step.active
                        ? 'bg-brand-green text-white'
                        : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.completed ? '✓' : step.id}
                  </div>
                  <span className={`ml-2 font-medium ${
                    step.completed || step.active ? 'text-brand-green' : 'text-gray-600'
                  }`}>
                    {step.name}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      step.completed ? 'bg-brand-green' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
              Next
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GigClickers</h3>
              <p className="text-gray-300 text-sm mb-4">
                Connecting talent with opportunity worldwide.
              </p>
              <p className="text-xs text-gray-400">
                &copy; 2024 GigClickers. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">About GigClickers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/press" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Agreement</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link to="/dmca" className="text-gray-300 hover:text-white transition-colors">DMCA</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

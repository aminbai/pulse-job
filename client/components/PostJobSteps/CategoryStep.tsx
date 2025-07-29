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

interface CategoryStepProps {
  selectedCategory: string;
  selectedSubcategory: string;
  onCategorySelect: (categoryId: string) => void;
  onSubcategorySelect: (subcategory: string) => void;
}

export default function CategoryStep({
  selectedCategory,
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect,
}: CategoryStepProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Choose the job category</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              onCategorySelect(category.id);
              onSubcategorySelect(category.subcategories[0]);
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories
              .find((cat) => cat.id === selectedCategory)
              ?.subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => onSubcategorySelect(subcategory)}
                  className={`p-3 text-sm rounded-lg border-2 font-medium transition-all hover:shadow-md ${
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
}

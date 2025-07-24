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
  {
    id: "mobile-application",
    name: "Mobile Application",
    subcategories: ["Android Apps", "iOS Apps", "Cross-Platform"],
  },
  {
    id: "review",
    name: "Review",
    subcategories: ["Product Reviews", "Service Reviews", "App Reviews"],
  },
  {
    id: "survey",
    name: "Survey",
    subcategories: ["Online Surveys", "Market Research", "Data Collection"],
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {categories
              .find((cat) => cat.id === selectedCategory)
              ?.subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => onSubcategorySelect(subcategory)}
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
}

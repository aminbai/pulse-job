import { Globe, MapPin } from "lucide-react";

const targetingZones = [
  { id: "international", label: "International", icon: Globe },
  { id: "asia", label: "Asia", icon: MapPin },
  { id: "europe", label: "Europe", icon: MapPin },
  { id: "oceana", label: "Oceania", icon: MapPin },
  { id: "africa", label: "Africa", icon: MapPin },
  { id: "north-america", label: "North America", icon: MapPin },
  { id: "south-america", label: "South America", icon: MapPin },
];

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

interface RegionStepProps {
  selectedZone: string;
  selectedCountries: string[];
  onZoneSelect: (zoneId: string) => void;
  onCountryToggle: (countryName: string) => void;
  onSelectAll: () => void;
}

export default function RegionStep({
  selectedZone,
  selectedCountries,
  onZoneSelect,
  onCountryToggle,
  onSelectAll,
}: RegionStepProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Choose the job targeting region</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {targetingZones.map((zone) => {
          const IconComponent = zone.icon;
          return (
            <button
              key={zone.id}
              onClick={() => onZoneSelect(zone.id)}
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
            onClick={onSelectAll}
            className="text-brand-green hover:text-green-600 text-sm font-medium"
          >
            {selectedCountries.length > 0 ? "Deselect All" : "Select All"}
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-80 overflow-y-auto border border-gray-200 rounded-lg p-4">
          {countries
            .filter((c) => c.region === selectedZone)
            .map((country) => (
              <button
                key={country.name}
                onClick={() => onCountryToggle(country.name)}
                className={`p-3 text-sm rounded-lg border-2 text-center font-medium transition-all ${
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
}

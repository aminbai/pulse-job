import { Globe, MapPin } from "lucide-react";

const targetingZones = [
  { id: "international", label: "International", icon: Globe },
  { id: "asia", label: "Asia", icon: MapPin },
  { id: "europe", label: "Europe", icon: MapPin },
  { id: "oceana", label: "Oceana", icon: MapPin },
];

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
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-h-60 overflow-y-auto">
          {countries
            .filter((c) => c.region === selectedZone)
            .map((country) => (
              <button
                key={country.name}
                onClick={() => onCountryToggle(country.name)}
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
}

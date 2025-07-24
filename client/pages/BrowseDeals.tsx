import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

export default function BrowseDeals() {
  const deals = [
    {
      id: 1,
      title: "check",
      seller: "Admin",
      rating: 5.0,
      reviews: 0,
      price: "$3.000",
      location: "Marienbplatz",
      views: 144,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0d81b279190c4b9c90453e4f7403e39c%2Ff8ea0ba9cfcb4b7aa06255fd787fa9f9?format=webp&width=800",
      category: "Digital Services",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-brand-green text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">GigClickers</div>
            <nav className="hidden md:flex space-x-6">
              <a href="/my-post" className="hover:text-green-200">
                My Post
              </a>
              <a href="/my-work" className="hover:text-green-200">
                My Work
              </a>
              <a href="/browse-deals" className="hover:text-green-200">
                Browse Deal
              </a>
              <a href="/deal-history" className="hover:text-green-200">
                Deal History
              </a>
              <a href="/deposit" className="hover:text-green-200">
                Deposit
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">📧</span>
            <span className="text-sm">🔔</span>
            <span className="text-sm">👤</span>
            <Button className="bg-green-600 hover:bg-green-700">
              POST JOB
            </Button>
          </div>
        </div>
      </header>

      {/* Balance Bar */}
      <div className="bg-green-100 py-2 px-6">
        <div className="max-w-6xl mx-auto flex justify-between text-sm">
          <span>
            Deal balance:{" "}
            <span className="text-green-600 font-semibold">$</span>
          </span>
          <span>
            Deposit:{" "}
            <span className="text-green-600 font-semibold">-$1.909</span>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="flex space-x-1">
            <Button className="bg-brand-green text-white px-4 py-2 rounded-t-lg">
              MICROJOBS
            </Button>
          </div>

          {/* All Deals Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              All Deals
            </h2>

            {/* Results Count */}
            <div className="mb-4">
              <span className="text-sm text-gray-600">1 Result Found</span>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital-services">
                    Digital Services
                  </SelectItem>
                  <SelectItem value="writing">Writing & Translation</SelectItem>
                  <SelectItem value="design">Design & Creative</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="Search Deal Title" className="w-full" />

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Most Recent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Deals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {deals.map((deal) => (
                <Card
                  key={deal.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="secondary"
                        className="bg-black/70 text-white"
                      >
                        ({deal.views})
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2 flex items-center space-x-1 text-white text-sm">
                      <MapPin size={12} />
                      <span>{deal.location}</span>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-xs">{deal.seller[0]}</span>
                        </div>
                        <span className="text-sm text-gray-600">
                          {deal.seller}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star
                          size={12}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="text-sm font-medium">
                          {deal.rating}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({deal.reviews})
                        </span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-gray-800 mb-2">
                      {deal.title}
                    </h3>

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-brand-green">
                        {deal.price}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State for more deals */}
            {deals.length === 1 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  More deals will appear here as they become available.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-100 py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-brand-green">
                GigClickers
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  About GigClickers
                </h4>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    <a href="/about" className="hover:text-brand-green">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-brand-green">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-brand-green">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Agreement</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    <a
                      href="/microjob-marketplace"
                      className="hover:text-brand-green"
                    >
                      Microjob Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      href="/deal-marketplace"
                      className="hover:text-brand-green"
                    >
                      Deal Marketplace
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Social Media
                </h4>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-xs">
                    f
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs">
                    in
                  </div>
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
                    yt
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-green-200 text-center text-sm text-gray-600">
            © 2025 gigclickers.com. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

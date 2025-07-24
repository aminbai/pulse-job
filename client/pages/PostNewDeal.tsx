import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Edit } from "lucide-react";

export default function PostNewDeal() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-brand-green text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">GigClickers</div>
            <nav className="hidden md:flex space-x-6">
              <a href="/my-post" className="hover:text-green-200">My Post</a>
              <a href="/my-work" className="hover:text-green-200">My Work</a>
              <a href="/browse-deals" className="hover:text-green-200">Browse Deal</a>
              <a href="/deal-history" className="hover:text-green-200">Deal History</a>
              <a href="/deposit" className="hover:text-green-200">Deposit</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">📧</span>
            <span className="text-sm">🔔</span>
            <span className="text-sm">👤</span>
            <Button className="bg-green-600 hover:bg-green-700">POST JOB</Button>
          </div>
        </div>
      </header>

      {/* Balance Bar */}
      <div className="bg-green-100 py-2 px-6">
        <div className="max-w-6xl mx-auto flex justify-between text-sm">
          <span>Deal balance: <span className="text-green-600 font-semibold">$</span></span>
          <span>Deposit: <span className="text-green-600 font-semibold">-$1.909</span></span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-6">
        <div className="space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Edit className="text-brand-green" size={24} />
              <h1 className="text-2xl font-bold text-gray-800">Post New Deal</h1>
            </div>
            <Button variant="outline" className="text-brand-green border-brand-green hover:bg-brand-green hover:text-white">
              All Deal
            </Button>
          </div>

          {/* Form */}
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                {/* Service Title */}
                <div className="space-y-2">
                  <Label htmlFor="serviceTitle" className="text-sm font-medium">
                    Service Title
                  </Label>
                  <Input
                    id="serviceTitle"
                    placeholder="Enter Your Service Name"
                    className="w-full"
                  />
                </div>

                {/* Service Price and Category Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="servicePrice" className="text-sm font-medium">
                      Service Price
                    </Label>
                    <Input
                      id="servicePrice"
                      type="number"
                      placeholder="0.00"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-medium">
                      Category
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="digital-services">Digital Services</SelectItem>
                        <SelectItem value="writing">Writing & Translation</SelectItem>
                        <SelectItem value="design">Design & Creative</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subcategory" className="text-sm font-medium">
                      Subcategory
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Subcategory.." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                        <SelectItem value="seo">SEO</SelectItem>
                        <SelectItem value="content-writing">Content Writing</SelectItem>
                        <SelectItem value="logo-design">Logo Design</SelectItem>
                        <SelectItem value="social-media">Social Media Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Delivery By, Delivery Date, and Country Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="deliveryBy" className="text-sm font-medium">
                      Delivery By
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select.." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-day">1 Day</SelectItem>
                        <SelectItem value="3-days">3 Days</SelectItem>
                        <SelectItem value="1-week">1 Week</SelectItem>
                        <SelectItem value="2-weeks">2 Weeks</SelectItem>
                        <SelectItem value="1-month">1 Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deliveryDate" className="text-sm font-medium">
                      Delivery Date
                    </Label>
                    <Input
                      id="deliveryDate"
                      defaultValue="1"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm font-medium">
                      Country
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Country.." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bd">Bangladesh</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="pk">Pakistan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your service in detail..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Image <span className="text-red-500">*</span>
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-brand-green transition-colors">
                    <div className="flex flex-col items-center space-y-2">
                      <Upload className="text-gray-400" size={48} />
                      <p className="text-gray-500">Click to upload or drag and drop</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="text-red-500">* Banner image size should be Width 335px and Height 190px</p>
                    <p>Image resize link <a href="#" className="text-blue-500 hover:underline">here</a></p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button type="submit" className="bg-brand-green hover:bg-green-600 text-white px-8 py-2">
                    SUBMIT
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-100 py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-brand-green">GigClickers</div>
            </div>
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">About GigClickers</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><a href="/about" className="hover:text-brand-green">About Us</a></li>
                  <li><a href="/privacy" className="hover:text-brand-green">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-brand-green">Terms & Conditions</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Agreement</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><a href="/microjob-marketplace" className="hover:text-brand-green">Microjob Marketplace</a></li>
                  <li><a href="/deal-marketplace" className="hover:text-brand-green">Deal Marketplace</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Social Media</h4>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-xs">f</div>
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs">in</div>
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">yt</div>
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

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DealMarketplace() {
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
            Pending:{" "}
            <span className="text-green-600 font-semibold">$0.000</span>
          </span>
          <span>
            Earned: <span className="text-green-600 font-semibold">$0.000</span>
          </span>
          <span>
            Deposit:{" "}
            <span className="text-green-600 font-semibold">-$1.909</span>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Deal Marketplace
            </h1>
          </div>

          {/* Post Deal Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                Post Deal (Seller)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                একজন বিক্রেতা Deal Post থেকে যেকোনো অনলাইন সেবা, পণ্য বা অফার
                বিজ্ঞাপন দিতে পারেন। এবং বিক্রেতার কাছ থেকে এই বিজ্ঞাপন দেওয়ার
                জন্য কোনো চার্জ নেওয়া হবে না। বিক্রেতা যেকোনো অনলাইন সেবা বা
                অফার বিক্রয়ের জন্য একটি নির্দিষ্ট দেশকে লক্ষ্য করে বিজ্ঞাপন
                দিতে পারেন।
              </p>
            </CardContent>
          </Card>

          {/* Confirm Delivery Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                Confirm Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                যখন একজন ক্রেতা সেই অফার বা সেবা কিনতে আগ্রহী হয়, তখন তারা
                সরাসরি বিক্রেতার সাথে তথ্য বিনিময়ের জন্য মেসেজ করতে পারেন। যখনই
                একজন ক্রেতা একটি সেবা বা অফার কিনতে অনুরোধ করে, তখন ক্রেতার সেই
                সেবা বা অফার কিনতে অনুরোধ বিক্রেতার অফার প্যানেলে চলে যাবে। অফার
                বা সেবা ডেলিভারি সম্পূর্ণ হলে, confirm delivery অপশনে ক্লিক করে
                ডেলিভারি নিশ্চিত করুন।
              </p>
            </CardContent>
          </Card>

          {/* Seller Responsibility Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                Responsibility of the seller
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  কোনো অফার বা সেবা সম্পূর্ণভাবে সম্পন্ন না করে confirm delivery
                  অপশনে কখনো yes দেবেন না। যদি আপনি deal সম্পন্ন না করেন তাহলে
                  ক্রেতার অনুরোধ রাখুন কারণ deal এর মেয়াদ শেষ হলে deal টি auto
                  cancel হয়ে যাবে।
                </p>
                <p className="text-gray-700 leading-relaxed">
                  বিক্রেতা যদি কোনো অফার বা সেবা ডেলিভারি করে থাকেন কিন্তু
                  ক্রেতা অযৌক্তিকভাবে অনুরোধ প্রত্যাখ্যান করেছে, তাহলে ২৪ ঘন্টার
                  মধ্যে লাইভ সাপোর্টে যোগাযোগ করুন। ২৪ ঘন্টা পর আপনার অভিযোগ
                  গ্রহণ করা হবে না এবং ক্রেতা deal payment এর রিফান্ড পেয়ে
                  যাবে।
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Order Service Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                Order Service (Buyer)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                GigClickers এ যেকোনো অফার বা সেবা কেনার জন্য ক্রেতার কাছ থেকে
                কোনো চার্জ কাটা হয় না এবং আপনি purchase এর সময় যে চার্জ দেখেন
                সেটা হলো local gateway VAT।
              </p>
            </CardContent>
          </Card>

          {/* Receive Delivery Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                Receive Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  একটি সেবা অর্ডার confirm করার সময় বিক্রেতার সাথে কথা বলতে
                  ভুলবেন না। অর্ডার confirm হওয়ার পর, বিক্রেতা অর্ডার duration
                  এর মধ্যে আপনার কাছে সেবা বা অফার ডেলিভারি করবে। এই ডেলিভারি
                  receive করার সময় আপনি সবকিছু বুঝেছেন কিনা দেখে নিন। যদি আপনি
                  সব কিছু receive করে থাকেন তাহলে receive delivery option থেকে
                  yes টি চাপুন এবং একটি detailed report লিখে submit করুন।
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Confirmation Order Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                Confirmation Order
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                আপনি যখন receive delivery confirm করবেন তখন deal টি সাথে সাথেই
                সম্পন্ন হয়ে যাবে এবং আপনি যদি receive delivery থেকে no option
                টি চাপেন তাহলে deal টি gigclickers support এর কাছে review এর
                জন্য চলে যাবে। Support team টি ২৪ ঘন্টার মধ্যে review করে দেবে
                এবং feedback দেবে। আপনি যদি ডেলিভারি receive না করে থাকেন, তাহলে
                আপনার payment রিফান্ড হয়ে যাবে।
              </p>
            </CardContent>
          </Card>

          {/* Fraud Alert Section */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-red-800">
                Fraud Alert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 leading-relaxed">
                GigClickers team যেকোনো ক্রেতা বা বিক্রেতার বিরুদ্ধে ব্যবস্থা
                নেওয়ার ক্ষমতা রাখে যদি কোনো ক্রেতা বা বিক্রেতা কোনো প্রকার
                জালিয়াতি বা মার্কেটপ্লেসের নীতির বিরুদ্ধে কোনো কাজ করে। কারণ
                মার্কেটপ্লেস কোনো ধরনের প্রতারণা সমর্থন করে না।
              </p>
            </CardContent>
          </Card>

          {/* Additional Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• সর্বদা প্ল্যাটফর্মের মধ্যে যোগাযোগ করুন</li>
                  <li>• ব্যক্তিগত তথ্য শেয়ার করা থেকে বিরত থাকুন</li>
                  <li>• অর্ডার সম্পূর্ণ হওয়ার আগে পেমেন্ট রিলিজ করবেন না</li>
                  <li>• সন্দেহজনক কার্যকলাপ রিপোর্ট করুন</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Support Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">Live Chat:</span>
                    <p className="text-gray-600">
                      24/7 available for urgent issues
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Email Support:</span>
                    <p className="text-gray-600">support@gigclickers.com</p>
                  </div>
                  <div>
                    <span className="font-medium">Response Time:</span>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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

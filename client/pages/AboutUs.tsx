import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AboutUs() {
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
          <span>Pending: <span className="text-green-600 font-semibold">$0.000</span></span>
          <span>Earned: <span className="text-green-600 font-semibold">$0.000</span></span>
          <span>Deposit: <span className="text-green-600 font-semibold">-$1.909</span></span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* About Us Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">আমাদের সম্পর্কে</h1>
          </div>

          {/* About Us Content */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <strong>GigClickers</strong> একটি বিশ্বস্ত অনলাইন মার্কেটপ্লেস যা নিয়োগকর্তা এবং দক্ষ কর্মীদের মধ্যে সংযোগ স্থাপন করে।
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>GigClickers</strong> যেকোনো অনলাইন সেবা ক্রয় ও বিক্রয়ের জন্য একটি নির্ভরযোগ্য মার্কেটপ্লেস। <strong>GigClickers</strong> প্ল্যাটফর্ম একটি ক্রেতা এবং বিক্রেতার মধ্যে জালিয়াতি-মুক্ত সম্পর্কের প্রতিশ্রুতি দেয়।
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              এই প্ল্যাটফর্ম সর্বদা মানুষকে নতুন কাজ খুঁজে পেতে সাহায্য করে। এটি আপনার ব্যবসার বিশ্বায়নেও একটি গুরুত্বপূর্ণ ভূমিকা পালন করে। কর্মী এবং নিয়োগকর্তারা একসাথে এসে নতুন কাজ তৈরি করতে পারেন, কর্মী-নিয়োগকর্তা লেনদেন একটি গুরুত্বপূর্ণ ভূমিকা পালন করে।
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              মার্কেটপ্লেসের নীতি হল <strong>GigClickers</strong> প্ল্যাটফর্ম তৈরি করে গ্রহণযোগ্যতা তৈরি করা। <strong>GigClickers</strong> দল এই লক্ষ্য এবং উদ্দেশ্য বাস্তবায়নের জন্য ক্রমাগত প্রতিশ্রুতিবদ্ধ। এবং এটি আপনার এবং সবার প্রচেষ্টার প্রয়োজন।
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              প্ল্যাটফর্ম ক্রমাগত উপযুক্ত কার্যক্রম পরিচালনা করার জন্য একটি নিরাপত্তা এবং লেনদেন ভিত্তিতে প্রচেষ্টা চালিয়ে যাবে যা সবার জন্য অনন্য। <strong>GigClickers</strong> একটি পরিবার যা আপনাকে, আমাকে এবং সবাইকে অন্তর্ভুক্ত করে।
            </p>
          </div>
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

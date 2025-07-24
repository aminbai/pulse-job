import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Gift,
  Users,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Check,
} from "lucide-react";

export default function ReferEarn() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://www.gigclickers.com/r=334118";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnSocial = (platform: string) => {
    const text = "Join GigClickers and start earning! Use my referral link:";
    const url = encodeURIComponent(referralLink);
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-brand-green text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-green-100 transition-colors">
              GigClickers
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/my-post"
                className="hover:text-green-100 transition-colors"
              >
                My Post ▼
              </Link>
              <Link
                to="/my-work"
                className="hover:text-green-100 transition-colors"
              >
                My Work ▼
              </Link>
              <Link
                to="/browse-deal"
                className="hover:text-green-100 transition-colors"
              >
                Browse Deal ▼
              </Link>
              <Link
                to="/deal-history"
                className="hover:text-green-100 transition-colors"
              >
                Deal History ▼
              </Link>
              <Link
                to="/deposit"
                className="hover:text-green-100 transition-colors"
              >
                Deposit
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

        {/* Stats Bar */}
        <div className="bg-green-600 py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between text-sm">
              <span>Pending: $0.000</span>
              <span>Earned: $0.000</span>
              <span>Deposit: $1.909</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Refer & Earn</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Referral Info */}
          <div className="space-y-6">
            {/* Bonus Information */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Gift className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">
                    At GigClickers you get instant 0.20 bonus on deposit balance by activating account.
                  </h3>
                  <p className="text-green-800">
                    You will get 5% deposit bonus and 5% task bonus on every successful refer.
                  </p>
                </div>
              </div>
            </div>

            {/* Referral Statistics */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Referral Join Friend</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">0</div>
                <p className="text-gray-600">Total Referrals</p>
              </div>
            </div>
          </div>

          {/* Right Column - Share Options */}
          <div className="space-y-6">
            {/* Share Link */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share through social media</h3>
              
              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={referralLink}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="bg-brand-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Social Media Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => shareOnSocial('facebook')}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => shareOnSocial('twitter')}
                  className="flex-1 bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => shareOnSocial('linkedin')}
                  className="flex-1 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>

            {/* Criteria */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Criteria for new referrals</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <p className="text-gray-700 text-sm">
                    Your referral rewards will be distributed when your referred worker also receives his/her task reward.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <p className="text-gray-700 text-sm">
                    GigClickers deposit bonus only when your referred friend completes the deposit.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <p className="text-gray-700 text-sm">
                    GigClickers allows changing and adding rewards at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-green-light text-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-brand-green">GigClickers</h3>
              <p className="text-sm mb-4">
                Connecting talent with opportunity worldwide.
              </p>
              <p className="text-xs text-gray-600">
                &copy; 2025 gigclickers.com. All Rights Reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">About GigClickers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-600 hover:text-brand-green transition-colors">About Us</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-brand-green transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-brand-green transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Agreement</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/microjob" className="text-gray-600 hover:text-brand-green transition-colors">Microjob Marketplace</Link></li>
                <li><Link to="/deal" className="text-gray-600 hover:text-brand-green transition-colors">Deal Marketplace</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

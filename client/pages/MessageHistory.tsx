import { Link } from "react-router-dom";
import {
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Inbox,
} from "lucide-react";

const messages: any[] = [
  // Empty array to match "no messages" state in image
];

export default function MessageHistory() {
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
          <div className="flex items-center space-x-2 mb-4">
            <Mail className="w-6 h-6 text-brand-green" />
            <h1 className="text-2xl font-semibold text-gray-900">Message History</h1>
          </div>
        </div>

        {/* Messages Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    From
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Subject
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Reply
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {messages.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center">
                        <Inbox className="w-12 h-12 text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                        <p className="text-gray-600">
                          Your message history will appear here when you receive messages.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
                {messages.map((message) => (
                  <tr key={message.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {message.from}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900 font-medium">{message.subject}</div>
                      <div className="text-sm text-gray-500 mt-1 truncate max-w-xs">
                        {message.preview}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {message.date}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        message.replied 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {message.replied ? 'Replied' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-brand-green hover:text-green-600 text-sm font-medium">
                          View
                        </button>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Reply
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-12">
                <Inbox className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                <p className="text-gray-600">
                  Your message history will appear here when you receive messages.
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div key={message.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-gray-900">{message.from}</div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      message.replied 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {message.replied ? 'Replied' : 'Pending'}
                    </span>
                  </div>
                  <div className="text-gray-900 font-medium mb-1">{message.subject}</div>
                  <div className="text-sm text-gray-500 mb-2">{message.preview}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{message.date}</span>
                    <div className="flex items-center space-x-2">
                      <button className="text-brand-green hover:text-green-600 text-sm font-medium">
                        View
                      </button>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
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

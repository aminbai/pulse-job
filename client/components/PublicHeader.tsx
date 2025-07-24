import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const publicMenuItems = [
  {
    title: "Find Work",
    items: [
      { name: "Browse Jobs", path: "/browse-jobs" },
      { name: "How It Works", path: "/how-it-works" },
    ],
  },
  {
    title: "For Clients", 
    items: [
      { name: "Post a Job", path: "/post-job" },
      { name: "Why Choose Us", path: "/why-choose-us" },
    ],
  },
];

export default function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-text-dark">
            GigClickers
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {publicMenuItems.map((menu, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center space-x-1 text-text-dark hover:text-brand-green transition-colors py-2"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span>{menu.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {openDropdown === index && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="py-2">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-text-dark hover:bg-brand-green-light hover:text-brand-green transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/about"
              className="text-text-dark hover:text-brand-green transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-text-dark hover:text-brand-green transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-brand-green text-brand-green rounded hover:bg-brand-green hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-brand-green text-white rounded hover:bg-green-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-dark hover:text-brand-green transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-4">
              {publicMenuItems.map((menu, index) => (
                <div key={index}>
                  <div className="font-medium text-text-dark mb-2">{menu.title}</div>
                  <div className="ml-4 space-y-2">
                    {menu.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className="block text-sm text-gray-600 hover:text-brand-green transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <Link
                to="/about"
                className="block text-text-dark hover:text-brand-green transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-text-dark hover:text-brand-green transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 space-y-2">
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-2 border border-brand-green text-brand-green rounded hover:bg-brand-green hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center px-4 py-2 bg-brand-green text-white rounded hover:bg-green-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

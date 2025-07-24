import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X, Bell, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const dashboardMenuItems = [
  {
    title: "Jobs & Work",
    items: [
      { name: "Job Management Hub", path: "/unified-dashboard" },
      { name: "Browse Jobs", path: "/browse-jobs" },
      { name: "Find Jobs", path: "/find-jobs" },
      { name: "Job Board", path: "/job-board" },
      { name: "My Jobs", path: "/my-jobs" },
      { name: "My Work", path: "/my-work" },
      { name: "Post Job", path: "/post-job" },
    ],
  },
  {
    title: "Deals & Marketplace",
    items: [
      { name: "Deal Marketplace", path: "/deal-marketplace" },
      { name: "Browse Deals", path: "/browse-deals" },
      { name: "Post New Deal", path: "/post-new-deal" },
      { name: "My Deal Order", path: "/my-deal-order" },
      { name: "Deal History", path: "/deal-history" },
    ],
  },
  {
    title: "Finance & Earnings",
    items: [
      { name: "Deposit", path: "/deposit" },
      { name: "Deposit History", path: "/deposit-history" },
      { name: "Refer & Earn", path: "/refer-earn" },
      { name: "Share & Earn", path: "/share-earn" },
    ],
  },
  {
    title: "Messages & Support",
    items: [
      { name: "Message History", path: "/message-history" },
      { name: "FAQ", path: "/faq" },
      { name: "Contact Support", path: "/contact" },
    ],
  },
];

interface DashboardHeaderProps {
  userType?: "user" | "admin";
  userName?: string;
}

export default function DashboardHeader({ userType = "user", userName = "User" }: DashboardHeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="bg-brand-green text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:text-green-100 transition-colors">
            GigClickers
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {dashboardMenuItems.map((menu, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(index)}
                  className="flex items-center space-x-1 text-white hover:text-green-100 transition-colors py-2"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span>{menu.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {openDropdown === index && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="py-2">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-text-dark hover:bg-brand-green-light hover:text-brand-green transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 hover:text-green-100 transition-colors"
              >
                <User className="w-6 h-6" />
                <span className="hidden md:block">{userName}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {userMenuOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      to="/my-account"
                      className="block px-4 py-2 text-sm text-text-dark hover:bg-brand-green-light hover:text-brand-green transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      My Account
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-text-dark hover:bg-brand-green-light hover:text-brand-green transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    {userType === "admin" && (
                      <Link
                        to="/admin-dashboard"
                        className="block px-4 py-2 text-sm text-text-dark hover:bg-brand-green-light hover:text-brand-green transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        onClick={() => {
                          setUserMenuOpen(false);
                          // Handle logout logic here
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-green-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-green-500">
            <div className="pt-4 space-y-4">
              {dashboardMenuItems.map((menu, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="flex items-center justify-between w-full text-left text-white hover:text-green-100 transition-colors py-2 font-medium"
                  >
                    <span>{menu.title}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === index ? "rotate-180" : "",
                      )}
                    />
                  </button>

                  {openDropdown === index && (
                    <div className="mt-2 ml-4 space-y-2">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className="block text-sm text-green-100 hover:text-white transition-colors py-1"
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Balance/Stats Bar for Dashboard */}
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
  );
}

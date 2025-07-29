import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X, Bell, Settings, User, LogOut, Shield, Briefcase, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";

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
      { name: "Saved Jobs", path: "/saved-jobs" },
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

export default function DashboardHeader({
  userType = "user",
  userName,
}: DashboardHeaderProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Use auth context user data if available, fallback to props
  const currentUser = user || { name: userName || "User", userType: userType, role: userType };
  const displayName = currentUser.name || userName || "User";
  const isAdmin = currentUser.userType === "admin" || currentUser.role === "admin";

  const handleLogout = () => {
    logout();
    navigate("/login");
    setUserMenuOpen(false);
  };

  const getUserIcon = () => {
    switch (currentUser.userType || currentUser.role) {
      case 'admin': return Shield;
      case 'buyer': return Briefcase;
      case 'both': return Users;
      default: return User;
    }
  };

  const getUserBadgeColor = () => {
    switch (currentUser.userType || currentUser.role) {
      case 'admin': return 'bg-red-500';
      case 'buyer': return 'bg-green-500';
      case 'both': return 'bg-purple-500';
      default: return 'bg-blue-500';
    }
  };

  const UserIcon = getUserIcon();

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
          <Link
            to="/"
            className="text-2xl font-bold hover:text-green-100 transition-colors"
          >
            ClickerPlus
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
                <div className="relative">
                  <UserIcon className="w-6 h-6" />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getUserBadgeColor()} rounded-full border-2 border-white`}></div>
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium">{displayName}</div>
                  {user && (
                    <div className="text-xs text-green-100 capitalize">
                      {currentUser.userType === 'both' ? 'Freelancer & Buyer' : currentUser.userType}
                    </div>
                  )}
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              {userMenuOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {/* User Info Header */}
                  {user && (
                    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <UserIcon className="w-8 h-8 text-gray-600" />
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getUserBadgeColor()} rounded-full border-2 border-white`}></div>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{displayName}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <Badge variant="outline" className="text-xs mt-1">
                            {currentUser.userType === 'both' ? 'Dual Account' : currentUser.userType?.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                      {user.rating && (
                        <div className="mt-2 text-xs text-gray-600">
                          ⭐ {user.rating} • {user.completedJobs} jobs completed
                        </div>
                      )}
                    </div>
                  )}

                  <div className="py-2">
                    <Link
                      to="/my-account"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User className="w-4 h-4 inline mr-2" />
                      My Account
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4 inline mr-2" />
                      Settings
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin-dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <Shield className="w-4 h-4 inline mr-2" />
                        Admin Dashboard
                      </Link>
                    )}
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        onClick={handleLogout}
                      >
                        <LogOut className="w-4 h-4 inline mr-2" />
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
      {user && (
        <div className="bg-green-600 py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              {currentUser.userType === 'admin' ? (
                <>
                  <span>System Status: ✅ Online</span>
                  <span>Total Users: 25,847</span>
                  <span>Active Jobs: 1,456</span>
                </>
              ) : currentUser.userType === 'buyer' ? (
                <>
                  <span>Available Budget: $2,450</span>
                  <span>Active Projects: 3</span>
                  <span>Total Spent: $8,900</span>
                </>
              ) : (
                <>
                  <span>Pending: ${user.totalEarnings ? (user.totalEarnings * 0.1).toFixed(2) : '0.00'}</span>
                  <span>Earned: ${user.totalEarnings?.toLocaleString() || '0'}</span>
                  <span>Available: $2,450</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

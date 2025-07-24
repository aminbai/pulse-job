import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Jobs & Work",
    items: [
      { name: "Browse Jobs", path: "/browse-jobs" },
      { name: "Find Jobs", path: "/find-jobs" },
      { name: "Job Board", path: "/job-board" },
      { name: "Job Listings", path: "/jobs" },
      { name: "Post Job", path: "/post-job" },
      { name: "Post New Job", path: "/post-new-job" },
      { name: "Top Freelancer", path: "/top-freelancer" },
    ],
  },
  {
    title: "Dashboard & Account",
    items: [
      { name: "Job Management Hub", path: "/unified-dashboard" },
      { name: "Old Dashboard", path: "/dashboard" },
      { name: "User Dashboard", path: "/user-dashboard" },
      { name: "Admin Dashboard", path: "/admin-dashboard" },
      { name: "My Account", path: "/my-account" },
      { name: "My Jobs", path: "/my-jobs" },
      { name: "My Work", path: "/my-work" },
      { name: "Message History", path: "/message-history" },
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
    title: "Information & Help",
    items: [
      { name: "Articles", path: "/articles" },
      { name: "Blog", path: "/blog" },
      { name: "FAQ", path: "/faq" },
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Legal & Settings",
    items: [
      { name: "Settings", path: "/settings" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "DMCA", path: "/dmca" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "Careers", path: "/careers" },
      { name: "Press", path: "/press" },
    ],
  },
];

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className={cn("relative", className)}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6">
        {menuItems.map((menu, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => handleDropdownToggle(index)}
              className="flex items-center space-x-1 text-text-dark hover:text-brand-green transition-colors py-2"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span>{menu.title}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Dropdown Menu */}
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
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 lg:hidden">
          <div className="py-4 px-4 space-y-4">
            {menuItems.map((menu, index) => (
              <div key={index}>
                <button
                  onClick={() => handleDropdownToggle(index)}
                  className="flex items-center justify-between w-full text-left text-text-dark hover:text-brand-green transition-colors py-2 font-medium"
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
                        className="block text-sm text-gray-600 hover:text-brand-green transition-colors py-1"
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
    </nav>
  );
}

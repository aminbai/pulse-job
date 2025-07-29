import "./global.css";

import { createRoot } from "react-dom/client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobListings from "./pages/JobListings";
import JobBoard from "./pages/JobBoard";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import DepositHistory from "./pages/DepositHistory";
import MyJobs from "./pages/MyJobs";
import MessageHistory from "./pages/MessageHistory";
import ReferEarn from "./pages/ReferEarn";
import TopFreelancer from "./pages/TopFreelancer";
import FindJobs from "./pages/FindJobs";
import MyAccount from "./pages/MyAccount";
import BrowseJobs from "./pages/BrowseJobs";
import PostJob from "./pages/PostJob";
import MyWork from "./pages/MyWork";
import JobDetail from "./pages/JobDetail";
import PlaceholderPage from "./pages/PlaceholderPage";
import AboutUs from "./pages/AboutUs";
import Articles from "./pages/Articles";
import DealMarketplace from "./pages/DealMarketplace";
import BrowseDeals from "./pages/BrowseDeals";
import MyDealOrder from "./pages/MyDealOrder";
import PostNewDeal from "./pages/PostNewDeal";
import FreelancerProfile from "./pages/FreelancerProfile";
import MyPost from "./pages/MyPost";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import UnifiedDashboard from "./pages/UnifiedDashboard";
import HowItWorks from "./pages/HowItWorks";
import WhyChooseUs from "./pages/WhyChooseUs";
import SavedJobs from "./pages/SavedJobs";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EmailVerification from "./pages/EmailVerification";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/unified-dashboard" element={<UnifiedDashboard />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/saved-jobs" element={<SavedJobs />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/deposit-history" element={<DepositHistory />} />
            <Route path="/my-jobs" element={<MyJobs />} />
            <Route path="/message-history" element={<MessageHistory />} />
            <Route path="/refer-earn" element={<ReferEarn />} />
            <Route path="/top-freelancer" element={<TopFreelancer />} />
            <Route
              path="/deal-history"
              element={
                <PlaceholderPage
                  title="Deal History"
                  description="View your deal transaction history and completed projects."
                />
              }
            />
            <Route path="/deal-marketplace" element={<DealMarketplace />} />
            <Route
              path="/settings"
              element={
                <PlaceholderPage
                  title="Settings"
                  description="Manage your account settings, preferences, and profile information."
                />
              }
            />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/browse-jobs" element={<BrowseJobs />} />
            <Route path="/browse-deals" element={<BrowseDeals />} />
            <Route path="/my-deal-order" element={<MyDealOrder />} />
            <Route path="/post-new-deal" element={<PostNewDeal />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/post-new-job" element={<PostJob />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/my-post" element={<MyPost />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route
              path="/freelancer/:username"
              element={<FreelancerProfile />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route
              path="/faq"
              element={
                <PlaceholderPage
                  title="FAQ"
                  description="Find answers to frequently asked questions about using GigClickers platform."
                />
              }
            />
            <Route
              path="/share-earn"
              element={
                <PlaceholderPage
                  title="Share & Earn"
                  description="Learn about our referral program and start earning by inviting friends."
                />
              }
            />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/privacy"
              element={
                <PlaceholderPage
                  title="Privacy Policy"
                  description="Our privacy policy and data protection information."
                />
              }
            />
            <Route
              path="/terms"
              element={
                <PlaceholderPage
                  title="Terms of Service"
                  description="Terms and conditions for using the GigClickers platform."
                />
              }
            />
            <Route
              path="/careers"
              element={
                <PlaceholderPage
                  title="Careers"
                  description="Join our team and help us build the future of freelancing."
                />
              }
            />
            <Route
              path="/press"
              element={
                <PlaceholderPage
                  title="Press"
                  description="Press releases and media resources about GigClickers."
                />
              }
            />
            <Route
              path="/blog"
              element={
                <PlaceholderPage
                  title="Blog"
                  description="Stay updated with the latest news and insights from GigClickers."
                />
              }
            />
            <Route
              path="/cookies"
              element={
                <PlaceholderPage
                  title="Cookie Policy"
                  description="Learn about how we use cookies to improve your experience."
                />
              }
            />
            <Route
              path="/dmca"
              element={
                <PlaceholderPage
                  title="DMCA"
                  description="Digital Millennium Copyright Act information and procedures."
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;

// Create root only once to prevent the warning
let root = (globalThis as any).__appRoot;
if (!root) {
  root = createRoot(container);
  (globalThis as any).__appRoot = root;
}
root.render(<App />);

import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobListings from "./pages/JobListings";
import JobBoard from "./pages/JobBoard";
import FindJobs from "./pages/FindJobs";
import MyAccount from "./pages/MyAccount";
import BrowseJobs from "./pages/BrowseJobs";
import PostJob from "./pages/PostJob";
import MyWork from "./pages/MyWork";
import JobDetail from "./pages/JobDetail";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/browse-jobs" element={<BrowseJobs />} />
          <Route path="/post-new-job" element={<PostJob />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route
            path="/login"
            element={
              <PlaceholderPage
                title="Login"
                description="Sign in to your GigClickers account to access your dashboard and manage your projects."
              />
            }
          />
          <Route
            path="/signup"
            element={
              <PlaceholderPage
                title="Sign Up"
                description="Create your GigClickers account and start connecting with opportunities today."
              />
            }
          />
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
          <Route
            path="/articles"
            element={
              <PlaceholderPage
                title="Articles"
                description="Read our latest articles and insights about freelancing and remote work."
              />
            }
          />
          <Route
            path="/about"
            element={
              <PlaceholderPage
                title="About Us"
                description="Learn more about GigClickers and our mission to connect freelancers with great opportunities."
              />
            }
          />
          <Route
            path="/contact"
            element={
              <PlaceholderPage
                title="Contact Us"
                description="Get in touch with our support team for any questions or assistance."
              />
            }
          />
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
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

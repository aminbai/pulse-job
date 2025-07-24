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
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/browse-jobs" element={<BrowseJobs />} />
          <Route path="/post-new-job" element={<PostJob />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route
            path="/about"
            element={
              <PlaceholderPage
                title="About Us"
                description="Learn more about Giglancers and our mission to connect freelancers with great opportunities."
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
                description="Terms and conditions for using the Giglancers platform."
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

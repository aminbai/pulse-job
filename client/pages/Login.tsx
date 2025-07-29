import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Loader2,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Facebook,
  Mail as GoogleIcon,
  Github,
  Shield,
  User,
  Users,
  Settings,
  Copy,
  Crown,
  Briefcase,
} from "lucide-react";
import PublicHeader from "@/components/PublicHeader";

// Demo accounts with different user types
const demoAccounts = [
  {
    type: "admin",
    title: "Admin Account",
    email: "admin@clickerplus.com",
    password: "admin123",
    name: "System Administrator",
    description: "Full system access with all administrative features",
    dashboard: "/admin-dashboard",
    icon: Shield,
    color: "bg-red-100 text-red-800 border-red-200",
  },
  {
    type: "freelancer",
    title: "Freelancer Account",
    email: "freelancer@clickerplus.com",
    password: "freelancer123",
    name: "John Smith (Expert)",
    description: "Professional freelancer with multiple completed projects",
    dashboard: "/dashboard",
    icon: User,
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    type: "buyer",
    title: "Buyer Account",
    email: "buyer@clickerplus.com",
    password: "buyer123",
    name: "TechCorp Solutions",
    description: "Business client looking to hire talented freelancers",
    dashboard: "/dashboard",
    icon: Briefcase,
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    type: "both",
    title: "Dual Account",
    email: "user@clickerplus.com",
    password: "user123",
    name: "Sarah Johnson",
    description: "Both freelancer and buyer (dual role)",
    dashboard: "/dashboard",
    icon: Users,
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
];

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTimeRemaining, setBlockTimeRemaining] = useState(0);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  // Block countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBlocked && blockTimeRemaining > 0) {
      interval = setInterval(() => {
        setBlockTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsBlocked(false);
            setLoginAttempts(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBlocked, blockTimeRemaining]);

  // Form validation
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleDemoLogin = async (account: (typeof demoAccounts)[0]) => {
    setFormData({
      email: account.email,
      password: account.password,
      rememberMe: false,
    });

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set user data in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", account.email);
      localStorage.setItem("userType", account.type);
      localStorage.setItem("userName", account.name);
      localStorage.setItem("userRole", account.type);

      // Navigate to appropriate dashboard
      navigate(account.dashboard);
    } catch (error) {
      console.error("Demo login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isBlocked) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Check against demo accounts
      const validAccount = demoAccounts.find(
        (account) =>
          account.email === formData.email &&
          account.password === formData.password,
      );

      if (validAccount) {
        // Success - set user data and redirect
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("userType", validAccount.type);
        localStorage.setItem("userName", validAccount.name);
        localStorage.setItem("userRole", validAccount.type);
        localStorage.setItem("rememberMe", formData.rememberMe.toString());

        // Navigate to appropriate dashboard
        navigate(validAccount.dashboard);
      } else {
        // Invalid credentials
        setLoginAttempts((prev) => prev + 1);
        const newAttempts = loginAttempts + 1;

        if (newAttempts >= 3) {
          setIsBlocked(true);
          setBlockTimeRemaining(300); // 5 minutes
          setErrors({
            submit: "Too many failed attempts. Account blocked for 5 minutes.",
          });
        } else {
          setErrors({
            submit: `Invalid email or password. ${3 - newAttempts} attempts remaining.`,
          });
        }
      }
    } catch (error) {
      setErrors({
        submit: "An error occurred during login. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAccount(type);
      setTimeout(() => setCopiedAccount(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      <div className="pt-16 flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-blue-600 rounded-full">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Sign in to your account
            </h2>
            <p className="text-gray-600">
              Welcome back! Please sign in to access your dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Login Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-center">
                    Login
                  </CardTitle>
                  <p className="text-gray-600 text-center">
                    Enter your credentials to access your account
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                          placeholder="Enter your email"
                          disabled={isLoading || isBlocked}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleInputChange}
                          className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
                          placeholder="Enter your password"
                          disabled={isLoading || isBlocked}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          disabled={isLoading || isBlocked}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.password}
                        </p>
                      )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="rememberMe"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              rememberMe: checked as boolean,
                            }))
                          }
                          disabled={isLoading || isBlocked}
                        />
                        <Label htmlFor="rememberMe" className="text-sm">
                          Remember me
                        </Label>
                      </div>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>

                    {/* Error Messages */}
                    {errors.submit && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.submit}</AlertDescription>
                      </Alert>
                    )}

                    {/* Block Warning */}
                    {isBlocked && (
                      <Alert>
                        <Shield className="h-4 w-4" />
                        <AlertDescription>
                          Account temporarily blocked. Try again in{" "}
                          <strong>{formatTime(blockTimeRemaining)}</strong>
                        </AlertDescription>
                      </Alert>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isLoading || isBlocked}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing in...
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </form>

                  {/* Social Login */}
                  <div className="space-y-3">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <Button
                        variant="outline"
                        className="w-full"
                        disabled={isLoading || isBlocked}
                      >
                        <GoogleIcon className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        disabled={isLoading || isBlocked}
                      >
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        disabled={isLoading || isBlocked}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Sign up for free
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Demo Accounts */}
            <div>
              <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-900 flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Demo Accounts
                  </CardTitle>
                  <p className="text-blue-700">
                    Try our platform instantly with pre-configured demo accounts
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {demoAccounts.map((account) => {
                    const IconComponent = account.icon;
                    return (
                      <Card
                        key={account.type}
                        className={`border-2 hover:shadow-md transition-all ${account.color}`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white rounded-lg">
                                <IconComponent className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {account.title}
                                </h3>
                                <p className="text-sm font-medium text-gray-700">
                                  {account.name}
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {account.type.toUpperCase()}
                            </Badge>
                          </div>

                          <p className="text-sm text-gray-600 mb-3">
                            {account.description}
                          </p>

                          <div className="space-y-2 mb-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Email:</span>
                              <div className="flex items-center gap-2">
                                <code className="bg-white px-2 py-1 rounded text-xs font-mono">
                                  {account.email}
                                </code>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 w-6 p-0"
                                  onClick={() =>
                                    copyToClipboard(
                                      account.email,
                                      `${account.type}-email`,
                                    )
                                  }
                                >
                                  {copiedAccount === `${account.type}-email` ? (
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                  ) : (
                                    <Copy className="w-3 h-3" />
                                  )}
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Password:</span>
                              <div className="flex items-center gap-2">
                                <code className="bg-white px-2 py-1 rounded text-xs font-mono">
                                  {account.password}
                                </code>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 w-6 p-0"
                                  onClick={() =>
                                    copyToClipboard(
                                      account.password,
                                      `${account.type}-password`,
                                    )
                                  }
                                >
                                  {copiedAccount ===
                                  `${account.type}-password` ? (
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                  ) : (
                                    <Copy className="w-3 h-3" />
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>

                          <Button
                            onClick={() => handleDemoLogin(account)}
                            disabled={isLoading}
                            className="w-full bg-white text-gray-800 hover:bg-gray-50 border"
                            size="sm"
                          >
                            {isLoading ? (
                              <Loader2 className="w-4 h-4 animate-spin mr-2" />
                            ) : (
                              <IconComponent className="w-4 h-4 mr-2" />
                            )}
                            Login as{" "}
                            {account.type === "both"
                              ? "Dual User"
                              : account.type}
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}

                  <Alert className="bg-yellow-50 border-yellow-200">
                    <AlertCircle className="h-4 w-4 text-yellow-600" />
                    <AlertDescription className="text-yellow-800">
                      <strong>Note:</strong> Demo accounts reset daily and
                      contain sample data for testing purposes.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
} from "lucide-react";
import PublicHeader from "@/components/PublicHeader";

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

  // Form validation
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "ইমেইল ঠিকানা প্রয়োজন";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "বৈধ ইমেইল ঠিকানা প্রবেশ করুন";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "পাসওয়ার্ড প্রয়োজন";
    } else if (formData.password.length < 6) {
      newErrors.password = "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে";
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

      // Mock login logic
      const isValidLogin =
        formData.email === "user@example.com" &&
        formData.password === "password123";

      if (isValidLogin) {
        // Success - redirect to dashboard
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("rememberMe", formData.rememberMe.toString());

        // Reset login attempts on successful login
        setLoginAttempts(0);

        // Show success message and redirect
        navigate("/user-dashboard");
      } else {
        // Failed login
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);

        if (newAttempts >= 5) {
          setIsBlocked(true);
          setBlockTimeRemaining(300); // 5 minutes
          setErrors({
            general:
              "অত্যধিক ভুল প্রচেষ্টার কারণে অ্যাকাউন্ট ৫ মিনিটের জন্য ব্লক করা হয়েছে",
          });

          // Start countdown
          const countdown = setInterval(() => {
            setBlockTimeRemaining((prev) => {
              if (prev <= 1) {
                clearInterval(countdown);
                setIsBlocked(false);
                setLoginAttempts(0);
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
        } else {
          setErrors({
            general: `ভুল ইমেইল বা পাসওয়ার্ড। আরও ${5 - newAttempts} টি প্রচেষ্টা বাকি।`,
          });
        }
      }
    } catch (error) {
      setErrors({ general: "সার্ভার ত্রুটি। পরে আবার চেষ্টা করুন।" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
    // Implement social login logic
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center text-brand-green hover:text-green-600 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              হোমে ফিরে যান
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">স্বাগতম!</h1>
            <p className="text-gray-600 mt-2">আপনার অ্যাকাউন্টে লগইন করুন</p>
          </div>

          {/* Login Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">লগইন</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* General Error Alert */}
              {errors.general && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.general}</AlertDescription>
                </Alert>
              )}

              {/* Block Timer */}
              {isBlocked && (
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    অ্যাকাউন্ট ব্লক করা হয়েছে। {formatTime(blockTimeRemaining)}{" "}
                    পরে আবার চেষ্টা করুন।
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">ইমেইল ঠিকানা *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                      disabled={isLoading || isBlocked}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password">পাসওয়ার্ড *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="আপনার পাসওয়ার্ড"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
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
                    <p className="text-sm text-red-600">{errors.password}</p>
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
                      আমাকে মনে ��াখুন
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-brand-green hover:text-green-600"
                  >
                    পাসওয়ার্ড ভুলে গেছেন?
                  </Link>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-green-600"
                  disabled={isLoading || isBlocked}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      লগইন হচ্ছে...
                    </>
                  ) : (
                    "লগইন করুন"
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    অথবা
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => handleSocialLogin("google")}
                  disabled={isLoading || isBlocked}
                >
                  <GoogleIcon className="w-4 h-4 mr-2" />
                  Google দিয়ে লগইন করুন
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => handleSocialLogin("facebook")}
                  disabled={isLoading || isBlocked}
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook দিয়ে লগইন করুন
                </Button>
              </div>

              {/* Security Notice */}
              <div className="text-xs text-gray-500 text-center space-y-1">
                <p>
                  <Shield className="w-3 h-3 inline mr-1" />
                  আপনার তথ্য সুরক্ষিত এবং এনক্রিপ্টেড
                </p>
                <p>৫টি ভুল প্রচেষ্টার পর অ্যাকাউন্ট ৫ মিনিটের জন্য ব্লক হবে</p>
              </div>
            </CardContent>
          </Card>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                to="/signup"
                className="text-brand-green hover:text-green-600 font-medium"
              >
                এখনই সাইন আপ করুন
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-medium text-blue-900 mb-2">
                ডেমো অ্যাকাউন্ট:
              </h3>
              <div className="text-sm text-blue-800 space-y-1">
                <p>
                  <strong>ইমেইল:</strong> user@example.com
                </p>
                <p>
                  <strong>পাসওয়ার্ড:</strong> password123
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import {
  Lock,
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Shield,
  Check,
  X
} from "lucide-react";
import Header from "@/components/Header";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [isValidating, setIsValidating] = useState(true);

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 10;
    if (/[a-z]/.test(password)) strength += 15;
    if (/[A-Z]/.test(password)) strength += 15;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return Math.min(strength, 100);
  };

  const getPasswordStrengthText = (strength: number) => {
    if (strength < 30) return { text: "দুর্বল", color: "text-red-600" };
    if (strength < 60) return { text: "মাঝারি", color: "text-yellow-600" };
    if (strength < 80) return { text: "ভালো", color: "text-blue-600" };
    return { text: "চমৎকার", color: "text-green-600" };
  };

  // Validate token on component mount
  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsTokenValid(false);
        setIsValidating(false);
        return;
      }

      try {
        // Simulate API call to validate token
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock token validation - in real app, this would be an API call
        const isValid = token.length > 10; // Simple mock validation
        setIsTokenValid(isValid);
        
      } catch (error) {
        setIsTokenValid(false);
      } finally {
        setIsValidating(false);
      }
    };

    validateToken();
  }, [token]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.password) {
      newErrors.password = "নতুন পাসওয়ার্ড প্রয়োজন";
    } else if (formData.password.length < 8) {
      newErrors.password = "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
    } else if (passwordStrength < 50) {
      newErrors.password = "আরও শক্তিশালী পাসওয়ার্ড ব্যবহার করুন";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "পাসওয়ার্ড নিশ্চিত করুন";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "পাসওয়ার্ড মিলছে না";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Calculate password strength
    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock password reset logic
      console.log("Resetting password for:", email, "with token:", token);
      
      // Success - redirect to login with success message
      navigate("/login", { 
        state: { 
          message: "পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে! নতুন পাসওয়ার্ড দিয়ে লগইন করুন।",
          type: "success"
        }
      });
      
    } catch (error) {
      setErrors({ general: "পাসওয়ার্ড রিসেট করতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।" });
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state while validating token
  if (isValidating) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="flex items-center justify-center py-12 px-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 text-center space-y-4">
              <Loader2 className="w-8 h-8 mx-auto animate-spin text-brand-green" />
              <h2 className="text-xl font-semibold">যাচাই করা হচ্ছে...</h2>
              <p className="text-gray-600">আপনার রি��েট লিংক যাচাই করা হচ্ছে।</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Invalid token state
  if (isTokenValid === false) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md space-y-6">
            <Card>
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    অবৈধ বা মেয়াদোত্তীর্ণ লিংক
                  </h1>
                  <p className="text-gray-600">
                    এই পাসওয়ার্ড রিসেট লিংকটি অবৈধ বা মেয়াদোত্তীর্ণ হয়ে গেছে।
                  </p>
                </div>

                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    রিসেট লিংক ২৪ ঘন্টার জন্য বৈধ থাকে। নতুন রিসেট অনুরোধ করুন।
                  </AlertDescription>
                </Alert>

                <div className="space-y-3">
                  <Link to="/forgot-password">
                    <Button className="w-full bg-brand-green hover:bg-green-600">
                      নতুন রিসেট লিংক চান
                    </Button>
                  </Link>
                  
                  <Link to="/login">
                    <Button variant="outline" className="w-full">
                      লগইন পেইজে ফিরে যান
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center">
            <Link to="/login" className="inline-flex items-center text-brand-green hover:text-green-600 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              লগইনে ফিরে যান
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">নতুন পাসওয়ার্ড সেট করুন</h1>
            <p className="text-gray-600 mt-2">
              {email && (
                <>
                  <strong>{email}</strong> এর জন্য নতুন পাসওয়ার্ড তৈরি করুন
                </>
              )}
            </p>
          </div>

          {/* Reset Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">নতুন পাসওয়ার্ড</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {errors.general && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.general}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* New Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password">নতুন পাসওয়ার্ড *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="শক্তিশালী পাসওয়ার্ড"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      disabled={isLoading}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>পাসওয়ার্ড শক্তি:</span>
                        <span className={getPasswordStrengthText(passwordStrength).color}>
                          {getPasswordStrengthText(passwordStrength).text}
                        </span>
                      </div>
                      <Progress value={passwordStrength} className="h-2" />
                      <div className="text-xs text-gray-600 space-y-1">
                        <div className="flex items-center space-x-2">
                          {formData.password.length >= 8 ? (
                            <Check className="w-3 h-3 text-green-600" />
                          ) : (
                            <X className="w-3 h-3 text-red-600" />
                          )}
                          <span>কমপক্ষে ৮ অক্ষর</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/[A-Z]/.test(formData.password) ? (
                            <Check className="w-3 h-3 text-green-600" />
                          ) : (
                            <X className="w-3 h-3 text-red-600" />
                          )}
                          <span>একটি বড় হাতের অক্ষর</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/[0-9]/.test(formData.password) ? (
                            <Check className="w-3 h-3 text-green-600" />
                          ) : (
                            <X className="w-3 h-3 text-red-600" />
                          )}
                          <span>একটি সংখ্যা</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/[^A-Za-z0-9]/.test(formData.password) ? (
                            <Check className="w-3 h-3 text-green-600" />
                          ) : (
                            <X className="w-3 h-3 text-red-600" />
                          )}
                          <span>একটি বিশেষ চিহ্ন</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {errors.password && (
                    <p className="text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">পাসওয়ার্ড নিশ্চিত করুন *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="পাসওয়ার্ড পুনরায় টাইপ করুন"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      disabled={isLoading}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-green-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      পাসওয়ার্ড আপডেট করা হচ্ছে...
                    </>
                  ) : (
                    "পাসওয়ার্ড আপডেট করুন"
                  )}
                </Button>
              </form>

              {/* Security Notice */}
              <div className="text-xs text-gray-500 text-center space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>আপনার নতুন পাসওয়ার্ড নিরাপদে সংরক্ষিত হবে</span>
                </div>
                <p>পাসওয়া��্ড পরিবর্তনের পর আপনার সকল ডিভাইস থেকে লগআউট হয়ে যাবেন।</p>
              </div>
            </CardContent>
          </Card>

          {/* Password Tips */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-medium text-blue-900 mb-2">শক্তিশালী পাসওয়ার্ডের টিপস:</h3>
              <div className="text-sm text-blue-800 space-y-1">
                <p>• কমপক্ষে ৮ অক্ষর ব্যবহার করুন</p>
                <p>• বড় ও ছোট হাতের অক্ষর মিশান</p>
                <p>• সংখ্যা এবং বিশেষ চিহ্ন যোগ করুন</p>
                <p>• সহজে অনুমানযোগ্য তথ্য এড়িয়ে চলুন</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

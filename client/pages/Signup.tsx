import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Loader2,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Facebook,
  Mail as GoogleIcon,
  Shield,
  Info,
  Users,
  Briefcase,
  Check,
  X,
} from "lucide-react";
import Header from "@/components/Header";

export default function Signup() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: User Type
    userType: "",

    // Step 2: Basic Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Step 3: Location & Password
    country: "Bangladesh",
    city: "",
    password: "",
    confirmPassword: "",

    // Step 4: Agreements
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [passwordStrength, setPasswordStrength] = useState(0);

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

  // Form validation by step
  const validateStep = (step: number) => {
    const newErrors: { [key: string]: string } = {};

    switch (step) {
      case 1:
        if (!formData.userType) {
          newErrors.userType = "ব্যবহারকারীর ধরন নির্বাচন করুন";
        }
        break;

      case 2:
        if (!formData.firstName.trim()) {
          newErrors.firstName = "নামের প্রথম অংশ প্রয়োজন";
        }
        if (!formData.lastName.trim()) {
          newErrors.lastName = "নামের শেষ অংশ প্রয়োজন";
        }
        if (!formData.email) {
          newErrors.email = "ইমেইল ঠিকানা প্রয়োজন";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "বৈধ ইমেইল ঠিকানা প্রবেশ করুন";
        }
        if (!formData.phone) {
          newErrors.phone = "ফোন নম্বর প্রয়োজন";
        } else if (
          !/^(\+8801|8801|01)[3-9]\d{8}$/.test(
            formData.phone.replace(/\s/g, ""),
          )
        ) {
          newErrors.phone = "বৈধ বাংলাদেশী ফোন নম্বর প্রবেশ করুন";
        }
        break;

      case 3:
        if (!formData.city.trim()) {
          newErrors.city = "শহরের নাম প্রয়োজন";
        }
        if (!formData.password) {
          newErrors.password = "পাসওয়ার্ড প্রয়োজন";
        } else if (formData.password.length < 8) {
          newErrors.password = "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
        } else if (passwordStrength < 50) {
          newErrors.password = "আরও শক্তিশালী পাসওয়ার্ড ব্যবহার করুন";
        }
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = "পাসওয়ার্ড নিশ্চিত ক��ুন";
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = "পাসওয়ার্ড মিলছে না";
        }
        break;

      case 4:
        if (!formData.agreeTerms) {
          newErrors.agreeTerms = "ব্যবহারের শর্তাবলী গ্রহণ করতে হবে";
        }
        if (!formData.agreePrivacy) {
          newErrors.agreePrivacy = "গোপনীয়তা নীতি গ্রহণ করতে হবে";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Calculate password strength
    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Mock signup logic
      console.log("Signup data:", formData);

      // Show success and redirect
      navigate("/login", {
        state: {
          message:
            "অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে! আপনার ইমেইল যাচাই করুন এবং লগইন করুন।",
        },
      });
    } catch (error) {
      setErrors({ general: "সার্ভার ত্রুটি। পরে আবার চেষ্টা করুন।" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Signing up with ${provider}`);
    // Implement social signup logic
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">
          আপনি কোন ধরনের ব্যবহারকারী?
        </h2>
        <p className="text-gray-600">আপনার পরিচয় নির্বাচন করুন</p>
      </div>

      <RadioGroup
        value={formData.userType}
        onValueChange={(value) =>
          setFormData((prev) => ({ ...prev, userType: value }))
        }
        className="space-y-4"
      >
        <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
          <RadioGroupItem value="freelancer" id="freelancer" />
          <div className="flex items-center space-x-3 flex-1">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <Label
                htmlFor="freelancer"
                className="text-base font-medium cursor-pointer"
              >
                ফ্রিল্যান্সার
              </Label>
              <p className="text-sm text-gray-600">
                কাজ খুঁজছেন এবং সেবা প্রদান করতে চান
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
          <RadioGroupItem value="buyer" id="buyer" />
          <div className="flex items-center space-x-3 flex-1">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <Label
                htmlFor="buyer"
                className="text-base font-medium cursor-pointer"
              >
                বায়ার/ক্লায়েন্ট
              </Label>
              <p className="text-sm text-gray-600">
                কাজ দিতে চান এবং ফ্রিল্যান্সার নিয়োগ করতে চান
              </p>
            </div>
          </div>
        </div>
      </RadioGroup>

      {errors.userType && (
        <p className="text-sm text-red-600">{errors.userType}</p>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold mb-2">ব্যক্তিগত তথ্য</h2>
        <p className="text-gray-600">আপনার মৌলিক তথ্য প্রদান করুন</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">নামের প্রথম অংশ *</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="firstName"
              name="firstName"
              placeholder="যেমন: আহমেদ"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`pl-10 ${errors.firstName ? "border-red-500" : ""}`}
            />
          </div>
          {errors.firstName && (
            <p className="text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">নামের শেষ অংশ *</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="lastName"
              name="lastName"
              placeholder="যেমন: করিম"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`pl-10 ${errors.lastName ? "border-red-500" : ""}`}
            />
          </div>
          {errors.lastName && (
            <p className="text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>
      </div>

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
          />
        </div>
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">ফোন নম্বর *</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            id="phone"
            name="phone"
            placeholder="01XXXXXXXXX"
            value={formData.phone}
            onChange={handleInputChange}
            className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
          />
        </div>
        {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold mb-2">অবস্থান ও নিরাপত্তা</h2>
        <p className="text-gray-600">আপনার অবস্থান এবং পাসওয়ার্ড সেট করুন</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="country">দেশ</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="pl-10"
              disabled
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">শহর *</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="city"
              name="city"
              placeholder="যেমন: ঢাকা"
              value={formData.city}
              onChange={handleInputChange}
              className={`pl-10 ${errors.city ? "border-red-500" : ""}`}
            />
          </div>
          {errors.city && <p className="text-sm text-red-600">{errors.city}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">পাসওয়ার্ড *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="শক্তিশালী পাসওয়ার্ড"
            value={formData.password}
            onChange={handleInputChange}
            className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
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
            className={`pl-10 pr-10 ${errors.confirmPassword ? "border-red-500" : ""}`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-sm text-red-600">{errors.confirmPassword}</p>
        )}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold mb-2">শর্তাবলী ও চুক্তি</h2>
        <p className="text-gray-600">
          চূড়ান্ত করার আগে শর্তাবলী পড়ুন এবং সম্মতি দিন
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <Checkbox
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({
                ...prev,
                agreeTerms: checked as boolean,
              }))
            }
          />
          <div className="flex-1">
            <Label htmlFor="agreeTerms" className="cursor-pointer">
              আমি{" "}
              <Link to="/terms" className="text-brand-green hover:underline">
                ব্যবহারের শর্তাবলী
              </Link>{" "}
              পড়েছি এবং সম্মত আছি *
            </Label>
            {errors.agreeTerms && (
              <p className="text-sm text-red-600 mt-1">{errors.agreeTerms}</p>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <Checkbox
            id="agreePrivacy"
            name="agreePrivacy"
            checked={formData.agreePrivacy}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({
                ...prev,
                agreePrivacy: checked as boolean,
              }))
            }
          />
          <div className="flex-1">
            <Label htmlFor="agreePrivacy" className="cursor-pointer">
              আমি{" "}
              <Link to="/privacy" className="text-brand-green hover:underline">
                গোপনীয়তা নীতি
              </Link>{" "}
              পড়েছি এবং সম্মত আছি *
            </Label>
            {errors.agreePrivacy && (
              <p className="text-sm text-red-600 mt-1">{errors.agreePrivacy}</p>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-3 p-4 border rounded-lg bg-gray-50">
          <Checkbox
            id="agreeMarketing"
            name="agreeMarketing"
            checked={formData.agreeMarketing}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({
                ...prev,
                agreeMarketing: checked as boolean,
              }))
            }
          />
          <div className="flex-1">
            <Label htmlFor="agreeMarketing" className="cursor-pointer">
              আমি প্রোমোশনাল ইমেইল এবং আপডেট পেতে চাই (ঐচ্ছিক)
            </Label>
            <p className="text-xs text-gray-600 mt-1">
              আপনি যেকোনো সময় সদস্যতা বাতিল করতে পারবেন
            </p>
          </div>
        </div>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          অ্যাকাউন্ট তৈরির পর আপনার ইমেইলে একটি যাচাইকরণ লিংক পাঠানো হবে।
          অ্যাকাউন্ট সক্রিয় করতে সেই লিংকে ক্লিক করুন।
        </AlertDescription>
      </Alert>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
            <h1 className="text-3xl font-bold text-gray-900">
              অ্যাকাউন্ট তৈরি করুন
            </h1>
            <p className="text-gray-600 mt-2">
              GigClickers এ যোগ দিন এবং আপনার যাত্রা শুরু করুন
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>ধাপ {currentStep} / 4</span>
              <span>{Math.round((currentStep / 4) * 100)}% সম্পূর্ণ</span>
            </div>
            <Progress value={(currentStep / 4) * 100} className="h-2" />
          </div>

          {/* Signup Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                {currentStep === 1 && "ব্যবহারকারীর ধরন"}
                {currentStep === 2 && "ব্যক্তিগত তথ্য"}
                {currentStep === 3 && "অবস্থান ও নিরাপত্তা"}
                {currentStep === 4 && "শর্তাবলী ও চুক্তি"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* General Error Alert */}
              {errors.general && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.general}</AlertDescription>
                </Alert>
              )}

              {renderCurrentStep()}

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={isLoading}
                    className="flex-1"
                  >
                    পূর্ববর্তী
                  </Button>
                )}

                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={isLoading}
                  className={`bg-brand-green hover:bg-green-600 ${currentStep === 1 ? "w-full" : "flex-1"}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      অ্যাকাউন্ট তৈরি হচ্ছে...
                    </>
                  ) : currentStep === 4 ? (
                    "অ্যাকাউন্ট তৈরি করুন"
                  ) : (
                    "পরবর্তী"
                  )}
                </Button>
              </div>

              {/* Social Signup (only on first step) */}
              {currentStep === 1 && (
                <>
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

                  <div className="space-y-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => handleSocialSignup("google")}
                      disabled={isLoading}
                    >
                      <GoogleIcon className="w-4 h-4 mr-2" />
                      Google দিয়ে সাইন আপ করুন
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => handleSocialSignup("facebook")}
                      disabled={isLoading}
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook দিয়ে সাইন আপ করুন
                    </Button>
                  </div>
                </>
              )}

              {/* Security Notice */}
              <div className="text-xs text-gray-500 text-center">
                <p>
                  <Shield className="w-3 h-3 inline mr-1" />
                  আপনার তথ্য সুরক্ষিত এবং এনক্রিপ্টেড
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
              <Link
                to="/login"
                className="text-brand-green hover:text-green-600 font-medium"
              >
                লগইন করুন
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

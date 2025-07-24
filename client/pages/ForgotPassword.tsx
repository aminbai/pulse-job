import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Mail,
  Loader2,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Send,
  Clock,
  Shield,
  RefreshCw,
} from "lucide-react";
import Header from "@/components/Header";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("ইমেইল ঠিকানা প্রয়োজন");
      return;
    }

    if (!validateEmail(email)) {
      setError("বৈধ ইমেইল ঠিকানা প্রবেশ করুন");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock email sending logic
      console.log("Sending password reset email to:", email);

      setIsEmailSent(true);
      startResendCooldown();
    } catch (error) {
      setError("সার্ভার ত্রুটি। পরে আবার চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
    }
  };

  const startResendCooldown = () => {
    setResendCooldown(60); // 60 seconds cooldown
    const countdown = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;

    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Resending password reset email to:", email);
      startResendCooldown();
    } catch (error) {
      setError("ইমেইল পুনরায় পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsEmailSent(false);
    setEmail("");
    setError("");
    setResendCooldown(0);
  };

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <div className="flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md space-y-6">
            {/* Success State */}
            <Card>
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    ইমেইল পাঠানো হয়েছে!
                  </h1>
                  <p className="text-gray-600">
                    আমরা <strong>{email}</strong> ঠিকানায় পাসওয়ার্ড রিসেট লিংক
                    পাঠিয়েছি।
                  </p>
                </div>

                <Alert>
                  <Mail className="h-4 w-4" />
                  <AlertDescription>
                    ইমেইল পেতে ৫-১০ মিনিট সময় লাগতে পারে। স্প্যাম ফোল্ডারও চেক
                    করুন।
                  </AlertDescription>
                </Alert>

                <div className="space-y-3">
                  <Button
                    onClick={handleResend}
                    disabled={isLoading || resendCooldown > 0}
                    variant="outline"
                    className="w-full"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        পাঠানো হচ্ছে...
                      </>
                    ) : resendCooldown > 0 ? (
                      <>
                        <Clock className="w-4 h-4 mr-2" />
                        {resendCooldown} সেকেন্ড পরে আবার পাঠান
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        ইমেইল আবার পাঠান
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={resetForm}
                    variant="ghost"
                    className="w-full"
                  >
                    অন্য ইমেইল ব্যবহার করুন
                  </Button>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="pt-4 border-t">
                  <Link
                    to="/login"
                    className="text-brand-green hover:text-green-600 font-medium"
                  >
                    লগইন পেইজে ফিরে যান
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
            <Link
              to="/login"
              className="inline-flex items-center text-brand-green hover:text-green-600 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              লগইনে ফিরে যান
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">
              পাসওয়ার্ড ভুলে গেছেন?
            </h1>
            <p className="text-gray-600 mt-2">
              চিন্তা করবেন না! আমরা আপনাকে সাহায্য করব।
            </p>
          </div>

          {/* Reset Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                পাসওয়ার্ড রিসেট করুন
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center text-sm text-gray-600">
                আপনার ইমেইল ঠিকানা দিন। আমরা পাসওয়ার্ড রিসেট করার জন্য একটি
                লিংক পাঠাব।
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">ইমেইল ঠিকানা</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      className={`pl-10 ${error ? "border-red-500" : ""}`}
                      disabled={isLoading}
                      autoFocus
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-green-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      পাঠানো হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      রিসেট লিংক পাঠান
                    </>
                  )}
                </Button>
              </form>

              {/* Security Notice */}
              <div className="text-xs text-gray-500 text-center space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>আপনার তথ্য সুরক্ষিত এবং এনক্রিপ্টেড</span>
                </div>
                <p>রিস��ট লিংক ২৪ ঘন্টার জন্য বৈধ থাকবে।</p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Help */}
          <Card className="bg-gray-50">
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">
                সাহায্য প্রয়োজন?
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>• ইমেইল পেতে ৫-১০ মিনিট সময় লাগতে পারে</p>
                <p>• স্প্যাম এবং জাঙ্ক ফোল্ডার চেক করুন</p>
                <p>• আপনার ইমেইল ঠিকানা সঠিক কিনা নিশ্চিত করুন</p>
                <p className="pt-2">
                  তারপরও সমস্যা হলে{" "}
                  <Link
                    to="/contact"
                    className="text-brand-green hover:underline"
                  >
                    সাহায্য কেন্দ্রে
                  </Link>{" "}
                  যোগাযোগ করুন।
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Login */}
          <div className="text-center">
            <p className="text-gray-600">
              পাসওয়ার্ড মনে পড়েছে?{" "}
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

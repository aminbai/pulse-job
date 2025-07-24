import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  RefreshCw,
  ArrowRight,
  Shield,
} from "lucide-react";
import Header from "@/components/Header";

export default function EmailVerification() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [verificationStatus, setVerificationStatus] = useState<
    "loading" | "success" | "error" | "expired"
  >("loading");
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setVerificationStatus("error");
        return;
      }

      try {
        // Simulate API call to verify email
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Mock verification logic
        if (token.length > 20) {
          setVerificationStatus("success");

          // Auto redirect to login after 3 seconds
          setTimeout(() => {
            navigate("/login", {
              state: {
                message: "ইমেইল সফলভাবে যাচাই হয়েছে! এখন লগইন করুন।",
                type: "success",
              },
            });
          }, 3000);
        } else if (token.length > 10) {
          setVerificationStatus("expired");
        } else {
          setVerificationStatus("error");
        }
      } catch (error) {
        setVerificationStatus("error");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  const handleResendVerification = async () => {
    if (resendCooldown > 0 || !email) return;

    setIsResending(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Resending verification email to:", email);

      // Start cooldown
      setResendCooldown(60);
      const countdown = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error("Failed to resend verification email");
    } finally {
      setIsResending(false);
    }
  };

  const renderContent = () => {
    switch (verificationStatus) {
      case "loading":
        return (
          <Card>
            <CardContent className="p-8 text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  ইমেইল যাচাই করা হচ্ছে...
                </h1>
                <p className="text-gray-600">
                  অনুগ্রহ করে অপেক্ষা করুন, আমরা আপনার ইমেইল যাচাই করছি।
                </p>
              </div>
            </CardContent>
          </Card>
        );

      case "success":
        return (
          <Card>
            <CardContent className="p-8 text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  ইমেইল সফলভাবে যাচাই হয়েছে!
                </h1>
                <p className="text-gray-600">
                  {email && (
                    <>
                      <strong>{email}</strong> ইমেইল ঠিকানা যাচাই সম্পন্ন
                      হয়েছে।
                    </>
                  )}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  ৩ সেকেন্ড পরে স্বয়ংক্রিয়ভাবে লগইন প���ইজে নিয়ে যাওয়া
                  হবে...
                </p>
              </div>

              <Alert className="text-left">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  আপনার অ্যাকাউন্ট এখন সক্রিয় এবং সকল ফিচার ব্যবহার করতে
                  পারবেন।
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <Link to="/login">
                  <Button className="w-full bg-brand-green hover:bg-green-600">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    এখনই লগইন করুন
                  </Button>
                </Link>

                <Link to="/">
                  <Button variant="outline" className="w-full">
                    হোমে ফিরে যান
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        );

      case "expired":
        return (
          <Card>
            <CardContent className="p-8 text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-yellow-600" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  যাচাইকরণ লিংক মেয়াদোত্তীর্ণ
                </h1>
                <p className="text-gray-600">
                  এই ইমেইল যাচাইকরণ লিংকের মেয়াদ শেষ হয়ে গেছে।
                </p>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  যাচাইকরণ লিংক ২৪ ঘন্টার জন্য বৈধ থাকে। নতুন লিংক পেতে আবার
                  অনুরোধ করুন।
                </AlertDescription>
              </Alert>

              {email && (
                <div className="space-y-3">
                  <Button
                    onClick={handleResendVerification}
                    disabled={isResending || resendCooldown > 0}
                    className="w-full bg-brand-green hover:bg-green-600"
                  >
                    {isResending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        পাঠানো হচ্ছে...
                      </>
                    ) : resendCooldown > 0 ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        {resendCooldown} সেকেন্ড পরে আবার পাঠান
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        নতুন যাচাইকরণ ইমেইল পাঠান
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-600">
                    ইমেইল পাঠানো হবে: <strong>{email}</strong>
                  </p>
                </div>
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
        );

      case "error":
      default:
        return (
          <Card>
            <CardContent className="p-8 text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  যাচাইকরণ ব্যর্থ
                </h1>
                <p className="text-gray-600">
                  ইমেইল যাচাই করতে সমস্যা হয়েছে। লিংকটি অবৈধ বা ক্ষতিগ্রস্ত হতে
                  পারে।
                </p>
              </div>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  যাচাইকরণ টোকেন অবৈধ বা মেয়াদোত্তীর্ণ হয়েছে।
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                {email && (
                  <Button
                    onClick={handleResendVerification}
                    disabled={isResending || resendCooldown > 0}
                    className="w-full bg-brand-green hover:bg-green-600"
                  >
                    {isResending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        পাঠানো হচ্ছে...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        নতুন যাচাইকরণ ইমেইল পাঠান
                      </>
                    )}
                  </Button>
                )}

                <Link to="/signup">
                  <Button variant="outline" className="w-full">
                    নতুন অ্যাকাউন্ট তৈরি করুন
                  </Button>
                </Link>
              </div>

              <div className="pt-4 border-t space-y-2">
                <p className="text-sm text-gray-600">
                  সমস্যা অব্যাহত থাকলে{" "}
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
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-6">
          {renderContent()}

          {/* Security Notice */}
          <Card className="bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>আপনার নিরাপত্তার জন্য ইমেইল যাচাইকরণ প্রয়োজন</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

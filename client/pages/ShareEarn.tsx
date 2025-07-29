import { useState } from 'react';
import { Share2, Gift, Users, TrendingUp, Copy, Facebook, Twitter, Linkedin, Mail, MessageCircle, DollarSign, Trophy, Star, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PublicHeader } from "@/components/PublicHeader";

interface ReferralStats {
  totalReferrals: number;
  activeReferrals: number;
  totalEarnings: number;
  pendingEarnings: number;
  thisMonthEarnings: number;
  conversionRate: number;
  rank: string;
  nextRankProgress: number;
}

interface Referral {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'active' | 'inactive';
  joinDate: string;
  earnings: number;
  tier: string;
}

const mockStats: ReferralStats = {
  totalReferrals: 24,
  activeReferrals: 18,
  totalEarnings: 1247.50,
  pendingEarnings: 125.00,
  thisMonthEarnings: 380.25,
  conversionRate: 75,
  rank: 'Gold',
  nextRankProgress: 65
};

const mockReferrals: Referral[] = [
  {
    id: 'REF001',
    name: 'John Smith',
    email: 'john.smith@example.com',
    status: 'active',
    joinDate: '2024-01-15',
    earnings: 150.00,
    tier: 'Pro'
  },
  {
    id: 'REF002',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    status: 'active',
    joinDate: '2024-01-10',
    earnings: 200.00,
    tier: 'Premium'
  },
  {
    id: 'REF003',
    name: 'Mike Davis',
    email: 'mike.davis@example.com',
    status: 'pending',
    joinDate: '2024-01-18',
    earnings: 0,
    tier: 'Free'
  },
  {
    id: 'REF004',
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    status: 'active',
    joinDate: '2024-01-08',
    earnings: 175.50,
    tier: 'Pro'
  },
  {
    id: 'REF005',
    name: 'David Brown',
    email: 'david.brown@example.com',
    status: 'inactive',
    joinDate: '2023-12-20',
    earnings: 50.00,
    tier: 'Free'
  }
];

const tiers = [
  { name: 'Bronze', commission: '10%', minReferrals: 0, color: 'bg-orange-100 text-orange-800' },
  { name: 'Silver', commission: '15%', minReferrals: 5, color: 'bg-gray-100 text-gray-800' },
  { name: 'Gold', commission: '20%', minReferrals: 15, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Platinum', commission: '25%', minReferrals: 30, color: 'bg-purple-100 text-purple-800' },
  { name: 'Diamond', commission: '30%', minReferrals: 50, color: 'bg-blue-100 text-blue-800' }
];

export default function ShareEarn() {
  const [referralCode] = useState('JOHNSMITH2024');
  const [customMessage, setCustomMessage] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const referralLink = `https://clickerplus.com/signup?ref=${referralCode}`;

  const copyToClipboard = (text: string, type: 'code' | 'link') => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const shareToSocial = (platform: string) => {
    const message = `Join me on ClickerPlus! Use my referral code ${referralCode} and we both earn rewards! ${referralLink}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}&quote=${encodeURIComponent(message)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}&summary=${encodeURIComponent(message)}`);
        break;
      case 'email':
        window.open(`mailto:?subject=Join me on ClickerPlus&body=${encodeURIComponent(message)}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
        break;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Star className="w-4 h-4" />;
      case 'inactive': return <Users className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Share & Earn Rewards
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Invite friends to ClickerPlus and earn up to 30% commission on their purchases
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold">{mockStats.totalReferrals}</div>
                  <div className="text-sm opacity-80">Total Referrals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">${mockStats.totalEarnings}</div>
                  <div className="text-sm opacity-80">Total Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{mockStats.conversionRate}%</div>
                  <div className="text-sm opacity-80">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{mockStats.rank}</div>
                  <div className="text-sm opacity-80">Current Rank</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="share">Share & Invite</TabsTrigger>
              <TabsTrigger value="referrals">My Referrals</TabsTrigger>
              <TabsTrigger value="program">Program Details</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Earnings Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                        <p className="text-2xl font-bold text-gray-900">${mockStats.totalEarnings}</p>
                        <p className="text-sm text-green-600">+${mockStats.thisMonthEarnings} this month</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Pending Earnings</p>
                        <p className="text-2xl font-bold text-gray-900">${mockStats.pendingEarnings}</p>
                        <p className="text-sm text-gray-500">Will be paid on 1st</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-yellow-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Referrals</p>
                        <p className="text-2xl font-bold text-gray-900">{mockStats.activeReferrals}</p>
                        <p className="text-sm text-gray-500">of {mockStats.totalReferrals} total</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Rank Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                    Your Rank: {mockStats.rank}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Progress to Platinum</span>
                      <span className="text-sm font-medium">{mockStats.nextRankProgress}%</span>
                    </div>
                    <Progress value={mockStats.nextRankProgress} className="w-full" />
                    <p className="text-sm text-gray-600">
                      Refer 6 more active users to reach Platinum rank and earn 25% commission
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: 'referral', message: 'John Smith upgraded to Pro plan', amount: '$15.00', time: '2 hours ago' },
                      { type: 'earning', message: 'Commission payment processed', amount: '$125.50', time: '1 day ago' },
                      { type: 'referral', message: 'New referral: Sarah Johnson joined', amount: '$10.00', time: '3 days ago' },
                      { type: 'milestone', message: 'Reached Gold rank!', amount: 'Bonus: $25.00', time: '1 week ago' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.type === 'earning' ? 'bg-green-500' : 
                            activity.type === 'milestone' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`} />
                          <div>
                            <p className="font-medium">{activity.message}</p>
                            <p className="text-sm text-gray-600">{activity.time}</p>
                          </div>
                        </div>
                        <span className="font-semibold text-green-600">{activity.amount}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Share & Invite Tab */}
            <TabsContent value="share" className="space-y-6">
              {/* Referral Code and Link */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Referral Code & Link</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Referral Code</label>
                    <div className="flex gap-2">
                      <Input value={referralCode} readOnly className="font-mono" />
                      <Button 
                        variant="outline" 
                        onClick={() => copyToClipboard(referralCode, 'code')}
                      >
                        {copiedCode ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copiedCode ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Referral Link</label>
                    <div className="flex gap-2">
                      <Input value={referralLink} readOnly className="font-mono text-sm" />
                      <Button 
                        variant="outline" 
                        onClick={() => copyToClipboard(referralLink, 'link')}
                      >
                        {copiedLink ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copiedLink ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Sharing */}
              <Card>
                <CardHeader>
                  <CardTitle>Share on Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <Button 
                      variant="outline" 
                      className="flex flex-col items-center gap-2 h-auto py-4"
                      onClick={() => shareToSocial('facebook')}
                    >
                      <Facebook className="w-6 h-6 text-blue-600" />
                      <span className="text-sm">Facebook</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex flex-col items-center gap-2 h-auto py-4"
                      onClick={() => shareToSocial('twitter')}
                    >
                      <Twitter className="w-6 h-6 text-blue-400" />
                      <span className="text-sm">Twitter</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex flex-col items-center gap-2 h-auto py-4"
                      onClick={() => shareToSocial('linkedin')}
                    >
                      <Linkedin className="w-6 h-6 text-blue-700" />
                      <span className="text-sm">LinkedIn</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex flex-col items-center gap-2 h-auto py-4"
                      onClick={() => shareToSocial('whatsapp')}
                    >
                      <MessageCircle className="w-6 h-6 text-green-600" />
                      <span className="text-sm">WhatsApp</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex flex-col items-center gap-2 h-auto py-4"
                      onClick={() => shareToSocial('email')}
                    >
                      <Mail className="w-6 h-6 text-gray-600" />
                      <span className="text-sm">Email</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Custom Message */}
              <Card>
                <CardHeader>
                  <CardTitle>Customize Your Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Personal Message (Optional)</label>
                    <textarea
                      className="w-full p-3 border rounded-lg resize-none"
                      rows={4}
                      placeholder="Add a personal message to make your invitation more compelling..."
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">{customMessage.length}/200 characters</p>
                  </div>
                  
                  <Alert>
                    <Gift className="w-4 h-4" />
                    <AlertDescription>
                      <strong>Pro tip:</strong> Personal messages have 3x higher conversion rates! 
                      Mention how ClickerPlus has helped you or what specific benefits your friends might enjoy.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* My Referrals Tab */}
            <TabsContent value="referrals" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Referrals ({mockReferrals.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Join Date</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Earnings</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockReferrals.map((referral) => (
                        <TableRow key={referral.id}>
                          <TableCell className="font-medium">{referral.name}</TableCell>
                          <TableCell>{referral.email}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(referral.status)}>
                              <span className="flex items-center gap-1">
                                {getStatusIcon(referral.status)}
                                {referral.status}
                              </span>
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(referral.joinDate).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{referral.tier}</Badge>
                          </TableCell>
                          <TableCell className="font-semibold text-green-600">
                            ${referral.earnings.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Program Details Tab */}
            <TabsContent value="program" className="space-y-6">
              {/* How It Works */}
              <Card>
                <CardHeader>
                  <CardTitle>How the Referral Program Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Share2 className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">1. Share Your Link</h3>
                      <p className="text-gray-600">Share your unique referral link with friends, family, or on social media.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">2. They Sign Up</h3>
                      <p className="text-gray-600">When someone signs up using your link, they become your referral.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-yellow-600" />
                      </div>
                      <h3 className="font-semibold mb-2">3. Earn Commission</h3>
                      <p className="text-gray-600">Earn commission on their purchases based on your rank tier.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Commission Tiers */}
              <Card>
                <CardHeader>
                  <CardTitle>Commission Tiers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tiers.map((tier, index) => (
                      <div key={tier.name} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Badge className={tier.color}>{tier.name}</Badge>
                          <div>
                            <p className="font-medium">{tier.commission} Commission</p>
                            <p className="text-sm text-gray-600">
                              {tier.minReferrals === 0 ? 'Starting tier' : `${tier.minReferrals}+ active referrals required`}
                            </p>
                          </div>
                        </div>
                        {mockStats.rank === tier.name && (
                          <Badge variant="secondary">Current Rank</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card>
                <CardHeader>
                  <CardTitle>Terms & Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>• Commission is paid monthly on the 1st of each month</p>
                    <p>• Minimum payout threshold is $50</p>
                    <p>• Referrals must be active users to count towards rank progression</p>
                    <p>• Self-referrals are not allowed and will result in account suspension</p>
                    <p>• Commission rates are based on your rank tier at the time of payment</p>
                    <p>• ClickerPlus reserves the right to modify the program terms with 30 days notice</p>
                    <p>• Fraudulent activity will result in immediate program termination</p>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Full Terms
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

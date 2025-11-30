import { useState } from 'react';
import { User, Bell, Lock, CreditCard, Globe, Palette, Eye, Shield, Download, Trash2, Save, Camera, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PublicHeader from "@/components/PublicHeader";

export default function Settings() {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate freelancer with 5+ years of experience in web development and design.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    timezone: 'America/Los_Angeles'
  });

  const [notifications, setNotifications] = useState({
    emailNewJobs: true,
    emailMessages: true,
    emailProposals: true,
    emailMarketing: false,
    pushNewJobs: true,
    pushMessages: true,
    pushProposals: true,
    smsImportant: false,
    weeklyDigest: true,
    monthlyReport: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    showOnlineStatus: true,
    searchEngineIndexing: true,
    dataProcessing: true
  });

  const [preferences, setPreferences] = useState({
    language: 'en',
    currency: 'USD',
    theme: 'light',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    emailFrequency: 'immediate'
  });

  const [security, setSecurity] = useState({
    twoFactorEnabled: false,
    loginAlerts: true,
    sessionTimeout: '30m',
    apiKeyVisible: false
  });

  const handleProfileUpdate = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationToggle = (setting: string) => {
    setNotifications(prev => ({ ...prev, [setting]: !prev[setting as keyof typeof prev] }));
  };

  const handlePrivacyToggle = (setting: string) => {
    setPrivacy(prev => ({ ...prev, [setting]: !prev[setting as keyof typeof prev] }));
  };

  const handlePreferenceChange = (setting: string, value: string) => {
    setPreferences(prev => ({ ...prev, [setting]: value }));
  };

  const handleSecurityToggle = (setting: string) => {
    setSecurity(prev => ({ ...prev, [setting]: !prev[setting as keyof typeof prev] }));
  };

  const exportData = () => {
    const data = {
      profile,
      notifications,
      privacy,
      preferences,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'account-data.json';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
            <p className="text-gray-600">Manage your account settings, preferences, and profile information</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="preferences" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Preferences
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Billing
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar Section */}
                  <div className="flex items-center gap-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/placeholder-avatar.jpg" />
                      <AvatarFallback className="text-2xl">{profile.firstName[0]}{profile.lastName[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" className="mb-2">
                        <Camera className="w-4 h-4 mr-2" />
                        Change Photo
                      </Button>
                      <p className="text-sm text-gray-600">JPG, PNG or GIF. Max size 5MB.</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={profile.firstName}
                        onChange={(e) => handleProfileUpdate('firstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={profile.lastName}
                        onChange={(e) => handleProfileUpdate('lastName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => handleProfileUpdate('email', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="location"
                          value={profile.location}
                          onChange={(e) => handleProfileUpdate('location', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select value={profile.timezone} onValueChange={(value) => handleProfileUpdate('timezone', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                          <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                          <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                          <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                          <SelectItem value="Europe/London">London (GMT)</SelectItem>
                          <SelectItem value="Europe/Paris">Paris (CET)</SelectItem>
                          <SelectItem value="Asia/Tokyo">Tokyo (JST)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => handleProfileUpdate('bio', e.target.value)}
                      placeholder="Tell us about yourself..."
                      className="min-h-[100px]"
                    />
                    <p className="text-sm text-gray-500 mt-1">{profile.bio.length}/500 characters</p>
                  </div>

                  {/* Social Links */}
                  <div>
                    <Label className="text-base font-medium mb-4 block">Social Links</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={profile.website}
                          onChange={(e) => handleProfileUpdate('website', e.target.value)}
                          placeholder="https://your-website.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={profile.linkedin}
                          onChange={(e) => handleProfileUpdate('linkedin', e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      <div>
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                          id="github"
                          value={profile.github}
                          onChange={(e) => handleProfileUpdate('github', e.target.value)}
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { key: 'emailNewJobs', label: 'New job matches', description: 'Get notified when new jobs match your preferences' },
                    { key: 'emailMessages', label: 'Messages', description: 'Receive notifications for new messages' },
                    { key: 'emailProposals', label: 'Proposal updates', description: 'Updates on your job proposals and applications' },
                    { key: 'emailMarketing', label: 'Marketing emails', description: 'Tips, feature updates, and promotional content' },
                    { key: 'weeklyDigest', label: 'Weekly digest', description: 'Weekly summary of your activity and new opportunities' },
                    { key: 'monthlyReport', label: 'Monthly report', description: 'Monthly performance and earnings report' }
                  ].map(({ key, label, description }) => (
                    <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                      <Switch
                        checked={notifications[key as keyof typeof notifications]}
                        onCheckedChange={() => handleNotificationToggle(key)}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Push Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { key: 'pushNewJobs', label: 'New job alerts', description: 'Push notifications for job matches' },
                    { key: 'pushMessages', label: 'New messages', description: 'Instant notifications for messages' },
                    { key: 'pushProposals', label: 'Proposal updates', description: 'Real-time proposal status updates' }
                  ].map(({ key, label, description }) => (
                    <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                      <Switch
                        checked={notifications[key as keyof typeof notifications]}
                        onCheckedChange={() => handleNotificationToggle(key)}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SMS Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Important updates only</p>
                      <p className="text-sm text-gray-600">Critical account and security notifications</p>
                    </div>
                    <Switch
                      checked={notifications.smsImportant}
                      onCheckedChange={() => handleNotificationToggle('smsImportant')}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Visibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Profile visibility</Label>
                    <Select value={privacy.profileVisibility} onValueChange={(value) => setPrivacy(prev => ({ ...prev, profileVisibility: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public - Visible to everyone</SelectItem>
                        <SelectItem value="clients">Clients only - Visible to potential clients</SelectItem>
                        <SelectItem value="private">Private - Only visible to you</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {[
                    { key: 'showEmail', label: 'Show email address', description: 'Display your email on your public profile' },
                    { key: 'showPhone', label: 'Show phone number', description: 'Display your phone number on your profile' },
                    { key: 'showOnlineStatus', label: 'Show online status', description: 'Let others see when you\'re online' },
                    { key: 'searchEngineIndexing', label: 'Search engine indexing', description: 'Allow search engines to index your profile' }
                  ].map(({ key, label, description }) => (
                    <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                      <Switch
                        checked={privacy[key as keyof typeof privacy]}
                        onCheckedChange={() => handlePrivacyToggle(key)}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data & Privacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Data processing consent</p>
                      <p className="text-sm text-gray-600">Allow us to process your data to improve our services</p>
                    </div>
                    <Switch
                      checked={privacy.dataProcessing}
                      onCheckedChange={() => handlePrivacyToggle('dataProcessing')}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" onClick={exportData}>
                      <Download className="w-4 h-4 mr-2" />
                      Download My Data
                    </Button>
                    <Button variant="destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Password & Authentication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Current Password</Label>
                    <Input type="password" placeholder="Enter current password" className="mt-2" />
                  </div>
                  <div>
                    <Label>New Password</Label>
                    <Input type="password" placeholder="Enter new password" className="mt-2" />
                  </div>
                  <div>
                    <Label>Confirm New Password</Label>
                    <Input type="password" placeholder="Confirm new password" className="mt-2" />
                  </div>
                  <Button>Change Password</Button>

                  <Separator />

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {security.twoFactorEnabled && <Badge variant="secondary">Enabled</Badge>}
                      <Switch
                        checked={security.twoFactorEnabled}
                        onCheckedChange={() => handleSecurityToggle('twoFactorEnabled')}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Login alerts</p>
                      <p className="text-sm text-gray-600">Get notified of new login attempts</p>
                    </div>
                    <Switch
                      checked={security.loginAlerts}
                      onCheckedChange={() => handleSecurityToggle('loginAlerts')}
                    />
                  </div>

                  <div>
                    <Label>Session timeout</Label>
                    <Select value={security.sessionTimeout} onValueChange={(value) => setSecurity(prev => ({ ...prev, sessionTimeout: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15m">15 minutes</SelectItem>
                        <SelectItem value="30m">30 minutes</SelectItem>
                        <SelectItem value="1h">1 hour</SelectItem>
                        <SelectItem value="4h">4 hours</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>API Key</Label>
                    <div className="flex gap-2 mt-2">
                      <Input 
                        type={security.apiKeyVisible ? 'text' : 'password'}
                        value="sk-1234567890abcdef1234567890abcdef"
                        readOnly
                      />
                      <Button 
                        variant="outline" 
                        onClick={() => setSecurity(prev => ({ ...prev, apiKeyVisible: !prev.apiKeyVisible }))}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline">Regenerate</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Localization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Language</Label>
                      <Select value={preferences.language} onValueChange={(value) => handlePreferenceChange('language', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                          <SelectItem value="zh">中文</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Currency</Label>
                      <Select value={preferences.currency} onValueChange={(value) => handlePreferenceChange('currency', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD ($)</SelectItem>
                          <SelectItem value="EUR">EUR (€)</SelectItem>
                          <SelectItem value="GBP">GBP (£)</SelectItem>
                          <SelectItem value="CAD">CAD (C$)</SelectItem>
                          <SelectItem value="AUD">AUD (A$)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Date format</Label>
                      <Select value={preferences.dateFormat} onValueChange={(value) => handlePreferenceChange('dateFormat', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                          <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                          <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Time format</Label>
                      <Select value={preferences.timeFormat} onValueChange={(value) => handlePreferenceChange('timeFormat', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12h">12-hour</SelectItem>
                          <SelectItem value="24h">24-hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Theme</Label>
                    <Select value={preferences.theme} onValueChange={(value) => handlePreferenceChange('theme', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-8 h-8 text-gray-400" />
                        <div>
                          <p className="font-medium">•��•• •••• •••• 4242</p>
                          <p className="text-sm text-gray-600">Expires 12/25</p>
                        </div>
                        <Badge>Default</Badge>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                  <Button variant="outline">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { date: '2024-01-15', description: 'Pro Plan - Monthly', amount: '$29.99', status: 'Paid' },
                      { date: '2023-12-15', description: 'Pro Plan - Monthly', amount: '$29.99', status: 'Paid' },
                      { date: '2023-11-15', description: 'Pro Plan - Monthly', amount: '$29.99', status: 'Paid' }
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{invoice.description}</p>
                          <p className="text-sm text-gray-600">{invoice.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{invoice.amount}</p>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {invoice.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
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

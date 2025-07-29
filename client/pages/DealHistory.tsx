import { useState, useMemo } from 'react';
import { Search, Filter, Calendar, DollarSign, Package, Download, Eye, Star, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { PublicHeader } from "@/components/PublicHeader";

interface Deal {
  id: string;
  title: string;
  seller: string;
  buyer: string;
  amount: number;
  status: 'completed' | 'in-progress' | 'cancelled' | 'disputed' | 'pending';
  category: string;
  orderDate: string;
  completionDate?: string;
  rating?: number;
  review?: string;
  deliveryTime: number; // in days
  files?: string[];
  description: string;
}

const mockDeals: Deal[] = [
  {
    id: 'DH001',
    title: 'Premium Logo Design Package',
    seller: 'DesignMaster Pro',
    buyer: 'TechStartup LLC',
    amount: 299.99,
    status: 'completed',
    category: 'Design',
    orderDate: '2024-01-10',
    completionDate: '2024-01-15',
    rating: 5,
    review: 'Excellent work! Delivered exactly what we needed.',
    deliveryTime: 5,
    files: ['logo-final.ai', 'logo-variations.zip', 'brand-guidelines.pdf'],
    description: 'Complete logo design package with multiple variations and brand guidelines.'
  },
  {
    id: 'DH002',
    title: 'WordPress Website Development',
    seller: 'WebDev Solutions',
    buyer: 'Local Restaurant',
    amount: 1499.99,
    status: 'in-progress',
    category: 'Web Development',
    orderDate: '2024-01-08',
    deliveryTime: 14,
    description: 'Full WordPress website with custom theme, booking system, and menu management.'
  },
  {
    id: 'DH003',
    title: 'Social Media Marketing Strategy',
    seller: 'MarketingGuru',
    buyer: 'Fashion Brand X',
    amount: 899.99,
    status: 'completed',
    category: 'Marketing',
    orderDate: '2024-01-05',
    completionDate: '2024-01-12',
    rating: 4,
    review: 'Good strategy but communication could be better.',
    deliveryTime: 7,
    files: ['marketing-strategy.pdf', 'content-calendar.xlsx'],
    description: 'Comprehensive social media marketing strategy with content calendar and growth plan.'
  },
  {
    id: 'DH004',
    title: 'Mobile App UI/UX Design',
    seller: 'UXDesignStudio',
    buyer: 'FinTech Startup',
    amount: 2199.99,
    status: 'disputed',
    category: 'Design',
    orderDate: '2024-01-01',
    deliveryTime: 21,
    description: 'Complete mobile app UI/UX design for financial technology application.'
  },
  {
    id: 'DH005',
    title: 'Content Writing - Blog Articles',
    seller: 'ContentWriter Pro',
    buyer: 'Health & Wellness Blog',
    amount: 199.99,
    status: 'cancelled',
    category: 'Writing',
    orderDate: '2023-12-28',
    deliveryTime: 3,
    description: '10 high-quality blog articles on health and wellness topics.'
  },
  {
    id: 'DH006',
    title: 'E-commerce Store Setup',
    seller: 'EcommercePro',
    buyer: 'Online Retailer',
    amount: 999.99,
    status: 'pending',
    category: 'Web Development',
    orderDate: '2024-01-12',
    deliveryTime: 10,
    description: 'Complete e-commerce store setup with payment integration and inventory management.'
  }
];

const getStatusColor = (status: Deal['status']) => {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-800';
    case 'in-progress': return 'bg-blue-100 text-blue-800';
    case 'cancelled': return 'bg-red-100 text-red-800';
    case 'disputed': return 'bg-orange-100 text-orange-800';
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: Deal['status']) => {
  switch (status) {
    case 'completed': return <CheckCircle className="w-4 h-4" />;
    case 'in-progress': return <Clock className="w-4 h-4" />;
    case 'cancelled': return <XCircle className="w-4 h-4" />;
    case 'disputed': return <AlertCircle className="w-4 h-4" />;
    case 'pending': return <Clock className="w-4 h-4" />;
    default: return <Clock className="w-4 h-4" />;
  }
};

export default function DealHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const filteredDeals = useMemo(() => {
    return mockDeals.filter(deal => {
      const matchesSearch = deal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           deal.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           deal.buyer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = !statusFilter || deal.status === statusFilter;
      const matchesCategory = !categoryFilter || deal.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchTerm, statusFilter, categoryFilter]);

  const sortedDeals = useMemo(() => {
    const sorted = [...filteredDeals];
    switch (sortBy) {
      case 'oldest':
        return sorted.sort((a, b) => new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime());
      case 'amount-high':
        return sorted.sort((a, b) => b.amount - a.amount);
      case 'amount-low':
        return sorted.sort((a, b) => a.amount - b.amount);
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default: // newest
        return sorted.sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime());
    }
  }, [filteredDeals, sortBy]);

  const stats = useMemo(() => {
    const completed = mockDeals.filter(deal => deal.status === 'completed');
    const totalEarnings = completed.reduce((sum, deal) => sum + deal.amount, 0);
    const avgRating = completed.reduce((sum, deal) => sum + (deal.rating || 0), 0) / completed.length || 0;
    
    return {
      totalDeals: mockDeals.length,
      completedDeals: completed.length,
      totalEarnings,
      avgRating: Math.round(avgRating * 10) / 10,
      inProgress: mockDeals.filter(deal => deal.status === 'in-progress').length,
      disputed: mockDeals.filter(deal => deal.status === 'disputed').length
    };
  }, []);

  const categories = [...new Set(mockDeals.map(deal => deal.category))];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const exportData = () => {
    const csvContent = [
      ['ID', 'Title', 'Seller', 'Buyer', 'Amount', 'Status', 'Category', 'Order Date', 'Completion Date', 'Rating'].join(','),
      ...sortedDeals.map(deal => [
        deal.id,
        `"${deal.title}"`,
        `"${deal.seller}"`,
        `"${deal.buyer}"`,
        deal.amount,
        deal.status,
        deal.category,
        deal.orderDate,
        deal.completionDate || '',
        deal.rating || ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'deal-history.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Deal History</h1>
            <p className="text-gray-600">Track your deal transactions and completed projects</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Deals</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalDeals}</p>
                  </div>
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                    <p className="text-2xl font-bold text-gray-900">${stats.totalEarnings.toLocaleString()}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.completedDeals}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.avgRating}</p>
                  </div>
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search deals, sellers, or buyers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Status</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                      <SelectItem value="disputed">Disputed</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="amount-high">Highest Amount</SelectItem>
                      <SelectItem value="amount-low">Lowest Amount</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" onClick={exportData}>
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deals Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Deal Transactions ({sortedDeals.length})</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {sortedDeals.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No deals found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Deal ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Seller/Buyer</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Order Date</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedDeals.map((deal) => (
                        <TableRow key={deal.id}>
                          <TableCell className="font-medium">{deal.id}</TableCell>
                          <TableCell>
                            <div>
                              <p className="font-medium">{deal.title}</p>
                              <p className="text-sm text-gray-600 truncate max-w-xs">{deal.description}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm">Seller: {deal.seller}</p>
                              <p className="text-sm text-gray-600">Buyer: {deal.buyer}</p>
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">${deal.amount.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(deal.status)}>
                              <span className="flex items-center gap-1">
                                {getStatusIcon(deal.status)}
                                {deal.status.replace('-', ' ')}
                              </span>
                            </Badge>
                          </TableCell>
                          <TableCell>{deal.category}</TableCell>
                          <TableCell>{formatDate(deal.orderDate)}</TableCell>
                          <TableCell>
                            {deal.rating ? (
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span>{deal.rating}</span>
                              </div>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              {deal.files && (
                                <Button variant="ghost" size="sm">
                                  <Download className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

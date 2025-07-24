import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function MyDealOrder() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-brand-green text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">GigClickers</div>
            <nav className="hidden md:flex space-x-6">
              <a href="/my-post" className="hover:text-green-200">My Post</a>
              <a href="/my-work" className="hover:text-green-200">My Work</a>
              <a href="/browse-deals" className="hover:text-green-200">Browse Deal</a>
              <a href="/deal-history" className="hover:text-green-200">Deal History</a>
              <a href="/deposit" className="hover:text-green-200">Deposit</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">📧</span>
            <span className="text-sm">🔔</span>
            <span className="text-sm">👤</span>
            <Button className="bg-green-600 hover:bg-green-700">POST JOB</Button>
          </div>
        </div>
      </header>

      {/* Balance Bar */}
      <div className="bg-green-100 py-2 px-6">
        <div className="max-w-6xl mx-auto flex justify-between text-sm">
          <span>Deal balance: <span className="text-green-600 font-semibold">$</span></span>
          <span>Deposit: <span className="text-green-600 font-semibold">-$1.909</span></span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        <div className="space-y-6">
          {/* Page Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">My Deal Order</h1>
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <span className="text-sm text-gray-600">0 Result</span>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">SL</TableHead>
                  <TableHead className="font-semibold">Service</TableHead>
                  <TableHead className="font-semibold">Category</TableHead>
                  <TableHead className="font-semibold">Price</TableHead>
                  <TableHead className="font-semibold">Seller</TableHead>
                  <TableHead className="font-semibold">Delivery Time</TableHead>
                  <TableHead className="font-semibold">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Empty state - no orders */}
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-12 text-gray-500">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-4xl">📦</div>
                      <p>No orders found</p>
                      <p className="text-sm">Your deal orders will appear here when you place them.</p>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button asChild>
              <a href="/browse-deals">Browse Deals</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/deal-history">View Deal History</a>
            </Button>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">How to Place an Order</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Browse available deals in the marketplace</li>
                <li>• Contact the seller for requirements</li>
                <li>• Place your order with clear instructions</li>
                <li>• Track your order progress here</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Order Management</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Monitor delivery status</li>
                <li>• Communicate with sellers</li>
                <li>• Approve completed deliveries</li>
                <li>• Leave reviews and feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-100 py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-brand-green">GigClickers</div>
            </div>
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">About GigClickers</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><a href="/about" className="hover:text-brand-green">About Us</a></li>
                  <li><a href="/privacy" className="hover:text-brand-green">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-brand-green">Terms & Conditions</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Agreement</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><a href="/microjob-marketplace" className="hover:text-brand-green">Microjob Marketplace</a></li>
                  <li><a href="/deal-marketplace" className="hover:text-brand-green">Deal Marketplace</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Social Media</h4>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-xs">f</div>
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs">in</div>
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">yt</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-green-200 text-center text-sm text-gray-600">
            © 2025 gigclickers.com. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

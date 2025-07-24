import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header for placeholder pages */}
      <header className="bg-brand-green text-white py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-2xl font-bold hover:text-green-100">
            Giglancers
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-text-dark mb-6">{title}</h1>
          <p className="text-gray-600 mb-8">
            {description ||
              "This page is coming soon. Continue prompting to fill in this page content if you'd like it implemented."}
          </p>
          <Link
            to="/"
            className="inline-block bg-brand-green text-white px-6 py-3 rounded hover:bg-green-600 transition-colors"
          >
            Back to Job Listings
          </Link>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-brand-green text-white py-4 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; GigClickers - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-text-dark">
            ClickerPlus
          </Link>

          <Navigation />

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-brand-green text-brand-green rounded hover:bg-brand-green hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-brand-green text-white rounded hover:bg-green-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

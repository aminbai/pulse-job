import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  email: string;
  name: string;
  userType: "freelancer" | "buyer" | "admin" | "both";
  role: "freelancer" | "buyer" | "admin" | "both";
  isEmailVerified: boolean;
  profilePicture?: string;
  level?: string;
  rating?: number;
  completedJobs?: number;
  totalEarnings?: number;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
    rememberMe?: boolean,
  ) => Promise<void>;
  logout: () => void;
  signup: (userData: any) => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    setIsLoading(true);
    try {
      // Check if user is logged in (from localStorage or API)
      const savedUser = localStorage.getItem("user");
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      const userEmail = localStorage.getItem("userEmail");
      const userType = localStorage.getItem("userType");
      const userName = localStorage.getItem("userName");

      if (isLoggedIn && (savedUser || userEmail)) {
        let userData;

        if (savedUser) {
          userData = JSON.parse(savedUser);
        } else {
          // Create user object from localStorage data
          userData = {
            id: "demo-" + Date.now(),
            email: userEmail,
            name: userName || "Demo User",
            userType: userType || "freelancer",
            role: userType || "freelancer",
            isEmailVerified: true,
            level: "Expert",
            rating: 4.8,
            completedJobs: 45,
            totalEarnings: 12500,
          };
        }

        setUser(userData);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (
    email: string,
    password: string,
    rememberMe: boolean = false,
  ) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Demo accounts mapping
      const demoAccounts = {
        "admin@clickerplus.com": {
          id: "admin-1",
          name: "System Administrator",
          userType: "admin" as const,
          role: "admin" as const,
          level: "Super Admin",
          rating: 5.0,
          completedJobs: 0,
          totalEarnings: 0,
        },
        "freelancer@clickerplus.com": {
          id: "freelancer-1",
          name: "John Smith (Expert)",
          userType: "freelancer" as const,
          role: "freelancer" as const,
          level: "Expert",
          rating: 4.8,
          completedJobs: 45,
          totalEarnings: 12500,
        },
        "buyer@clickerplus.com": {
          id: "buyer-1",
          name: "TechCorp Solutions",
          userType: "buyer" as const,
          role: "buyer" as const,
          level: "Business",
          rating: 4.6,
          completedJobs: 0,
          totalEarnings: 0,
        },
        "user@clickerplus.com": {
          id: "both-1",
          name: "Sarah Johnson",
          userType: "both" as const,
          role: "both" as const,
          level: "Experienced",
          rating: 4.7,
          completedJobs: 23,
          totalEarnings: 8900,
        },
      };

      // Get demo account data or create default
      const accountData = demoAccounts[email as keyof typeof demoAccounts] || {
        id: "user-1",
        name: "Demo User",
        userType: "freelancer" as const,
        role: "freelancer" as const,
        level: "Beginner",
        rating: 4.0,
        completedJobs: 0,
        totalEarnings: 0,
      };

      const mockUser: User = {
        ...accountData,
        email: email,
        isEmailVerified: true,
      };

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userType", mockUser.userType);
      localStorage.setItem("userName", mockUser.name);
      localStorage.setItem("userRole", mockUser.role);
      localStorage.setItem("rememberMe", rememberMe.toString());

      setUser(mockUser);
      setIsAuthenticated(true);
    } catch (error) {
      throw new Error("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: any) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock signup process
      console.log("Signing up user:", userData);

      // In a real app, the user would need to verify their email first
      // For demo purposes, we'll just show a success message
    } catch (error) {
      throw new Error("Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userType");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("rememberMe");

    // Reset state
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    signup,
    updateUser,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthContext;

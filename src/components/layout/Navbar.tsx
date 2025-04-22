
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-night-dark border-b border-cyber/10 px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-cyber" />
          <span className="font-bold text-xl text-white">CyberSensei</span>
        </Link>

        <div className="hidden md:flex space-x-6 text-gray-300">
          <Link to="/" className="hover:text-cyber transition-colors">
            Home
          </Link>
          <Link to="/attacks" className="hover:text-cyber transition-colors">
            Attack Vectors
          </Link>
          <Link to="/analyzer" className="hover:text-cyber transition-colors">
            Security Analyzer
          </Link>
          <Link to="/resources" className="hover:text-cyber transition-colors">
            Resources
          </Link>
        </div>

        <Button className="bg-cyber hover:bg-cyber-light text-white">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

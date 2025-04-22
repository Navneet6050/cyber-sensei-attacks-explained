
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-night-dark text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-cyber" />
              <span className="font-bold text-xl text-white">CyberSensei</span>
            </div>
            <p className="text-sm">
              Educating users on operating system security and common attack vectors
              to build a more secure digital world.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-cyber transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/attacks" className="hover:text-cyber transition-colors">Attack Vectors</Link>
              </li>
              <li>
                <Link to="/analyzer" className="hover:text-cyber transition-colors">Security Analyzer</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-cyber transition-colors">Resources</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Disclaimer</h3>
            <p className="text-sm">
              This website is for educational purposes only. The information provided
              is intended to help understand security concepts, not to enable malicious activities.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} CyberSensei. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

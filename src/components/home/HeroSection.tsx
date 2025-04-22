
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <div className="relative overflow-hidden bg-night-dark py-16 md:py-24">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#05d9e830,transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ff2a6d20,transparent_30%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-10 w-10 text-cyber" />
            <span className="text-cyber text-2xl font-bold">CyberSensei</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mb-6">
            Understanding <span className="text-cyber">OS Security</span> and 
            <span className="text-danger"> Attack Vectors</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mb-10">
            Explore the world of operating system security, understand common vulnerabilities, 
            and learn how to protect your systems from sophisticated attacks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate("/attacks")}
              size="lg" 
              className="bg-cyber hover:bg-cyber-light text-white font-semibold px-8"
            >
              Explore Attack Vectors
            </Button>
            <Button 
              onClick={() => navigate("/analyzer")}
              size="lg"
              variant="outline" 
              className="border-cyber text-cyber hover:bg-cyber/10"
            >
              Try Security Analyzer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

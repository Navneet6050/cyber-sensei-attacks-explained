
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/ui/section-heading";
import { Shield, AlertTriangle, Info, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SecurityAnalyzer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<null | {
    analysisType: string;
    riskLevel: "low" | "medium" | "high" | "critical";
    description: string;
    recommendations: string[];
  }>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const analyzeInput = () => {
    if (!input.trim()) return;

    setIsLoading(true);

    // Simulate analysis delay
    setTimeout(() => {
      const inputLower = input.toLowerCase();
      
      // Simple pattern matching for different security scenarios
      let analysisResult;
      
      if (inputLower.includes("password") || inputLower.includes("credentials") || inputLower.includes("login")) {
        analysisResult = {
          analysisType: "Authentication Security",
          riskLevel: "high" as const,
          description: "Insecure password practices or credential handling detected. Authentication systems are critical security components that verify user identities before granting access to systems.",
          recommendations: [
            "Implement multi-factor authentication",
            "Use strong password policies (minimum length, complexity requirements)",
            "Store passwords using strong, salted hashing algorithms",
            "Implement account lockout after failed attempts",
            "Regularly audit authentication logs"
          ]
        };
      } else if (
        inputLower.includes("buffer") || 
        inputLower.includes("overflow") || 
        inputLower.includes("memory leak") || 
        inputLower.includes("stack")
      ) {
        analysisResult = {
          analysisType: "Memory Vulnerability",
          riskLevel: "critical" as const,
          description: "Potential memory corruption or buffer overflow vulnerability detected. These vulnerabilities occur when a program writes data beyond allocated memory boundaries.",
          recommendations: [
            "Implement bounds checking on all buffer operations",
            "Use memory-safe languages or frameworks",
            "Enable Address Space Layout Randomization (ASLR)",
            "Use Data Execution Prevention (DEP)",
            "Perform regular code audits focusing on memory management"
          ]
        };
      } else if (
        inputLower.includes("privilege") || 
        inputLower.includes("escalation") || 
        inputLower.includes("root") || 
        inputLower.includes("admin") ||
        inputLower.includes("sudo")
      ) {
        analysisResult = {
          analysisType: "Privilege Escalation Risk",
          riskLevel: "critical" as const,
          description: "Potential privilege escalation vulnerability detected. This occurs when users gain higher-level access than intended, potentially leading to complete system compromise.",
          recommendations: [
            "Follow the principle of least privilege",
            "Regularly audit user permissions",
            "Keep the OS and applications updated with security patches",
            "Implement robust access control mechanisms",
            "Use mandatory access control systems like SELinux or AppArmor"
          ]
        };
      } else if (
        inputLower.includes("malware") || 
        inputLower.includes("virus") || 
        inputLower.includes("ransomware") || 
        inputLower.includes("trojan")
      ) {
        analysisResult = {
          analysisType: "Malware Threat",
          riskLevel: "high" as const,
          description: "Potential malware infection or vulnerability. Malicious software can compromise system integrity, steal data, or encrypt files for ransom.",
          recommendations: [
            "Deploy comprehensive anti-malware solutions",
            "Implement application whitelisting",
            "Regularly update and patch all software",
            "Create and maintain system backups",
            "Educate users about malware delivery methods"
          ]
        };
      } else if (
        inputLower.includes("network") || 
        inputLower.includes("firewall") || 
        inputLower.includes("port") || 
        inputLower.includes("traffic")
      ) {
        analysisResult = {
          analysisType: "Network Security",
          riskLevel: "medium" as const,
          description: "Network security configuration or vulnerability detected. Proper network security prevents unauthorized access and protects data in transit.",
          recommendations: [
            "Configure firewalls to use a default-deny stance",
            "Implement network segmentation",
            "Use encrypted protocols for data transmission",
            "Regularly monitor network traffic for anomalies",
            "Conduct periodic network vulnerability assessments"
          ]
        };
      } else {
        analysisResult = {
          analysisType: "General Security Assessment",
          riskLevel: "low" as const,
          description: "General OS security assessment. All operating systems require baseline security measures to protect against common threats.",
          recommendations: [
            "Keep your operating system and applications updated",
            "Use strong authentication methods",
            "Implement the principle of least privilege",
            "Enable built-in security features like firewalls",
            "Regularly backup important data"
          ]
        };
      }
      
      setOutput(analysisResult);
      setIsLoading(false);
    }, 1000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-green-400";
      case "medium": return "text-warning";
      case "high": return "text-orange-500";
      case "critical": return "text-danger";
      default: return "text-white";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "low": return <Shield className="h-5 w-5 text-green-400" />;
      case "medium": return <Info className="h-5 w-5 text-warning" />;
      case "high": return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case "critical": return <AlertTriangle className="h-5 w-5 text-danger" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <section className="py-16 bg-night-dark">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Security Scenario Analyzer"
          subtitle="Describe a security scenario, configuration, or concern, and our analyzer will provide insights and recommendations."
        />
        
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="bg-night-light p-6 rounded-lg border border-cyber/10">
            <div className="mb-6">
              <label htmlFor="scenario" className="block text-white mb-2 font-medium">
                Describe your security scenario:
              </label>
              <Textarea
                id="scenario"
                placeholder="Example: I'm concerned about buffer overflow vulnerabilities in my custom C application..."
                value={input}
                onChange={handleInputChange}
                className="min-h-[120px] bg-night-dark border-cyber/20"
              />
            </div>
            
            <Button
              onClick={analyzeInput}
              disabled={input.trim() === "" || isLoading}
              className="bg-cyber hover:bg-cyber-light text-white"
            >
              {isLoading ? (
                <>Analyzing...</>
              ) : (
                <>
                  <Terminal className="mr-2 h-4 w-4" />
                  Analyze Security Scenario
                </>
              )}
            </Button>
          </div>
          
          {output && (
            <Card className="mt-8 overflow-hidden border-cyber/20">
              <div className="bg-night-light p-5 border-b border-cyber/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    {getRiskIcon(output.riskLevel)}
                    <span className="ml-2">{output.analysisType}</span>
                  </h3>
                  <span className={`font-semibold uppercase text-sm ${getRiskColor(output.riskLevel)}`}>
                    {output.riskLevel} risk
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-gray-300 mb-4">{output.description}</p>
                
                <h4 className="font-medium text-white mb-2">Recommendations:</h4>
                <ul className="space-y-2">
                  {output.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start">
                      <Shield className="h-5 w-5 text-cyber mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-300">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

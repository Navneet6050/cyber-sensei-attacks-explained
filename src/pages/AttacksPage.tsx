
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Bug, Server, DatabaseZap, LockOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AttacksPage = () => {
  const navigate = useNavigate();
  
  const attackVectors = [
    {
      id: "buffer-overflow",
      title: "Buffer Overflow",
      description: "A buffer overflow occurs when a program writes more data to a buffer than it can hold, causing adjacent memory to be overwritten. Attackers exploit this to inject malicious code into memory and potentially execute it with the privileges of the vulnerable program.",
      icon: <Bug className="h-10 w-10 text-danger" />,
      consequences: [
        "Remote code execution",
        "Privilege escalation",
        "System crashes",
        "Data corruption"
      ],
      protection: [
        "Use memory-safe languages",
        "Implement bounds checking",
        "Enable ASLR and DEP",
        "Use compiler protections like Stack Canaries"
      ]
    },
    {
      id: "privilege-escalation",
      title: "Privilege Escalation",
      description: "Privilege escalation vulnerabilities allow attackers to gain elevated access to resources that are normally protected. This can happen through exploiting OS vulnerabilities, misconfigurations, or design flaws that allow users to obtain higher privilege levels.",
      icon: <LockOpen className="h-10 w-10 text-danger" />,
      consequences: [
        "Complete system compromise",
        "Persistent unauthorized access",
        "Data theft",
        "Installation of rootkits"
      ],
      protection: [
        "Apply the principle of least privilege",
        "Regularly update and patch systems",
        "Implement robust access control",
        "Use mandatory access control systems"
      ]
    },
    {
      id: "rootkits",
      title: "Rootkits",
      description: "Rootkits are malicious software designed to provide continued privileged access to a computer while actively hiding its presence. They often modify core system files or the kernel itself to evade detection by standard security tools.",
      icon: <Server className="h-10 w-10 text-danger" />,
      consequences: [
        "Persistent unauthorized access",
        "Concealed malicious activities",
        "System monitoring and data theft",
        "Creation of backdoors"
      ],
      protection: [
        "Use secure boot mechanisms",
        "Implement kernel integrity monitoring",
        "Regularly scan for unauthorized system changes",
        "Use specialized rootkit detection tools"
      ]
    },
    {
      id: "sql-injection",
      title: "SQL Injection",
      description: "SQL injection attacks occur when malicious SQL statements are inserted into entry fields in a web application. If the OS and database security are improperly configured, these attacks can exfiltrate sensitive data or damage database integrity.",
      icon: <DatabaseZap className="h-10 w-10 text-danger" />,
      consequences: [
        "Data breach",
        "Database corruption",
        "Authentication bypass",
        "Remote code execution"
      ],
      protection: [
        "Use parameterized queries",
        "Implement proper input validation",
        "Apply the principle of least privilege to database accounts",
        "Regularly update database management systems"
      ]
    },
  ];

  return (
    <Layout>
      <div className="bg-night-dark py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Common OS Attack Vectors" 
            subtitle="Understanding these attack methods is crucial for implementing effective security measures and protecting your systems."
          />
          
          <div className="mt-12 space-y-12">
            {attackVectors.map((attack) => (
              <div 
                key={attack.id}
                id={attack.id} 
                className="bg-night-light border border-cyber/10 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-night-dark inline-block">
                      {attack.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{attack.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 mb-8">{attack.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                        <AlertTriangle className="h-5 w-5 text-danger mr-2" />
                        Potential Consequences
                      </h3>
                      <ul className="space-y-2">
                        {attack.consequences.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-danger mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                        <Shield className="h-5 w-5 text-cyber mr-2" />
                        Protection Strategies
                      </h3>
                      <ul className="space-y-2">
                        {attack.protection.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyber mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button
              onClick={() => navigate("/analyzer")}
              className="bg-cyber hover:bg-cyber-light text-white"
            >
              Try Our Security Analyzer
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AttacksPage;


import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShieldAlert, Bug, Database, Lock, User, ServerCog } from "lucide-react";

export default function AttackVectorsSection() {
  const navigate = useNavigate();
  
  const attacks = [
    {
      icon: <Bug className="w-10 h-10 mb-4 text-danger" />,
      title: "Buffer Overflow",
      description: "Occurs when a program writes data beyond the allocated memory buffer, potentially allowing attackers to execute arbitrary code.",
    },
    {
      icon: <Lock className="w-10 h-10 mb-4 text-danger" />,
      title: "Privilege Escalation",
      description: "A technique where an attacker exploits a bug or vulnerability to gain elevated access to resources normally protected from an application or user.",
    },
    {
      icon: <User className="w-10 h-10 mb-4 text-danger" />,
      title: "Social Engineering",
      description: "Manipulating users to divulge confidential information or perform actions that compromise security, such as revealing credentials.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-night-dark to-night-light">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Common Attack Vectors"
          subtitle="Cybercriminals use various methods to exploit vulnerabilities in operating systems. Here are some of the most common techniques."
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {attacks.map((attack, index) => (
            <div key={index} className="bg-night-dark p-8 rounded-lg border border-cyber/10 flex flex-col items-center text-center transition-all duration-300 hover:border-danger/30 hover:shadow-[0_0_20px_rgba(255,42,109,0.15)]">
              {attack.icon}
              <h3 className="text-xl font-bold mb-3 text-white">{attack.title}</h3>
              <p className="text-gray-400">{attack.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate("/attacks")} 
            className="bg-danger hover:bg-danger-dark text-white"
          >
            <ShieldAlert className="mr-2 h-4 w-4" />
            Explore All Attack Vectors
          </Button>
        </div>
      </div>
    </section>
  );
}

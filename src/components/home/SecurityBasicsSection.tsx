
import { SectionHeading } from "@/components/ui/section-heading";
import { CardHoverEffect } from "@/components/ui/card-hover-effect";
import { Shield, Lock, Database, Server, Bug, Terminal, Key } from "lucide-react";

export default function SecurityBasicsSection() {
  const securityItems = [
    {
      title: "OS Kernel Security",
      description: "The kernel is the core of the operating system, managing resources and providing an interface for applications. Its security is critical as vulnerabilities can lead to system-wide compromise.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Access Control",
      description: "Mechanisms that enforce policies for system resources, determining who can access what. Proper implementation prevents unauthorized access to critical components.",
      icon: <Lock className="h-8 w-8" />,
    },
    {
      title: "Memory Protection",
      description: "Techniques that control memory access, preventing processes from accessing memory allocated to other processes, which helps prevent buffer overflow attacks.",
      icon: <Terminal className="h-8 w-8" />,
    },
    {
      title: "Authentication Systems",
      description: "Processes that verify the identity of users or services before granting access, forming the first line of defense against unauthorized access.",
      icon: <Key className="h-8 w-8" />,
    },
    {
      title: "File System Security",
      description: "Methods used to control access to files and directories, ensuring data confidentiality and integrity through permissions and encryption.",
      icon: <Database className="h-8 w-8" />,
    },
    {
      title: "Network Security",
      description: "Protections built into the OS to secure network communications, including firewalls, protocol implementations, and intrusion detection.",
      icon: <Server className="h-8 w-8" />,
    },
  ];

  return (
    <section className="bg-night-dark py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="OS Security Fundamentals"
          subtitle="Understanding the core principles of operating system security is essential to protect against modern threats."
        />
        
        <CardHoverEffect items={securityItems} />
      </div>
    </section>
  );
}

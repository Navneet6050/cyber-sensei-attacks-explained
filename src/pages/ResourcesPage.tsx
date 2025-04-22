
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCode, BookOpen, Bookmark, Terminal } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ResourcesPage = () => {
  const resources = [
    {
      category: "Official Documentation",
      items: [
        {
          title: "Linux Security Documentation",
          description: "Official documentation on Linux kernel security features, user permissions, and system hardening.",
          link: "https://www.kernel.org/doc/html/latest/security/index.html",
        },
        {
          title: "Windows Security Guide",
          description: "Microsoft's comprehensive guide to securing Windows operating systems in various environments.",
          link: "https://learn.microsoft.com/en-us/windows/security/",
        },
        {
          title: "macOS Security Overview",
          description: "Apple's documentation on built-in security technologies and best practices for macOS.",
          link: "https://support.apple.com/guide/security/welcome/web",
        },
      ],
      icon: <BookOpen className="h-6 w-6 text-cyber" />,
    },
    {
      category: "Security Tools",
      items: [
        {
          title: "Vulnerability Scanners",
          description: "Tools that automate the detection of vulnerabilities in operating systems and applications.",
          link: "#",
        },
        {
          title: "Intrusion Detection Systems",
          description: "Software that monitors systems and networks for malicious activities or security policy violations.",
          link: "#",
        },
        {
          title: "Penetration Testing Frameworks",
          description: "Comprehensive toolkits for testing security vulnerabilities through simulated attacks.",
          link: "#",
        },
      ],
      icon: <Terminal className="h-6 w-6 text-cyber" />,
    },
    {
      category: "Learning Resources",
      items: [
        {
          title: "OWASP Top 10",
          description: "Standard awareness document for developers and web application security, representing the most critical security risks.",
          link: "#",
        },
        {
          title: "Security Certification Paths",
          description: "Information about professional certifications in cybersecurity and system hardening.",
          link: "#",
        },
        {
          title: "Cybersecurity Courses",
          description: "Online platforms offering free and paid courses on operating system security and attack mitigation.",
          link: "#",
        },
      ],
      icon: <FileCode className="h-6 w-6 text-cyber" />,
    },
  ];

  const handleAccessResource = (title: string, link: string) => {
    if (link === "#") {
      toast({
        title: "Resource Unavailable",
        description: `The resource "${title}" is currently being updated. Please check back later.`,
        variant: "destructive",
      });
    } else {
      // Open link in new tab
      window.open(link, "_blank", "noopener,noreferrer");
      
      // Also notify the user
      toast({
        title: "Resource Opened",
        description: `You're now viewing "${title}" in a new tab.`,
      });
    }
  };

  return (
    <Layout>
      <div className="bg-night-dark py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Security Resources"
            subtitle="Expand your knowledge with these curated resources to help you better understand and implement OS security measures."
          />

          <div className="mt-12 space-y-12">
            {resources.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <Card key={item.title} className="bg-night-light border-cyber/10 hover:border-cyber/30 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-white">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        <Button 
                          variant="outline" 
                          className="text-cyber border-cyber hover:bg-cyber/10"
                          onClick={() => handleAccessResource(item.title, item.link)}
                        >
                          <Bookmark className="mr-2 h-4 w-4" />
                          Access Resource
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-night-light p-6 rounded-lg border border-cyber/10">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Disclaimer on Educational Purpose
              </h3>
              <p className="text-gray-400">
                The information provided on this website is for educational purposes only. Understanding security vulnerabilities and attack vectors
                is essential for building robust defenses. We do not condone or encourage any malicious use of this information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourcesPage;

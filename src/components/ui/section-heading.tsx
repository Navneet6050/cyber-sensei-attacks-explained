
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({ 
  title, 
  subtitle, 
  align = "center" 
}: SectionHeadingProps) {
  return (
    <div className={`space-y-2 ${
      align === "center" ? "text-center" : 
      align === "right" ? "text-right" : "text-left"
    }`}>
      <h2 className="text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

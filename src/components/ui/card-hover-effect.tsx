
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardHoverEffectProps {
  items: {
    title: string;
    description: string;
    icon?: ReactNode;
  }[];
  className?: string;
}

export const CardHoverEffect = ({
  items,
  className,
}: CardHoverEffectProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`card-hover-${idx}`}
          className="group relative flex flex-col items-start p-6 bg-night-light shadow-md border border-cyber/10 hover:border-cyber rounded-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="min-h-[160px]">
            {item.icon && (
              <div className="text-cyber mb-4">{item.icon}</div>
            )}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

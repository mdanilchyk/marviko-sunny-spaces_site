import type { ReactNode } from "react";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  variant?: "fade-left" | "fade-right" | "blur" | "slide-up" | "scale";
}

const SectionHeader = ({ label, title, subtitle, action, variant = "fade-left" }: SectionHeaderProps) => (
  <AnimatedSection variant={variant}>
    <div className={`flex items-end justify-between gap-4 mb-10 ${action ? "" : "max-w-full"}`}>
      <div className="min-w-0">
        <SectionLabel>{label}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl text-display">{title}</h2>
        {subtitle && <p className="text-muted-foreground text-body mt-4 max-w-2xl">{subtitle}</p>}
      </div>
      {action && <div className="hidden sm:block shrink-0">{action}</div>}
    </div>
  </AnimatedSection>
);

export default SectionHeader;

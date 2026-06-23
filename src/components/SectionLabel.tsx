interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
  <div className="flex items-center gap-2 mb-3">
    <div className="w-6 h-0.5 bg-primary rounded-full" />
    <span className="text-sm font-semibold text-primary uppercase tracking-wide">{children}</span>
  </div>
);

export default SectionLabel;

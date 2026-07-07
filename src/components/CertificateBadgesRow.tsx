const CERTIFICATE_BADGES = ["ISO 9001", "СТБ 1108-2017", "С 2007 года"] as const;

interface CertificateBadgesRowProps {
  className?: string;
}

const CertificateBadgesRow = ({ className = "" }: CertificateBadgesRowProps) => (
  <div className={`flex flex-wrap gap-2 items-center ${className}`}>
    {CERTIFICATE_BADGES.map((badge) => (
      <span key={badge} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border text-muted-foreground">
        {badge}
      </span>
    ))}
  </div>
);

export default CertificateBadgesRow;

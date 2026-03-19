interface WindowDrawingProps {
  type: "single" | "double" | "triple" | "balcony";
  width?: number;
  height?: number;
  className?: string;
  dark?: boolean;
}

const WindowDrawing = ({ type, width = 200, height = 200, className, dark = false }: WindowDrawingProps) => {
  const strokeColor = dark ? "#4A4A4A" : "#FFFFFF";
  const fillColor = dark ? "rgba(100,100,100,0.08)" : "rgba(255,255,255,0.08)";
  const strokeWidth = 2.5;
  const pad = 12;

  const renderSingle = () => (
    <svg width={width} height={height} viewBox="0 0 120 140" className={className}>
      <rect x={pad} y={pad} width={120 - 2 * pad} height={140 - 2 * pad} rx="2" fill="none" stroke={strokeColor} strokeWidth={strokeWidth + 1} />
      <rect x={pad + 6} y={pad + 6} width={120 - 2 * pad - 12} height={140 - 2 * pad - 12} rx="1" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.7} />
      <line x1="85" y1="68" x2="85" y2="82" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );

  const renderDouble = () => (
    <svg width={width} height={height} viewBox="0 0 160 140" className={className}>
      <rect x={pad} y={pad} width={160 - 2 * pad} height={140 - 2 * pad} rx="2" fill="none" stroke={strokeColor} strokeWidth={strokeWidth + 1} />
      <rect x={pad + 6} y={pad + 6} width={(160 - 2 * pad - 12) / 2 - 3} height={140 - 2 * pad - 12} rx="1" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.7} />
      <rect x={pad + 6 + (160 - 2 * pad - 12) / 2 + 3} y={pad + 6} width={(160 - 2 * pad - 12) / 2 - 3} height={140 - 2 * pad - 12} rx="1" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.7} />
      <line x1="72" y1="68" x2="72" y2="82" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
      <line x1="88" y1="68" x2="88" y2="82" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );

  const renderTriple = () => (
    <svg width={width} height={height} viewBox="0 0 220 140" className={className}>
      <rect x={pad} y={pad} width={220 - 2 * pad} height={140 - 2 * pad} rx="2" fill="none" stroke={strokeColor} strokeWidth={strokeWidth + 1} />
      <rect x={pad + 6} y={pad + 6} width={(220 - 2 * pad - 12) / 3 - 4} height={140 - 2 * pad - 12} rx="1" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.7} />
      <rect x={pad + 6 + (220 - 2 * pad - 12) / 3} y={pad + 6} width={(220 - 2 * pad - 12) / 3 - 4} height={140 - 2 * pad - 12} rx="1" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.7} />
      <rect x={pad + 6 + 2 * (220 - 2 * pad - 12) / 3} y={pad + 6} width={(220 - 2 * pad - 12) / 3 - 4} height={140 - 2 * pad - 12} rx="1" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.7} />
      <line x1="70" y1="68" x2="70" y2="82" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
      <line x1="150" y1="68" x2="150" y2="82" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );

  const renderBalcony = () => (
    <svg width={width} height={height} viewBox="0 0 180 180" className={className}>
      <rect x={pad} y={pad} width={180 - 2 * pad} height={180 - 2 * pad} rx="2" fill="none" stroke={strokeColor} strokeWidth={strokeWidth + 1} />
      <rect x={pad + 6} y={pad + 6} width={(180 - 2 * pad - 12) / 2 - 3} height={(180 - 2 * pad - 12) * 0.55} rx="1" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.7} />
      <rect x={pad + 6 + (180 - 2 * pad - 12) / 2 + 3} y={pad + 6} width={(180 - 2 * pad - 12) / 2 - 3} height={(180 - 2 * pad - 12) * 0.55} rx="1" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.7} />
      <rect x={pad + 6} y={pad + 6 + (180 - 2 * pad - 12) * 0.55 + 6} width={(180 - 2 * pad - 12) / 2 - 3} height={(180 - 2 * pad - 12) * 0.45 - 6} rx="1" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.7} />
      <rect x={pad + 6 + (180 - 2 * pad - 12) / 2 + 3} y={pad + 6 + (180 - 2 * pad - 12) * 0.55 + 6} width={(180 - 2 * pad - 12) / 2 - 3} height={(180 - 2 * pad - 12) * 0.45 - 6} rx="1" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.7} />
      <line x1="90" y1="80" x2="90" y2="94" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );

  switch (type) {
    case "single": return renderSingle();
    case "double": return renderDouble();
    case "triple": return renderTriple();
    case "balcony": return renderBalcony();
  }
};

export default WindowDrawing;

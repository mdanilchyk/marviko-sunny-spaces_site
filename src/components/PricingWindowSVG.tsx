interface PricingWindowSVGProps {
  type: "single" | "double" | "triple" | "balcony";
}

const PricingWindowSVG = ({ type }: PricingWindowSVGProps) => {
  const VW = 220, VH = 180;

  const glassDef = (id: string) => (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#C5E8F7" />
        <stop offset="100%" stopColor="#EAF6FB" />
      </linearGradient>
      <filter id="outerShadow">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
      </filter>
    </defs>
  );

  const reveal = (x: number, y: number, w: number, h: number, depth: number = 8) => (
    <g>
      <polygon points={`${x},${y} ${x + w},${y} ${x + w - depth},${y + depth} ${x + depth},${y + depth}`} fill="#E8E6E3" />
      <polygon points={`${x + depth},${y + h - depth} ${x + w - depth},${y + h - depth} ${x + w},${y + h} ${x},${y + h}`} fill="#D5D2CE" />
      <polygon points={`${x},${y} ${x + depth},${y + depth} ${x + depth},${y + h - depth} ${x},${y + h}`} fill="#DDDAD6" />
      <polygon points={`${x + w - depth},${y + depth} ${x + w},${y} ${x + w},${y + h} ${x + w - depth},${y + h - depth}`} fill="#D0CCC8" />
    </g>
  );

  const hinges = (hx: number, hy: number, hh: number, count = 3) => {
    const items = [];
    const sp = hh / (count + 1);
    for (let i = 1; i <= count; i++) items.push(<rect key={i} x={hx} y={hy + sp * i - 3} width={3} height={6} fill="#C0C0C0" rx={0.5} />);
    return items;
  };
  const handle = (hx: number, cy: number) => <rect x={hx} y={cy - 6} width={3} height={12} fill="#B8B8B8" rx={0.5} />;
  const diags = (side: "left" | "right", sx: number, sy: number, sw: number, sh: number) => {
    if (side === "left") return <g opacity={0.5}><line x1={sx} y1={sy + sh} x2={sx + sw} y2={sy} stroke="#A0A0A0" strokeWidth={0.7} /><line x1={sx} y1={sy} x2={sx + sw} y2={sy + sh / 2} stroke="#A0A0A0" strokeWidth={0.7} /></g>;
    return <g opacity={0.5}><line x1={sx + sw} y1={sy + sh} x2={sx} y2={sy} stroke="#A0A0A0" strokeWidth={0.7} /><line x1={sx + sw} y1={sy} x2={sx} y2={sy + sh / 2} stroke="#A0A0A0" strokeWidth={0.7} /></g>;
  };

  const depth = 8;
  const frameColor = "#C8C5C0";

  if (type === "single") {
    const fw = 80, fh = 120;
    const fx = (VW - fw) / 2, fy = (VH - fh) / 2;
    const gx = fx + depth, gy = fy + depth, gw = fw - 2 * depth, gh = fh - 2 * depth;
    return (
      <svg width="180" height="160" viewBox={`0 0 ${VW} ${VH}`}>
        {glassDef("gs")}
        <rect x={fx} y={fy} width={fw} height={fh} rx={1} fill="white" stroke={frameColor} strokeWidth={1.5} filter="url(#outerShadow)" />
        {reveal(fx, fy, fw, fh, depth)}
        <rect x={gx} y={gy} width={gw} height={gh} fill="url(#gs)" stroke={frameColor} strokeWidth={0.8} />
        {hinges(gx + gw - 2, gy, gh, 3)}
        {handle(gx + 1, gy + gh / 2)}
        {diags("right", gx, gy, gw, gh)}
      </svg>
    );
  }

  if (type === "double") {
    const fw = 140, fh = 120;
    const fx = (VW - fw) / 2, fy = (VH - fh) / 2;
    const impW = 3;
    const gx = fx + depth, gy = fy + depth, totalGW = fw - 2 * depth, gh = fh - 2 * depth;
    const hw = (totalGW - impW) / 2;
    const rx = gx + hw + impW;
    return (
      <svg width="180" height="160" viewBox={`0 0 ${VW} ${VH}`}>
        {glassDef("gd")}
        <rect x={fx} y={fy} width={fw} height={fh} rx={1} fill="white" stroke={frameColor} strokeWidth={1.5} filter="url(#outerShadow)" />
        {reveal(fx, fy, fw, fh, depth)}
        <rect x={gx} y={gy} width={hw} height={gh} fill="url(#gd)" stroke={frameColor} strokeWidth={0.8} />
        <rect x={gx + hw} y={fy + depth} width={impW} height={gh} fill={frameColor} />
        <rect x={rx} y={gy} width={hw} height={gh} fill="url(#gd)" stroke={frameColor} strokeWidth={0.8} />
        {hinges(gx, gy, gh, 3)}
        {handle(gx + hw - 4, gy + gh / 2)}
        {diags("left", gx, gy, hw, gh)}
      </svg>
    );
  }

  if (type === "triple") {
    const fw = 190, fh = 120;
    const fx = (VW - fw) / 2, fy = (VH - fh) / 2;
    const impW = 3;
    const gx = fx + depth, gy = fy + depth, totalGW = fw - 2 * depth, gh = fh - 2 * depth;
    const thW = (totalGW - 2 * impW) / 3;
    const cx = gx + thW + impW, rx = gx + 2 * (thW + impW);
    return (
      <svg width="180" height="160" viewBox={`0 0 ${VW} ${VH}`}>
        {glassDef("gt")}
        <rect x={fx} y={fy} width={fw} height={fh} rx={1} fill="white" stroke={frameColor} strokeWidth={1.5} filter="url(#outerShadow)" />
        {reveal(fx, fy, fw, fh, depth)}
        <rect x={gx} y={gy} width={thW} height={gh} fill="url(#gt)" stroke={frameColor} strokeWidth={0.8} />
        <rect x={gx + thW} y={fy + depth} width={impW} height={gh} fill={frameColor} />
        <rect x={cx} y={gy} width={thW} height={gh} fill="url(#gt)" stroke={frameColor} strokeWidth={0.8} />
        <rect x={cx + thW} y={fy + depth} width={impW} height={gh} fill={frameColor} />
        <rect x={rx} y={gy} width={thW} height={gh} fill="url(#gt)" stroke={frameColor} strokeWidth={0.8} />
        {hinges(cx, gy, gh, 3)}
        {handle(cx + thW - 4, gy + gh / 2)}
        {diags("left", cx, gy, thW, gh)}
      </svg>
    );
  }

  // balcony
  const fw = 140, fh = 140;
  const fx = (VW - fw) / 2, fy = (VH - fh) / 2;
  const impW = 3, frmH = 3;
  const gx = fx + depth, gy = fy + depth, totalGW = fw - 2 * depth, gh = fh - 2 * depth;
  const doorW = Math.round(totalGW * 0.38);
  const winW = totalGW - doorW - impW;
  const dtH = Math.round(gh * 0.67 - frmH / 2);
  const dbH = gh - dtH - frmH;
  const wx = gx + doorW + impW;
  return (
    <svg width="180" height="160" viewBox={`0 0 ${VW} ${VH}`}>
      {glassDef("gb")}
      <rect x={fx} y={fy} width={fw} height={fh} rx={1} fill="white" stroke={frameColor} strokeWidth={1.5} filter="url(#outerShadow)" />
      {reveal(fx, fy, fw, fh, depth)}
      <rect x={gx} y={gy} width={doorW} height={dtH} fill="url(#gb)" stroke={frameColor} strokeWidth={0.8} />
      <rect x={gx} y={gy + dtH} width={doorW} height={frmH} fill={frameColor} />
      <rect x={gx} y={gy + dtH + frmH} width={doorW} height={dbH} fill="url(#gb)" stroke={frameColor} strokeWidth={0.8} />
      {hinges(gx, gy, dtH, 3)}
      {handle(gx + doorW - 4, gy + dtH / 2)}
      {diags("left", gx, gy, doorW, dtH)}
      {hinges(gx, gy + dtH + frmH, dbH, 2)}
      {handle(gx + doorW - 4, gy + dtH + frmH + dbH / 2)}
      {diags("left", gx, gy + dtH + frmH, doorW, dbH)}
      <rect x={gx + doorW} y={fy + depth} width={impW} height={gh} fill={frameColor} />
      <rect x={wx} y={gy} width={winW} height={dtH} fill="url(#gb)" stroke={frameColor} strokeWidth={0.8} />
      <rect x={wx} y={gy + dtH} width={winW} height={frmH} fill={frameColor} />
      <rect x={wx} y={gy + dtH + frmH} width={winW} height={dbH} fill="#F0EFED" stroke={frameColor} strokeWidth={0.8} />
    </svg>
  );
};

export default PricingWindowSVG;

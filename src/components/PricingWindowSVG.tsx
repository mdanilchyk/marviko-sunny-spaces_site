interface PricingWindowSVGProps {
  type: "single" | "double" | "triple" | "balcony";
  width?: number;
  height?: number;
  sashWidths?: number[];
}

const PricingWindowSVG = ({ type, width, height, sashWidths }: PricingWindowSVGProps) => {
  // Canvas
  const CW = 280, CH = 240;
  const arrowGap = 28; // space for dimension arrows
  const frameColor = "#8C8C8C";
  const glassColor = "#D6EAF8";
  const glassBorder = "#A0C4E0";
  const arrowColor = "#2171C1";
  const dimFont = "bold 10px sans-serif";

  // Dimension arrow helpers
  const hArrow = (x1: number, x2: number, y: number, label: string) => (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={arrowColor} strokeWidth={1.2} />
      <polygon points={`${x1},${y} ${x1 + 5},${y - 3} ${x1 + 5},${y + 3}`} fill={arrowColor} />
      <polygon points={`${x2},${y} ${x2 - 5},${y - 3} ${x2 - 5},${y + 3}`} fill={arrowColor} />
      <line x1={x1} y1={y - 5} x2={x1} y2={y + 5} stroke={arrowColor} strokeWidth={0.8} />
      <line x1={x2} y1={y - 5} x2={x2} y2={y + 5} stroke={arrowColor} strokeWidth={0.8} />
      <text x={(x1 + x2) / 2} y={y - 5} textAnchor="middle" fill={arrowColor} style={{ fontSize: "10px", fontWeight: 700 }}>{label}</text>
    </g>
  );

  const vArrow = (x: number, y1: number, y2: number, label: string) => (
    <g>
      <line x1={x} y1={y1} x2={x} y2={y2} stroke={arrowColor} strokeWidth={1.2} />
      <polygon points={`${x},${y1} ${x - 3},${y1 + 5} ${x + 3},${y1 + 5}`} fill={arrowColor} />
      <polygon points={`${x},${y2} ${x - 3},${y2 - 5} ${x + 3},${y2 - 5}`} fill={arrowColor} />
      <line x1={x - 5} y1={y1} x2={x + 5} y2={y1} stroke={arrowColor} strokeWidth={0.8} />
      <line x1={x - 5} y1={y2} x2={x + 5} y2={y2} stroke={arrowColor} strokeWidth={0.8} />
      <text x={x + 8} y={(y1 + y2) / 2 + 4} textAnchor="start" fill={arrowColor} style={{ fontSize: "10px", fontWeight: 700 }}>{label}</text>
    </g>
  );

  // Opening marks (diagonal lines showing how sash opens)
  const openMark = (sx: number, sy: number, sw: number, sh: number, side: "left" | "right") => {
    if (side === "left") {
      return (
        <g opacity={0.4}>
          <line x1={sx + sw} y1={sy} x2={sx} y2={sy + sh / 2} stroke={frameColor} strokeWidth={0.6} />
          <line x1={sx + sw} y1={sy + sh} x2={sx} y2={sy + sh / 2} stroke={frameColor} strokeWidth={0.6} />
        </g>
      );
    }
    return (
      <g opacity={0.4}>
        <line x1={sx} y1={sy} x2={sx + sw} y2={sy + sh / 2} stroke={frameColor} strokeWidth={0.6} />
        <line x1={sx} y1={sy + sh} x2={sx + sw} y2={sy + sh / 2} stroke={frameColor} strokeWidth={0.6} />
      </g>
    );
  };

  // Tilt mark (triangle at top)
  const tiltMark = (sx: number, sy: number, sw: number, sh: number) => (
    <g opacity={0.4}>
      <line x1={sx} y1={sy + sh} x2={sx + sw / 2} y2={sy} stroke={frameColor} strokeWidth={0.6} />
      <line x1={sx + sw} y1={sy + sh} x2={sx + sw / 2} y2={sy} stroke={frameColor} strokeWidth={0.6} />
    </g>
  );

  const d = 6; // frame depth
  const impW = 4; // mullion width

  // Compute frame dimensions based on type, fitting within canvas minus arrows
  let fw: number, fh: number;
  if (type === "balcony") {
    // Taller window
    fw = 110; fh = 160;
  } else if (type === "single") {
    fw = 70; fh = 120;
  } else if (type === "double") {
    fw = 120; fh = 120;
  } else {
    fw = 170; fh = 120;
  }

  const fx = (CW - fw) / 2;
  const fy = arrowGap + 4;

  // Glass area
  const gx = fx + d, gy = fy + d, gw = fw - 2 * d, gh = fh - 2 * d;

  // Labels
  const wLabel = width ? `${width}` : "";
  const hLabel = height ? `${height}` : "";

  const frame = (
    <>
      <rect x={fx} y={fy} width={fw} height={fh} fill="white" stroke={frameColor} strokeWidth={2} />
    </>
  );

  const dimArrows = (
    <>
      {wLabel && hArrow(fx, fx + fw, fy - 12, wLabel)}
      {hLabel && vArrow(fx + fw + 14, fy, fy + fh, hLabel)}
      {/* Extension lines */}
      {wLabel && (
        <>
          <line x1={fx} y1={fy} x2={fx} y2={fy - 18} stroke={arrowColor} strokeWidth={0.5} strokeDasharray="2,2" />
          <line x1={fx + fw} y1={fy} x2={fx + fw} y2={fy - 18} stroke={arrowColor} strokeWidth={0.5} strokeDasharray="2,2" />
        </>
      )}
      {hLabel && (
        <>
          <line x1={fx + fw} y1={fy} x2={fx + fw + 20} y2={fy} stroke={arrowColor} strokeWidth={0.5} strokeDasharray="2,2" />
          <line x1={fx + fw} y1={fy + fh} x2={fx + fw + 20} y2={fy + fh} stroke={arrowColor} strokeWidth={0.5} strokeDasharray="2,2" />
        </>
      )}
    </>
  );

  if (type === "single") {
    return (
      <svg width="200" height="190" viewBox={`0 0 ${CW} ${CH}`}>
        {frame}
        <rect x={gx} y={gy} width={gw} height={gh} fill={glassColor} stroke={glassBorder} strokeWidth={0.8} />
        {openMark(gx, gy, gw, gh, "right")}
        {tiltMark(gx, gy, gw, gh)}
        {dimArrows}
      </svg>
    );
  }

  if (type === "double") {
    const sw1 = sashWidths ? Math.round(gw * sashWidths[0] / (sashWidths[0] + sashWidths[1])) : Math.round(gw / 2);
    const sw2 = gw - sw1 - impW;
    return (
      <svg width="200" height="190" viewBox={`0 0 ${CW} ${CH}`}>
        {frame}
        {/* Left sash - fixed or openable */}
        <rect x={gx} y={gy} width={sw1} height={gh} fill={glassColor} stroke={glassBorder} strokeWidth={0.8} />
        {/* Mullion */}
        <rect x={gx + sw1} y={gy} width={impW} height={gh} fill="#D0D0D0" stroke={frameColor} strokeWidth={0.5} />
        {/* Right sash - openable */}
        <rect x={gx + sw1 + impW} y={gy} width={sw2} height={gh} fill={glassColor} stroke={glassBorder} strokeWidth={0.8} />
        {openMark(gx + sw1 + impW, gy, sw2, gh, "left")}
        {tiltMark(gx + sw1 + impW, gy, sw2, gh)}
        {dimArrows}
      </svg>
    );
  }

  if (type === "triple") {
    const thW = (gw - 2 * impW) / 3;
    const cx = gx + thW + impW;
    const rx = cx + thW + impW;
    return (
      <svg width="200" height="190" viewBox={`0 0 ${CW} ${CH}`}>
        {frame}
        {/* Left - fixed */}
        <rect x={gx} y={gy} width={thW} height={gh} fill={glassColor} stroke={glassBorder} strokeWidth={0.8} />
        <rect x={gx + thW} y={gy} width={impW} height={gh} fill="#D0D0D0" stroke={frameColor} strokeWidth={0.5} />
        {/* Center - openable */}
        <rect x={cx} y={gy} width={thW} height={gh} fill={glassColor} stroke={glassBorder} strokeWidth={0.8} />
        {openMark(cx, gy, thW, gh, "left")}
        {tiltMark(cx, gy, thW, gh)}
        <rect x={cx + thW} y={gy} width={impW} height={gh} fill="#D0D0D0" stroke={frameColor} strokeWidth={0.5} />
        {/* Right - fixed */}
        <rect x={rx} y={gy} width={thW} height={gh} fill={glassColor} stroke={glassBorder} strokeWidth={0.8} />
        {dimArrows}
      </svg>
    );
  }

  // Balcony block: door on left, window on right
  const doorW = Math.round(gw * 0.45);
  const winW = gw - doorW - impW;
  const doorSplitY = gy + Math.round(gh * 0.65);
  const doorTopH = doorSplitY - gy;
  const doorBotH = gh - doorTopH - 3;

  return (
    <svg width="200" height="210" viewBox={`0 0 ${CW} ${CH + 10}`}>
      {/* Frame */}
      <rect x={fx} y={fy} width={fw} height={fh} fill="white" stroke={frameColor} strokeWidth={2} />
      {/* Door - left side */}
      <rect x={gx} y={gy} width={doorW} height={doorTopH} fill={glassColor} stroke={glassBorder} strokeWidth={0.8} />
      <rect x={gx} y={doorSplitY} width={doorW} height={3} fill="#D0D0D0" stroke={frameColor} strokeWidth={0.3} />
      <rect x={gx} y={doorSplitY + 3} width={doorW} height={doorBotH} fill={glassColor} stroke={glassBorder} strokeWidth={0.8} />
      {openMark(gx, gy, doorW, gh, "right")}
      {tiltMark(gx, gy, doorW, gh)}
      {/* Mullion */}
      <rect x={gx + doorW} y={gy} width={impW} height={gh} fill="#D0D0D0" stroke={frameColor} strokeWidth={0.5} />
      {/* Window - right side */}
      <rect x={gx + doorW + impW} y={gy} width={winW} height={gh} fill={glassColor} stroke={glassBorder} strokeWidth={0.8} />
      {/* Dimension arrows */}
      {wLabel && hArrow(fx, fx + fw, fy - 12, wLabel)}
      {hLabel && vArrow(fx + fw + 14, fy, fy + fh, hLabel)}
      {wLabel && (
        <>
          <line x1={fx} y1={fy} x2={fx} y2={fy - 18} stroke={arrowColor} strokeWidth={0.5} strokeDasharray="2,2" />
          <line x1={fx + fw} y1={fy} x2={fx + fw} y2={fy - 18} stroke={arrowColor} strokeWidth={0.5} strokeDasharray="2,2" />
        </>
      )}
      {hLabel && (
        <>
          <line x1={fx + fw} y1={fy} x2={fx + fw + 20} y2={fy} stroke={arrowColor} strokeWidth={0.5} strokeDasharray="2,2" />
          <line x1={fx + fw} y1={fy + fh} x2={fx + fw + 20} y2={fy + fh} stroke={arrowColor} strokeWidth={0.5} strokeDasharray="2,2" />
        </>
      )}
    </svg>
  );
};

export default PricingWindowSVG;

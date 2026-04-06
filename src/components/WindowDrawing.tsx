interface WindowDrawingProps {
  type: "single" | "double" | "triple" | "balcony";
  width?: number;
  height?: number;
  className?: string;
  dark?: boolean;
}

const WindowDrawing = ({ type, width = 200, height = 200, className, dark = false }: WindowDrawingProps) => {
  // Colors
  const frameStroke = "#444";
  const frameFill = "#FFFFFF";
  const glassStroke = "#666";
  const glassFill = "#D6EEF8";
  const metalFill = "#888";
  const diagStroke = "#444";

  const renderHinges = (x: number, y: number, h: number, count = 3) => {
    const hinges = [];
    const spacing = h / (count + 1);
    for (let i = 1; i <= count; i++) {
      hinges.push(
        <rect key={i} x={x} y={y + spacing * i - 5} width={6} height={10} fill={metalFill} rx={1} />
      );
    }
    return hinges;
  };

  const renderHandle = (x: number, cy: number) => (
    <rect x={x} y={cy - 10} width={5} height={20} fill={metalFill} rx={1} />
  );

  const renderDiagonals = (hingeSide: "left" | "right", sx: number, sy: number, sw: number, sh: number) => {
    // From hinge side corners to opposite side
    if (hingeSide === "left") {
      return (
        <g>
          <line x1={sx} y1={sy + sh} x2={sx + sw} y2={sy} stroke={diagStroke} strokeWidth={1.3} />
          <line x1={sx} y1={sy} x2={sx + sw} y2={sy + sh / 2} stroke={diagStroke} strokeWidth={1.3} />
        </g>
      );
    }
    return (
      <g>
        <line x1={sx + sw} y1={sy + sh} x2={sx} y2={sy} stroke={diagStroke} strokeWidth={1.3} />
        <line x1={sx + sw} y1={sy} x2={sx} y2={sy + sh / 2} stroke={diagStroke} strokeWidth={1.3} />
      </g>
    );
  };

  const renderSingle = () => {
    const vw = 100, vh = 130;
    const pad = 6;
    const gx = pad + 4, gy = pad + 4;
    const gw = vw - 2 * pad - 8, gh = vh - 2 * pad - 8;

    return (
      <svg width={width} height={height} viewBox={`0 0 ${vw} ${vh}`} className={className}>
        {/* Outer frame */}
        <rect x={pad} y={pad} width={vw - 2 * pad} height={vh - 2 * pad} rx={2} fill={frameFill} stroke={frameStroke} strokeWidth={2.5} />
        {/* Glass */}
        <rect x={gx} y={gy} width={gw} height={gh} rx={1} fill={glassFill} stroke={glassStroke} strokeWidth={1.5} />
        {/* Hinges right */}
        {renderHinges(gx + gw - 3, gy, gh, 3)}
        {/* Handle left */}
        {renderHandle(gx + 2, gy + gh / 2)}
        {/* Diagonals from right */}
        {renderDiagonals("right", gx, gy, gw, gh)}
      </svg>
    );
  };

  const renderDouble = () => {
    const vw = 160, vh = 130;
    const pad = 6;
    const impW = 5;
    const innerX = pad + 4, innerY = pad + 4;
    const totalW = vw - 2 * pad - 8;
    const gh = vh - 2 * pad - 8;
    const halfW = (totalW - impW) / 2;

    const lx = innerX, ly = innerY;
    const rx = innerX + halfW + impW, ry = innerY;

    return (
      <svg width={width} height={height} viewBox={`0 0 ${vw} ${vh}`} className={className}>
        <rect x={pad} y={pad} width={vw - 2 * pad} height={vh - 2 * pad} rx={2} fill={frameFill} stroke={frameStroke} strokeWidth={2.5} />
        {/* Left glass - openable */}
        <rect x={lx} y={ly} width={halfW} height={gh} rx={1} fill={glassFill} stroke={glassStroke} strokeWidth={1.5} />
        {/* Impost */}
        <rect x={innerX + halfW} y={pad} width={impW} height={vh - 2 * pad} fill={metalFill} />
        {/* Right glass - deaf */}
        <rect x={rx} y={ry} width={halfW} height={gh} rx={1} fill={glassFill} stroke={glassStroke} strokeWidth={1.5} />
        {/* Left: hinges left, handle right (near impost) */}
        {renderHinges(lx, ly, gh, 3)}
        {renderHandle(lx + halfW - 7, ly + gh / 2)}
        {renderDiagonals("left", lx, ly, halfW, gh)}
      </svg>
    );
  };

  const renderTriple = () => {
    const vw = 220, vh = 130;
    const pad = 6;
    const impW = 5;
    const innerX = pad + 4, innerY = pad + 4;
    const totalW = vw - 2 * pad - 8;
    const gh = vh - 2 * pad - 8;
    const thirdW = (totalW - 2 * impW) / 3;

    const lx = innerX;
    const cx = innerX + thirdW + impW;
    const rx = innerX + 2 * (thirdW + impW);

    return (
      <svg width={width} height={height} viewBox={`0 0 ${vw} ${vh}`} className={className}>
        <rect x={pad} y={pad} width={vw - 2 * pad} height={vh - 2 * pad} rx={2} fill={frameFill} stroke={frameStroke} strokeWidth={2.5} />
        {/* Left - deaf */}
        <rect x={lx} y={innerY} width={thirdW} height={gh} rx={1} fill={glassFill} stroke={glassStroke} strokeWidth={1.5} />
        {/* Impost 1 */}
        <rect x={innerX + thirdW} y={pad} width={impW} height={vh - 2 * pad} fill={metalFill} />
        {/* Center - openable */}
        <rect x={cx} y={innerY} width={thirdW} height={gh} rx={1} fill={glassFill} stroke={glassStroke} strokeWidth={1.5} />
        {/* Impost 2 */}
        <rect x={cx + thirdW} y={pad} width={impW} height={vh - 2 * pad} fill={metalFill} />
        {/* Right - deaf */}
        <rect x={rx} y={innerY} width={thirdW} height={gh} rx={1} fill={glassFill} stroke={glassStroke} strokeWidth={1.5} />
        {/* Center: hinges left, handle right */}
        {renderHinges(cx, innerY, gh, 3)}
        {renderHandle(cx + thirdW - 7, innerY + gh / 2)}
        {renderDiagonals("left", cx, innerY, thirdW, gh)}
      </svg>
    );
  };

  const renderBalcony = () => {
    const vw = 180, vh = 180;
    const pad = 6;
    const impW = 5;
    const frmH = 4;
    const innerX = pad + 4, innerY = pad + 4;
    const totalW = vw - 2 * pad - 8;
    const totalH = vh - 2 * pad - 8;

    const doorW = totalW * 0.45;
    const winW = totalW - doorW - impW;
    const doorTopH = totalH * (2 / 3) - frmH / 2;
    const doorBotH = totalH * (1 / 3) - frmH / 2;

    const dx = innerX, dy = innerY;
    const wx = innerX + doorW + impW, wy = innerY;

    return (
      <svg width={width} height={height} viewBox={`0 0 ${vw} ${vh}`} className={className}>
        <rect x={pad} y={pad} width={vw - 2 * pad} height={vh - 2 * pad} rx={2} fill={frameFill} stroke={frameStroke} strokeWidth={2.5} />

        {/* Door top glass */}
        <rect x={dx} y={dy} width={doorW} height={doorTopH} rx={1} fill={glassFill} stroke={glassStroke} strokeWidth={1.5} />
        {/* Horizontal impost (framuga) */}
        <rect x={dx} y={dy + doorTopH} width={doorW} height={frmH} fill={metalFill} />
        {/* Door bottom glass */}
        <rect x={dx} y={dy + doorTopH + frmH} width={doorW} height={doorBotH} rx={1} fill={glassFill} stroke={glassStroke} strokeWidth={1.5} />

        {/* Vertical impost */}
        <rect x={innerX + doorW} y={pad} width={impW} height={vh - 2 * pad} fill={metalFill} />

        {/* Window - deaf */}
        <rect x={wx} y={wy} width={winW} height={totalH} rx={1} fill={glassFill} stroke={glassStroke} strokeWidth={1.5} />

        {/* Door top: hinges left, handle right, diags */}
        {renderHinges(dx, dy, doorTopH, 3)}
        {renderHandle(dx + doorW - 7, dy + doorTopH / 2)}
        {renderDiagonals("left", dx, dy, doorW, doorTopH)}

        {/* Door bottom: hinges left, handle right, diags */}
        {renderHinges(dx, dy + doorTopH + frmH, doorBotH, 2)}
        {renderHandle(dx + doorW - 7, dy + doorTopH + frmH + doorBotH / 2)}
        {renderDiagonals("left", dx, dy + doorTopH + frmH, doorW, doorBotH)}
      </svg>
    );
  };

  switch (type) {
    case "single": return renderSingle();
    case "double": return renderDouble();
    case "triple": return renderTriple();
    case "balcony": return renderBalcony();
  }
};

export default WindowDrawing;

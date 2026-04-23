import React from "react";

type Props = {
  type: "single" | "double" | "triple" | "balcony";
  width: number;
  height: number;
};

/**
 * Premium window SVG with:
 *  - white frame + soft shadow
 *  - blue gradient glass + highlight
 *  - clear opening indicators (diagonals) for opening sashes
 *  - handles + hinges on opening sashes
 *  - dimension arrows (top = width, right = height)
 */

const FRAME = 14;
const GAP = 6;
const R = 0;
const INNER_R = 0;

// Padding around the window for dimension arrows / labels
const PAD_TOP = 28;
const PAD_RIGHT = 36;
const PAD_LEFT = 6;
const PAD_BOTTOM = 6;

const ARROW_COLOR = "#2171C1";
const HANDLE_COLOR = "#777";
const HINGE_COLOR = "#9a9a9a";

const Glass = ({ x, y, w, h, id }: { x: number; y: number; w: number; h: number; id: string }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={INNER_R} fill={`url(#glass-${id})`} />
    <rect x={x} y={y} width={w} height={h * 0.38} rx={INNER_R} fill={`url(#highlight-${id})`} />
  </g>
);

const Frame = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => (
  <rect
    x={x}
    y={y}
    width={w}
    height={h}
    rx={R}
    fill="#ffffff"
    stroke="#d8d8d8"
    strokeWidth={1.5}
    filter="url(#frameShadow)"
  />
);

/** Tilt-and-turn opening indicator — two separate V-shapes:
 *  - Turn V: apex at the handle (right edge center), opens to the hinges on the left (top-left + bottom-left corners)
 *  - Tilt V: apex at the top edge center, opens downward to the bottom corners */
const OpeningMark = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => {
  const tl = { x: x + 4, y: y + 4 };
  const bl = { x: x + 4, y: y + h - 4 };
  const br = { x: x + w - 4, y: y + h - 4 };
  const handle = { x: x + w - 4, y: y + h / 2 };
  const topMid = { x: x + w / 2, y: y + 4 };
  return (
    <g stroke="#7a7a7a" strokeWidth={0.9} strokeLinecap="round" fill="none" opacity={0.55}>
      {/* Turn V — from handle to both hinges (left corners) */}
      <line x1={handle.x} y1={handle.y} x2={tl.x} y2={tl.y} />
      <line x1={handle.x} y1={handle.y} x2={bl.x} y2={bl.y} />
      {/* Tilt V — from top-center downward to both bottom corners */}
      <line x1={topMid.x} y1={topMid.y} x2={bl.x} y2={bl.y} />
      <line x1={topMid.x} y1={topMid.y} x2={br.x} y2={br.y} />
    </g>
  );
};

/** Handle: small vertical rectangle on the right edge of the glass, vertically centered. */
const Handle = ({ x, y }: { x: number; y: number; side?: "left" | "right" }) => (
  <rect x={x - 2} y={y} width={4} height={20} rx={1.5} fill={HANDLE_COLOR} />
);

/** Hinges on the hinge side of the sash (top + bottom) — subtle */
const Hinges = ({ x, yTop, yBottom }: { x: number; yTop: number; yBottom: number }) => (
  <g fill={HINGE_COLOR} opacity={0.35}>
    <rect x={x - 1.5} y={yTop} width={3} height={8} rx={1} />
    <rect x={x - 1.5} y={yBottom - 8} width={3} height={8} rx={1} />
  </g>
);

/** Horizontal dimension arrow above the window */
const HDim = ({ x1, x2, y, label }: { x1: number; x2: number; y: number; label: string }) => {
  const tick = 5;
  return (
    <g stroke={ARROW_COLOR} strokeWidth={1.1} fill="none">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      {/* arrow heads */}
      <polyline points={`${x1 + 6},${y - 3} ${x1},${y} ${x1 + 6},${y + 3}`} />
      <polyline points={`${x2 - 6},${y - 3} ${x2},${y} ${x2 - 6},${y + 3}`} />
      {/* end ticks */}
      <line x1={x1} y1={y - tick} x2={x1} y2={y + tick} />
      <line x1={x2} y1={y - tick} x2={x2} y2={y + tick} />
      <text
        x={(x1 + x2) / 2}
        y={y - 6}
        textAnchor="middle"
        fill={ARROW_COLOR}
        stroke="none"
        fontSize="11"
        fontWeight={700}
        fontFamily="ui-sans-serif, system-ui"
      >
        {label}
      </text>
    </g>
  );
};

/** Vertical dimension arrow to the right of the window */
const VDim = ({ x, y1, y2, label }: { x: number; y1: number; y2: number; label: string }) => {
  const tick = 5;
  return (
    <g stroke={ARROW_COLOR} strokeWidth={1.1} fill="none">
      <line x1={x} y1={y1} x2={x} y2={y2} />
      <polyline points={`${x - 3},${y1 + 6} ${x},${y1} ${x + 3},${y1 + 6}`} />
      <polyline points={`${x - 3},${y2 - 6} ${x},${y2} ${x + 3},${y2 - 6}`} />
      <line x1={x - tick} y1={y1} x2={x + tick} y2={y1} />
      <line x1={x - tick} y1={y2} x2={x + tick} y2={y2} />
      <text
        x={x + 8}
        y={(y1 + y2) / 2}
        textAnchor="start"
        fill={ARROW_COLOR}
        stroke="none"
        fontSize="11"
        fontWeight={700}
        fontFamily="ui-sans-serif, system-ui"
        transform={`rotate(-90 ${x + 8} ${(y1 + y2) / 2})`}
      >
        {label}
      </text>
    </g>
  );
};

const PricingWindowSVG: React.FC<Props> = ({ type, width, height }) => {
  const uid = React.useId().replace(/:/g, "");

  // Drawing area dimensions (inside the SVG, after padding for arrows)
  // Fixed height for ALL window types; width adapts to real proportions.
  const CANVAS_H = 240;
  // Balcony has extra arrows: left vertical (window height) + bottom (door width)
  const padLeft = type === "balcony" ? 36 : PAD_LEFT;
  const padBottom = type === "balcony" ? 28 : PAD_BOTTOM;
  const innerH = CANVAS_H - PAD_TOP - padBottom;

  const ratio = width / height;
  const winH = innerH;
  const winW = winH * ratio;

  const CANVAS_W = winW + padLeft + PAD_RIGHT;
  const winX = padLeft;
  const winY = PAD_TOP;

  const renderSingle = () => {
    const gx = winX + FRAME;
    const gy = winY + FRAME;
    const gw = winW - FRAME * 2;
    const gh = winH - FRAME * 2;
    return (
      <>
        <Frame x={winX} y={winY} w={winW} h={winH} />
        <Glass x={gx} y={gy} w={gw} h={gh} id={uid} />
        <OpeningMark x={gx} y={gy} w={gw} h={gh} />
        <Hinges x={gx + 1} yTop={gy + 4} yBottom={gy + gh - 4} />
        {/* handle on right edge, vertically centered */}
        <Handle x={gx + gw - 4} y={gy + gh / 2 - 10} />
      </>
    );
  };

  const renderDouble = () => {
    const halfW = (winW - GAP) / 2;
    const lx = winX + FRAME;
    const ly = winY + FRAME;
    const lw = halfW - FRAME;
    const lh = winH - FRAME * 2;
    const rx = winX + halfW + GAP;
    const ry = winY + FRAME;
    const rw = halfW - FRAME;
    return (
      <>
        <Frame x={winX} y={winY} w={winW} h={winH} />
        {/* left – fixed */}
        <Glass x={lx} y={ly} w={lw} h={lh} id={uid} />
        {/* divider */}
        <rect x={winX + halfW - GAP / 2} y={winY} width={GAP} height={winH} fill="#ffffff" />
        {/* right – opening */}
        <Glass x={rx} y={ry} w={rw} h={lh} id={uid} />
        <OpeningMark x={rx} y={ry} w={rw} h={lh} />
        <Hinges x={rx + 1} yTop={ry + 4} yBottom={ry + lh - 4} />
        {/* handle on right edge, vertically centered */}
        <Handle x={rx + rw - 4} y={ry + lh / 2 - 10} />
      </>
    );
  };

  const renderTriple = () => {
    const paneW = (winW - GAP * 2) / 3;
    const gh = winH - FRAME * 2;

    const x1 = winX + FRAME, w1 = paneW - FRAME;
    const x2 = winX + paneW + GAP, w2 = paneW - GAP;
    const x3 = winX + paneW * 2 + GAP, w3 = paneW - FRAME;

    return (
      <>
        <Frame x={winX} y={winY} w={winW} h={winH} />
        {/* left – fixed */}
        <Glass x={x1} y={winY + FRAME} w={w1} h={gh} id={uid} />
        {/* divider 1 */}
        <rect x={winX + paneW - GAP / 2} y={winY} width={GAP} height={winH} fill="#ffffff" />
        {/* center – opening */}
        <Glass x={x2} y={winY + FRAME} w={w2} h={gh} id={uid} />
        <OpeningMark x={x2} y={winY + FRAME} w={w2} h={gh} />
        <Hinges x={x2 + 1} yTop={winY + FRAME + 4} yBottom={winY + FRAME + gh - 4} />
        {/* divider 2 */}
        <rect x={winX + paneW * 2 - GAP / 2} y={winY} width={GAP} height={winH} fill="#ffffff" />
        {/* right – fixed */}
        <Glass x={x3} y={winY + FRAME} w={w3} h={gh} id={uid} />
        {/* handle on right edge of center sash, vertically centered */}
        <Handle x={x2 + w2 - 4} y={winY + FRAME + gh / 2 - 10} />
      </>
    );
  };

  const renderBalcony = () => {
    // Real proportions: total 1500mm wide, window 800×1400, door 700×2100
    const doorW = winW * (700 / 1500);
    const winPanelW = winW - doorW - GAP;

    // Thinner frame for balcony block — so glass area looks larger
    const BFRAME = 8;

    // Window panel is shorter than door — aligned to top
    const winPanelH = winH * (1400 / 2100);
    const wgh = winPanelH - BFRAME * 2;

    // Door: glass area equals window glass height (1400mm); below — solid PVC panel
    const doorGlassH = wgh; // identical to window glass height
    const dx = winX + winPanelW + GAP;
    const dy = winY + BFRAME;
    const dInnerW = doorW - BFRAME * 2;
    const panelTop = dy + doorGlassH + GAP;
    const panelH = winY + winH - BFRAME - panelTop;

    return (
      <>
        {/* Window frame (shorter, top-aligned) */}
        <Frame x={winX} y={winY} w={winPanelW} h={winPanelH} />
        <Glass x={winX + BFRAME} y={winY + BFRAME} w={winPanelW - BFRAME * 2} h={wgh} id={uid} />

        {/* Door frame (full height) */}
        <Frame x={winX + winPanelW + GAP} y={winY} w={doorW} h={winH} />
        {/* door glass – opening (tilt-and-turn), same height as window glass */}
        <Glass x={dx + BFRAME} y={dy} w={dInnerW} h={doorGlassH} id={uid} />
        {/* solid white PVC panel below glass (no blue fill) */}
        <rect
          x={dx + BFRAME}
          y={panelTop}
          width={dInnerW}
          height={panelH}
          fill="#ffffff"
          stroke="#d8d8d8"
          strokeWidth={1}
        />
        {/* Opening marks span the FULL door height (glass + panel) */}
        <OpeningMark
          x={dx + BFRAME}
          y={dy}
          w={dInnerW}
          h={winH - BFRAME * 2}
        />
        {/* hinges along the FULL door height (left edge of door) */}
        <Hinges x={dx + BFRAME + 1} yTop={winY + BFRAME + 4} yBottom={winY + winH - BFRAME - 4} />
        {/* handle on right edge of the door, vertically centered on the WHOLE door */}
        <Handle x={dx + BFRAME + dInnerW - 4} y={winY + winH / 2 - 10} />
      </>
    );
  };

  return (
    <svg
      viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
      height={240}
      width={CANVAS_W}
      style={{ height: 240, width: "auto", maxWidth: "100%" }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`glass-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dceefb" />
          <stop offset="100%" stopColor="#a2d0f5" />
        </linearGradient>
        <linearGradient id={`highlight-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <filter id="frameShadow" x="-4%" y="-4%" width="108%" height="112%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.08" />
        </filter>
      </defs>

      {type === "single" && renderSingle()}
      {type === "double" && renderDouble()}
      {type === "triple" && renderTriple()}
      {type === "balcony" && renderBalcony()}

      {/* Dimension arrows: width on top, height on right */}
      <HDim x1={winX} x2={winX + winW} y={winY - 14} label={String(width)} />
      <VDim x={winX + winW + 14} y1={winY} y2={winY + winH} label={String(height)} />

      {/* Extra dimension arrows for balcony block: window height (1400) + door width (700) */}
      {type === "balcony" && (() => {
        const doorW = winW * (700 / 1500);
        const winPanelW = winW - doorW - GAP;
        const winPanelH = winH * (1400 / 2100);
        return (
          <>
            {/* window height — left vertical arrow */}
            <VDim x={winX - 14} y1={winY} y2={winY + winPanelH} label="1400" />
            {/* door width — bottom arrow under the door panel */}
            <HDim
              x1={winX + winPanelW + GAP}
              x2={winX + winW}
              y={winY + winH + 14}
              label="700"
            />
          </>
        );
      })()}
    </svg>
  );
};

export default PricingWindowSVG;

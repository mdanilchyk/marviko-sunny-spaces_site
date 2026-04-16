import React from "react";

type Props = {
  type: "single" | "double" | "triple" | "balcony";
  width: number;
  height: number;
};

const FRAME = 14;
const GAP = 6;
const R = 10;
const INNER_R = 6;

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
    stroke="#e0e0e0"
    strokeWidth={1.5}
    filter="url(#frameShadow)"
  />
);

const Handle = ({ x, y }: { x: number; y: number }) => (
  <rect x={x} y={y} width={5} height={24} rx={2.5} fill="#888" />
);

const OpeningCross = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => (
  <g opacity={0.35}>
    <line x1={x} y1={y} x2={x + w} y2={y + h} stroke="#555" strokeWidth={1.2} />
    <line x1={x + w} y1={y} x2={x} y2={y + h} stroke="#555" strokeWidth={1.2} />
  </g>
);

const PricingWindowSVG: React.FC<Props> = ({ type, width, height }) => {
  const uid = React.useId().replace(/:/g, "");

  const renderSingle = () => {
    const gx = FRAME, gy = FRAME;
    const gw = width - FRAME * 2, gh = height - FRAME * 2;
    return (
      <>
        <Frame x={0} y={0} w={width} h={height} />
        <Glass x={gx} y={gy} w={gw} h={gh} id={uid} />
        <OpeningCross x={gx} y={gy} w={gw} h={gh} />
        <Handle x={width - FRAME - 11} y={height / 2 - 12} />
      </>
    );
  };

  const renderDouble = () => {
    const halfW = (width - GAP) / 2;
    const lx = FRAME, ly = FRAME;
    const lw = halfW - FRAME, lh = height - FRAME * 2;
    const rx = halfW + GAP, ry = FRAME;
    const rw = halfW - FRAME, rh = lh;
    return (
      <>
        <Frame x={0} y={0} w={width} h={height} />
        {/* left – fixed */}
        <Glass x={lx} y={ly} w={lw} h={lh} id={uid} />
        {/* divider */}
        <rect x={halfW - GAP / 2} y={0} width={GAP} height={height} fill="#ffffff" />
        {/* right – opening */}
        <Glass x={rx} y={ry} w={rw} h={rh} id={uid} />
        <OpeningCross x={rx} y={ry} w={rw} h={rh} />
        <Handle x={rx + 4} y={height / 2 - 12} />
      </>
    );
  };

  const renderTriple = () => {
    const paneW = (width - GAP * 2) / 3;
    const gh = height - FRAME * 2;

    const x1 = FRAME, w1 = paneW - FRAME;
    const x2 = paneW + GAP, w2 = paneW - GAP;
    const x3 = paneW * 2 + GAP, w3 = paneW - FRAME;

    return (
      <>
        <Frame x={0} y={0} w={width} h={height} />
        {/* left – fixed */}
        <Glass x={x1} y={FRAME} w={w1} h={gh} id={uid} />
        {/* divider 1 */}
        <rect x={paneW - GAP / 2} y={0} width={GAP} height={height} fill="#ffffff" />
        {/* center – opening */}
        <Glass x={x2} y={FRAME} w={w2} h={gh} id={uid} />
        <OpeningCross x={x2} y={FRAME} w={w2} h={gh} />
        <Handle x={x2 + w2 - 9} y={height / 2 - 12} />
        {/* divider 2 */}
        <rect x={paneW * 2 - GAP / 2} y={0} width={GAP} height={height} fill="#ffffff" />
        {/* right – fixed */}
        <Glass x={x3} y={FRAME} w={w3} h={gh} id={uid} />
      </>
    );
  };

  const renderBalcony = () => {
    const doorW = width * 0.42;
    const winW = width - doorW - GAP;
    const gh = height - FRAME * 2;

    const doorGlassH = gh * 0.6;
    const doorPanelH = gh - doorGlassH - 4;

    return (
      <>
        <Frame x={0} y={0} w={width} h={height} />
        {/* window – fixed */}
        <Glass x={FRAME} y={FRAME} w={winW - FRAME} h={gh} id={uid} />
        {/* divider */}
        <rect x={winW - GAP / 2} y={0} width={GAP} height={height} fill="#ffffff" />
        {/* door glass */}
        <Glass x={winW + GAP} y={FRAME} w={doorW - FRAME} h={doorGlassH} id={uid} />
        <OpeningCross x={winW + GAP} y={FRAME} w={doorW - FRAME} h={doorGlassH} />
        {/* door panel */}
        <rect
          x={winW + GAP}
          y={FRAME + doorGlassH + 4}
          width={doorW - FRAME}
          height={doorPanelH}
          rx={INNER_R}
          fill="#f5f5f5"
          stroke="#e0e0e0"
          strokeWidth={1}
        />
        <Handle x={winW + GAP + 6} y={FRAME + doorGlassH * 0.5} />
      </>
    );
  };

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-[240px]"
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
    </svg>
  );
};

export default PricingWindowSVG;

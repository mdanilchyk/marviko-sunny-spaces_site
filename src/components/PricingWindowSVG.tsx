import React from "react";

type Props = {
  type: "single" | "double" | "triple" | "balcony";
  width: number;
  height: number;
};

const PricingWindowSVG: React.FC<Props> = ({ type, width, height }) => {
  const frame = 14;
  const gap = 8;

  const Glass = ({ x, y, w, h }: any) => (
    <g>
      {/* основное стекло */}
      <rect x={x} y={y} width={w} height={h} rx={6} fill="url(#glassMain)" />

      {/* блик сверху */}
      <rect x={x} y={y} width={w} height={h * 0.35} rx={6} fill="url(#glassHighlight)" />
    </g>
  );

  const Frame = ({ x, y, w, h }: any) => (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={10}
      fill="#ffffff"
      stroke="#e7e7e7"
      strokeWidth={2}
      style={{
        filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.08))",
      }}
    />
  );

  const Handle = ({ x, y }: any) => <rect x={x} y={y} width={5} height={26} rx={3} fill="#777" />;

  const OpenLines = ({ x, y, w, h }: any) => (
    <>
      <line x1={x} y1={y} x2={x + w} y2={y + h} stroke="#666" strokeWidth={1.6} />
      <line x1={x + w} y1={y} x2={x} y2={y + h} stroke="#666" strokeWidth={1.6} />
    </>
  );

  const renderSingle = () => (
    <>
      <Frame x={0} y={0} w={width} h={height} />
      <Glass x={frame} y={frame} w={width - frame * 2} h={height - frame * 2} />
      <OpenLines x={frame} y={frame} w={width - frame * 2} h={height - frame * 2} />
      <Handle x={width - frame - 12} y={height / 2 - 13} />
    </>
  );

  const renderDouble = () => {
    const w = (width - gap) / 2;

    return (
      <>
        <Frame x={0} y={0} w={width} h={height} />

        {/* левая */}
        <Glass x={frame} y={frame} w={w - frame} h={height - frame * 2} />

        {/* правая */}
        <Glass x={w + gap / 2} y={frame} w={w - frame} h={height - frame * 2} />
        <OpenLines x={w + gap / 2} y={frame} w={w - frame} h={height - frame * 2} />
        <Handle x={width - frame - 12} y={height / 2 - 13} />
      </>
    );
  };

  const renderTriple = () => {
    const w = (width - gap * 2) / 3;

    return (
      <>
        <Frame x={0} y={0} w={width} h={height} />

        {/* левая */}
        <Glass x={frame} y={frame} w={w - frame} h={height - frame * 2} />

        {/* центр */}
        <Glass x={w + gap / 2} y={frame} w={w - frame} h={height - frame * 2} />
        <OpenLines x={w + gap / 2} y={frame} w={w - frame} h={height - frame * 2} />
        <Handle x={w * 2} y={height / 2 - 13} />

        {/* правая */}
        <Glass x={w * 2 + gap} y={frame} w={w - frame} h={height - frame * 2} />
      </>
    );
  };

  const renderBalcony = () => {
    const doorWidth = width * 0.4;
    const windowWidth = width - doorWidth - gap;

    return (
      <>
        <Frame x={0} y={0} w={width} h={height} />

        {/* окно */}
        <Glass x={frame} y={frame} w={windowWidth - frame} h={height - frame * 2} />

        {/* дверь */}
        <Glass x={windowWidth + gap} y={frame} w={doorWidth - frame} h={height * 0.6 - frame} />
        <OpenLines x={windowWidth + gap} y={frame} w={doorWidth - frame} h={height * 0.6 - frame} />

        {/* низ двери */}
        <rect
          x={windowWidth + gap}
          y={height * 0.6}
          width={doorWidth - frame}
          height={height * 0.4 - frame}
          rx={6}
          fill="#ffffff"
          stroke="#e7e7e7"
        />

        <Handle x={windowWidth + doorWidth - frame - 12} y={height * 0.5} />
      </>
    );
  };

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[240px]" preserveAspectRatio="xMidYMid meet">
      <defs>
        {/* основное стекло */}
        <linearGradient id="glassMain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e9f6ff" />
          <stop offset="100%" stopColor="#b8dcff" />
        </linearGradient>

        {/* блик */}
        <linearGradient id="glassHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {type === "single" && renderSingle()}
      {type === "double" && renderDouble()}
      {type === "triple" && renderTriple()}
      {type === "balcony" && renderBalcony()}
    </svg>
  );
};

export default PricingWindowSVG;

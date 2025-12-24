interface CalloutProps {
  number: number;
  x: number;
  y: number;
  angle?: number;
  length?: number;
  direction?: 'right' | 'left' | 'up' | 'down';
}

export function Callout({ number, x, y, angle = 0, length = 40, direction = 'right' }: CalloutProps) {
  const getLineEnd = () => {
    switch (direction) {
      case 'right': return { dx: length, dy: 0 };
      case 'left': return { dx: -length, dy: 0 };
      case 'up': return { dx: 0, dy: -length };
      case 'down': return { dx: 0, dy: length };
    }
  };

  const { dx, dy } = getLineEnd();
  const endX = x + dx;
  const endY = y + dy;

  return (
    <g className="callout" transform={`rotate(${angle} ${x} ${y})`}>
      <line
        x1={x}
        y1={y}
        x2={endX}
        y2={endY}
        stroke="#1f2937"
        strokeWidth="0.5"
        markerEnd="url(#arrow)"
      />
      <circle cx={endX} cy={endY} r="8" fill="white" stroke="#1f2937" strokeWidth="0.5" />
      <text
        x={endX}
        y={endY}
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[8px] fill-gray-900"
        style={{ fontFamily: 'monospace', fontWeight: 500 }}
      >
        {number}
      </text>
    </g>
  );
}

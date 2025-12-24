interface DimensionLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  offset?: number;
}

export function DimensionLine({ x1, y1, x2, y2, label, offset = 15 }: DimensionLineProps) {
  const isVertical = Math.abs(x2 - x1) < 1;
  const dx = isVertical ? offset : 0;
  const dy = isVertical ? 0 : offset;
  
  const midX = (x1 + x2) / 2 + dx;
  const midY = (y1 + y2) / 2 + dy;
  
  return (
    <g className="dimension">
      {/* Extension lines */}
      {isVertical ? (
        <>
          <line x1={x1} y1={y1} x2={x1 + dx} y2={y1} stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2,2" />
          <line x1={x2} y1={y2} x2={x2 + dx} y2={y2} stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2,2" />
        </>
      ) : (
        <>
          <line x1={x1} y1={y1} x2={x1} y2={y1 + dy} stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2,2" />
          <line x1={x2} y1={y2} x2={x2} y2={y2 + dy} stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2,2" />
        </>
      )}
      
      {/* Main dimension line */}
      <line
        x1={x1 + dx}
        y1={y1 + dy}
        x2={x2 + dx}
        y2={y2 + dy}
        stroke="#374151"
        strokeWidth="0.75"
        markerStart="url(#dim-arrow)"
        markerEnd="url(#dim-arrow)"
      />
      
      {/* Label */}
      <text
        x={midX}
        y={midY - 5}
        textAnchor="middle"
        className="text-[7px] fill-gray-700"
        style={{ fontFamily: 'monospace' }}
      >
        {label}
      </text>
    </g>
  );
}

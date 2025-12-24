interface GridProps {
  width: number;
  height: number;
  spacing?: number;
}

export function Grid({ width, height, spacing = 20 }: GridProps) {
  const lines = [];
  
  // Vertical lines
  for (let x = 0; x <= width; x += spacing) {
    lines.push(
      <line
        key={`v-${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={height}
        stroke="#e5e7eb"
        strokeWidth="0.25"
      />
    );
  }
  
  // Horizontal lines
  for (let y = 0; y <= height; y += spacing) {
    lines.push(
      <line
        key={`h-${y}`}
        x1={0}
        y1={y}
        x2={width}
        y2={y}
        stroke="#e5e7eb"
        strokeWidth="0.25"
      />
    );
  }
  
  return <g className="grid">{lines}</g>;
}

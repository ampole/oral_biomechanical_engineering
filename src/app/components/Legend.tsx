interface LegendItem {
  number: number;
  label: string;
  description: string;
}

interface LegendProps {
  items: LegendItem[];
  title?: string;
}

export function Legend({ items, title = "Component Reference" }: LegendProps) {
  return (
    <div className="bg-white border border-gray-300 p-6">
      <h3 className="text-sm mb-4 text-gray-900" style={{ fontFamily: 'monospace' }}>
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.number} className="flex gap-3 text-xs">
            <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center bg-gray-50">
              <span className="text-[10px]" style={{ fontFamily: 'monospace' }}>
                {item.number}
              </span>
            </div>
            <div className="flex-1">
              <div className="text-gray-900" style={{ fontFamily: 'monospace' }}>
                {item.label}
              </div>
              <div className="text-gray-600 mt-0.5">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Grid } from './Grid';
import { Callout } from './Callout';
import { Legend } from './Legend';
import { DimensionLine } from './DimensionLine';

export function SystemOverview() {
  const legendItems = [
    { number: 1, label: 'Handpiece Interface Module', description: 'Mechanical coupling with vibration isolation ring' },
    { number: 2, label: 'Biomechanical Actuation Core', description: 'Micro-oscillation element with controlled motion vectors' },
    { number: 3, label: 'Force & Displacement Sensing Layer', description: 'Strain gauges and load cells for multi-axis force detection' },
    { number: 4, label: 'Safety Governor / Compliance Mechanism', description: 'Passive mechanical compliance with electronic cutoff' },
    { number: 5, label: 'Sterile Modular Tip Assembly', description: 'Interchangeable tips for various tooth geometries' },
    { number: 6, label: 'Sensor Controller Interface', description: 'Real-time feedback processing and force limiting' },
    { number: 7, label: 'Vibration Isolation Ring', description: 'Reduces transmitted oscillation to handpiece' },
    { number: 8, label: 'Power & Data Connector', description: 'Integrated signal and low-voltage power routing' }
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="bg-white border border-gray-300 p-8">
          <h2 className="text-sm mb-6 text-gray-900" style={{ fontFamily: 'monospace' }}>
            SYSTEM OVERVIEW - ORTHOGRAPHIC PROJECTION
          </h2>
          
          <svg viewBox="0 0 800 900" className="w-full">
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="4"
                markerHeight="4"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#1f2937" />
              </marker>
              <marker
                id="dim-arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="3"
                markerHeight="3"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#374151" />
              </marker>
              <pattern id="hatch" width="4" height="4" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="4" stroke="#9ca3af" strokeWidth="0.5" />
              </pattern>
            </defs>

            <Grid width={800} height={900} spacing={20} />

            {/* Scale indicator */}
            <g transform="translate(20, 20)">
              <line x1={0} y1={0} x2={50} y2={0} stroke="#000" strokeWidth="1" />
              <line x1={0} y1={-3} x2={0} y2={3} stroke="#000" strokeWidth="1" />
              <line x1={50} y1={-3} x2={50} y2={3} stroke="#000" strokeWidth="1" />
              <text x={25} y={12} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                SCALE 1:1 | 50mm
              </text>
            </g>

            {/* SIDE VIEW */}
            <g transform="translate(100, 120)">
              <text x={0} y={-15} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                SIDE VIEW (LONGITUDINAL SECTION)
              </text>
              
              {/* Handpiece Interface */}
              <rect x={0} y={0} width={80} height={50} fill="none" stroke="#1f2937" strokeWidth="1.5" />
              <rect x={5} y={5} width={70} height={40} fill="url(#hatch)" stroke="#6b7280" strokeWidth="0.5" />
              <circle cx={40} cy={25} r={15} fill="none" stroke="#374151" strokeWidth="1" strokeDasharray="3,2" />
              <text x={40} y={60} textAnchor="middle" className="text-[7px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                VIBRATION ISOLATION
              </text>
              
              {/* Actuation Core */}
              <rect x={80} y={10} width={60} height={30} fill="#f3f4f6" stroke="#1f2937" strokeWidth="1.5" />
              <circle cx={110} cy={25} r={8} fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <line x1={110} y1={17} x2={110} y2={33} stroke="#ef4444" strokeWidth="0.75" markerEnd="url(#arrow)" />
              <line x1={102} y1={25} x2={118} y2={25} stroke="#ef4444" strokeWidth="0.75" markerEnd="url(#arrow)" />
              
              {/* Motion vectors */}
              <g transform="translate(110, 50)">
                <path d="M 0 0 Q 10 -5 20 0" fill="none" stroke="#3b82f6" strokeWidth="0.75" markerEnd="url(#arrow)" />
                <text x={10} y={12} textAnchor="middle" className="text-[6px] fill-blue-600" style={{ fontFamily: 'monospace' }}>
                  OSCILLATION
                </text>
              </g>
              
              {/* Sensing Layer */}
              <rect x={140} y={5} width={50} height={40} fill="none" stroke="#1f2937" strokeWidth="1.5" />
              <rect x={145} y={10} width={5} height={30} fill="#fbbf24" stroke="#92400e" strokeWidth="0.5" />
              <rect x={180} y={10} width={5} height={30} fill="#fbbf24" stroke="#92400e" strokeWidth="0.5" />
              <text x={165} y={55} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                STRAIN GAUGES
              </text>
              
              {/* Safety Governor */}
              <rect x={190} y={0} width={45} height={50} fill="none" stroke="#1f2937" strokeWidth="1.5" />
              <path d="M 200 10 L 205 25 L 200 40" fill="none" stroke="#10b981" strokeWidth="1.5" />
              <path d="M 225 10 L 220 25 L 225 40" fill="none" stroke="#10b981" strokeWidth="1.5" />
              <text x={212} y={60} textAnchor="middle" className="text-[6px] fill-green-700" style={{ fontFamily: 'monospace' }}>
                COMPLIANCE
              </text>
              
              {/* Sterile Tip */}
              <path d="M 235 15 L 280 15 L 295 25 L 280 35 L 235 35 Z" fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
              <line x1={260} y1={15} x2={260} y2={35} stroke="#6b7280" strokeWidth="0.5" strokeDasharray="1,1" />
              
              {/* Callouts */}
              <Callout number={1} x={40} y={0} direction="up" length={30} />
              <Callout number={2} x={110} y={10} direction="up" length={35} />
              <Callout number={3} x={165} y={5} direction="up" length={40} />
              <Callout number={4} x={212} y={0} direction="up" length={45} />
              <Callout number={5} x={280} y={25} direction="right" length={40} />
              <Callout number={7} x={40} y={50} direction="down" length={25} />
              
              {/* Dimensions */}
              <DimensionLine x1={0} y1={70} x2={80} y2={70} label="80mm" offset={5} />
              <DimensionLine x1={80} y1={70} x2={140} y2={70} label="60mm" offset={5} />
              <DimensionLine x1={140} y1={70} x2={190} y2={70} label="50mm" offset={5} />
              <DimensionLine x1={190} y1={70} x2={235} y2={70} label="45mm" offset={5} />
            </g>

            {/* TOP VIEW */}
            <g transform="translate(100, 350)">
              <text x={0} y={-15} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                TOP VIEW (TRANSVERSE SECTION)
              </text>
              
              {/* Main body outline */}
              <ellipse cx={150} cy={30} rx={120} ry={25} fill="none" stroke="#1f2937" strokeWidth="1.5" />
              <ellipse cx={150} cy={30} rx={100} ry={20} fill="#f9fafb" stroke="#6b7280" strokeWidth="0.75" />
              
              {/* Central axis */}
              <line x1={30} y1={30} x2={270} y2={30} stroke="#9ca3af" strokeWidth="0.5" strokeDasharray="2,2" />
              
              {/* Sensor positions */}
              <circle cx={150} cy={10} r={4} fill="#fbbf24" stroke="#92400e" strokeWidth="0.75" />
              <circle cx={150} cy={50} r={4} fill="#fbbf24" stroke="#92400e" strokeWidth="0.75" />
              <circle cx={130} cy={30} r={4} fill="#fbbf24" stroke="#92400e" strokeWidth="0.75" />
              <circle cx={170} cy={30} r={4} fill="#fbbf24" stroke="#92400e" strokeWidth="0.75" />
              
              <text x={150} y={75} textAnchor="middle" className="text-[7px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                4-AXIS FORCE SENSING ARRAY
              </text>
              
              {/* Force vectors */}
              <line x1={150} y1={10} x2={150} y2={-10} stroke="#dc2626" strokeWidth="1" markerEnd="url(#arrow)" />
              <text x={160} y={-5} className="text-[6px] fill-red-600" style={{ fontFamily: 'monospace' }}>F₁</text>
              
              <line x1={150} y1={50} x2={150} y2={70} stroke="#dc2626" strokeWidth="1" markerEnd="url(#arrow)" />
              <text x={160} y={65} className="text-[6px] fill-red-600" style={{ fontFamily: 'monospace' }}>F₂</text>
              
              <line x1={130} y1={30} x2={110} y2={30} stroke="#dc2626" strokeWidth="1" markerEnd="url(#arrow)" />
              <text x={105} y={25} className="text-[6px] fill-red-600" style={{ fontFamily: 'monospace' }}>F₃</text>
              
              <line x1={170} y1={30} x2={190} y2={30} stroke="#dc2626" strokeWidth="1" markerEnd="url(#arrow)" />
              <text x={195} y={25} className="text-[6px] fill-red-600" style={{ fontFamily: 'monospace' }}>F₄</text>
              
              <Callout number={3} x={150} y={5} direction="left" length={50} />
            </g>

            {/* CROSS SECTION */}
            <g transform="translate(100, 550)">
              <text x={0} y={-15} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                CROSS SECTION A-A (SAFETY GOVERNOR DETAIL)
              </text>
              
              {/* Outer housing */}
              <rect x={50} y={0} width={200} height={120} fill="none" stroke="#1f2937" strokeWidth="1.5" />
              <rect x={55} y={5} width={190} height={110} fill="#fafafa" stroke="none" />
              
              {/* Mechanical compliance springs */}
              <g transform="translate(80, 30)">
                <path d="M 0 0 Q 5 10 0 20 Q -5 30 0 40" fill="none" stroke="#10b981" strokeWidth="1.5" />
                <circle cx={0} cy={0} r={3} fill="#10b981" />
                <circle cx={0} cy={40} r={3} fill="#10b981" />
              </g>
              
              <g transform="translate(220, 30)">
                <path d="M 0 0 Q 5 10 0 20 Q -5 30 0 40" fill="none" stroke="#10b981" strokeWidth="1.5" />
                <circle cx={0} cy={0} r={3} fill="#10b981" />
                <circle cx={0} cy={40} r={3} fill="#10b981" />
              </g>
              
              {/* Central actuation shaft */}
              <rect x={140} y={20} width={20} height={80} fill="#d1d5db" stroke="#374151" strokeWidth="1" />
              
              {/* Electronic cutoff sensor */}
              <rect x={120} y={50} width={60} height={20} fill="#dbeafe" stroke="#1e40af" strokeWidth="1" />
              <text x={150} y={62} textAnchor="middle" className="text-[6px]" style={{ fontFamily: 'monospace' }}>
                CUTOFF SENSOR
              </text>
              
              {/* Displacement indicators */}
              <line x1={65} y1={60} x2={75} y2={60} stroke="#6b7280" strokeWidth="0.5" strokeDasharray="1,1" />
              <line x1={225} y1={60} x2={235} y2={60} stroke="#6b7280" strokeWidth="0.5" strokeDasharray="1,1" />
              
              <path d="M 75 60 L 120 60" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <path d="M 225 60 L 180 60" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />
              
              <text x={150} y={135} textAnchor="middle" className="text-[7px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                MAXIMUM DISPLACEMENT: ±2.5mm | FORCE LIMIT: 15N
              </text>
              
              <Callout number={4} x={150} y={70} direction="right" length={60} />
              <Callout number={6} x={150} y={50} direction="left" length={60} />
            </g>

            {/* Data flow diagram */}
            <g transform="translate(450, 120)">
              <text x={0} y={-15} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                SIGNAL & CONTROL ARCHITECTURE
              </text>
              
              <rect x={0} y={0} width={100} height={40} fill="#fef3c7" stroke="#92400e" strokeWidth="1" />
              <text x={50} y={15} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>FORCE SENSORS</text>
              <text x={50} y={28} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>Axial, Lateral,</text>
              <text x={50} y={36} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>Torsional</text>
              
              <line x1={50} y1={40} x2={50} y2={60} stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow)" />
              
              <rect x={0} y={60} width={100} height={40} fill="#dbeafe" stroke="#1e40af" strokeWidth="1" />
              <text x={50} y={75} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>CONTROLLER</text>
              <text x={50} y={88} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>Real-time</text>
              <text x={50} y={96} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>Processing</text>
              
              <line x1={50} y1={100} x2={50} y2={120} stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow)" />
              
              <rect x={0} y={120} width={100} height={40} fill="#d1fae5" stroke="#065f46" strokeWidth="1" />
              <text x={50} y={135} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>ACTUATION</text>
              <text x={50} y={148} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>Force-Limited</text>
              <text x={50} y={156} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>Oscillation</text>
              
              {/* Feedback loop */}
              <path d="M 100 80 L 130 80 L 130 140 L 100 140" fill="none" stroke="#6366f1" strokeWidth="1" markerEnd="url(#arrow)" strokeDasharray="3,2" />
              <text x={135} y={110} className="text-[6px] fill-indigo-600" style={{ fontFamily: 'monospace' }}>FEEDBACK</text>
              
              {/* Optional logging */}
              <line x1={0} y1={80} x2={-30} y2={80} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" markerStart="url(#arrow)" />
              <text x={-35} y={75} textAnchor="end" className="text-[6px] fill-gray-500" style={{ fontFamily: 'monospace' }}>
                Optional
              </text>
              <text x={-35} y={85} textAnchor="end" className="text-[6px] fill-gray-500" style={{ fontFamily: 'monospace' }}>
                Data Log
              </text>
              
              <Callout number={6} x={50} y={80} direction="right" length={80} />
              <Callout number={8} x={-15} y={80} direction="left" length={30} />
            </g>

            {/* Technical notes */}
            <g transform="translate(450, 400)">
              <rect x={0} y={0} width={300} height={180} fill="#fffbeb" stroke="#78716c" strokeWidth="1" />
              <text x={10} y={20} className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                TECHNICAL SPECIFICATIONS
              </text>
              <line x1={10} y1={25} x2={290} y2={25} stroke="#78716c" strokeWidth="0.5" />
              
              <text x={10} y={42} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Force-limited oscillation to reduce alveolar trauma
              </text>
              <text x={10} y={58} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Designed to preserve periodontal ligament integrity
              </text>
              <text x={10} y={74} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Multi-axis force sensing: 0.1N resolution
              </text>
              <text x={10} y={90} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Oscillation frequency: 50-200 Hz (adjustable)
              </text>
              <text x={10} y={106} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Maximum displacement amplitude: ±2.5mm
              </text>
              <text x={10} y={122} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Safety cutoff threshold: 15N sustained force
              </text>
              <text x={10} y={138} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Compliance range: 0.5-3.0mm passive travel
              </text>
              <text x={10} y={154} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Operating temperature: 15-40°C
              </text>
              <text x={10} y={170} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Sterilization: Autoclave compatible (tips only)
              </text>
            </g>
          </svg>
        </div>
      </div>
      
      <div className="col-span-1">
        <Legend items={legendItems} />
        
        <div className="mt-8 bg-amber-50 border border-amber-300 p-4">
          <h3 className="text-xs mb-2 text-amber-900" style={{ fontFamily: 'monospace' }}>
            ⚠ REGULATORY NOTICE
          </h3>
          <p className="text-xs text-amber-800 leading-relaxed">
            This device is in development and has not received FDA clearance or CE marking. 
            All specifications are preliminary and subject to validation through clinical testing.
          </p>
        </div>
        
        <div className="mt-4 bg-blue-50 border border-blue-300 p-4">
          <h3 className="text-xs mb-2 text-blue-900" style={{ fontFamily: 'monospace' }}>
            COORDINATE SYSTEM
          </h3>
          <svg viewBox="0 0 150 150" className="w-full mt-2">
            <defs>
              <marker id="axis-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#1f2937" />
              </marker>
            </defs>
            
            <line x1={30} y1={120} x2={120} y2={120} stroke="#dc2626" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x={125} y={125} className="text-[10px] fill-red-600" style={{ fontFamily: 'monospace' }}>X (Lateral)</text>
            
            <line x1={30} y1={120} x2={30} y2={30} stroke="#16a34a" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x={35} y={25} className="text-[10px] fill-green-600" style={{ fontFamily: 'monospace' }}>Y (Axial)</text>
            
            <line x1={30} y1={120} x2={60} y2={90} stroke="#2563eb" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x={65} y={90} className="text-[10px] fill-blue-600" style={{ fontFamily: 'monospace' }}>Z (Depth)</text>
            
            <circle cx={30} cy={120} r={3} fill="#1f2937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

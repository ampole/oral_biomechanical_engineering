import { Grid } from './Grid';
import { Legend } from './Legend';

export function ExplodedView() {
  const legendItems = [
    { number: 1, label: 'Handpiece Coupling Ring', description: 'ISO 3964 standard coupling interface' },
    { number: 2, label: 'Elastomeric Vibration Damper', description: 'Silicone compound, Shore A 60-70' },
    { number: 3, label: 'Housing Assembly (Proximal)', description: 'Medical-grade stainless steel 316L' },
    { number: 4, label: 'Eccentric Cam Drive', description: 'Micro-oscillation actuator, ±15° rotation' },
    { number: 5, label: 'Bearing Assembly', description: 'Ceramic hybrid bearings, sealed' },
    { number: 6, label: 'Strain Gauge PCB', description: '4-channel Wheatstone bridge configuration' },
    { number: 7, label: 'Amplifier & ADC Module', description: '16-bit resolution, 1kHz sampling' },
    { number: 8, label: 'Compression Spring Set', description: 'Stainless steel, k=2.5 N/mm' },
    { number: 9, label: 'Housing Assembly (Distal)', description: 'Medical-grade stainless steel 316L' },
    { number: 10, label: 'Tip Retention Collar', description: 'Quick-release mechanism with lock indicator' },
    { number: 11, label: 'Sterile Tip Interface', description: 'Autoclavable coupling, single-use or reusable' },
    { number: 12, label: 'Working Tip (Interchangeable)', description: 'Various geometries for tooth types' }
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="bg-white border border-gray-300 p-8">
          <h2 className="text-sm mb-6 text-gray-900" style={{ fontFamily: 'monospace' }}>
            EXPLODED MECHANICAL VIEW - ASSEMBLY SEQUENCE
          </h2>
          
          <svg viewBox="0 0 900 1000" className="w-full">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#1f2937" />
              </marker>
              <pattern id="hatch" width="4" height="4" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="4" stroke="#9ca3af" strokeWidth="0.5" />
              </pattern>
              <pattern id="dots" width="3" height="3" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="0.5" fill="#6b7280" />
              </pattern>
            </defs>

            <Grid width={900} height={1000} spacing={20} />

            {/* Assembly direction indicator */}
            <g transform="translate(750, 50)">
              <text x={0} y={0} className="text-[8px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                ASSEMBLY DIRECTION
              </text>
              <line x1={20} y1={10} x2={20} y2={80} stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x={35} y={50} className="text-[7px] fill-blue-600" style={{ fontFamily: 'monospace' }}>DISTAL</text>
            </g>

            {/* Component 1: Handpiece Coupling */}
            <g transform="translate(150, 80)">
              <ellipse cx={100} cy={30} rx={60} ry={25} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
              <ellipse cx={100} cy={30} rx={45} ry={18} fill="none" stroke="#374151" strokeWidth="1" />
              
              {/* Internal threads representation */}
              <g>
                <line x1={55} y1={25} x2={145} y2={25} stroke="#6b7280" strokeWidth="0.5" />
                <line x1={55} y1={30} x2={145} y2={30} stroke="#6b7280" strokeWidth="0.5" />
                <line x1={55} y1={35} x2={145} y2={35} stroke="#6b7280" strokeWidth="0.5" />
              </g>
              
              {/* Mounting holes */}
              <circle cx={70} cy={30} r={3} fill="#374151" />
              <circle cx={130} cy={30} r={3} fill="#374151" />
              
              <circle cx={100} cy={30} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={100} y={35} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>1</text>
              
              <text x={100} y={75} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                HANDPIECE COUPLING RING
              </text>
              
              <line x1={100} y1={60} x2={100} y2={120} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 2: Vibration Damper */}
            <g transform="translate(150, 130)">
              <ellipse cx={100} cy={30} rx={55} ry={20} fill="#fef08a" stroke="#854d0e" strokeWidth="1.5" />
              <ellipse cx={100} cy={30} rx={45} ry={15} fill="url(#dots)" stroke="none" />
              <ellipse cx={100} cy={30} rx={30} ry={10} fill="none" stroke="#854d0e" strokeWidth="0.75" strokeDasharray="2,2" />
              
              <circle cx={100} cy={30} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={100} y={35} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>2</text>
              
              <text x={100} y={65} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                ELASTOMERIC DAMPER
              </text>
              <text x={100} y={76} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Shore A 60-70
              </text>
              
              <line x1={100} y1={55} x2={100} y2={110} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 3: Proximal Housing */}
            <g transform="translate(150, 250)">
              <rect x={30} y={0} width={140} height={80} rx={5} fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              <rect x={40} y={10} width={120} height={60} fill="url(#hatch)" stroke="#6b7280" strokeWidth="0.75" />
              
              {/* Center bore */}
              <ellipse cx={100} cy={40} rx={25} ry={15} fill="white" stroke="#374151" strokeWidth="1.5" />
              
              {/* Mounting bosses */}
              <rect x={35} y={20} width={10} height={40} fill="#9ca3af" stroke="#374151" strokeWidth="0.75" />
              <rect x={155} y={20} width={10} height={40} fill="#9ca3af" stroke="#374151" strokeWidth="0.75" />
              
              <circle cx={100} cy={40} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={100} y={45} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>3</text>
              
              <text x={100} y={100} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                HOUSING (PROXIMAL)
              </text>
              <text x={100} y={111} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                SS 316L
              </text>
              
              <line x1={100} y1={85} x2={100} y2={140} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 4: Eccentric Cam */}
            <g transform="translate(150, 400)">
              <circle cx={100} cy={35} r={35} fill="#f3f4f6" stroke="#1f2937" strokeWidth="1.5" />
              <circle cx={100} cy={35} r={25} fill="none" stroke="#6b7280" strokeWidth="0.75" />
              
              {/* Eccentric offset */}
              <circle cx={110} cy={35} r={8} fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
              <line x1={100} y1={35} x2={110} y2={35} stroke="#dc2626" strokeWidth="1" />
              <text x={105} y={55} textAnchor="middle" className="text-[6px] fill-red-600" style={{ fontFamily: 'monospace' }}>
                ±15°
              </text>
              
              {/* Rotation indicator */}
              <path d="M 100 10 A 25 25 0 0 1 125 35" fill="none" stroke="#3b82f6" strokeWidth="1" markerEnd="url(#arrow)" />
              
              <circle cx={100} cy={35} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={100} y={40} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>4</text>
              
              <text x={100} y={88} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                ECCENTRIC CAM DRIVE
              </text>
              
              <line x1={100} y1={73} x2={100} y2={120} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 5: Bearing Assembly */}
            <g transform="translate(150, 530)">
              <ellipse cx={100} cy={25} rx={40} ry={20} fill="#e0f2fe" stroke="#0c4a6e" strokeWidth="1.5" />
              <ellipse cx={100} cy={25} rx={30} ry={15} fill="none" stroke="#0369a1" strokeWidth="1" />
              <ellipse cx={100} cy={25} rx={20} ry={10} fill="white" stroke="#0c4a6e" strokeWidth="0.75" />
              
              {/* Bearing balls */}
              <circle cx={85} cy={25} r={2} fill="#475569" />
              <circle cx={100} cy={20} r={2} fill="#475569" />
              <circle cx={115} cy={25} r={2} fill="#475569" />
              <circle cx={100} cy={30} r={2} fill="#475569" />
              
              <circle cx={100} cy={25} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={100} y={30} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>5</text>
              
              <text x={100} y={60} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                BEARING ASSEMBLY
              </text>
              <text x={100} y={71} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Ceramic Hybrid
              </text>
              
              <line x1={100} y1={50} x2={100} y2={100} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 6: Strain Gauge PCB */}
            <g transform="translate(150, 640)">
              <rect x={50} y={0} width={100} height={50} rx={2} fill="#dcfce7" stroke="#166534" strokeWidth="1.5" />
              
              {/* PCB traces */}
              <line x1={60} y1={10} x2={140} y2={10} stroke="#16a34a" strokeWidth="0.75" />
              <line x1={60} y1={20} x2={140} y2={20} stroke="#16a34a" strokeWidth="0.75" />
              <line x1={60} y1={30} x2={140} y2={30} stroke="#16a34a" strokeWidth="0.75" />
              <line x1={60} y1={40} x2={140} y2={40} stroke="#16a34a" strokeWidth="0.75" />
              
              {/* Strain gauges */}
              <rect x={70} y={15} width={8} height={20} fill="#fbbf24" stroke="#92400e" strokeWidth="0.75" />
              <rect x={92} y={15} width={8} height={20} fill="#fbbf24" stroke="#92400e" strokeWidth="0.75" />
              <rect x={114} y={15} width={8} height={20} fill="#fbbf24" stroke="#92400e" strokeWidth="0.75" />
              
              <circle cx={100} cy={25} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={100} y={30} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>6</text>
              
              <text x={100} y={68} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                STRAIN GAUGE PCB
              </text>
              <text x={100} y={79} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                4-Ch Wheatstone Bridge
              </text>
              
              <line x1={100} y1={55} x2={100} y2={105} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 7: Amplifier Module */}
            <g transform="translate(150, 755)">
              <rect x={60} y={0} width={80} height={40} rx={2} fill="#dbeafe" stroke="#1e3a8a" strokeWidth="1.5" />
              
              {/* IC representation */}
              <rect x={75} y={10} width={50} height={20} fill="#1f2937" stroke="none" />
              <text x={100} y={23} textAnchor="middle" className="text-[6px] fill-white" style={{ fontFamily: 'monospace' }}>
                ADC
              </text>
              
              {/* Pins */}
              <rect x={68} y={12} width={4} height={2} fill="#9ca3af" />
              <rect x={68} y={18} width={4} height={2} fill="#9ca3af" />
              <rect x={68} y={24} width={4} height={2} fill="#9ca3af" />
              <rect x={128} y={12} width={4} height={2} fill="#9ca3af" />
              <rect x={128} y={18} width={4} height={2} fill="#9ca3af" />
              <rect x={128} y={24} width={4} height={2} fill="#9ca3af" />
              
              <circle cx={100} cy={20} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={100} y={25} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>7</text>
              
              <text x={100} y={58} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                AMPLIFIER & ADC
              </text>
              <text x={100} y={69} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                16-bit, 1kHz
              </text>
              
              <line x1={100} y1={45} x2={100} y2={95} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 8: Compression Springs */}
            <g transform="translate(450, 80)">
              <g transform="translate(50, 20)">
                <path d="M 10 0 Q 0 5 10 10 Q 20 15 10 20 Q 0 25 10 30 Q 20 35 10 40 Q 0 45 10 50" 
                      fill="none" stroke="#10b981" strokeWidth="1.5" />
                <circle cx={10} cy={0} r={3} fill="#10b981" stroke="#065f46" strokeWidth="0.75" />
                <circle cx={10} cy={50} r={3} fill="#10b981" stroke="#065f46" strokeWidth="0.75" />
              </g>
              
              <g transform="translate(110, 20)">
                <path d="M 10 0 Q 0 5 10 10 Q 20 15 10 20 Q 0 25 10 30 Q 20 35 10 40 Q 0 45 10 50" 
                      fill="none" stroke="#10b981" strokeWidth="1.5" />
                <circle cx={10} cy={0} r={3} fill="#10b981" stroke="#065f46" strokeWidth="0.75" />
                <circle cx={10} cy={50} r={3} fill="#10b981" stroke="#065f46" strokeWidth="0.75" />
              </g>
              
              <circle cx={85} cy={45} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={85} y={50} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>8</text>
              
              <text x={85} y={95} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                COMPRESSION SPRINGS
              </text>
              <text x={85} y={106} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                k = 2.5 N/mm
              </text>
              
              <line x1={85} y1={75} x2={85} y2={135} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 9: Distal Housing */}
            <g transform="translate(450, 225)">
              <rect x={15} y={0} width={140} height={80} rx={5} fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              <rect x={25} y={10} width={120} height={60} fill="url(#hatch)" stroke="#6b7280" strokeWidth="0.75" />
              
              {/* Center bore */}
              <ellipse cx={85} cy={40} rx={25} ry={15} fill="white" stroke="#374151" strokeWidth="1.5" />
              
              {/* Mounting bosses */}
              <rect x={20} y={20} width={10} height={40} fill="#9ca3af" stroke="#374151" strokeWidth="0.75" />
              <rect x={140} y={20} width={10} height={40} fill="#9ca3af" stroke="#374151" strokeWidth="0.75" />
              
              <circle cx={85} cy={40} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={85} y={45} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>9</text>
              
              <text x={85} y={100} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                HOUSING (DISTAL)
              </text>
              <text x={85} y={111} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                SS 316L
              </text>
              
              <line x1={85} y1={85} x2={85} y2={150} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 10: Tip Retention Collar */}
            <g transform="translate(450, 385)">
              <ellipse cx={85} cy={30} rx={50} ry={22} fill="#fef3c7" stroke="#78350f" strokeWidth="1.5" />
              <ellipse cx={85} cy={30} rx={38} ry={16} fill="none" stroke="#92400e" strokeWidth="1" />
              
              {/* Lock mechanism */}
              <rect x={75} y={20} width={20} height={20} fill="#dc2626" stroke="#991b1b" strokeWidth="0.75" />
              <text x={85} y={33} textAnchor="middle" className="text-[7px] fill-white" style={{ fontFamily: 'monospace' }}>
                LOCK
              </text>
              
              <circle cx={85} cy={30} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={85} y={35} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>10</text>
              
              <text x={85} y={70} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                TIP RETENTION COLLAR
              </text>
              <text x={85} y={81} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Quick-Release
              </text>
              
              <line x1={85} y1={57} x2={85} y2={110} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 11: Sterile Tip Interface */}
            <g transform="translate(450, 505)">
              <path d="M 55 10 L 115 10 L 115 40 L 55 40 Z" fill="#e0e7ff" stroke="#3730a3" strokeWidth="1.5" />
              <rect x={60} y={15} width={50} height={20} fill="url(#hatch)" stroke="#4f46e5" strokeWidth="0.75" />
              
              {/* Keying feature */}
              <rect x={80} y={10} width={10} height={5} fill="#6366f1" stroke="#3730a3" strokeWidth="0.5" />
              
              <circle cx={85} cy={25} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={85} y={30} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>11</text>
              
              <text x={85} y={60} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                STERILE TIP INTERFACE
              </text>
              <text x={85} y={71} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Autoclavable
              </text>
              
              <line x1={85} y1={45} x2={85} y2={95} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Component 12: Working Tip */}
            <g transform="translate(450, 610)">
              <path d="M 60 0 L 110 0 L 125 25 L 110 50 L 60 50 Z" fill="#f5f5f5" stroke="#1f2937" strokeWidth="1.5" />
              
              {/* Tip variants indicator */}
              <g transform="translate(85, 25)">
                <circle cx={0} cy={0} r={4} fill="none" stroke="#6b7280" strokeWidth="0.75" strokeDasharray="1,1" />
                <line x1={-10} y1={-10} x2={10} y2={10} stroke="#6b7280" strokeWidth="0.5" />
                <line x1={-10} y1={10} x2={10} y2={-10} stroke="#6b7280" strokeWidth="0.5" />
              </g>
              
              <circle cx={85} cy={25} r={12} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={85} y={30} textAnchor="middle" className="text-[9px]" style={{ fontFamily: 'monospace' }}>12</text>
              
              <text x={85} y={70} textAnchor="middle" className="text-[7px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                WORKING TIP
              </text>
              <text x={85} y={81} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Interchangeable
              </text>
            </g>

            {/* Assembly notes */}
            <g transform="translate(50, 850)">
              <rect x={0} y={0} width={400} height={120} fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
              <text x={10} y={20} className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                ASSEMBLY NOTES
              </text>
              <line x1={10} y1={25} x2={390} y2={25} stroke="#64748b" strokeWidth="0.5" />
              
              <text x={10} y={42} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                1. Install vibration damper (2) with compression force of 50±5N
              </text>
              <text x={10} y={58} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                2. Torque housing fasteners to 2.5 Nm using star pattern
              </text>
              <text x={10} y={74} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                3. Verify bearing (5) pre-load before final assembly
              </text>
              <text x={10} y={90} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                4. Calibrate strain gauges (6) to ±0.1N resolution post-assembly
              </text>
              <text x={10} y={106} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                5. Test tip retention collar (10) lock mechanism: min. 20N extraction force
              </text>
            </g>

            {/* Material specifications */}
            <g transform="translate(480, 850)">
              <rect x={0} y={0} width={370} height={120} fill="#fefce8" stroke="#713f12" strokeWidth="1" />
              <text x={10} y={20} className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                MATERIAL SPECIFICATIONS
              </text>
              <line x1={10} y1={25} x2={360} y2={25} stroke="#713f12" strokeWidth="0.5" />
              
              <text x={10} y={42} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Housing: Stainless Steel 316L (ASTM F138)
              </text>
              <text x={10} y={58} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Damper: Medical-grade silicone (USP Class VI)
              </text>
              <text x={10} y={74} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Springs: Stainless Steel 302 (ASTM A313)
              </text>
              <text x={10} y={90} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Bearings: Si₃N₄ ceramic balls, 440C races
              </text>
              <text x={10} y={106} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • PCB: FR-4, conformal coated for moisture protection
              </text>
            </g>
          </svg>
        </div>
      </div>
      
      <div className="col-span-1">
        <Legend items={legendItems} title="Component Index" />
        
        <div className="mt-8 bg-purple-50 border border-purple-300 p-4">
          <h3 className="text-xs mb-2 text-purple-900" style={{ fontFamily: 'monospace' }}>
            ASSEMBLY SEQUENCE
          </h3>
          <p className="text-xs text-purple-800 leading-relaxed mb-3">
            Components must be assembled in numerical order (1→12) to ensure proper alignment and functionality.
          </p>
          <div className="text-xs text-purple-800 space-y-1">
            <div>• Steps 1-5: Mechanical core</div>
            <div>• Steps 6-7: Sensing layer</div>
            <div>• Steps 8-9: Safety system</div>
            <div>• Steps 10-12: Sterile interface</div>
          </div>
        </div>
        
        <div className="mt-4 bg-red-50 border border-red-300 p-4">
          <h3 className="text-xs mb-2 text-red-900" style={{ fontFamily: 'monospace' }}>
            ⚠ CRITICAL TOLERANCES
          </h3>
          <p className="text-xs text-red-800 leading-relaxed">
            Housing bore: Ø25.00 ± 0.01mm<br/>
            Bearing seat: Ø18.00 ± 0.005mm<br/>
            Tip interface: ISO 3964 compliance<br/>
            Spring pre-load: 15 ± 1N
          </p>
        </div>
      </div>
    </div>
  );
}

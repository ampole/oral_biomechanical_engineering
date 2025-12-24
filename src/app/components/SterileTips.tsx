import { Grid } from './Grid';
import { Legend } from './Legend';

export function SterileTips() {
  const legendItems = [
    { number: 1, label: 'Universal Anterior Tip', description: 'Incisors and canines, narrow profile' },
    { number: 2, label: 'Premolar Tip (Bicuspid)', description: 'Two-cusp geometry, moderate width' },
    { number: 3, label: 'Molar Tip - Multi-Root', description: 'Wide base, 3-4 root engagement' },
    { number: 4, label: 'Pediatric Tip', description: 'Reduced dimensions for primary dentition' },
    { number: 5, label: 'Surgical Tip (Root Fragment)', description: 'Narrow, curved for retained roots' },
    { number: 6, label: 'Implant Removal Tip', description: 'Specialized interface for failed implants' },
    { number: 7, label: 'Coupling Interface', description: 'ISO 3964 quick-connect with key alignment' },
    { number: 8, label: 'Sterile Barrier Seal', description: 'Single-use elastomer seal, autoclave-resistant' }
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="bg-white border border-gray-300 p-8">
          <h2 className="text-sm mb-6 text-gray-900" style={{ fontFamily: 'monospace' }}>
            STERILE TIP VARIANTS - INTERCHANGEABLE WORKING ENDS
          </h2>
          
          <svg viewBox="0 0 900 1200" className="w-full">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#1f2937" />
              </marker>
              <pattern id="autoclave" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#10b981" strokeWidth="1" opacity="0.3" />
              </pattern>
              <pattern id="single-use" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1" fill="#ef4444" opacity="0.3" />
              </pattern>
            </defs>

            <Grid width={900} height={1200} spacing={20} />

            {/* Tip comparison matrix */}
            <g transform="translate(50, 50)">
              <text x={0} y={-10} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                TIP GEOMETRY VARIANTS (TOP VIEW & SIDE VIEW)
              </text>
            </g>

            {/* Tip 1: Universal Anterior */}
            <g transform="translate(80, 100)">
              <rect x={0} y={0} width={200} height={140} fill="#fafafa" stroke="#6b7280" strokeWidth="1" />
              
              {/* Header */}
              <rect x={0} y={0} width={200} height={25} fill="#dbeafe" stroke="none" />
              <text x={100} y={16} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                UNIVERSAL ANTERIOR
              </text>
              
              {/* Top view */}
              <g transform="translate(50, 45)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>TOP VIEW</text>
                <ellipse cx={25} cy={20} rx={15} ry={8} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 25 20 L 45 20" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 45 15 L 60 20 L 45 25 Z" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              {/* Side view */}
              <g transform="translate(50, 85)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>SIDE VIEW</text>
                <rect x={10} y={10} width={15} height={20} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 25 15 L 45 15 L 55 20 L 45 25 L 25 25 Z" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              {/* Specs */}
              <text x={10} y={132} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Width: 6mm | Length: 22mm | Angle: 0°
              </text>
              
              <circle cx={180} cy={15} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={180} y={19} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>1</text>
            </g>

            {/* Tip 2: Premolar */}
            <g transform="translate(320, 100)">
              <rect x={0} y={0} width={200} height={140} fill="#fafafa" stroke="#6b7280" strokeWidth="1" />
              
              <rect x={0} y={0} width={200} height={25} fill="#dcfce7" stroke="none" />
              <text x={100} y={16} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                PREMOLAR (BICUSPID)
              </text>
              
              {/* Top view */}
              <g transform="translate(50, 45)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>TOP VIEW</text>
                <ellipse cx={25} cy={20} rx={18} ry={11} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                
                {/* Two-cusp indicator */}
                <line x1={25} y1={9} x2={25} y2={31} stroke="#6b7280" strokeWidth="0.75" strokeDasharray="1,1" />
                
                <path d="M 25 20 L 43 20" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 43 13 L 58 20 L 43 27 Z" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              {/* Side view */}
              <g transform="translate(50, 85)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>SIDE VIEW</text>
                <rect x={10} y={8} width={18} height={24} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 28 12 L 46 12 L 56 20 L 46 28 L 28 28 Z" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              <text x={10} y={132} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Width: 8mm | Length: 20mm | Angle: 0°
              </text>
              
              <circle cx={180} cy={15} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={180} y={19} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>2</text>
            </g>

            {/* Tip 3: Molar Multi-Root */}
            <g transform="translate(560, 100)">
              <rect x={0} y={0} width={200} height={140} fill="#fafafa" stroke="#6b7280" strokeWidth="1" />
              
              <rect x={0} y={0} width={200} height={25} fill="#fef3c7" stroke="none" />
              <text x={100} y={16} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                MOLAR - MULTI-ROOT
              </text>
              
              {/* Top view */}
              <g transform="translate(45, 45)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>TOP VIEW</text>
                
                {/* Irregular molar shape */}
                <path d="M 20 15 Q 15 10 25 8 Q 35 10 38 15 Q 40 20 38 25 Q 35 30 25 32 Q 15 30 20 25 Z" 
                      fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                
                {/* Root indicators */}
                <circle cx={22} cy={18} r={2} fill="#6b7280" />
                <circle cx={30} cy={16} r={2} fill="#6b7280" />
                <circle cx={26} cy={26} r={2} fill="#6b7280" />
                
                <path d="M 38 20 L 48 20" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 48 14 L 63 20 L 48 26 Z" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              {/* Side view */}
              <g transform="translate(45, 85)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>SIDE VIEW</text>
                <rect x={10} y={6} width={22} height={28} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 32 10 L 48 10 L 58 20 L 48 30 L 32 30 Z" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              <text x={10} y={132} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Width: 10mm | Length: 18mm | Angle: 0°
              </text>
              
              <circle cx={180} cy={15} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={180} y={19} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>3</text>
            </g>

            {/* Tip 4: Pediatric */}
            <g transform="translate(80, 270)">
              <rect x={0} y={0} width={200} height={140} fill="#fafafa" stroke="#6b7280" strokeWidth="1" />
              
              <rect x={0} y={0} width={200} height={25} fill="#fce7f3" stroke="none" />
              <text x={100} y={16} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                PEDIATRIC (PRIMARY)
              </text>
              
              {/* Top view */}
              <g transform="translate(55, 45)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>TOP VIEW</text>
                <ellipse cx={25} cy={20} rx={12} ry={7} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 25 20 L 37 20" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 37 16 L 50 20 L 37 24 Z" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              {/* Side view */}
              <g transform="translate(55, 85)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>SIDE VIEW</text>
                <rect x={15} y={12} width={12} height={16} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 27 16 L 40 16 L 48 20 L 40 24 L 27 24 Z" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              <text x={10} y={132} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Width: 5mm | Length: 16mm | Angle: 0°
              </text>
              
              <circle cx={180} cy={15} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={180} y={19} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>4</text>
            </g>

            {/* Tip 5: Surgical (Root Fragment) */}
            <g transform="translate(320, 270)">
              <rect x={0} y={0} width={200} height={140} fill="#fafafa" stroke="#6b7280" strokeWidth="1" />
              
              <rect x={0} y={0} width={200} height={25} fill="#fee2e2" stroke="none" />
              <text x={100} y={16} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                SURGICAL (ROOT FRAG)
              </text>
              
              {/* Top view */}
              <g transform="translate(55, 45)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>TOP VIEW</text>
                <ellipse cx={25} cy={22} rx={8} ry={5} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 25 22 L 33 22" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                
                {/* Curved tip */}
                <path d="M 33 22 Q 45 18 50 15" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 48 12 L 52 15 L 48 17" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              {/* Side view */}
              <g transform="translate(55, 85)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>SIDE VIEW</text>
                <rect x={18} y={14} width={10} height={12} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                
                {/* Angled tip */}
                <path d="M 28 18 L 40 16 L 48 15" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 28 22 L 40 24 L 48 25" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 48 15 L 48 25" fill="none" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              <text x={10} y={132} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Width: 4mm | Length: 24mm | Angle: 15°
              </text>
              
              <circle cx={180} cy={15} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={180} y={19} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>5</text>
            </g>

            {/* Tip 6: Implant Removal */}
            <g transform="translate(560, 270)">
              <rect x={0} y={0} width={200} height={140} fill="#fafafa" stroke="#6b7280" strokeWidth="1" />
              
              <rect x={0} y={0} width={200} height={25} fill="#e0e7ff" stroke="none" />
              <text x={100} y={16} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                IMPLANT REMOVAL
              </text>
              
              {/* Top view */}
              <g transform="translate(50, 45)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>TOP VIEW</text>
                <circle cx={25} cy={20} r={10} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                
                {/* Thread engagement feature */}
                <circle cx={25} cy={20} r={6} fill="none" stroke="#6b7280" strokeWidth="0.75" strokeDasharray="1,1" />
                
                <path d="M 35 20 L 45 20" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <path d="M 45 15 L 58 20 L 45 25 Z" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              {/* Side view */}
              <g transform="translate(50, 85)">
                <text x={0} y={-5} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>SIDE VIEW</text>
                <rect x={15} y={10} width={15} height={20} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                
                {/* Internal threads */}
                <line x1={18} y1={14} x2={27} y2={14} stroke="#6b7280" strokeWidth="0.5" />
                <line x1={18} y1={18} x2={27} y2={18} stroke="#6b7280" strokeWidth="0.5" />
                <line x1={18} y1={22} x2={27} y2={22} stroke="#6b7280" strokeWidth="0.5" />
                <line x1={18} y1={26} x2={27} y2={26} stroke="#6b7280" strokeWidth="0.5" />
                
                <path d="M 30 14 L 45 14 L 55 20 L 45 26 L 30 26 Z" fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
              </g>
              
              <text x={10} y={132} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Width: 6mm | Length: 20mm | Thread: M3
              </text>
              
              <circle cx={180} cy={15} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={180} y={19} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>6</text>
            </g>

            {/* COUPLING INTERFACE DETAIL */}
            <g transform="translate(80, 450)">
              <text x={0} y={-10} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                UNIVERSAL COUPLING INTERFACE (ISO 3964 COMPLIANT)
              </text>
              
              <rect x={0} y={0} width={780} height={200} fill="white" stroke="#6b7280" strokeWidth="1.5" />
              
              {/* Side view - coupling detail */}
              <g transform="translate(50, 30)">
                <text x={0} y={0} className="text-[8px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                  LONGITUDINAL SECTION
                </text>
                
                {/* Male connector (tip side) */}
                <rect x={0} y={20} width={60} height={40} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
                <text x={30} y={42} textAnchor="middle" className="text-[6px]" style={{ fontFamily: 'monospace' }}>
                  TIP SIDE
                </text>
                
                {/* Keying feature */}
                <rect x={50} y={25} width={10} height={8} fill="#3b82f6" stroke="#1e40af" strokeWidth="1" />
                <text x={55} y={22} textAnchor="middle" className="text-[5px] fill-blue-700" style={{ fontFamily: 'monospace' }}>
                  KEY
                </text>
                
                {/* O-ring groove */}
                <rect x={45} y={48} width={15} height={4} fill="#fbbf24" stroke="#92400e" strokeWidth="0.75" />
                
                {/* Female receptor (device side) */}
                <rect x={60} y={15} width={80} height={50} fill="#d1d5db" stroke="#1f2937" strokeWidth="1.5" />
                <rect x={65} y={20} width={70} height={40} fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="2,2" />
                
                <text x={100} y={42} textAnchor="middle" className="text-[6px]" style={{ fontFamily: 'monospace' }}>
                  DEVICE SIDE
                </text>
                
                {/* Locking mechanism */}
                <rect x={125} y={28} width={10} height={24} fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
                <text x={130} y={42} textAnchor="middle" className="text-[5px] fill-white" style={{ fontFamily: 'monospace' }}>
                  LOCK
                </text>
                
                {/* O-ring */}
                <ellipse cx={67.5} cy={50} rx={3} ry={2} fill="#fbbf24" stroke="#92400e" strokeWidth="0.75" />
                
                {/* Annotations */}
                <line x1={67.5} y1={52} x2={67.5} y2={80} stroke="#6b7280" strokeWidth="0.5" />
                <text x={67.5} y={88} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  O-ring seal
                </text>
                
                <circle cx={55} cy={29} r={8} fill="white" stroke="#1f2937" strokeWidth="0.75" />
                <text x={55} y={33} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>7</text>
                
                <circle cx={67.5} cy={50} r={8} fill="white" stroke="#1f2937" strokeWidth="0.75" />
                <text x={67.5} y={54} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>8</text>
              </g>
              
              {/* Engagement sequence */}
              <g transform="translate(250, 30)">
                <text x={0} y={0} className="text-[8px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                  ENGAGEMENT SEQUENCE
                </text>
                
                {/* Step 1 */}
                <g transform="translate(0, 20)">
                  <text x={0} y={0} className="text-[7px]" style={{ fontFamily: 'monospace' }}>1. ALIGN KEY</text>
                  <rect x={0} y={5} width={20} height={12} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1" />
                  <rect x={15} y={7} width={5} height={4} fill="#3b82f6" stroke="#1e40af" strokeWidth="0.5" />
                  <line x1={25} y1={11} x2={35} y2={11} stroke="#2563eb" strokeWidth="1" markerEnd="url(#arrow)" />
                  <rect x={35} y={3} width={30} height={16} fill="#d1d5db" stroke="#1f2937" strokeWidth="1" />
                  <rect x={40} y={5} width={20} height={12} fill="none" stroke="#6b7280" strokeWidth="0.5" strokeDasharray="1,1" />
                </g>
                
                {/* Step 2 */}
                <g transform="translate(80, 20)">
                  <text x={0} y={0} className="text-[7px]" style={{ fontFamily: 'monospace' }}>2. INSERT</text>
                  <rect x={0} y={5} width={20} height={12} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1" />
                  <rect x={10} y={3} width={30} height={16} fill="#d1d5db" stroke="#1f2937" strokeWidth="1" />
                  <circle cx={25} cy={11} r={2} fill="#fbbf24" />
                  <line x1={35} y1={11} x2={45} y2={11} stroke="#2563eb" strokeWidth="1" markerEnd="url(#arrow)" />
                </g>
                
                {/* Step 3 */}
                <g transform="translate(140, 20)">
                  <text x={0} y={0} className="text-[7px]" style={{ fontFamily: 'monospace' }}>3. ROTATE LOCK</text>
                  <rect x={0} y={5} width={20} height={12} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1" />
                  <rect x={10} y={3} width={30} height={16} fill="#d1d5db" stroke="#1f2937" strokeWidth="1" />
                  <rect x={32} y={7} width={6} height={8} fill="#dc2626" stroke="#991b1b" strokeWidth="0.5" />
                  <path d="M 42 8 A 5 5 0 0 1 47 13" fill="none" stroke="#dc2626" strokeWidth="1" markerEnd="url(#arrow)" />
                </g>
                
                {/* Step 4 */}
                <g transform="translate(210, 20)">
                  <text x={0} y={0} className="text-[7px]" style={{ fontFamily: 'monospace' }}>4. VERIFY</text>
                  <rect x={0} y={5} width={20} height={12} fill="#e5e7eb" stroke="#1f2937" strokeWidth="1" />
                  <rect x={10} y={3} width={30} height={16} fill="#d1d5db" stroke="#1f2937" strokeWidth="1" />
                  <circle cx={25} cy={11} r={6} fill="none" stroke="#10b981" strokeWidth="2" />
                  <path d="M 22 11 L 24 13 L 28 9" fill="none" stroke="#10b981" strokeWidth="1.5" />
                </g>
              </g>
              
              {/* Sterility options */}
              <g transform="translate(50, 110)">
                <text x={0} y={0} className="text-[8px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                  STERILIZATION OPTIONS
                </text>
                
                <rect x={0} y={10} width={350} height={60} fill="#dcfce7" stroke="#166534" strokeWidth="1.5" />
                <text x={10} y={28} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  ✓ AUTOCLAVABLE (REUSABLE TIPS)
                </text>
                <rect x={15} y={32} width={80} height={30} fill="url(#autoclave)" stroke="#10b981" strokeWidth="1" />
                <text x={55} y={52} textAnchor="middle" className="text-[6px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                  Steam: 134°C
                </text>
                <text x={55} y={60} textAnchor="middle" className="text-[6px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                  3 min cycle
                </text>
                <text x={110} y={48} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  • Stainless steel tips<br/>
                  • Validated to 200 cycles<br/>
                  • Maintains dimensional stability
                </text>
                
                <rect x={380} y={10} width={350} height={60} fill="#fee2e2" stroke="#991b1b" strokeWidth="1.5" />
                <text x={390} y={28} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  ✓ SINGLE-USE (DISPOSABLE TIPS)
                </text>
                <rect x={395} y={32} width={80} height={30} fill="url(#single-use)" stroke="#ef4444" strokeWidth="1" />
                <text x={435} y={52} textAnchor="middle" className="text-[6px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                  Pre-sterilized
                </text>
                <text x={435} y={60} textAnchor="middle" className="text-[6px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                  Gamma radiation
                </text>
                <text x={490} y={48} className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  • Medical-grade polymer<br/>
                  • Individually packaged<br/>
                  • Eliminates reprocessing
                </text>
              </g>
            </g>

            {/* TIP SELECTION GUIDE */}
            <g transform="translate(80, 690)">
              <text x={0} y={-10} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                TIP SELECTION DECISION MATRIX
              </text>
              
              <rect x={0} y={0} width={780} height={180} fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
              
              {/* Table headers */}
              <rect x={0} y={0} width={180} height={30} fill="#cbd5e1" stroke="none" />
              <text x={90} y={20} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                TOOTH TYPE
              </text>
              
              <rect x={180} y={0} width={150} height={30} fill="#cbd5e1" stroke="none" />
              <text x={255} y={20} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                RECOMMENDED TIP
              </text>
              
              <rect x={330} y={0} width={150} height={30} fill="#cbd5e1" stroke="none" />
              <text x={405} y={20} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                ALTERNATE TIP
              </text>
              
              <rect x={480} y={0} width={300} height={30} fill="#cbd5e1" stroke="none" />
              <text x={630} y={20} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                SPECIAL CONSIDERATIONS
              </text>
              
              {/* Table rows */}
              {[
                { y: 30, tooth: 'Incisors (Central/Lateral)', rec: 'Universal Anterior (1)', alt: 'Pediatric (4) for children', notes: 'Minimal lateral force required' },
                { y: 60, tooth: 'Canines', rec: 'Universal Anterior (1)', alt: 'Surgical (5) if impacted', notes: 'Monitor for torsional stress on curved roots' },
                { y: 90, tooth: 'Premolars (Bicuspids)', rec: 'Premolar Tip (2)', alt: 'Universal Anterior (1)', notes: 'Two-cusp engagement critical' },
                { y: 120, tooth: 'Molars (1st, 2nd, 3rd)', rec: 'Molar Multi-Root (3)', alt: '—', notes: 'Verify 3-4 root engagement before oscillation' },
                { y: 150, tooth: 'Primary Dentition (Pediatric)', rec: 'Pediatric Tip (4)', alt: '—', notes: 'Reduce force threshold to 8N for safety' }
              ].map((row, idx) => (
                <g key={idx}>
                  <rect x={0} y={row.y} width={180} height={30} fill="white" stroke="#cbd5e1" strokeWidth="0.5" />
                  <text x={10} y={row.y + 18} className="text-[6px]" style={{ fontFamily: 'monospace' }}>{row.tooth}</text>
                  
                  <rect x={180} y={row.y} width={150} height={30} fill="white" stroke="#cbd5e1" strokeWidth="0.5" />
                  <text x={255} y={row.y + 18} textAnchor="middle" className="text-[6px]" style={{ fontFamily: 'monospace' }}>{row.rec}</text>
                  
                  <rect x={330} y={row.y} width={150} height={30} fill="white" stroke="#cbd5e1" strokeWidth="0.5" />
                  <text x={405} y={row.y + 18} textAnchor="middle" className="text-[6px]" style={{ fontFamily: 'monospace' }}>{row.alt}</text>
                  
                  <rect x={480} y={row.y} width={300} height={30} fill="white" stroke="#cbd5e1" strokeWidth="0.5" />
                  <text x={490} y={row.y + 18} className="text-[6px]" style={{ fontFamily: 'monospace' }}>{row.notes}</text>
                </g>
              ))}
            </g>

            {/* Material specifications */}
            <g transform="translate(80, 900)">
              <rect x={0} y={0} width={780} height={100} fill="#fef3c7" stroke="#78350f" strokeWidth="1" />
              <text x={10} y={20} className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                TIP MATERIAL SPECIFICATIONS
              </text>
              <line x1={10} y1={25} x2={770} y2={25} stroke="#78350f" strokeWidth="0.5" />
              
              <text x={10} y={42} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • REUSABLE TIPS: Stainless steel 316L (ASTM F138), hardened to 45-50 HRC, passivated surface finish
              </text>
              <text x={10} y={56} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • SINGLE-USE TIPS: PEEK polymer (unfilled, medical grade), biocompatible per ISO 10993-1
              </text>
              <text x={10} y={70} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • O-RING SEALS: Silicone elastomer (USP Class VI), Shore A 70, autoclave-stable to 140°C
              </text>
              <text x={10} y={84} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • COUPLING INTERFACE: Titanium alloy (Ti-6Al-4V) for corrosion resistance, anodized Type II
              </text>
            </g>

            {/* Quality control */}
            <g transform="translate(80, 1020)">
              <rect x={0} y={0} width={780} height={80} fill="#e0e7ff" stroke="#3730a3" strokeWidth="1" />
              <text x={10} y={20} className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                QUALITY CONTROL & VALIDATION
              </text>
              <line x1={10} y1={25} x2={770} y2={25} stroke="#3730a3" strokeWidth="0.5" />
              
              <text x={10} y={42} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Dimensional inspection: ±0.05mm tolerance on critical features (CMM verification)
              </text>
              <text x={10} y={56} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Pull-out force test: Minimum 20N retention force for locked coupling
              </text>
              <text x={10} y={70} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                • Seal integrity: Pressure decay test at 30 kPa for 60 seconds, maximum leak rate 0.1 mL/min
              </text>
            </g>
          </svg>
        </div>
      </div>
      
      <div className="col-span-1">
        <Legend items={legendItems} title="Tip Variant Index" />
        
        <div className="mt-8 bg-indigo-50 border border-indigo-300 p-4">
          <h3 className="text-xs mb-2 text-indigo-900" style={{ fontFamily: 'monospace' }}>
            ISO 3964 COMPLIANCE
          </h3>
          <p className="text-xs text-indigo-800 leading-relaxed">
            The coupling interface adheres to ISO 3964 standard for dental handpiece connections, 
            ensuring compatibility with existing clinical infrastructure and facilitating regulatory approval.
          </p>
        </div>
        
        <div className="mt-4 bg-green-50 border border-green-300 p-4">
          <h3 className="text-xs mb-2 text-green-900" style={{ fontFamily: 'monospace' }}>
            STERILIZATION COMPATIBILITY
          </h3>
          <p className="text-xs text-green-800 leading-relaxed mb-3">
            Tips are available in two configurations:
          </p>
          <div className="text-xs text-green-800 space-y-2">
            <div><strong>Autoclavable:</strong> Stainless steel, validated to 200 cycles</div>
            <div><strong>Single-use:</strong> Pre-sterilized polymer, eliminates reprocessing burden</div>
          </div>
        </div>
        
        <div className="mt-4 bg-amber-50 border border-amber-300 p-4">
          <h3 className="text-xs mb-2 text-amber-900" style={{ fontFamily: 'monospace' }}>
            ⚠ TIP SELECTION WARNING
          </h3>
          <p className="text-xs text-amber-800 leading-relaxed">
            Incorrect tip selection may result in:
            <br/>• Inadequate force distribution
            <br/>• Crown/root fracture
            <br/>• Surrounding alveolar damage
            <br/><br/>
            Always verify tip-to-tooth geometry match before activation.
          </p>
        </div>
      </div>
    </div>
  );
}

import { Grid } from './Grid';
import { Legend } from './Legend';

export function SensingSubsystems() {
  const legendItems = [
    { number: 1, label: 'Axial Force Sensor', description: 'Primary extraction force measurement (Y-axis)' },
    { number: 2, label: 'Lateral Force Sensors (L/R)', description: 'Side-to-side force detection (X-axis)' },
    { number: 3, label: 'Torsional Sensor', description: 'Rotational force measurement (θ-axis)' },
    { number: 4, label: 'Wheatstone Bridge Network', description: 'Differential amplification for noise rejection' },
    { number: 5, label: 'Signal Conditioning Stage', description: 'Low-pass filter, 500 Hz cutoff' },
    { number: 6, label: 'ADC & Microcontroller', description: '16-bit resolution, ARM Cortex-M4' },
    { number: 7, label: 'Safety Comparator Circuit', description: 'Hardware-level force threshold detection' },
    { number: 8, label: 'Emergency Cutoff Relay', description: 'Actuator power disconnect, <2ms response' },
    { number: 9, label: 'Mechanical Compliance Buffer', description: 'Passive overload protection mechanism' },
    { number: 10, label: 'Calibration Reference Point', description: 'Zero-force baseline for drift compensation' }
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="bg-white border border-gray-300 p-8">
          <h2 className="text-sm mb-6 text-gray-900" style={{ fontFamily: 'monospace' }}>
            SENSING & SAFETY SUBSYSTEMS - FUNCTIONAL BLOCK DIAGRAM
          </h2>
          
          <svg viewBox="0 0 900 1100" className="w-full">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#1f2937" />
              </marker>
              <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
              </marker>
              <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
              </marker>
            </defs>

            <Grid width={900} height={1100} spacing={20} />

            {/* FORCE SENSING ARRAY */}
            <g transform="translate(80, 60)">
              <text x={0} y={-10} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                MULTI-AXIS FORCE SENSING ARRAY
              </text>
              
              {/* Physical sensor layout */}
              <rect x={0} y={0} width={250} height={200} fill="#fef3c7" stroke="#78350f" strokeWidth="1.5" />
              
              {/* Axial sensor (top) */}
              <rect x={100} y={20} width={50} height={15} fill="#fbbf24" stroke="#92400e" strokeWidth="1" />
              <text x={125} y={30} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>AXIAL</text>
              <circle cx={125} cy={27} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={125} y={31} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>1</text>
              
              {/* Lateral sensors (left/right) */}
              <rect x={20} y={90} width={15} height={50} fill="#fbbf24" stroke="#92400e" strokeWidth="1" />
              <text x={27} y={118} textAnchor="middle" className="text-[6px]" style={{ fontFamily: 'monospace', writingMode: 'tb' }}>
                LAT-L
              </text>
              <circle cx={27} cy={115} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={27} y={119} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>2</text>
              
              <rect x={215} y={90} width={15} height={50} fill="#fbbf24" stroke="#92400e" strokeWidth="1" />
              <text x={222} y={118} textAnchor="middle" className="text-[6px]" style={{ fontFamily: 'monospace', writingMode: 'tb' }}>
                LAT-R
              </text>
              <circle cx={222} cy={115} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={222} y={119} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>2</text>
              
              {/* Torsional sensor (center) */}
              <circle cx={125} cy={115} r={25} fill="#fbbf24" stroke="#92400e" strokeWidth="1" />
              <text x={125} y={105} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>TORSION</text>
              <circle cx={125} cy={115} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={125} y={119} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>3</text>
              
              {/* Force vectors */}
              <line x1={125} y1={5} x2={125} y2={-20} stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrow-red)" />
              <text x={135} y={-15} className="text-[7px] fill-red-600" style={{ fontFamily: 'monospace' }}>F_axial</text>
              
              <line x1={5} y1={115} x2={-20} y2={115} stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrow-red)" />
              <text x={-25} y={110} textAnchor="end" className="text-[7px] fill-red-600" style={{ fontFamily: 'monospace' }}>F_lat</text>
              
              <line x1={245} y1={115} x2={270} y2={115} stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrow-red)" />
              <text x={275} y={110} className="text-[7px] fill-red-600" style={{ fontFamily: 'monospace' }}>F_lat</text>
              
              {/* Torsion indicator */}
              <path d="M 140 115 A 15 15 0 0 1 125 130" fill="none" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrow-red)" />
              <text x={145} y={130} className="text-[7px] fill-red-600" style={{ fontFamily: 'monospace' }}>τ</text>
              
              {/* Calibration point */}
              <circle cx={125} cy={175} r={5} fill="#3b82f6" stroke="#1e40af" strokeWidth="1" />
              <text x={125} y={190} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                CAL REF
              </text>
              <circle cx={145} cy={175} r={8} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={145} y={179} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>10</text>
            </g>

            {/* SIGNAL CONDITIONING */}
            <g transform="translate(80, 300)">
              <text x={0} y={-10} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                SIGNAL CONDITIONING & PROCESSING CHAIN
              </text>
              
              {/* Wheatstone Bridge */}
              <rect x={0} y={0} width={120} height={90} fill="#dcfce7" stroke="#166534" strokeWidth="1.5" />
              <text x={60} y={15} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                Wheatstone Bridge
              </text>
              
              {/* Bridge circuit representation */}
              <g transform="translate(60, 45)">
                <line x1={0} y1={-20} x2={0} y2={20} stroke="#16a34a" strokeWidth="1" />
                <line x1={-20} y1={0} x2={20} y2={0} stroke="#16a34a" strokeWidth="1" />
                <rect x={-5} y={-25} width={10} height={10} fill="#fbbf24" stroke="#92400e" strokeWidth="0.5" />
                <rect x={-5} y={15} width={10} height={10} fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />
                <rect x={-25} y={-5} width={10} height={10} fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />
                <rect x={15} y={-5} width={10} height={10} fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />
              </g>
              
              <text x={60} y={80} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                R₁(strain) / R₂,R₃,R₄(ref)
              </text>
              
              <circle cx={100} cy={45} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={100} y={49} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>4</text>
              
              <line x1={120} y1={45} x2={160} y2={45} stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <text x={140} y={40} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                V_diff
              </text>
              
              {/* Amplifier */}
              <g transform="translate(160, 0)">
                <path d="M 0 20 L 50 45 L 0 70 Z" fill="#dbeafe" stroke="#1e3a8a" strokeWidth="1.5" />
                <text x={25} y={50} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  AMP
                </text>
                <text x={25} y={85} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  Gain: 500x
                </text>
              </g>
              
              <line x1={210} y1={45} x2={250} y2={45} stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow)" />
              
              {/* Low-pass filter */}
              <g transform="translate(250, 0)">
                <rect x={0} y={20} width={80} height={50} fill="#fef3c7" stroke="#78350f" strokeWidth="1.5" />
                <text x={40} y={38} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  LOW-PASS
                </text>
                <text x={40} y={50} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  FILTER
                </text>
                <text x={40} y={62} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  f_c = 500 Hz
                </text>
                
                {/* Filter response curve */}
                <path d="M 10 78 L 30 78 Q 50 78 60 88 L 70 95" fill="none" stroke="#92400e" strokeWidth="0.75" />
              </g>
              
              <circle cx={290} cy={45} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={290} y={49} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>5</text>
              
              <line x1={330} y1={45} x2={370} y2={45} stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <text x={350} y={40} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Analog
              </text>
            </g>

            {/* DIGITAL PROCESSING */}
            <g transform="translate(470, 300)">
              <rect x={0} y={0} width={140} height={110} fill="#ede9fe" stroke="#5b21b6" strokeWidth="1.5" />
              <text x={70} y={20} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                ADC & μC
              </text>
              
              {/* ADC block */}
              <rect x={20} y={30} width={100} height={30} fill="#dbeafe" stroke="#1e3a8a" strokeWidth="1" />
              <text x={70} y={48} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                16-bit ADC
              </text>
              <text x={70} y={56} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                1000 samples/sec
              </text>
              
              {/* Microcontroller */}
              <rect x={20} y={65} width={100} height={30} fill="#1f2937" stroke="#000" strokeWidth="1" />
              <text x={70} y={83} textAnchor="middle" className="text-[7px] fill-white" style={{ fontFamily: 'monospace' }}>
                ARM Cortex-M4
              </text>
              <text x={70} y={91} textAnchor="middle" className="text-[6px] fill-gray-400" style={{ fontFamily: 'monospace' }}>
                72 MHz
              </text>
              
              <circle cx={120} cy={55} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
              <text x={120} y={59} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>6</text>
              
              <line x1={140} y1={55} x2={180} y2={55} stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <text x={160} y={50} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Digital
              </text>
            </g>

            {/* SAFETY SYSTEM */}
            <g transform="translate(80, 480)">
              <text x={0} y={-10} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                SAFETY GOVERNOR SYSTEM - DUAL REDUNDANCY
              </text>
              
              <rect x={0} y={0} width={800} height={200} fill="#fef2f2" stroke="#991b1b" strokeWidth="2" />
              
              {/* Software safety path */}
              <g transform="translate(30, 30)">
                <text x={0} y={0} className="text-[8px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                  SOFTWARE SAFETY PATH
                </text>
                
                <rect x={0} y={10} width={100} height={50} fill="#dbeafe" stroke="#1e3a8a" strokeWidth="1" />
                <text x={50} y={28} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  Force Monitor
                </text>
                <text x={50} y={40} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  Threshold: 15N
                </text>
                <text x={50} y={50} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  Latency: ~5ms
                </text>
                
                <line x1={100} y1={35} x2={140} y2={35} stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x={120} y={30} textAnchor="middle" className="text-[6px] fill-red-600" style={{ fontFamily: 'monospace' }}>
                  F &gt; 15N
                </text>
                
                <rect x={140} y={10} width={100} height={50} fill="#fef3c7" stroke="#78350f" strokeWidth="1" />
                <text x={190} y={28} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  Software Cutoff
                </text>
                <text x={190} y={40} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  PWM disable
                </text>
                <text x={190} y={50} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  Reset required
                </text>
                
                <line x1={240} y1={35} x2={280} y2={35} stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow-red)" />
                <text x={260} y={30} textAnchor="middle" className="text-[6px] fill-red-600" style={{ fontFamily: 'monospace' }}>
                  STOP
                </text>
              </g>
              
              {/* Hardware safety path */}
              <g transform="translate(30, 110)">
                <text x={0} y={0} className="text-[8px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                  HARDWARE SAFETY PATH (INDEPENDENT)
                </text>
                
                <rect x={0} y={10} width={100} height={50} fill="#dcfce7" stroke="#166534" strokeWidth="1" />
                <text x={50} y={25} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  Comparator
                </text>
                <text x={50} y={35} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  Circuit
                </text>
                <text x={50} y={47} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  V_ref = 15N equiv
                </text>
                <text x={50} y={55} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  Response: &lt;1ms
                </text>
                
                <circle cx={90} cy={35} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
                <text x={90} y={39} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>7</text>
                
                <line x1={100} y1={35} x2={140} y2={35} stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x={120} y={30} textAnchor="middle" className="text-[6px] fill-red-600" style={{ fontFamily: 'monospace' }}>
                  TRIP
                </text>
                
                <rect x={140} y={10} width={100} height={50} fill="#fee2e2" stroke="#991b1b" strokeWidth="1.5" />
                <text x={190} y={25} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  Emergency
                </text>
                <text x={190} y={35} textAnchor="middle" className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                  Relay
                </text>
                <text x={190} y={47} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  Normally closed
                </text>
                <text x={190} y={55} textAnchor="middle" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                  Fail-safe
                </text>
                
                <circle cx={230} cy={35} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
                <text x={230} y={39} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>8</text>
                
                <line x1={240} y1={35} x2={280} y2={35} stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow-red)" />
                <text x={260} y={30} textAnchor="middle" className="text-[6px] fill-red-600" style={{ fontFamily: 'monospace' }}>
                  STOP
                </text>
              </g>
              
              {/* Mechanical compliance */}
              <g transform="translate(400, 30)">
                <text x={0} y={0} className="text-[8px] fill-gray-700" style={{ fontFamily: 'monospace' }}>
                  MECHANICAL COMPLIANCE (PASSIVE)
                </text>
                
                <rect x={0} y={10} width={350} height={130} fill="#f0fdf4" stroke="#166534" strokeWidth="1.5" />
                
                {/* Spring diagram */}
                <g transform="translate(50, 40)">
                  <path d="M 0 0 Q 10 10 0 20 Q -10 30 0 40 Q 10 50 0 60 Q -10 70 0 80" 
                        fill="none" stroke="#10b981" strokeWidth="2" />
                  <line x1={-20} y1={0} x2={20} y2={0} stroke="#1f2937" strokeWidth="2" />
                  <line x1={-20} y1={80} x2={20} y2={80} stroke="#1f2937" strokeWidth="2" />
                  
                  <text x={30} y={40} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                    k = 2.5 N/mm
                  </text>
                  
                  <path d="M 60 20 L 80 20" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <path d="M 60 60 L 80 60" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x={90} y={25} className="text-[6px] fill-amber-700" style={{ fontFamily: 'monospace' }}>
                    Δmax = ±2.5mm
                  </text>
                  <text x={90} y={65} className="text-[6px] fill-amber-700" style={{ fontFamily: 'monospace' }}>
                    F_limit ≈ 6.25N
                  </text>
                </g>
                
                <circle cx={320} cy={75} r={10} fill="white" stroke="#1f2937" strokeWidth="0.75" />
                <text x={320} y={79} textAnchor="middle" className="text-[8px]" style={{ fontFamily: 'monospace' }}>9</text>
                
                <text x={175} y={128} textAnchor="middle" className="text-[7px] fill-green-800" style={{ fontFamily: 'monospace' }}>
                  Provides passive overload protection even if electronics fail
                </text>
              </g>
            </g>

            {/* FORCE PROFILE DIAGRAM */}
            <g transform="translate(80, 720)">
              <text x={0} y={-10} className="text-[9px]" style={{ fontFamily: 'monospace' }}>
                FORCE PROFILE & SAFETY THRESHOLDS
              </text>
              
              <rect x={0} y={0} width={800} height={250} fill="white" stroke="#6b7280" strokeWidth="1" />
              
              {/* Axes */}
              <line x1={50} y1={200} x2={750} y2={200} stroke="#1f2937" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <text x={760} y={205} className="text-[7px]" style={{ fontFamily: 'monospace' }}>t (s)</text>
              
              <line x1={50} y1={200} x2={50} y2={20} stroke="#1f2937" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <text x={35} y={15} className="text-[7px]" style={{ fontFamily: 'monospace' }}>F (N)</text>
              
              {/* Grid lines */}
              <line x1={50} y1={150} x2={750} y2={150} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1={50} y1={100} x2={750} y2={100} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1={50} y1={50} x2={750} y2={50} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
              
              {/* Y-axis labels */}
              <text x={40} y={203} textAnchor="end" className="text-[6px]" style={{ fontFamily: 'monospace' }}>0</text>
              <text x={40} y={153} textAnchor="end" className="text-[6px]" style={{ fontFamily: 'monospace' }}>5</text>
              <text x={40} y={103} textAnchor="end" className="text-[6px]" style={{ fontFamily: 'monospace' }}>10</text>
              <text x={40} y={53} textAnchor="end" className="text-[6px]" style={{ fontFamily: 'monospace' }}>15</text>
              
              {/* Safety threshold line */}
              <line x1={50} y1={50} x2={750} y2={50} stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" />
              <text x={700} y={45} textAnchor="end" className="text-[7px] fill-red-600" style={{ fontFamily: 'monospace' }}>
                SAFETY THRESHOLD (15N)
              </text>
              
              {/* Mechanical compliance limit */}
              <line x1={50} y1={137.5} x2={750} y2={137.5} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x={700} y={132} textAnchor="end" className="text-[7px] fill-amber-600" style={{ fontFamily: 'monospace' }}>
                MECHANICAL LIMIT (6.25N)
              </text>
              
              {/* Normal operating range */}
              <rect x={50} y={162.5} width={700} height={37.5} fill="#dcfce7" fillOpacity="0.3" stroke="none" />
              <text x={400} y={185} textAnchor="middle" className="text-[6px] fill-green-700" style={{ fontFamily: 'monospace' }}>
                NORMAL OPERATING RANGE (0-5N)
              </text>
              
              {/* Example force curve */}
              <path d="M 50 200 L 150 180 Q 250 160 350 170 L 450 140 L 480 80 L 485 60" 
                    fill="none" stroke="#2563eb" strokeWidth="2" />
              
              {/* Cutoff indicator */}
              <line x1={485} y1={60} x2={485} y2={200} stroke="#dc2626" strokeWidth="2" strokeDasharray="2,2" />
              <text x={490} y={130} className="text-[7px] fill-red-600" style={{ fontFamily: 'monospace' }}>
                CUTOFF
              </text>
              <text x={490} y={142} className="text-[7px] fill-red-600" style={{ fontFamily: 'monospace' }}>
                TRIGGERED
              </text>
              
              {/* Post-cutoff */}
              <path d="M 485 60 L 750 60" fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="1,1" />
              
              {/* Annotations */}
              <circle cx={350} cy={170} r={3} fill="#2563eb" />
              <line x1={350} y1={170} x2={320} y2={140} stroke="#6b7280" strokeWidth="0.5" />
              <text x={315} y={135} textAnchor="end" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                Normal extraction
              </text>
              <text x={315} y={145} textAnchor="end" className="text-[6px] fill-gray-600" style={{ fontFamily: 'monospace' }}>
                force profile
              </text>
              
              <circle cx={480} cy={80} r={3} fill="#dc2626" />
              <line x1={480} y1={80} x2={450} y2={60} stroke="#6b7280" strokeWidth="0.5" />
              <text x={445} y={55} textAnchor="end" className="text-[6px] fill-red-700" style={{ fontFamily: 'monospace' }}>
                Excessive force
              </text>
              <text x={445} y={65} textAnchor="end" className="text-[6px] fill-red-700" style={{ fontFamily: 'monospace' }}>
                detected
              </text>
            </g>

            {/* Calibration procedure */}
            <g transform="translate(80, 1000)">
              <rect x={0} y={0} width={800} height={80} fill="#fef3c7" stroke="#78350f" strokeWidth="1" />
              <text x={10} y={20} className="text-[8px]" style={{ fontFamily: 'monospace' }}>
                CALIBRATION & VALIDATION PROCEDURE
              </text>
              <line x1={10} y1={25} x2={790} y2={25} stroke="#78350f" strokeWidth="0.5" />
              
              <text x={10} y={42} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                1. Zero-force baseline: Record sensor output with no load, temperature-compensated (25±2°C)
              </text>
              <text x={10} y={56} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                2. Apply known loads: 1N, 5N, 10N, 15N using NIST-traceable force calibrator
              </text>
              <text x={10} y={70} className="text-[7px]" style={{ fontFamily: 'monospace' }}>
                3. Verify safety cutoff: Apply 16N force, confirm cutoff triggers within 2ms (hardware) and 10ms (software)
              </text>
            </g>
          </svg>
        </div>
      </div>
      
      <div className="col-span-1">
        <Legend items={legendItems} title="Sensing System Components" />
        
        <div className="mt-8 bg-green-50 border border-green-300 p-4">
          <h3 className="text-xs mb-2 text-green-900" style={{ fontFamily: 'monospace' }}>
            REDUNDANT SAFETY
          </h3>
          <p className="text-xs text-green-800 leading-relaxed mb-3">
            Three independent safety mechanisms protect against excessive force application:
          </p>
          <div className="text-xs text-green-800 space-y-2">
            <div><strong>1. Mechanical:</strong> Passive compliance (always active, fail-safe)</div>
            <div><strong>2. Hardware:</strong> Analog comparator circuit (&lt;1ms response)</div>
            <div><strong>3. Software:</strong> Digital monitoring (~5ms latency)</div>
          </div>
        </div>
        
        <div className="mt-4 bg-blue-50 border border-blue-300 p-4">
          <h3 className="text-xs mb-2 text-blue-900" style={{ fontFamily: 'monospace' }}>
            FORCE RESOLUTION
          </h3>
          <p className="text-xs text-blue-800 leading-relaxed">
            16-bit ADC provides theoretical resolution of:<br/><br/>
            <code className="text-[10px]">
              15N / 2^16 = 0.23 mN
            </code><br/><br/>
            Practical resolution: <strong>±0.1N</strong> (accounting for noise floor and thermal drift)
          </p>
        </div>
        
        <div className="mt-4 bg-yellow-50 border border-yellow-600 p-4">
          <h3 className="text-xs mb-2 text-yellow-900" style={{ fontFamily: 'monospace' }}>
            ⚡ FAIL-SAFE BEHAVIOR
          </h3>
          <p className="text-xs text-yellow-800 leading-relaxed">
            Power loss → Relay opens → Actuation stops<br/>
            Sensor fault → Default to max force reading → Cutoff triggers<br/>
            MCU crash → Watchdog timeout → System reset
          </p>
        </div>
      </div>
    </div>
  );
}

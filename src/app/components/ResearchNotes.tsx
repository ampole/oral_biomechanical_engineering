export function ResearchNotes() {
  return (
    <div className="space-y-8">
      <div className="bg-white border-2 border-amber-500 p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="text-4xl">⚠️</div>
          <div>
            <h2 className="text-lg mb-2 text-amber-900" style={{ fontFamily: 'monospace' }}>
              NON-FINAL RESEARCH DOCUMENTATION
            </h2>
            <p className="text-sm text-amber-800">
              The following information represents preliminary research directions, open questions, 
              and areas requiring further validation. This page is clearly marked as NON-FINAL and 
              should not be considered approved specifications.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Open Research Questions */}
        <div className="bg-white border border-gray-300 p-6">
          <h3 className="text-sm mb-4 text-gray-900 border-b border-gray-300 pb-2" style={{ fontFamily: 'monospace' }}>
            OPEN RESEARCH QUESTIONS
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-xs mb-2 text-blue-700" style={{ fontFamily: 'monospace' }}>
                1. Optimal Oscillation Parameters
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                <strong>Question:</strong> What oscillation frequency and amplitude combination minimizes 
                alveolar trauma while maximizing extraction efficiency?
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Proposed Study:</strong> Cadaver study with N=30 teeth, testing frequencies 
                50-200 Hz at amplitudes 0.5-2.5mm. Measure periodontal ligament preservation via 
                histological analysis.
              </p>
            </div>

            <div>
              <h4 className="text-xs mb-2 text-blue-700" style={{ fontFamily: 'monospace' }}>
                2. Patient Pain Perception
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                <strong>Question:</strong> Does micro-oscillation reduce intra-operative pain compared 
                to conventional forceps extraction?
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Proposed Study:</strong> Prospective RCT, N=100 patients, VAS pain scores at 
                extraction and 24h post-op. Secondary outcomes: analgesic consumption, time to normal function.
              </p>
            </div>

            <div>
              <h4 className="text-xs mb-2 text-blue-700" style={{ fontFamily: 'monospace' }}>
                3. Force Feedback Granularity
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                <strong>Question:</strong> Is 0.1N force resolution sufficient for clinical differentiation 
                between "normal" and "excessive" extraction force?
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Proposed Study:</strong> Expert surgeon feedback during simulated extractions. 
                Test whether 0.1N, 0.5N, or 1.0N resolution provides clinically actionable information.
              </p>
            </div>

            <div>
              <h4 className="text-xs mb-2 text-blue-700" style={{ fontFamily: 'monospace' }}>
                4. Long-term Device Reliability
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                <strong>Question:</strong> What is the mean time between failures (MTBF) for the 
                actuator assembly under clinical use conditions?
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Proposed Study:</strong> Accelerated lifecycle testing, simulating 1000 
                extractions. Monitor bearing wear, spring fatigue, sensor drift.
              </p>
            </div>
          </div>
        </div>

        {/* Iteration Priorities */}
        <div className="bg-white border border-gray-300 p-6">
          <h3 className="text-sm mb-4 text-gray-900 border-b border-gray-300 pb-2" style={{ fontFamily: 'monospace' }}>
            ITERATION PRIORITIES (Next 6 Months)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-300 p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 bg-red-600 text-white" style={{ fontFamily: 'monospace' }}>
                  CRITICAL
                </span>
                <h4 className="text-xs text-red-900" style={{ fontFamily: 'monospace' }}>
                  Safety System Validation
                </h4>
              </div>
              <p className="text-xs text-red-800 leading-relaxed">
                Complete IEC 60601-1 electrical safety testing and mechanical force limiter validation 
                under worst-case fault conditions. Must demonstrate fail-safe behavior.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-300 p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 bg-orange-600 text-white" style={{ fontFamily: 'monospace' }}>
                  HIGH
                </span>
                <h4 className="text-xs text-orange-900" style={{ fontFamily: 'monospace' }}>
                  Ergonomic Assessment
                </h4>
              </div>
              <p className="text-xs text-orange-800 leading-relaxed">
                Conduct surgeon usability testing (N=10 clinicians). Measure grip force, wrist strain, 
                and procedural time. Iterate handpiece interface based on feedback.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 bg-yellow-600 text-white" style={{ fontFamily: 'monospace' }}>
                  MEDIUM
                </span>
                <h4 className="text-xs text-yellow-900" style={{ fontFamily: 'monospace' }}>
                  Tip Material Optimization
                </h4>
              </div>
              <p className="text-xs text-yellow-800 leading-relaxed">
                Evaluate alternative materials (titanium alloy, zirconia ceramic) for improved 
                wear resistance and reduced weight. Cost-benefit analysis required.
              </p>
            </div>

            <div className="bg-green-50 border border-green-300 p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 bg-green-600 text-white" style={{ fontFamily: 'monospace' }}>
                  LOW
                </span>
                <h4 className="text-xs text-green-900" style={{ fontFamily: 'monospace' }}>
                  Data Logging Interface
                </h4>
              </div>
              <p className="text-xs text-green-800 leading-relaxed">
                Develop optional USB data export for force profiles. Academic research tool only—
                not for patient records (non-clinical use).
              </p>
            </div>
          </div>
        </div>

        {/* Known Limitations */}
        <div className="bg-white border border-gray-300 p-6">
          <h3 className="text-sm mb-4 text-gray-900 border-b border-gray-300 pb-2" style={{ fontFamily: 'monospace' }}>
            KNOWN LIMITATIONS & CONSTRAINTS
          </h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-xs mb-1 text-gray-800" style={{ fontFamily: 'monospace' }}>
                ⚠ Limited Clinical Evidence
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Device has not yet undergone clinical trials. Efficacy and safety claims are based 
                on theoretical models and bench testing only.
              </p>
            </div>

            <div>
              <h4 className="text-xs mb-1 text-gray-800" style={{ fontFamily: 'monospace' }}>
                ⚠ Single-Tooth Application
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Current design addresses single-tooth extraction only. Multi-tooth or full-arch 
                procedures require separate tooling.
              </p>
            </div>

            <div>
              <h4 className="text-xs mb-1 text-gray-800" style={{ fontFamily: 'monospace' }}>
                ⚠ Battery Life (If Cordless Version)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Estimated 15-20 procedures per charge. High-torque oscillation drains battery quickly. 
                Wired version may be necessary for high-volume clinics.
              </p>
            </div>

            <div>
              <h4 className="text-xs mb-1 text-gray-800" style={{ fontFamily: 'monospace' }}>
                ⚠ Cost vs. Benefit Analysis Pending
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Estimated device cost: $8,000-$12,000 USD. Reimbursement pathways unclear. 
                Cost-effectiveness study needed to justify adoption.
              </p>
            </div>

            <div>
              <h4 className="text-xs mb-1 text-gray-800" style={{ fontFamily: 'monospace' }}>
                ⚠ Learning Curve
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Clinicians accustomed to forceps may require 10-15 supervised procedures to achieve 
                proficiency. Training program development required.
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Pathway */}
        <div className="bg-white border border-gray-300 p-6">
          <h3 className="text-sm mb-4 text-gray-900 border-b border-gray-300 pb-2" style={{ fontFamily: 'monospace' }}>
            REGULATORY PATHWAY (PRELIMINARY)
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-xs mb-2 text-purple-700" style={{ fontFamily: 'monospace' }}>
                FDA Classification (US)
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                <strong>Predicted Class:</strong> Class II (moderate risk)<br/>
                <strong>Predicate Device:</strong> Powered dental extraction instruments (if available)
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Pathway:</strong> 510(k) premarket notification, demonstrating substantial 
                equivalence to existing devices. Estimated timeline: 12-18 months.
              </p>
            </div>

            <div>
              <h4 className="text-xs mb-2 text-purple-700" style={{ fontFamily: 'monospace' }}>
                CE Marking (EU)
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                <strong>Regulation:</strong> Medical Device Regulation (MDR) 2017/745<br/>
                <strong>Classification:</strong> Class IIa or IIb (TBD based on risk analysis)
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Pathway:</strong> Notified Body review, clinical evaluation report, technical 
                documentation. Estimated timeline: 18-24 months.
              </p>
            </div>

            <div>
              <h4 className="text-xs mb-2 text-purple-700" style={{ fontFamily: 'monospace' }}>
                Standards Compliance Checklist
              </h4>
              <div className="text-xs text-gray-600 space-y-1">
                <div>☐ IEC 60601-1: Electrical safety of medical devices</div>
                <div>☐ ISO 14971: Risk management</div>
                <div>☐ ISO 10993: Biocompatibility testing</div>
                <div>☐ ISO 13485: Quality management system</div>
                <div>☐ IEC 60601-1-2: Electromagnetic compatibility</div>
                <div>☐ ISO 17664: Sterilization and reprocessing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="bg-white border border-gray-300 p-6 col-span-2">
          <h3 className="text-sm mb-4 text-gray-900 border-b border-gray-300 pb-2" style={{ fontFamily: 'monospace' }}>
            FUTURE ENHANCEMENT ROADMAP (2-5 Years)
          </h3>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4">
              <h4 className="text-xs mb-2 text-blue-900" style={{ fontFamily: 'monospace' }}>
                GENERATION 2: AI-Assisted
              </h4>
              <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
                <li>Machine learning force profile recognition</li>
                <li>Predictive root fracture risk scoring</li>
                <li>Adaptive oscillation parameters</li>
                <li>Real-time surgeon guidance overlay</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4">
              <h4 className="text-xs mb-2 text-indigo-900" style={{ fontFamily: 'monospace' }}>
                GENERATION 3: Robotic Integration
              </h4>
              <ul className="text-xs text-indigo-800 space-y-1 list-disc list-inside">
                <li>Semi-autonomous force control</li>
                <li>Integration with surgical robots</li>
                <li>CT-guided navigation system</li>
                <li>Haptic feedback for remote operation</li>
              </ul>
            </div>

            <div className="bg-violet-50 p-4">
              <h4 className="text-xs mb-2 text-violet-900" style={{ fontFamily: 'monospace' }}>
                ADJACENT APPLICATIONS
              </h4>
              <ul className="text-xs text-violet-800 space-y-1 list-disc list-inside">
                <li>Implant removal tool variant</li>
                <li>Orthodontic bracket debonding</li>
                <li>Bone grafting material placement</li>
                <li>Periodontal scaling attachment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collaboration Opportunities */}
        <div className="bg-white border border-gray-300 p-6 col-span-2">
          <h3 className="text-sm mb-4 text-gray-900 border-b border-gray-300 pb-2" style={{ fontFamily: 'monospace' }}>
            OPEN-SOURCE COLLABORATION OPPORTUNITIES
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs mb-3 text-green-700" style={{ fontFamily: 'monospace' }}>
                Areas Seeking External Contribution
              </h4>
              <div className="space-y-3 text-xs text-gray-700">
                <div>
                  <strong>Biomechanical Modeling:</strong> Finite element analysis of periodontal 
                  ligament stress distribution during oscillation. Need expertise in dental biomechanics.
                </div>
                <div>
                  <strong>Embedded Systems:</strong> Optimization of real-time force processing 
                  algorithm. Looking for contributors familiar with ARM Cortex-M DSP libraries.
                </div>
                <div>
                  <strong>Clinical Validation:</strong> Partner institutions willing to conduct 
                  IRB-approved pilot studies. Equipment and training provided.
                </div>
                <div>
                  <strong>Regulatory Affairs:</strong> Guidance on navigating FDA/CE pathways for 
                  Class II dental devices. Consultants or advisors welcome.
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs mb-3 text-green-700" style={{ fontFamily: 'monospace' }}>
                Licensing & IP Considerations
              </h4>
              <div className="space-y-3 text-xs text-gray-700">
                <div>
                  <strong>Open Hardware:</strong> Mechanical designs released under CERN OHL v2 
                  (permissive). Commercial use allowed with attribution.
                </div>
                <div>
                  <strong>Software:</strong> Firmware and control algorithms under MIT License. 
                  Encourage derivative works and improvements.
                </div>
                <div>
                  <strong>Patents:</strong> Patent application pending on force-limiting oscillation 
                  mechanism. Defensive patent strategy—will not enforce against academic/non-profit use.
                </div>
                <div>
                  <strong>Trademark:</strong> Device name TBD. Seeking community input on branding 
                  that conveys clinical trust without marketing hype.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk & Ethics */}
      <div className="bg-red-50 border-2 border-red-500 p-6">
        <h3 className="text-sm mb-4 text-red-900 border-b border-red-400 pb-2" style={{ fontFamily: 'monospace' }}>
          RISK ANALYSIS & ETHICAL CONSIDERATIONS
        </h3>
        
        <div className="grid grid-cols-2 gap-6 text-xs">
          <div className="text-red-900">
            <h4 className="mb-2" style={{ fontFamily: 'monospace' }}>Foreseeable Hazards</h4>
            <ul className="space-y-1 list-disc list-inside text-red-800">
              <li>Excessive force application due to sensor failure → alveolar fracture</li>
              <li>Vibration transmission to adjacent teeth → iatrogenic loosening</li>
              <li>Infection risk from inadequate tip sterilization</li>
              <li>Electrical shock hazard if insulation fails (IEC 60601-1 critical)</li>
              <li>Thermal injury from prolonged oscillation (&gt;60 seconds continuous use)</li>
            </ul>
          </div>
          
          <div className="text-red-900">
            <h4 className="mb-2" style={{ fontFamily: 'monospace' }}>Ethical Design Principles</h4>
            <ul className="space-y-1 list-disc list-inside text-red-800">
              <li><strong>First, do no harm:</strong> Safety systems prioritized over performance</li>
              <li><strong>Transparency:</strong> All force data and safety events must be loggable</li>
              <li><strong>Accessibility:</strong> Target cost &lt;$10k to avoid limiting to elite practices</li>
              <li><strong>Right to repair:</strong> Service manuals and spare parts publicly available</li>
              <li><strong>Data privacy:</strong> No PII collection; device operates offline</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact & Contribution */}
      <div className="bg-gray-100 border border-gray-400 p-6">
        <h3 className="text-sm mb-4 text-gray-900" style={{ fontFamily: 'monospace' }}>
          CONTRIBUTE TO THIS PROJECT
        </h3>
        
        <div className="grid grid-cols-3 gap-6 text-xs text-gray-700">
          <div>
            <h4 className="mb-2 text-gray-900" style={{ fontFamily: 'monospace' }}>Research Collaboration</h4>
            <p className="leading-relaxed">
              Academic institutions interested in clinical validation studies, biomechanical 
              modeling, or regulatory pathway support.
            </p>
          </div>
          
          <div>
            <h4 className="mb-2 text-gray-900" style={{ fontFamily: 'monospace' }}>Engineering Contributions</h4>
            <p className="leading-relaxed">
              Mechanical, electrical, and software engineers. GitHub repository: 
              [placeholder—will be established upon project maturity]
            </p>
          </div>
          
          <div>
            <h4 className="mb-2 text-gray-900" style={{ fontFamily: 'monospace' }}>Clinical Feedback</h4>
            <p className="leading-relaxed">
              Practicing oral surgeons and general dentists. Your insights shape design iteration. 
              Anonymous feedback form: [placeholder]
            </p>
          </div>
        </div>
      </div>

      {/* Version History */}
      <div className="bg-white border border-gray-300 p-6">
        <h3 className="text-sm mb-4 text-gray-900 border-b border-gray-300 pb-2" style={{ fontFamily: 'monospace' }}>
          DOCUMENTATION VERSION HISTORY
        </h3>
        
        <div className="space-y-2 text-xs text-gray-700" style={{ fontFamily: 'monospace' }}>
          <div className="flex gap-4">
            <span className="text-gray-500">Rev 1.0</span>
            <span className="text-gray-500">{new Date().toISOString().split('T')[0]}</span>
            <span>Initial release of technical schematic documentation</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500">Rev 0.9</span>
            <span className="text-gray-500">2024-11-15</span>
            <span>Pre-release draft for internal review</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500">Rev 0.5</span>
            <span className="text-gray-500">2024-09-08</span>
            <span>Concept sketches and preliminary force calculations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
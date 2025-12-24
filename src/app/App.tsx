import { useState } from 'react';
import { SystemOverview } from './components/SystemOverview';
import { ExplodedView } from './components/ExplodedView';
import { SensingSubsystems } from './components/SensingSubsystems';
import { SterileTips } from './components/SterileTips';
import { ResearchNotes } from './components/ResearchNotes';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { title: 'System Overview Diagram', component: SystemOverview },
    { title: 'Exploded Mechanical View', component: ExplodedView },
    { title: 'Sensing & Safety Subsystems', component: SensingSubsystems },
    { title: 'Sterile Tip Variants', component: SterileTips },
    { title: 'Future Research / Iteration Notes', component: ResearchNotes }
  ];

  const CurrentComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-300 px-8 py-4">
        <div className="max-w-[1600px] mx-auto">
          <h1 className="text-gray-900 mb-1">Modular Oral Biomechanical Dental Extraction Assist Device</h1>
          <p className="text-gray-600 text-sm">Technical Schematic Documentation | Rev. 1.0 | {new Date().toISOString().split('T')[0]}</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-8 py-3">
        <div className="max-w-[1600px] mx-auto flex gap-1">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`px-4 py-2 text-sm transition-colors ${
                currentPage === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {index + 1}. {page.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-8 py-8">
        <div className="max-w-[1600px] mx-auto">
          <CurrentComponent />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 px-8 py-4 mt-12">
        <div className="max-w-[1600px] mx-auto text-center text-xs text-gray-500">
          <p>CONFIDENTIAL - For Research and Development Purposes Only</p>
          <p className="mt-1">Not Approved for Clinical Use | This device is in development and has not received regulatory clearance</p>
        </div>
      </footer>
    </div>
  );
}

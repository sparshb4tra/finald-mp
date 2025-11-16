'use client'

import React, { useState } from 'react'
import { Download, ChevronDown, FileText } from 'lucide-react'

export default function DownloadButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownloadZip = () => {
    // Download a generic zip file - you can update this path
    const a = document.createElement('a')
    a.href = '/downloads/local-ai-chat.zip'
    a.download = 'local-ai-chat.zip'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setIsOpen(false)
  }

  const handleSetupInstructions = () => {
    // Scroll to the Getting Started section
    const gettingStartedSection = document.querySelector('[data-section="getting-started"]')
    if (gettingStartedSection) {
      gettingStartedSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 md:top-8 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[rgb(237,254,193)] text-[#0A1E5E] px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold flex items-center gap-2 hover:bg-[rgb(237,254,193)]/90 transition-all duration-200 border border-[rgb(237,254,193)]"
          style={{ borderRadius: '0px' }}
        >
          <Download className="w-4 h-4 md:w-5 md:h-5" />
          <span>Download</span>
          <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-full left-0 mt-2 bg-[#0A1E5E] border border-[rgb(237,254,193)] z-50 min-w-[200px]" style={{ borderRadius: '0px' }}>
              <div className="p-2 space-y-1">
                <button
                  onClick={handleDownloadZip}
                  style={{ borderRadius: '0px' }}
                  className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-[rgb(237,254,193)]/10 border border-transparent"
                >
                  <Download className="w-5 h-5 text-[rgb(237,254,193)]" />
                  <span className="font-ios font-semibold text-[rgb(237,254,193)] text-sm">
                    Download zip
                  </span>
                </button>
                <button
                  onClick={handleSetupInstructions}
                  style={{ borderRadius: '0px' }}
                  className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-[rgb(237,254,193)]/10 border border-transparent"
                >
                  <FileText className="w-5 h-5 text-[rgb(237,254,193)]" />
                  <span className="font-ios font-semibold text-[rgb(237,254,193)] text-sm">
                    Setup instructions
                  </span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}


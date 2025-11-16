'use client'

import React, { useState, useEffect } from 'react'
import { Download } from 'lucide-react'

export default function DownloadButton() {
  const [isInDownloadsSection, setIsInDownloadsSection] = useState(false)

  useEffect(() => {
    const gettingStartedSection = document.querySelector('[data-section="getting-started"]')
    if (!gettingStartedSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInDownloadsSection(entry.isIntersecting)
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '-100px 0px 0px 0px' // Start detecting a bit before the section
      }
    )

    observer.observe(gettingStartedSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleClick = () => {
    // Scroll to the Getting Started section
    const gettingStartedSection = document.querySelector('[data-section="getting-started"]')
    if (gettingStartedSection) {
      gettingStartedSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (isInDownloadsSection) {
    return null
  }

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 md:top-8 z-50">
      <button
        onClick={handleClick}
        className="bg-[rgb(237,254,193)] text-[#0A1E5E] px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold flex items-center gap-2 hover:bg-[rgb(237,254,193)]/90 transition-all duration-200 border border-[rgb(237,254,193)]"
        style={{ borderRadius: '0px' }}
      >
        <Download className="w-4 h-4 md:w-5 md:h-5" />
        <span>Download</span>
      </button>
    </div>
  )
}


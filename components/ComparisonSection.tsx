'use client'

import { useState, useEffect } from 'react'
import MetricsChart from './MetricsChart'
import PostItNote from './PostItNote'

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function ComparisonSection() {
  const [shuffledTitles, setShuffledTitles] = useState<string[]>([])

  useEffect(() => {
    const titles = [
      'Privacy First',
      'Zero Cost',
      'Lightning Fast',
      'Complete Control',
      'Offline Ready',
      'Open Source'
    ]
    setShuffledTitles(shuffleArray(titles))
  }, [])

  const postItPositions = [
    { x: 150, y: 100, rotation: -3 },
    { x: 420, y: 80, rotation: 2 },
    { x: 180, y: 320, rotation: -2 },
    { x: 480, y: 280, rotation: 4 },
    { x: 220, y: 520, rotation: -1 },
    { x: 540, y: 480, rotation: 3 }
  ]

  const mobilePositions = [
    { x: 0, y: 0, rotation: -3 },
    { x: 8, y: -20, rotation: 2 },
    { x: -6, y: -20, rotation: -2 },
    { x: 10, y: -20, rotation: 3 },
    { x: -8, y: -20, rotation: -1 },
    { x: 6, y: -20, rotation: 1 }
  ]

  return (
    <div id="page-2" className="relative min-h-[400px] md:min-h-[800px] pb-8 md:pb-20 md:pr-[480px] select-none">
      <h2 className="text-2xl md:text-3xl md:text-4xl font-serif font-bold tracking-tight mb-8 md:mb-12 text-center">
        Why <span className="font-script italic">Local AI  </span>   Chat?
      </h2>
      
      {/* Desktop Metrics Chart */}
      <div className="hidden md:block absolute right-[470px] top-[50px] w-[480px] p-6 z-20">
        <MetricsChart />
      </div>

      {/* Mobile PostItNotes - Stacked FIRST */}
      <div className="md:hidden max-w-full mx-auto mb-8" style={{ minHeight: '800px' }}>
        {shuffledTitles.length > 0 && shuffledTitles.map((title, index) => {
          const variant: 'beige' | 'blue' = [0, 3, 4].includes(index) ? 'blue' : 'beige'
          const position = mobilePositions[index] || { x: 0, y: 0, rotation: 0 }
          return (
            <div 
              key={`${title}-${index}`} 
              className="relative"
              style={{
                marginTop: index === 0 ? '0' : '-60px',
                zIndex: 15 + index
              }}
            >
              <PostItNote
                title={title}
                variant={variant}
                rotation={position.rotation}
                position={{ x: position.x, y: position.y }}
                mobile={true}
              />
            </div>
          )
        })}
      </div>

      {/* Mobile Metrics Chart - AFTER PostItNotes */}
      <div className="md:hidden">
        <MetricsChart />
      </div>

      {/* Desktop PostItNotes - Absolute positioned */}
      {shuffledTitles.length > 0 && shuffledTitles.map((title, index) => {
        const position = postItPositions[index] || { x: 100, y: 100, rotation: 0 }
        const variant: 'beige' | 'blue' = [0, 3, 4].includes(index) ? 'blue' : 'beige'
        
        return (
          <div key={`desktop-${title}-${index}`} className="hidden md:block">
            <PostItNote
              title={title}
              variant={variant}
              rotation={position.rotation}
              position={{ x: position.x, y: position.y }}
            />
          </div>
        )
      })}
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import { Download, Terminal, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import OSIcon from './OSIcon'

type OS = 'windows' | 'mac' | 'linux' | null

export default function DownloadSection() {
  const [selectedOS, setSelectedOS] = useState<OS>(null)
  const [hoveredOS, setHoveredOS] = useState<OS>(null)
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const downloadLinks = {
    windows: {
      file: '/downloads/local-ai.zip',
      name: 'Windows',
      extension: '.zip',
      os: 'windows' as const,
    },
    mac: {
      file: '/downloads/local-ai.zip',
      name: 'macOS',
      extension: '.zip',
      os: 'mac' as const,
    },
    linux: {
      file: '/downloads/local-ai.zip',
      name: 'Linux',
      extension: '.zip',
      os: 'linux' as const,
    },
  }

  const installationSteps = {
    windows: {
      download: 'Download the .zip file',
      extract: 'Extract the .zip file to a folder of your choice',
      prerequisites: 'Prerequisites: Ollama & Node.js (download links provided or included in zip)',
      run: 'Double-click "START CHAT (Windows).bat" to launch',
      command: 'START CHAT (Windows).bat',
      commands: [
        '# Extract the zip file',
        'unzip local-ai.zip',
        'cd local-ai',
        '',
        '# Install Ollama (if not already installed)',
        '# Download from: https://ollama.ai',
        '',
        '# Install Node.js (if not already installed)',
        '# Download from: https://nodejs.org',
        '',
        '# Launch the application',
        'START CHAT (Windows).bat'
      ]
    },
    mac: {
      download: 'Download the .zip file',
      extract: 'Extract the .zip file to your Applications folder or preferred location',
      prerequisites: 'Open Terminal and navigate to the directory containing the file',
      run: 'Launch the application by double-clicking "START CHAT (Mac).command"',
      command: 'chmod +x "START CHAT (Mac).command" && xattr -d com.apple.quarantine "START CHAT (Mac).command"',
      commands: [
        '# Navigate to the directory containing the application',
        'cd /path/to/application',
        '',
        '# Grant execute permissions and remove quarantine attribute',
        'chmod +x "START CHAT (Mac).command" && xattr -d com.apple.quarantine "START CHAT (Mac).command"',
        '',
        '# Launch the application',
        '# A new terminal window will open',
        '# If Homebrew is not installed, you will be prompted for your system password to install it'
      ]
    },
    linux: {
      download: 'Download the .zip file',
      extract: 'Extract the .zip file to your desired location',
      prerequisites: 'Prerequisites: Ollama & Node.js (download links provided or included in zip)',
      run: 'Run the launcher script in terminal',
      command: 'chmod +x "START CHAT (Linux).sh" && ./"START CHAT (Linux).sh"',
      commands: [
        '# Extract the zip file',
        'unzip local-ai.zip',
        'cd local-ai',
        '',
        '# Install Ollama (if not already installed)',
        'curl -fsSL https://ollama.ai/install.sh | sh',
        '',
        '# Install Node.js (if not already installed)',
        '# Using apt (Ubuntu/Debian)',
        'sudo apt update && sudo apt install -y nodejs npm',
        '',
        '# Make the script executable and run',
        'chmod +x "START CHAT (Linux).sh"',
        './"START CHAT (Linux).sh"'
      ]
    },
  }

  const handleOSClick = (os: 'windows' | 'mac' | 'linux') => {
    setSelectedOS(os)
  }

  const handleDownloadZip = () => {
    if (!selectedOS) return
    const link = downloadLinks[selectedOS]
    const a = document.createElement('a')
    a.href = link.file
    a.download = 'local-ai.zip'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleCopyCommand = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command)
      setCopiedCommand(command)
      setTimeout(() => setCopiedCommand(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const steps = selectedOS ? installationSteps[selectedOS] : null

  const cream = 'rgb(237, 254, 193)'
  const navy = '#0A1E5E'

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 md:space-y-12 pb-12 md:pb-20 px-4 md:px-0" data-section="getting-started">
      <div className="text-center space-y-4 md:space-y-6">
        <h2 className="text-3xl md:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[rgb(237,254,193)] mb-2 md:mb-4">
          Get Started
        </h2>
        <p className="text-base md:text-lg font-ios text-[rgb(237,254,193)]/80">
          Choose your platform
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8">
          {Object.entries(downloadLinks).map(([key, link]) => {
            const os = key as 'windows' | 'mac' | 'linux'
            const isHovered = hoveredOS === os
            const isSelected = selectedOS === os
            
            return (
              <button
                key={key}
                onClick={() => handleOSClick(os)}
                onMouseEnter={() => setHoveredOS(os)}
                onMouseLeave={() => setHoveredOS(null)}
                className="w-auto md:w-auto md:min-w-[140px] h-auto py-2 md:py-2.5 px-3 md:px-3 flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-1.5 text-sm md:text-base transition-all duration-300 border-2"
                style={{
                  backgroundColor: isSelected || isHovered ? cream : 'transparent',
                  color: isSelected || isHovered ? navy : cream,
                  borderColor: cream,
                  borderRadius: '0px',
                  transform: isSelected ? 'scale(1.05)' : isHovered ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: isSelected ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.3)' : 'none'
                }}
              >
                <div style={{ color: isSelected || isHovered ? navy : cream }}>
                  <OSIcon os={link.os} className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col md:flex-col items-start">
                  <span className="text-sm md:text-lg font-bold select-none">
                    {link.name}
                  </span>
                  <span className="text-xs font-normal opacity-80 select-none">{link.extension}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {selectedOS && steps && (
        <div 
          className="border-2 p-4 md:p-6 space-y-4 md:space-y-6"
          style={{
            borderColor: cream,
            backgroundColor: `${navy}dd`,
            borderRadius: '0px'
          }}
        >
          <div className="flex flex-col items-center mb-4 md:mb-6">
            <button
              onClick={handleDownloadZip}
              className="bg-[rgb(237,254,193)] text-[#0A1E5E] px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold flex items-center gap-2 hover:bg-[rgb(237,254,193)]/90 transition-all duration-200 border-2 border-[rgb(237,254,193)]"
              style={{ borderRadius: '0px' }}
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span>Download</span>
            </button>
            <p className="text-xs md:text-sm text-[rgb(237,254,193)]/60 mt-3 text-center max-w-md">
              By downloading, you agree to our{' '}
              <Link 
                href="/terms" 
                className="text-[rgb(237,254,193)]/80 hover:text-[rgb(237,254,193)] underline transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-serif font-bold text-[rgb(237,254,193)] flex items-center gap-2 md:gap-3">
            <Terminal className="w-5 h-5 md:w-6 md:h-6" />
            Installation Instructions
          </h3>
          
          <div className="space-y-3 md:space-y-4">
            <div className="flex gap-3 md:gap-4 items-start">
              <div 
                className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg font-bold select-none"
                style={{
                  backgroundColor: cream,
                  color: navy,
                  borderRadius: '0px'
                }}
              >
                1
              </div>
              <p className="text-sm md:text-base leading-relaxed text-[rgb(237,254,193)]/90 pt-0.5 md:pt-1">
                {steps.download}
              </p>
            </div>
            
            <div className="flex gap-3 md:gap-4 items-start">
              <div 
                className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg font-bold select-none"
                style={{
                  backgroundColor: cream,
                  color: navy,
                  borderRadius: '0px'
                }}
              >
                2
              </div>
              <p className="text-sm md:text-base leading-relaxed text-[rgb(237,254,193)]/90 pt-0.5 md:pt-1">
                {steps.extract}
              </p>
            </div>
            
            {selectedOS === 'mac' ? (
              <>
                <div className="flex gap-3 md:gap-4 items-start">
                  <div 
                    className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg font-bold select-none"
                    style={{
                      backgroundColor: cream,
                      color: navy,
                      borderRadius: '0px'
                    }}
                  >
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base leading-relaxed text-[rgb(237,254,193)]/90 pt-0.5 md:pt-1 mb-2 md:mb-3">
                      Navigate to the application directory in Terminal and execute the following command:
                    </p>
                    <div 
                      className="p-3 md:p-4 font-mono text-xs md:text-sm code-snippet overflow-x-auto select-text relative"
                      style={{
                        backgroundColor: navy,
                        color: cream,
                        border: `1px solid ${cream}`,
                        borderRadius: '0px',
                        userSelect: 'text'
                      }}
                    >
                      <button
                        onClick={() => handleCopyCommand(steps.command)}
                        className="absolute top-2 right-2 p-1.5 hover:bg-[rgb(237,254,193)]/20 transition-colors rounded"
                        style={{ borderRadius: '0px' }}
                        title="Copy command"
                      >
                        {copiedCommand === steps.command ? (
                          <Check className="w-4 h-4 text-[rgb(237,254,193)]" />
                        ) : (
                          <Copy className="w-4 h-4 text-[rgb(237,254,193)]" />
                        )}
                      </button>
                      <div className="pr-8">{steps.command}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 md:gap-4 items-start">
                  <div 
                    className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg font-bold select-none"
                    style={{
                      backgroundColor: cream,
                      color: navy,
                      borderRadius: '0px'
                    }}
                  >
                    4
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-[rgb(237,254,193)]/90 pt-0.5 md:pt-1">
                    {steps.run}
                  </p>
                </div>
                
                <div className="flex gap-3 md:gap-4 items-start">
                  <div 
                    className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg font-bold select-none"
                    style={{
                      backgroundColor: cream,
                      color: navy,
                      borderRadius: '0px'
                    }}
                  >
                    5
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-[rgb(237,254,193)]/90 pt-0.5 md:pt-1">
                    The application will launch in a new terminal window. If Homebrew is not installed, you will be prompted to enter your system password to install it automatically.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-3 md:gap-4 items-start">
                  <div 
                    className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg font-bold select-none"
                    style={{
                      backgroundColor: cream,
                      color: navy,
                      borderRadius: '0px'
                    }}
                  >
                    3
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-[rgb(237,254,193)]/90 pt-0.5 md:pt-1">
                    {steps.prerequisites}
                  </p>
                </div>
                
                <div className="flex gap-3 md:gap-4 items-start">
                  <div 
                    className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg font-bold select-none"
                    style={{
                      backgroundColor: cream,
                      color: navy,
                      borderRadius: '0px'
                    }}
                  >
                    4
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base leading-relaxed text-[rgb(237,254,193)]/90 pt-0.5 md:pt-1 mb-2 md:mb-3">
                      {steps.run}
                    </p>
                    <div 
                      className="p-3 md:p-4 font-mono text-xs md:text-sm code-snippet overflow-x-auto select-text relative"
                      style={{
                        backgroundColor: navy,
                        color: cream,
                        border: `1px solid ${cream}`,
                        borderRadius: '0px',
                        userSelect: 'text'
                      }}
                    >
                      <button
                        onClick={() => handleCopyCommand(steps.command)}
                        className="absolute top-2 right-2 p-1.5 hover:bg-[rgb(237,254,193)]/20 transition-colors rounded"
                        style={{ borderRadius: '0px' }}
                        title="Copy command"
                      >
                        {copiedCommand === steps.command ? (
                          <Check className="w-4 h-4 text-[rgb(237,254,193)]" />
                        ) : (
                          <Copy className="w-4 h-4 text-[rgb(237,254,193)]" />
                        )}
                      </button>
                      <div className="pr-8">{steps.command}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-serif font-bold text-[rgb(237,254,193)] mt-6 md:mt-8 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
            <Terminal className="w-5 h-5 md:w-6 md:h-6" />
            Installation Commands
          </h3>
          {(() => {
            const executableCommands = steps.commands.filter(cmd => !cmd.startsWith('#') && cmd.trim()).join('\n')
            return (
              <div 
                className="p-3 md:p-4 font-mono text-xs md:text-sm overflow-x-auto code-snippet select-text relative"
                style={{
                  backgroundColor: navy,
                  color: cream,
                  border: `1px solid ${cream}`,
                  borderRadius: '0px',
                  minHeight: '100px',
                  userSelect: 'text'
                }}
              >
                <button
                  onClick={() => handleCopyCommand(executableCommands)}
                  className="absolute top-2 right-2 p-1.5 hover:bg-[rgb(237,254,193)]/20 transition-colors rounded"
                  style={{ borderRadius: '0px' }}
                  title="Copy commands"
                >
                  {copiedCommand === executableCommands ? (
                    <Check className="w-4 h-4 text-[rgb(237,254,193)]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[rgb(237,254,193)]" />
                  )}
                </button>
                <div className="space-y-1 pr-8">
                  {steps.commands.map((cmd, index) => (
                    <div 
                      key={index}
                      className={cmd.startsWith('#') ? 'text-[rgb(237,254,193)]/60' : 'text-[rgb(237,254,193)]'}
                    >
                      {cmd || '\u00A0'}
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      )}
    </div>
  )
}

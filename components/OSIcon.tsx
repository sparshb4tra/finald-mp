'use client'

import React from 'react'
import Image from 'next/image'

interface OSIconProps {
  os: 'windows' | 'mac' | 'linux'
  className?: string
}

export default function OSIcon({ os, className = '' }: OSIconProps) {
  if (os === 'windows') {
    return (
      <Image
        src="/images/Unofficial_Windows_logo_variant_-_2002–2012_(Multicolored).svg.png"
        alt="Windows"
        width={48}
        height={48}
        className={className}
        style={{ objectFit: 'contain' }}
      />
    )
  }
  
  if (os === 'mac') {
    return (
      <Image
        src="/images/Apple_logo_white.svg.webp"
        alt="macOS"
        width={48}
        height={48}
        className={className}
        style={{ objectFit: 'contain' }}
      />
    )
  }
  
  return (
    <Image
      src="/images/linux-logo.png"
      alt="Linux"
      width={48}
      height={48}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}


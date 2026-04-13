'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Sparkles, ShieldCheck, Search, Settings2, Rocket, CheckCircle2 } from 'lucide-react'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [expandedShot, setExpandedShot] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedShot(null)
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden relative bg-[#0A1E5E] text-[rgb(237,254,193)]" style={{ 
      background: 'color(display-p3 0.012 0.003 0.408)',
      color: 'color(display-p3 0.931 0.996 0.755)'
    }}>
      <section className="relative z-10 border-b border-[rgb(237,254,193)]/20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Hey,</h1>
          <div className="mt-6 space-y-5 max-w-3xl">
            <p className="text-2xl md:text-4xl tracking-tight font-ios leading-tight">
              <span className="block">Tired of your</span>
              <span className="text-yellow-300 font-semibold block">data being stolen?</span>
              <span className="text-green-300 font-semibold block">Spied on?</span>
              <span className="text-pink-300 font-semibold block">Tracked?</span>
            </p>
            <p className="text-base md:text-xl text-[rgb(237,254,193)]/90">
              A local-first AI workspace for private teams and serious workflows.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/downloads/local-ai.zip"
                download
                className="inline-flex items-center px-5 py-2.5 text-sm md:text-base font-bold border border-[rgb(237,254,193)] bg-[rgb(237,254,193)] text-[#0A1E5E] hover:bg-[rgb(237,254,193)]/90"
              >
                Download local-ai.zip
              </a>
              <a
                href="#getting-started"
                className="inline-flex items-center px-5 py-2.5 text-sm md:text-base font-semibold border border-[rgb(237,254,193)]/60 text-[rgb(237,254,193)] hover:border-[rgb(237,254,193)]"
              >
                Setup by OS
              </a>
            </div>
            <div className="pt-2">
              <h2 className="text-lg md:text-2xl font-serif font-semibold">April Release</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-[rgb(237,254,193)]/75 text-sm tracking-[0.15em] uppercase">
            <Sparkles className="w-4 h-4" />
            Release highlights
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold">What&apos;s New</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <article className="border border-[rgb(237,254,193)]/25 p-5 bg-[#0C226A] hover:border-[rgb(237,254,193)]/45 transition-colors">
              <div className="flex items-center gap-2 text-[rgb(237,254,193)]/70 text-xs uppercase tracking-[0.12em]">
                <ShieldCheck className="w-4 h-4" />
                Capability updates
              </div>
              <h3 className="text-xl font-semibold mt-2">Model + conversation reliability</h3>
              <p className="mt-2 text-[rgb(237,254,193)]/85">Model picker with installed/library flow, chat export, persistent local history, and portable conversations.</p>
            </article>
            <article className="border border-[rgb(237,254,193)]/25 p-5 bg-[#0C226A] hover:border-[rgb(237,254,193)]/45 transition-colors">
              <div className="flex items-center gap-2 text-[rgb(237,254,193)]/70 text-xs uppercase tracking-[0.12em]">
                <Search className="w-4 h-4" />
                Search + research updates
              </div>
              <h3 className="text-xl font-semibold mt-2">Web-assisted intelligence with Exa</h3>
              <p className="mt-2 text-[rgb(237,254,193)]/85">Exa integration for web-assisted responses when enabled, with local key storage and quick toggling from the header.</p>
            </article>
            <article className="border border-[rgb(237,254,193)]/25 p-5 bg-[#0C226A] hover:border-[rgb(237,254,193)]/45 transition-colors">
              <div className="flex items-center gap-2 text-[rgb(237,254,193)]/70 text-xs uppercase tracking-[0.12em]">
                <Settings2 className="w-4 h-4" />
                Control updates
              </div>
              <h3 className="text-xl font-semibold mt-2">Prompt-level governance</h3>
              <p className="mt-2 text-[rgb(237,254,193)]/85">System prompt and agent controls are surfaced in settings for explicit behavior control and predictable assistant behavior.</p>
            </article>
            <article className="border border-[rgb(237,254,193)]/25 p-5 bg-[#0C226A] hover:border-[rgb(237,254,193)]/45 transition-colors">
              <div className="flex items-center gap-2 text-[rgb(237,254,193)]/70 text-xs uppercase tracking-[0.12em]">
                <Rocket className="w-4 h-4" />
                Experience + deployment updates
              </div>
              <h3 className="text-xl font-semibold mt-2">Faster onboarding to production</h3>
              <p className="mt-2 text-[rgb(237,254,193)]/85">Guided tour onboarding, cleaner chat flow, and one zip package with launchers for Windows, macOS, and Linux.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-2 md:py-4 px-4 md:px-6">
        <div className="max-w-5xl mx-auto border border-[rgb(237,254,193)]/25 bg-[#0C226A] p-5 md:p-6">
          <h3 className="text-xl md:text-2xl font-semibold">Core capabilities we offer</h3>
          <p className="mt-2 text-[rgb(237,254,193)]/80 text-sm md:text-base">
            Beyond model switching, Local AI Chat v2 is built to run as a complete local AI workstation.
          </p>
          <div className="mt-5 grid md:grid-cols-2 gap-x-10 gap-y-3 text-[rgb(237,254,193)]/90 text-sm md:text-base">
            <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[rgb(237,254,193)]/75" /> Local-first inference with Ollama</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[rgb(237,254,193)]/75" /> Exa-assisted web context (optional)</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[rgb(237,254,193)]/75" /> System prompt and agent behavior controls</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[rgb(237,254,193)]/75" /> Persistent JSON chat history</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[rgb(237,254,193)]/75" /> Exportable chat sessions</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[rgb(237,254,193)]/75" /> Cross-platform launch scripts</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-6 md:py-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">Capability showcase</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <article className="border border-[rgb(237,254,193)]/25 bg-[#0C226A] overflow-hidden">
              <button
                type="button"
                onClick={() => setExpandedShot({ src: '/screenshots/model-selector.png', alt: 'Model selector in Local AI Chat' })}
                className="relative aspect-[16/10] w-full text-left cursor-zoom-in"
              >
                <Image src="/screenshots/model-selector.png" alt="Model selector in Local AI Chat" fill className="object-cover" />
              </button>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Model selector</h3>
                <p className="text-sm text-[rgb(237,254,193)]/80 mt-1">Switch between installed models and library pulls without leaving the chat flow.</p>
              </div>
            </article>
            <article className="border border-[rgb(237,254,193)]/25 bg-[#0C226A] overflow-hidden">
              <button
                type="button"
                onClick={() => setExpandedShot({ src: '/screenshots/system-prompt.png', alt: 'System prompt and agent controls' })}
                className="relative aspect-[16/10] w-full text-left cursor-zoom-in"
              >
                <Image src="/screenshots/system-prompt.png" alt="System prompt and agent controls" fill className="object-cover" />
              </button>
              <div className="p-4">
                <h3 className="text-lg font-semibold">System prompt controls</h3>
                <p className="text-sm text-[rgb(237,254,193)]/80 mt-1">Define assistant behavior centrally and keep responses aligned with your workflow.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="getting-started" className="relative z-10 py-12 md:py-20 px-4 md:px-6 flex flex-col items-center md:items-start">
        <DownloadSection />
      </section>

      {expandedShot && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 md:p-8"
          onClick={() => setExpandedShot(null)}
        >
          <div className="relative w-full max-w-6xl">
            <button
              type="button"
              onClick={() => setExpandedShot(null)}
              className="absolute -top-11 right-0 border border-white/40 px-3 py-1 text-sm text-white hover:bg-white/10"
            >
              Close
            </button>
            <div className="relative w-full aspect-[16/10] border border-white/30 bg-black">
              <Image src={expandedShot.src} alt={expandedShot.alt} fill className="object-contain" />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

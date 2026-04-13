'use client'

import Image from 'next/image'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative bg-[#0A1E5E] text-[rgb(237,254,193)]" style={{ 
      background: 'color(display-p3 0.012 0.003 0.408)',
      color: 'color(display-p3 0.931 0.996 0.755)'
    }}>
      <section className="relative z-10 border-b border-[rgb(237,254,193)]/20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <p className="text-[rgb(237,254,193)]/75 text-sm tracking-[0.18em] uppercase mb-6">April Release • Version 2</p>
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
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-4xl font-serif font-bold">What&apos;s New in v2</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <article className="border border-[rgb(237,254,193)]/25 p-5 bg-[#0C226A]">
              <h3 className="text-xl font-semibold">Capability updates</h3>
              <p className="mt-2 text-[rgb(237,254,193)]/85">Model picker with installed/library flow, chat export, persistent local history, and portable conversations.</p>
            </article>
            <article className="border border-[rgb(237,254,193)]/25 p-5 bg-[#0C226A]">
              <h3 className="text-xl font-semibold">Search + research updates</h3>
              <p className="mt-2 text-[rgb(237,254,193)]/85">Exa integration for web-assisted responses when enabled, with local key storage and quick toggling from the header.</p>
            </article>
            <article className="border border-[rgb(237,254,193)]/25 p-5 bg-[#0C226A]">
              <h3 className="text-xl font-semibold">Control updates</h3>
              <p className="mt-2 text-[rgb(237,254,193)]/85">System prompt and agent controls are surfaced in settings for explicit behavior control and predictable assistant behavior.</p>
            </article>
            <article className="border border-[rgb(237,254,193)]/25 p-5 bg-[#0C226A]">
              <h3 className="text-xl font-semibold">Experience + deployment updates</h3>
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
          <div className="mt-4 grid md:grid-cols-2 gap-x-8 gap-y-2 text-[rgb(237,254,193)]/90 text-sm md:text-base">
            <p>• Local-first inference with Ollama</p>
            <p>• Exa-assisted web context (optional)</p>
            <p>• System prompt and agent behavior controls</p>
            <p>• Persistent JSON chat history</p>
            <p>• Exportable chat sessions</p>
            <p>• Cross-platform launch scripts</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-6 md:py-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">Capability showcase</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <article className="border border-[rgb(237,254,193)]/25 bg-[#0C226A] overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image src="/screenshots/model-selector.png" alt="Model selector in Local AI Chat" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Model selector</h3>
                <p className="text-sm text-[rgb(237,254,193)]/80 mt-1">Switch between installed models and library pulls without leaving the chat flow.</p>
              </div>
            </article>
            <article className="border border-[rgb(237,254,193)]/25 bg-[#0C226A] overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image src="/screenshots/system-prompt.png" alt="System prompt and agent controls" fill className="object-cover" />
              </div>
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

      <Footer />
    </main>
  )
}

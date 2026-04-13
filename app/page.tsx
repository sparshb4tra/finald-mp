import Link from 'next/link'
import Image from 'next/image'
import { Github, ShieldCheck, Rocket, Bot, FolderArchive, Router } from 'lucide-react'

const highlights = [
  '100% local processing with Ollama',
  'Model picker for any installed model',
  'Persistent JSON chat history',
  'Export chats whenever you want',
  'Guided UI tour for first-time users',
  'Windows, macOS, Linux launch scripts',
]

const steps = [
  {
    title: 'Clone and install',
    command: 'git clone https://github.com/sparshb4tra/local-ai-updated-april-26.git && cd local-ai-updated-april-26 && npm install',
  },
  {
    title: 'Run with launcher scripts',
    command: 'Windows: START CHAT (Windows).bat | macOS: ./"START CHAT (Mac).command" | Linux: ./"START CHAT (Linux).sh"',
  },
  {
    title: 'Open local app',
    command: 'http://localhost:8000/chat.html',
  },
]

const productScreens = [
  {
    src: '/screenshots/app-main.png',
    title: 'Clean local chat workspace',
    description: 'Focused layout with sidebar history, model chip, and zero-cloud workflow.',
  },
  {
    src: '/screenshots/model-selector.png',
    title: 'Built-in model selection',
    description: 'Search and switch between installed or library models directly in-app.',
  },
  {
    src: '/screenshots/guided-tour.png',
    title: 'Guided onboarding tour',
    description: 'A quick click-through tour that explains key UI areas for first-time users.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070f35] text-[rgb(237,254,193)]">
      <section className="relative overflow-hidden border-b border-[rgb(237,254,193)]/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(237,254,193,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(143,194,255,0.2),transparent_35%)]" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <p className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.25em] text-[rgb(237,254,193)]/70 mb-6">
            <ShieldCheck className="w-4 h-4" />
            Local AI Chat - Updated Build
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl">
            Private AI chat on your machine, now with better control and smoother onboarding.
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-xl max-w-3xl text-[rgb(237,254,193)]/85">
            This release keeps every conversation local while adding stronger day-to-day usability:
            flexible model selection, portable chat history, export support, and a guided tour for new users.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/sparshb4tra/local-ai-updated-april-26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(237,254,193)] text-[#08124a] font-bold border border-[rgb(237,254,193)] hover:opacity-90 transition"
            >
              <Github className="w-4 h-4" />
              Get Project Source
            </a>
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[rgb(237,254,193)]/60 text-[rgb(237,254,193)] hover:border-[rgb(237,254,193)] transition"
            >
              View Terms
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <article className="border border-[rgb(237,254,193)]/25 p-6 bg-[#091650]">
            <p className="text-[rgb(237,254,193)]/70 text-sm">Core Promise</p>
            <h3 className="text-2xl font-semibold mt-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              Privacy First
            </h3>
            <p className="mt-3 text-[rgb(237,254,193)]/85 text-sm md:text-base">
              No cloud relay, no account dependency, no telemetry layer in your chat runtime.
            </p>
          </article>
          <article className="border border-[rgb(237,254,193)]/25 p-6 bg-[#091650]">
            <p className="text-[rgb(237,254,193)]/70 text-sm">What Changed</p>
            <h3 className="text-2xl font-semibold mt-2 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Better UX
            </h3>
            <p className="mt-3 text-[rgb(237,254,193)]/85 text-sm md:text-base">
              Guided tour flow, cleaner interaction paths, and improved first-run clarity for every platform.
            </p>
          </article>
          <article className="border border-[rgb(237,254,193)]/25 p-6 bg-[#091650]">
            <p className="text-[rgb(237,254,193)]/70 text-sm">Runtime</p>
            <h3 className="text-2xl font-semibold mt-2 flex items-center gap-2">
              <Bot className="w-5 h-5" />
              Ollama Powered
            </h3>
            <p className="mt-3 text-[rgb(237,254,193)]/85 text-sm md:text-base">
              Select from installed models directly in the UI while preserving conversation continuity.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-[rgb(237,254,193)]/20 bg-[#08124a]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">What the updated app includes</h2>
          <div className="grid md:grid-cols-2 gap-3 mt-8">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-[rgb(237,254,193)]/20 p-4">
                <FolderArchive className="w-4 h-4 mt-1 text-[rgb(237,254,193)]/80" />
                <p className="text-[rgb(237,254,193)]/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <h2 className="text-3xl md:text-5xl font-serif font-bold">Product preview</h2>
        <p className="mt-4 text-[rgb(237,254,193)]/80 max-w-3xl">
          Real screenshots from the current build, placed to show core workflows at a glance.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {productScreens.map((screen) => (
            <article key={screen.src} className="border border-[rgb(237,254,193)]/25 bg-[#091650] overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image src={screen.src} alt={screen.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{screen.title}</h3>
                <p className="mt-2 text-sm text-[rgb(237,254,193)]/80">{screen.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <h2 className="text-3xl md:text-5xl font-serif font-bold flex items-center gap-3">
          <Router className="w-8 h-8" />
          Quick start
        </h2>
        <div className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <div key={step.title} className="border border-[rgb(237,254,193)]/25 p-4 md:p-5 bg-[#091650]">
              <p className="text-[rgb(237,254,193)]/70 text-sm">Step {index + 1}</p>
              <h3 className="text-xl font-semibold mt-1">{step.title}</h3>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words text-sm text-[rgb(237,254,193)]/90">
                {step.command}
              </pre>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[rgb(237,254,193)]/20 py-10 px-4 md:px-8 text-center text-[rgb(237,254,193)]/70">
        <p>Built for private, offline-capable local LLM workflows.</p>
        <p className="mt-2">Local AI Chat - Updated Edition</p>
      </footer>
    </main>
  )
}

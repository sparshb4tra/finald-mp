'use client'

import Link from 'next/link'

export default function TermsPage() {
  const cream = 'rgb(237, 254, 193)'
  const navy = '#0A1E5E'

  return (
    <main className="min-h-screen bg-[#0A1E5E] text-[rgb(237,254,193)]" style={{ 
      background: 'color(display-p3 0.012 0.003 0.408)',
      color: 'color(display-p3 0.931 0.996 0.755)',
      fontFamily: 'Helvetica, Arial, sans-serif'
    }}>
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-[rgb(237,254,193)]/80 hover:text-[rgb(237,254,193)] transition-colors"
            style={{ textDecoration: 'none' }}
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-[rgb(237,254,193)]">
          Terms and Conditions
        </h1>

        <div className="space-y-8 md:space-y-12 text-base md:text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              1. Acceptance of Terms
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              By downloading, installing, or using Local AI Chat (&quot;the Software&quot;), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not download, install, or use the Software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              2. Description of Service
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              Local AI Chat is a locally-run AI chat interface that operates entirely on your machine. The Software requires third-party dependencies including Ollama and Node.js to function. The Software is provided &quot;as is&quot; without any warranties or guarantees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              3. License and Usage
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              The Software is provided free of charge. You are granted a non-exclusive, non-transferable license to download, install, and use the Software for personal or commercial purposes, subject to these Terms.
            </p>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-[rgb(237,254,193)]/90">
              <li>Reverse engineer, decompile, or disassemble the Software</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              <li>Use the Software for any illegal or unauthorized purpose</li>
              <li>Redistribute the Software without proper attribution</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              4. Third-Party Dependencies
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              The Software requires Ollama and Node.js to function. These are third-party software components with their own terms and conditions. You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-[rgb(237,254,193)]/90">
              <li>Downloading and installing Ollama and Node.js separately</li>
              <li>Complying with the terms and conditions of Ollama and Node.js</li>
              <li>Ensuring compatibility of these dependencies with your system</li>
            </ul>
            <p className="text-[rgb(237,254,193)]/90 mt-4">
              We are not responsible for any issues arising from third-party dependencies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-[rgb(237,254,193)]/90">
              <li>Warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy, reliability, or completeness of the Software</li>
            </ul>
            <p className="text-[rgb(237,254,193)]/90 mt-4">
              We do not warrant that the Software will be uninterrupted, error-free, or secure, or that defects will be corrected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              6. Limitation of Liability
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-[rgb(237,254,193)]/90">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or use</li>
              <li>Damages resulting from use or inability to use the Software</li>
              <li>Damages resulting from third-party dependencies (Ollama, Node.js)</li>
              <li>Any damages exceeding the amount you paid for the Software (which is $0)</li>
            </ul>
            <p className="text-[rgb(237,254,193)]/90 mt-4">
              This limitation applies regardless of the theory of liability, whether in contract, tort, or otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              7. Privacy and Data
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              The Software operates entirely locally on your machine. We do not collect, store, transmit, or have access to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-[rgb(237,254,193)]/90">
              <li>Your conversations or chat data</li>
              <li>Your personal information</li>
              <li>Any usage statistics or analytics</li>
              <li>Any data from your device</li>
            </ul>
            <p className="text-[rgb(237,254,193)]/90 mt-4">
              All data processing occurs locally on your machine. You are responsible for the security and privacy of your local installation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              8. Indemnification
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              You agree to indemnify, defend, and hold harmless the Software developers, contributors, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-[rgb(237,254,193)]/90">
              <li>Your use or misuse of the Software</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content or data you process using the Software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              9. Modifications to Terms
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              We reserve the right to modify these Terms at any time. Continued use of the Software after such modifications constitutes acceptance of the updated Terms. It is your responsibility to review these Terms periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              10. Termination
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              We reserve the right to terminate or suspend your access to the Software at any time, without prior notice, for any reason, including violation of these Terms. Upon termination, you must cease all use of the Software and delete all copies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              11. Governing Law
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms or the Software shall be resolved in the appropriate jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              12. Severability
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[rgb(237,254,193)]">
              13. Contact Information
            </h2>
            <p className="text-[rgb(237,254,193)]/90 mb-4">
              If you have any questions about these Terms, please contact us through the appropriate channels.
            </p>
          </section>

          <section className="pt-8 border-t" style={{ borderColor: cream }}>
            <p className="text-sm text-[rgb(237,254,193)]/70">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


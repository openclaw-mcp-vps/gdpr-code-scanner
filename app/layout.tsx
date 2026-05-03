import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Code Scanner — Scan Codebases for GDPR Compliance Violations',
  description: 'Automatically scan your JavaScript and PHP codebases for GDPR violations. Detect missing cookie consent, unauthorized data collection, and improper retention patterns.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="11614de2-0d99-455c-b4f4-be5e7d35f277"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

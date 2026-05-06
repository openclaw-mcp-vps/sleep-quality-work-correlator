import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sleep Quality Work Correlator — Know How Sleep Affects Your Output',
  description: 'Connect sleep tracking data with calendar and productivity metrics to reveal how sleep quality drives your work performance.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="09d9e1ae-3ee0-4bb7-9640-90036e74c602"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

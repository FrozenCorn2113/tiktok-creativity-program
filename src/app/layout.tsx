import type { Metadata } from 'next'
import Script from 'next/script'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/site'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// G1: Manrope via next/font/google — weights 400,500,600,700,800 per BRAND.md Section 4
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

// G2: JetBrains Mono via next/font/google — weights 400,500 per BRAND.md Section 4
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const searchConsoleVerification = process.env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION

  return (
    <html lang="en">
      <head>
        {searchConsoleVerification ? (
          <meta name="google-site-verification" content={searchConsoleVerification} />
        ) : null}
      </head>
      {/* G1+G2: font variables injected via next/font/google className on body */}
      <body className={`${manrope.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-text font-sans antialiased`}>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <Navbar />
        {/* pt-16 clears the fixed nav (--nav-height: 4rem) */}
        <main className="flex min-h-[calc(100vh-220px)] flex-col pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { siteConfig } from '@/lib/site'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
        {/* Google Fonts — Manrope + JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {searchConsoleVerification ? (
          <meta name="google-site-verification" content={searchConsoleVerification} />
        ) : null}
      </head>
      <body className="min-h-screen bg-background text-text font-sans antialiased">
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

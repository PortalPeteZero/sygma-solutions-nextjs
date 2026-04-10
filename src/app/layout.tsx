import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Providers from '@/components/Providers'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Toaster } from 'sonner'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Sygma Solutions | Utility Avoidance & Mapping Services',
  description: 'Leading provider of utility avoidance, mapping, and OSCA services across the UK.',
  metadataBase: new URL('https://sygma-solutions.com'),
  openGraph: {
    title: 'Sygma Solutions | Utility Avoidance & Mapping Services',
    description: 'Leading provider of utility avoidance, mapping, and OSCA services across the UK.',
    url: 'https://sygma-solutions.com',
    siteName: 'Sygma Solutions',
    images: [
      {
        url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/sygma-solutions/branding/logo',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect hints */}
        <link rel="preconnect" href="https://cdn-cookieyes.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://code.tidio.co" />
        <link rel="preconnect" href="https://socket.tidio.co" />
        <link rel="preconnect" href="https://res.cloudinary.com" />

        {/* CookieYes consent banner -- must be first script, before any tracking fires */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/b21bb8dfe40e34c0c373fb68597800de/script.js"
          strategy="beforeInteractive"
        />

        {/* Google Consent Mode v2 defaults -- must be set before GTM loads */}
        <Script id="consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'granted',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 2000
            });
            gtag('set', 'url_passthrough', true);
          `}
        </Script>
      </head>
      <body className={montserrat.variable}>
        {/* Google Tag Manager -- loads GA4 (G-QVFF0DPG6X), Google Ads (AW-946109130), Clarity (w1gqd45rnu) via container */}
        {/* Hostname-gated: only fires on sygma-solutions.com to prevent staging from polluting analytics */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            if (window.location.hostname === 'sygma-solutions.com' ||
                window.location.hostname === 'www.sygma-solutions.com') {
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WNXQHCB9');
            }
          `}
        </Script>

        {/* Tidio Chat Widget -- deferred to window.load to avoid blocking LCP */}
        {/* Hostname-gated: only loads on production */}
        <Script id="tidio-init" strategy="afterInteractive">
          {`
            if (window.location.hostname === 'sygma-solutions.com' ||
                window.location.hostname === 'www.sygma-solutions.com') {
              window.addEventListener('load', function() {
                var s = document.createElement('script');
                s.src = '//code.tidio.co/ewldfgxizw0monjg2sil4mgyklrzneom.js';
                s.async = true;
                document.body.appendChild(s);
              });
              document.addEventListener('tidioChat-open', function() {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'chat_started',
                  event_category: 'engagement',
                  event_label: 'tidio_chat'
                });
              });
            }
          `}
        </Script>

        {/* Ahrefs Web Analytics -- hostname-gated to production only */}
        <Script id="ahrefs-analytics" strategy="afterInteractive">
          {`
            if (window.location.hostname === 'sygma-solutions.com' ||
                window.location.hostname === 'www.sygma-solutions.com') {
              var s = document.createElement('script');
              s.src = 'https://analytics.ahrefs.com/analytics.js';
              s.setAttribute('data-key', 'OdKozkoe51M3JvY/HGHkMA');
              s.async = true;
              document.head.appendChild(s);
            }
          `}
        </Script>

        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNXQHCB9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Providers>
          <Navbar />
          <main className="flex-1 min-h-screen pt-[100px]">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  )
}

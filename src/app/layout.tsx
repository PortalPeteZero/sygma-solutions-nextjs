import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from '@/components/Providers'
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
        url: 'https://sygma-solutions.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sygma Solutions | Utility Avoidance & Mapping Services',
    description: 'Leading provider of utility avoidance, mapping, and OSCA services across the UK.',
    images: ['https://sygma-solutions.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.cookieyes.com" />
        <link rel="preconnect" href="https://clarity.microsoft.com" />
        <link rel="preconnect" href="https://code.tidio.co" />

        {/* Google Analytics 4 - CookieYes beforeInteractive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="beforeInteractive"
        />
        <Script id="ga4-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });
          `}
        </Script>

        {/* CookieYes Consent Management */}
        <Script
          src="https://cdn.cookieyes.com/client_data/[COOKIEYES_CLIENT_ID].js"
          strategy="beforeInteractive"
          data-cookieyes="true"
        />

        {/* Google Analytics (after consent) - afterInteractive */}
        <Script id="ga-conditional" strategy="afterInteractive">
          {`
            if (window.location.hostname === 'sygma-solutions.com') {
              window.gtag = window.gtag || function(){(window.dataLayer=window.dataLayer||[]).push(arguments)};
              gtag.l=new Date().getTime();
              gtag('config', 'G-XXXXXXXXXX');
            }
          `}
        </Script>

        {/* Google Ads Conversion Tracking - afterInteractive */}
        <Script id="google-ads" strategy="afterInteractive">
          {`
            if (window.location.hostname === 'sygma-solutions.com') {
              window.gtag = window.gtag || function(){(window.dataLayer=window.dataLayer||[]).push(arguments)};
              gtag('event', 'page_view');
            }
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "[CLARITY_PROJECT_ID]");
          `}
        </Script>

        {/* Tidio Chat Widget */}
        <Script id="tidio-init" strategy="afterInteractive">
          {`
            (function() {
              var s1=document.createElement("script");
              s1.async=true;
              s1.src='https://code.tidio.co/[TIDIO_PROJECT_ID].js';
              var s0=document.getElementsByTagName("script")[0];
              s0.parentNode.insertBefore(s1,s0);
              
              // Track chat_started event when chat is opened
              window.tidioChatApi.onChat('open', function() {
                if (window.gtag) {
                  gtag('event', 'chat_started', {
                    'event_category': 'engagement',
                    'event_label': 'tidio_widget'
                  });
                }
              });
            })();
          `}
        </Script>
      </head>
      <body className={montserrat.variable}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Earth Stewards LLC | Professional Native Landscape Design & Installation',
  description: 'Expert native landscaping services in Muskegon and Ottawa Counties. Custom design, professional installation, and ongoing maintenance for beautiful, sustainable landscapes.',
  keywords: 'native landscaping, landscape design, Muskegon, Ottawa County, sustainable landscaping, native plants, pollinator gardens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en">
    <body>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1627823055173903');
          fbq('track', 'PageView');
        `}
      </Script>

      {children}
    </body>
  </html>
)

}

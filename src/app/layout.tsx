import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171717",
  colorScheme: "light"
};

export const metadata: Metadata = {
  title: "Sharang Tech Labs",
  description: "Sharang is a full-stack software and AI lab. We build intelligent products for startups, mission-driven teams, and our own experiments.",
  applicationName: "Sharang Tech Labs",
  keywords: ["NGO", "women empowerment", "agriculture development", "child welfare", "elderly care", "education", "India foundation"],
  authors: [{ name: "Sharang Tech Labs" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Sharang Tech Labs",
    description: "Sharang is a full-stack software and AI lab. We build intelligent products for startups, mission-driven teams, and our own experiments.",
    url: "https://sharang.tech",
    siteName: "Sharang Tech Labs",
    images: [
      {
        url: "https://sharang.tech/og.png",
        width: 800,
        height: 600,
        alt: "Sharang Tech Labs Logo",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharang Tech Labs',
    description: 'Sharang is a full-stack software and AI lab. We build intelligent products for startups, mission-driven teams, and our own experiments.',
    creator: '@sharanghq',
    images: ['https://sharang.tech/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-neutral-900 dark:text-neutral-50 flex`}
      >
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org", 
      "@type": "Nonprofit501c3",
      "name": "Sharang Tech Labs",
      "alternateName": "Sharang",
      "url": "https://sharang.tech", 
      "logo": "https://sharang.tech/logo.png", 
      "description": "Sharang is a full-stack software and AI lab. We build intelligent products for startups, mission-driven teams, and our own experiments.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "808, 8th floor, Mahabir",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500084",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Contact Desk",
        "email": "contact@sharang.tech",
        "availableLanguage": ["en"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/sharanghq" 
      ]
    }
  `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org", 
      "@type": "WebSite",
      "url": "https://sharang.tech/", 
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://sharang.tech/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "hasPart": [
        {
          "@type": "SiteNavigationElement",
          "name": "Home",
          "url": "https://sharang.tech/"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Services",
          "url": "https://sharang.tech/services"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Client Stories",
          "url": "https://sharang.tech/client-stories"
        },
         {
          "@type": "SiteNavigationElement",
          "name": "About",
          "url": "https://sharang.tech/about"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Contact",
          "url": "https://sharang.tech/contact"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Privacy Policy",
          "url": "https://sharang.tech/privacy"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Terms of Use",
          "url": "https://sharang.tech/terms"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Data Handling",
          "url": "https://sharang.tech/data-handling"
        }
      ]
    }
  `}
        </script>
        <Header />
        <main className="w-full">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

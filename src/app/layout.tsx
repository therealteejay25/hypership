import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteName = "Hypership Landing Page";
const siteUrl = "https://hypership01.vercel.app"; // change this to your real domain
const siteDescription =
  "Hypership lets you bring your ideas to life effortlessly. Turn visions into real apps without code, stress, or limits — just pure creativity in action.";
const siteImage = "/Logo.png"; // fallback: your logo until you add a proper OG banner

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteName} — Build without limits`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  keywords: [
    "no-code",
    "app builder",
    "AI app generator",
    "Hypership",
    "startup tools",
    "build apps fast",
    "SaaS builder",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} — Build without limits`,
    description: siteDescription,
    siteName,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: `${siteName} Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hypershiphq", // replace when you have one
    creator: "@therealteejay25",
    title: `${siteName} — Build without limits`,
    description: siteDescription,
    images: [siteImage],
  },
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: "Hypership Team" }],
  applicationName: siteName,
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
              logo: siteImage,
              sameAs: [
                "https://twitter.com/therealteejay25",
                // "https://linkedin.com/company/hypership",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import GlobalClientEffects from "@/components/GlobalClientEffects";
import Navigation from "@/components/Navigation";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Official Website of Kevin AXIS",
    template: "%s | The Official Website of Kevin AXIS"
  },
  description: "Kevin AXIS - Electronic music producer crafting immersive soundscapes. Discover latest tracks including Alone, In My Mind, 3AM, Somebody Like You, Night Lo-fi Version, and 3AM Remix. Available on Spotify, Apple Music, and YouTube Music.",
  keywords: [
    "Kevin AXIS",
    "electronic music",
    "music producer",
    "Alone",
    "In My Mind",
    "3AM",
    "Somebody Like You",
    "Night Lo-fi Version",
    "3AM Remix",
    "Spotify",
    "Apple Music",
    "YouTube Music",
    "electronic music producer",
    "immersive soundscapes",
    "music artist",
    "DJ",
    "electronic dance music"
  ],
  authors: [{ name: "Kevin AXIS" }],
  creator: "Kevin AXIS",
  publisher: "Kevin AXIS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kevinaxis.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kevinaxis.vercel.app",
    title: "Kevin AXIS - Electronic Music Producer",
    description: "Electronic music producer crafting immersive soundscapes. Discover latest tracks on Spotify, Apple Music, and YouTube Music.",
    siteName: "Kevin AXIS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kevin AXIS - Electronic Music Producer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin AXIS - Electronic Music Producer",
    description: "Electronic music producer crafting immersive soundscapes. Discover latest tracks on Spotify, Apple Music, and YouTube Music.",
    images: ["/og-image.jpg"],
    creator: "@kevinaxis",
  },
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
  verification: {
    google: "ikA4eMUhLTjnxBSzCa1RpgmEg5SL_scysFac4hD4b-k",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    'google-site-verification': 'ikA4eMUhLTjnxBSzCa1RpgmEg5SL_scysFac4hD4b-k',
    'google-ads-verification': 'YOUR_GOOGLE_ADS_VERIFICATION_CODE', // Replace with your Google Ads verification code
    'google-adsense-account': 'ca-pub-7335462712833157',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <>
      <Navigation />
      {children}
      <GlobalClientEffects />
    </>
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Toaster />
        
        {/* Structured Data for Google Ads */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Musician",
              "name": "Kevin AXIS",
              "url": "https://kevinaxis.vercel.app",
              "description": "Electronic music producer crafting immersive soundscapes",
              "sameAs": [
                "https://open.spotify.com/artist/5UFAVPHNNRY2fZ3oIfRtq3",
                "https://music.apple.com/tw/artist/kevin-axis/1895055156",
                "https://music.youtube.com/channel/UCIvBvzIuECvci6CHE0h-JCg"
              ],
              "potentialAction": {
                "@type": "ListenAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://kevinaxis.vercel.app/music"
                },
                "expectsAcceptanceOf": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              }
            })
          }}
        />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {content}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import GlobalClientEffects from "@/components/GlobalClientEffects";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kevin AXIS - Electronic Music Producer",
    template: "%s | Kevin AXIS"
  },
  description: "Kevin AXIS - Electronic music producer crafting immersive soundscapes. Discover latest tracks including 3AM, Somebody Like You, Night Lo-fi Version, and 3AM Remix. Available on Spotify, Apple Music, and YouTube Music.",
  keywords: [
    "Kevin AXIS",
    "electronic music",
    "music producer",
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
    languages: {
      "en-US": "/en",
      "zh-TW": "/zh",
    },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <>
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

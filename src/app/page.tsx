'use client';

import { useEffect, useState } from 'react';
import AetherFlowHero from '@/components/ui/aether-flow-hero';
import SplashCursor from '@/components/ui/SplashCursor';
import { ChevronUp } from 'lucide-react';
import { Metadata } from 'next';

const tracks = [
  {
    title: '3AM',
    duration: '3:09',
    spotifyId: '1FtUFN1XWB0RY0RHoTa155',
    youtubeId: '8Nvu0dht93Q',
    appleId: '1895833511',
  },
  {
    title: 'Somebody Like You',
    duration: '2:20',
    spotifyId: '3W7ozK4cPwe3i13quMdPIJ',
    youtubeId: 'x9b_B6717VU',
    appleId: '6766472400',
  },
  {
    title: 'Night - Lo-fi Version',
    duration: '3:08',
    spotifyId: '0DTEsVQjpAeNYVLqdBdF0p',
    youtubeId: '8nL38ogysrU',
    appleId: '1895598943',
  },
  {
    title: '3AM - Remix',
    duration: '3:03',
    spotifyId: '4oIOHvGPlXsEpPZgQhKecG',
    youtubeId: 'ZUAaDHni2II',
    appleId: '6765607201',
  },
];

export default function KevinAxisPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Disable right-click functionality
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };
    
    // Handle scroll to show/hide back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentTrack = activeTrack !== null ? tracks[activeTrack] : null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SplashCursor Effect */}
      <SplashCursor 
        RAINBOW_MODE={false}
        COLOR="#9333ea"
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={6000}
        SHADING={true}
        COLOR_UPDATE_SPEED={10}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <AetherFlowHero />
        </div>

        {/* Artist Name */}
        <div
          className={`relative z-10 text-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
            KEVIN AXIS
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <span className="text-sm tracking-widest uppercase font-medium text-white/90 animate-pulse">Listen Now</span>
        </div>
      </section>

      {/* Music Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-sm tracking-widest uppercase text-zinc-500 mb-4">Music</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Latest Tracks</h3>
          </div>

          {/* Track List */}
          <div className="space-y-2 mb-16">
            {tracks.map((track, index) => (
              <button
                key={index}
                onClick={() => setActiveTrack(activeTrack === index ? null : index)}
                className={`w-full flex items-center justify-between p-4 md:p-6 rounded-xl transition-all duration-300 group ${
                  activeTrack === index
                    ? 'bg-zinc-900 border border-zinc-700'
                    : 'bg-zinc-950 hover:bg-zinc-900 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-4 md:gap-6 min-w-0">
                  <span className="text-zinc-600 font-mono w-6 md:w-8 text-xs md:text-sm flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm md:text-xl font-medium truncate">{track.title}</span>
                </div>
                <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                  <span className="text-zinc-500 font-mono text-xs md:text-sm">{track.duration}</span>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    {activeTrack === index ? (
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-sm animate-pulse" />
                    ) : (
                      <svg className="w-3 md:w-4 h-3 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Platform Links */}
          {currentTrack && (
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <span className="text-sm text-zinc-500">Play &ldquo;{currentTrack.title}&rdquo; on:</span>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
                <a
                  href={`https://open.spotify.com/track/${currentTrack.spotifyId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center px-4 py-3 rounded-full text-sm font-medium bg-[#1DB954] text-black hover:opacity-80 transition-all duration-300"
                >
                  Spotify
                </a>
                <a
                  href={`https://music.apple.com/tw/album/${currentTrack.appleId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center px-4 py-3 rounded-full text-sm font-medium bg-[#f50057] text-white hover:opacity-80 transition-all duration-300"
                >
                  Apple Music
                </a>
                <a
                  href={`https://music.youtube.com/watch?v=${currentTrack.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center px-4 py-3 rounded-full text-sm font-medium bg-[#FF0000] text-white hover:opacity-80 transition-all duration-300"
                >
                  YouTube Music
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="py-16 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto w-full">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/artist/5UFAVPHNNRY2fZ3oIfRtq3?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer / Social */}
      <footer className="py-16 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2">KEVIN AXIS</h4>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://open.spotify.com/artist/kevinaxis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-400 hover:text-[#1DB954] transition-colors duration-300"
            >
              Spotify
            </a>
            <a
              href="https://music.apple.com/tw/artist/kevin-axis/1895055156"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-400 hover:text-[#f50057] transition-colors duration-300"
            >
              Apple Music
            </a>
            <a
              href="https://music.youtube.com/channel/UCIvBvzIuECvci6CHE0h-JCg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-400 hover:text-[#FF0000] transition-colors duration-300"
            >
              YouTube Music
            </a>
          </div>

          <p className="text-zinc-600 text-sm">
            &copy; 2026 Kevin Axis. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      )}

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        /* Custom text selection style - white background, black text */
        ::selection {
          background-color: #ffffff;
          color: #000000;
        }

        ::-moz-selection {
          background-color: #ffffff;
          color: #000000;
        }

        /* Hide scrollbar but keep scrolling functionality */
        html, body {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        html::-webkit-scrollbar,
        body::-webkit-scrollbar,
        *::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
          width: 0;
          height: 0;
        }

        /* Ensure all elements hide scrollbar */
        ::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
          background: transparent;
        }

        ::-webkit-scrollbar-track {
          display: none;
        }

        ::-webkit-scrollbar-thumb {
          display: none;
        }
      `}</style>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            "name": "Kevin AXIS",
            "description": "Electronic music producer crafting immersive soundscapes",
            "url": "https://kevinaxis.com",
            "image": "https://kevinaxis.com/og-image.jpg",
            "sameAs": [
              "https://open.spotify.com/artist/kevinaxis",
              "https://music.apple.com/tw/artist/kevin-axis/1895055156",
              "https://music.youtube.com/channel/UCIvBvzIuECvci6CHE0h-JCg"
            ],
            "musicAlbum": tracks.map(track => ({
              "@type": "MusicAlbum",
              "name": track.title,
              "duration": track.duration,
              "url": `https://open.spotify.com/track/${track.spotifyId}`
            })),
            "genre": ["Electronic", "Dance", "EDM"],
            "potentialAction": {
              "@type": "ListenAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://kevinaxis.com"
              }
            }
          })
        }}
      />
    </div>
  );
}

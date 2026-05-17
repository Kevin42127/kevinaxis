'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-24 h-screen overflow-y-auto no-scrollbar">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">About Kevin AXIS</h1>
        
        <div className="space-y-8 text-lg leading-relaxed text-gray-300">
          <p>
            Kevin AXIS is an electronic music producer and sound designer dedicated to crafting immersive sonic experiences. Based in Taiwan, Kevin creates music that blends electronic elements with emotive melodies, producing tracks that resonate with listeners worldwide.
          </p>
          
          <p>
            With a passion for sound design and electronic production, Kevin AXIS explores various genres within electronic music, from ambient and atmospheric compositions to energetic dance-floor tracks. Each piece is carefully crafted to evoke emotion and create unique auditory journeys.
          </p>
          
          <p>
            The musical journey began with a deep fascination for electronic music culture and production techniques. Over time, this evolved into a distinctive style characterized by rich textures, intricate rhythms, and memorable melodies that define the Kevin AXIS sound.
          </p>
          
          <p>
            Kevin AXIS's music is available on all major streaming platforms including Spotify, Apple Music, and YouTube Music. The latest releases include "Alone" and "In My Mind," showcasing the artist's continued evolution and commitment to pushing creative boundaries.
          </p>
          
          <p>
            Whether creating for personal expression or collaborative projects, Kevin AXIS remains dedicated to producing music that connects with audiences on an emotional level while maintaining technical excellence and artistic integrity.
          </p>
        </div>
      </div>

      {/* Custom text selection style - same as homepage */}
      <style jsx global>{`
        /* Custom text selection style - white background, black text */
        ::selection {
          background-color: #ffffff;
          color: #000000;
        }

        ::-moz-selection {
          background-color: #ffffff;
          color: #000000;
        }

        /* Hide scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

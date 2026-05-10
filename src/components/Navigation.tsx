'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 64; // 導覽列高度
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Music', href: '#music' },
    { name: 'Spotify', href: 'https://open.spotify.com/artist/5UFAVPHNNRY2fZ3oIfRtq3' },
    { name: 'Apple Music', href: 'https://music.apple.com/tw/artist/kevin-axis/1895055156' },
    { name: 'YouTube Music', href: 'https://music.youtube.com/channel/UCIvBvzIuECvci6CHE0h-JCg' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'
    }`}>
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-1">
            <Link 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
              className="text-white font-bold text-xl"
            >
              KEVIN AXIS
            </Link>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center justify-end">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isExternal = item.href.startsWith('http');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    onClick={(e) => !isExternal && handleNavClick(e, item.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#5E7FDC] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isExternal = item.href.startsWith('http');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    onClick={(e) => !isExternal && handleNavClick(e, item.href)}
                    className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-300 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
